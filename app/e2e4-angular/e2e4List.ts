import {Component, Input, OnChanges} from 'angular2/core';
import {NgListService} from './ngListService';
import {NgListServiceMediator} from './ngListServiceMediator';

@Component({
    providers: [NgListServiceMediator],
    selector: 'e2e4-list',
    template: `<ng-content></ng-content>`
})
export class E2E4List implements OnChanges {
    @Input() items: Array<any>;
    ngListServiceMediator: NgListServiceMediator;
    constructor(ngListServiceMediator: NgListServiceMediator) {
        this.ngListServiceMediator = ngListServiceMediator;
    }
    ngOnChanges(changes: any): void {
        if (changes.items) {
            this.ngListServiceMediator.instance.items = changes.items.currentValue;
        }
    }
}
