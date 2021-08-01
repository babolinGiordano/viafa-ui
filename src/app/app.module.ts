import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { DefaultModule } from './layouts/default/default.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { PostsComponent } from './modules/posts/posts.component';
import { ClientsComponent } from './modules/clients/clients.component';
import { DriversComponent } from './modules/drivers/drivers.component';
import { TrucksComponent } from './modules/trucks/trucks.component';
import { TravelsComponent } from './modules/travels/travels.component';

@NgModule({
  declarations: [AppComponent, ClientsComponent, DriversComponent, TrucksComponent, TravelsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
