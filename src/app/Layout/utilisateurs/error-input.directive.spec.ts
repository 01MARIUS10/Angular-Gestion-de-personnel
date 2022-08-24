import { ErrorInputDirective } from './error-input.directive';
import { ElementRef } from '@angular/core';

var el : ElementRef;
describe('ErrorInputDirective', () => {
  it('should create an instance', () => {
    const directive = new ErrorInputDirective(el);
    expect(directive).toBeTruthy();
  });
});
