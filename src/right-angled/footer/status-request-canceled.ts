import { SkipSelf, Component, KeyValueDiffers } from '@angular/core';
import { RtListComponent } from '../lists/list';
import { ProgressState } from 'e2e4';
import { RtStatusControlBase } from './status-control-base';

@Component({
    selector: 'rt-status-request-canceled',
    template: `<ng-content *ngIf="isVisible"></ng-content>`
})
export class RtStatusRequestCanceledComponent extends RtStatusControlBase {
    constructor( @SkipSelf() listHost: RtListComponent, differs: KeyValueDiffers) {
        super(listHost, differs, ProgressState.Cancelled);
    }
}
