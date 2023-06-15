import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appButton]',
  standalone: true,
})
export class ButtonDirective {
  @HostBinding('class')
  elementClass =
    'font-medium rounded-lg p-3 bg-blk-500 text-white no-border mt-2';
}
