import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nb-button-group-showcase',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './button-group-showcase.component.html',
})
export class ButtonGroupShowcaseComponent {
}
