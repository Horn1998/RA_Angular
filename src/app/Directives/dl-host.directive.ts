import { Directive, ViewContainerRef } from '@angular/core';
@Directive({
    selector: '[dl-host]'
})
export class DlHostDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}