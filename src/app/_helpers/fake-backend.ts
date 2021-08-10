import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

export interface User {
  email: string;
  password: string;
}

const users: User[] = [
 {
    email: 'BernardTest@gmail.com',
    password: 'bernard'
    
  },
  {
    email: 'BrionyTest@gmail.com',
    password: 'briony'
    
  },
  {
    email: 'VivienTest@gmail.com',
    password: 'vivien'
    
  },
  {
    email: 'JonahTest@gmail.com',
    password: 'jonah'
    
  },
  {
    email: 'RomanTest@gmail.com',
    password: 'roman'
    
  },
  {
    email: 'TylorTest@gmail.com',
    password: 'tylor'
    
  },
  {
    email: 'MargaretTest@gmail.com',
    password: 'margaret'
    
  },
  {
    email: 'ElleanorTest@gmail.com',
    password: 'elleanor'
    
  },
  {
    email: 'MandyTest@gmail.com',
    password: 'mandy'
    
  },
  {
    email: 'DeniseTest@gmail.com',
    password: 'denise'
    
  },
  {
    email: 'TristramTest@gmail.com',
    password: 'tristram'
    
  },
  {
    email: 'HavenTest@gmail.com',
    password: 'haven'
    
  },
  {
    email: 'CaryTest@gmail.com',
    password: 'cary'
    
  },
  {
    email: 'JeffreyTest@gmail.com',
    password: 'jeffrey'
    
  },
  {
    email: 'TinaTest@gmail.com',
    password: 'tina'
    
  }
]


@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        // wrap in delayed observable to simulate server api call
        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('/users') && method === 'GET':
                    return getUsers();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }    
        }

        // route functions

        function authenticate() {
            const { username, password } = body;
            const user = users.find(x => x.email === username && x.password === password);
            if (!user) return error('Username or password is incorrect');
            return ok({
                email: user.email,
            })
        }

        function getUsers() {
            if (!isLoggedIn()) return unauthorized();
            return ok(users);
        }

        // helper functions

        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }))
        }

        function error(message) {
            return throwError({ error: { message } });
        }

        function unauthorized() {
            return throwError({ status: 401, error: { message: 'Unauthorised' } });
        }

      function isLoggedIn() {
          //TODO
          return true;//headers.get('Authorization') === `Basic ${window.btoa('test1:test1')}`;

        }
    }
}

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
