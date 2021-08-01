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

  users: Users[] = [{ firstName: 'Danyl', lastName: 'Barnard', username: 'ntiOgRAN', phone: "662-600-4909", email: 'TheOnerousTest@gmail.com', birthdate: "1993-01-12" },
    { firstName: 'Briony ', lastName: 'Noble', username: 'TiciEnDE', phone: "706-629-2219", email: 'TheChemicalTest@gmail.com', birthdate: "1992-07-03" },
    { firstName: 'Vivien ', lastName: 'Wyatt', username: 'imentero', phone: "931-557-6994", email: 'TheSymptomaticTest@gmail.com', birthdate: "1994-04-10" },
    { firstName: 'Jonah ', lastName: 'Hibbert', username: 'aheSTiOc', phone: "419-914-9884", email: 'TheChiefTest@gmail.com', birthdate: "1994-02-15" },
    { firstName: 'Roman ', lastName: 'Cunning', username: 'inGerATe', phone: "619-563-0398", email: 'TheHuskyTest@gmail.com', birthdate: "1993-07-09" },
    { firstName: 'Tylor ', lastName: 'Wiley', username: 'LANTItyR', phone: "520-279-0515", email: 'TheAbsorbedTest@gmail.com', birthdate: "1990-03-18" },
    { firstName: 'Margaret ', lastName: 'Mcdowell', username: 'VenDaStU', phone: "304-346-3501", email: 'TheBefittingTest@gmail.com', birthdate: "1990-04-01" },
    { firstName: 'Elleanor', lastName: 'Miles', username: 'idAdbaPE', phone: "731-264-7203", email: 'TheHallowedTest@gmail.com', birthdate: "1992-02-20" },
    { firstName: 'Mandy ', lastName: 'Lang', username: 'AStERPUT', phone: "832-206-7158", email: 'TheBetterTest@gmail.com', birthdate: "1992-10-17" },
    { firstName: 'Denise ', lastName: 'Owens', username: 'PoVerbER', phone: "508-956-4223", email: 'TheThinkableTest@gmail.com', birthdate: "1993-12-27" },
    { firstName: 'Tristram ', lastName: 'Santos', username: 'eNTripLE', phone: "214-808-6179", email: 'TheLongingTest@gmail.com', birthdate: "1993-03-19" },
    { firstName: 'Haven  ', lastName: 'Rodgers', username: 'sPAcrYPS', phone: "203-979-1579", email: 'TheErectTest@gmail.com', birthdate: "1994-11-18" },
    { firstName: 'Cary  ', lastName: 'Sims', username: 'siCinkIn', phone: "484-397-4952", email: 'TheAlertTest@gmail.com', birthdate: "1990-12-05" },
    { firstName: 'Jeffrey ', lastName: 'Page', username: 'LtmatInE', phone: "410-625-1210", email: 'TheToweringTest@gmail.com', birthdate: "1992-05-01" },
    { firstName: 'Tina  ', lastName: 'Holland', username: 'EnTEDICI', phone: "814-761-6700", email: 'TheArrogantTest@gmail.com', birthdate: "1992-11-22" }
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
