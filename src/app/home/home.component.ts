import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';


export interface Users {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  birthdate: string;
}

@Component({ templateUrl: 'home.component.html', styleUrls: ['home.component.css'] })
export class HomeComponent {

  users: Users[] = [{ firstName: 'Danyl', lastName: 'Barnard', username: 'bernard', phone: "662-600-4909", email: 'BernardTest@gmail.com', birthdate: "1993-01-12" },
    { firstName: 'Briony ', lastName: 'Noble', username: 'briony', phone: "706-629-2219", email: 'BrionyTest@gmail.com', birthdate: "1992-07-03" },
    { firstName: 'Vivien ', lastName: 'Wyatt', username: 'vivien', phone: "931-557-6994", email: 'VivienTest@gmail.com', birthdate: "1994-04-10" },
    { firstName: 'Jonah ', lastName: 'Hibbert', username: 'jonah', phone: "419-914-9884", email: 'JonahTest@gmail.com', birthdate: "1994-02-15" },
    { firstName: 'Roman ', lastName: 'Cunning', username: 'roman', phone: "619-563-0398", email: 'RomanTest@gmail.com', birthdate: "1993-07-09" },
    { firstName: 'Tylor ', lastName: 'Wiley', username: 'tylor', phone: "520-279-0515", email: 'TylorTest@gmail.com', birthdate: "1990-03-18" },
    { firstName: 'Margaret ', lastName: 'Mcdowell', username: 'margaret', phone: "304-346-3501", email: 'MargaretTest@gmail.com', birthdate: "1990-04-01" },
    { firstName: 'Elleanor', lastName: 'Miles', username: 'elleanor', phone: "731-264-7203", email: 'ElleanorTest@gmail.com', birthdate: "1992-02-20" },
    { firstName: 'Mandy ', lastName: 'Lang', username: 'mandy', phone: "832-206-7158", email: 'MandyTest@gmail.com', birthdate: "1992-10-17" },
    { firstName: 'Denise ', lastName: 'Owens', username: 'denise', phone: "508-956-4223", email: 'DeniseTest@gmail.com', birthdate: "1993-12-27" },
    { firstName: 'Tristram ', lastName: 'Santos', username: 'tristram', phone: "214-808-6179", email: 'TristramTest@gmail.com', birthdate: "1993-03-19" },
    { firstName: 'Haven  ', lastName: 'Rodgers', username: 'haven', phone: "203-979-1579", email: 'HavenTest@gmail.com', birthdate: "1994-11-18" },
    { firstName: 'Cary  ', lastName: 'Sims', username: 'cary', phone: "484-397-4952", email: 'CaryTest@gmail.com', birthdate: "1990-12-05" },
    { firstName: 'Jeffrey ', lastName: 'Page', username: 'jeffrey', phone: "410-625-1210", email: 'JeffreyTest@gmail.com', birthdate: "1992-05-01" },
    { firstName: 'Tina  ', lastName: 'Holland', username: 'tina', phone: "814-761-6700", email: 'TinaTest@gmail.com', birthdate: "1992-11-22" }
  ];

  sortedData: Users[];

  constructor() {
    this.sortedData = this.users.slice();
  }

  sortData(sort: Sort) {
    const data = this.users.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'firstName': return compare(a.firstName, b.firstName, isAsc);
        case 'lastName': return compare(a.lastName, b.lastName, isAsc);
        case 'username': return compare(a.username, b.username, isAsc);
        case 'phone': return compare(a.phone, b.phone, isAsc);
        case 'email': return compare(a.email, b.email, isAsc);
        case 'birthdate': return compare(a.birthdate, b.birthdate, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
