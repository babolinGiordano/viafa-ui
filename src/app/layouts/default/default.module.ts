import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { DefaultComponent } from './default.component';
import { ClientsComponent } from 'src/app/modules/clients/clients.component';
import { DriversComponent } from 'src/app/modules/drivers/drivers.component';
import { TrucksComponent } from 'src/app/modules/trucks/trucks.component';
import { TravelsComponent } from 'src/app/modules/travels/travels.component';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ClientsComponent,
    DriversComponent,
    TrucksComponent,
    TravelsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule
  ]
})
export class DefaultModule {}
