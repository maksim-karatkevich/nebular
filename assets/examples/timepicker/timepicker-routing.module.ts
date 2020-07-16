import { NgModule } from '@angular/core';
import { RouterModule, Route} from '@angular/router';
import { TimepickerShowcaseComponent } from './timepicker-showcase.component';
import { TimepickerTwelveHoursFormatComponent } from './timepicker-twelve-hours-format.component';
import { TimepickerSingleColumnComponent } from './timepicker-single-column.component';

const routes: Route[] = [
  {
    path: 'timepicker-showcase.component',
    component: TimepickerShowcaseComponent,
  },
  {
    path: 'timepicker-twelve-hours-format.component',
    component: TimepickerTwelveHoursFormatComponent,
  },
  {
    path: 'timepicker-single-column.component',
    component: TimepickerSingleColumnComponent,
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class TimepickerRoutingModule {}
