import { NgModule } from '@angular/core';
import { TimepickerShowcaseComponent } from './timepicker-showcase.component';
import { TimepickerTwelveHoursFormatComponent } from './timepicker-twelve-hours-format.component';
import { TimepickerSingleColumnComponent } from './timepicker-single-column.component';
import { TimepickerWithSecondsComponent } from './timepicker-with-seconds.component';
import { TimepickerRoutingModule } from './timepicker-routing.module';
import { NbCardModule, NbTimepickerModule, NbInputModule, NbIconModule, NbFormFieldModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { NbMomentDateModule } from '../../../framework/moment/moment.module';

@NgModule({
  declarations: [
    TimepickerShowcaseComponent,
    TimepickerTwelveHoursFormatComponent,
    TimepickerSingleColumnComponent,
    TimepickerWithSecondsComponent,
  ],
  imports: [
    NbTimepickerModule.forRoot({isTwelveHoursFormat: false}),
    TimepickerRoutingModule,
    NbInputModule,
    NbCardModule,
    NbIconModule,
    NbFormFieldModule,
    CommonModule,
    NbMomentDateModule,
  ],
})
export class TimepickerModule {}
