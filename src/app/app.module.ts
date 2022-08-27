import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsComponent } from './app.component';

//import { AppRoutingModule } from './app-routing.module';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';

@NgModule({
  declarations: [
    EventsComponent
  ],
  imports: [
    BrowserModule,
    ScheduleModule 
  ],
  providers: [],
  bootstrap: [EventsComponent]
})
export class AppModule { }
