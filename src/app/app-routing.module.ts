import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';
import { ClientsComponent } from './modules/clients/clients.component';
import { DriversComponent } from './modules/drivers/drivers.component';
import { TravelsComponent } from './modules/travels/travels.component';
import { TrucksComponent } from './modules/trucks/trucks.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'clients',
        component: ClientsComponent
      },
      {
        path: 'drivers',
        component: DriversComponent
      },
      {
        path: 'trucks',
        component: TrucksComponent
      },
      {
        path: 'travels',
        component: TravelsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
