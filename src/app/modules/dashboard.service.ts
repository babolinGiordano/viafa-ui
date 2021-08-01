import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor() {}

  getBigChart(): any {
    return [
      {
        name: 'Asia',
        data: [502, 635, 809, 947, 1402, 3634, 5268]
      },
      {
        name: 'Africa',
        data: [106, 107, 111, 133, 221, 767, 1766]
      },
      {
        name: 'Europe',
        data: [163, 203, 276, 408, 547, 729, 628]
      },
      {
        name: 'America',
        data: [18, 31, 54, 156, 339, 818, 1201]
      },
      {
        name: 'Oceania',
        data: [2, 2, 2, 6, 13, 30, 46]
      }
    ];
  }

  getCards(): any {
    return [
      {
        name: 'Installation',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
      },
      {
        name: 'Manufacturing',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
      },
      {
        name: 'Sales & Distribution',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
      },
      {
        name: 'Project Development',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
      },
      {
        name: 'Other',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
      }
    ];
  }

  getPieChart(): any {
    return [
      {
        name: 'Chrome',
        y: 61.41,
        sliced: true,
        selected: true
      },
      {
        name: 'Internet Explorer',
        y: 11.84
      },
      {
        name: 'Firefox',
        y: 10.85
      },
      {
        name: 'Edge',
        y: 4.67
      },
      {
        name: 'Safari',
        y: 4.18
      },
      {
        name: 'Sogou Explorer',
        y: 1.64
      },
      {
        name: 'Opera',
        y: 1.6
      },
      {
        name: 'QQ',
        y: 1.2
      },
      {
        name: 'Other',
        y: 2.61
      }
    ];
  }
}
