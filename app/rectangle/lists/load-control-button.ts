import {Directive, HostListener, Input, HostBinding, KeyValueDiffers} from '@angular/core';
import {RtList} from './list';
import {Defaults} from '../defaults';
import {RtLoadControlBase} from './load-control-base';

@Directive({
    selector: 'input[rt-load-button], button[rt-load-button]'
})
export class RtLoadControlButton extends RtLoadControlBase {
    constructor(hostList: RtList, differs: KeyValueDiffers) {
        super(hostList, differs);
    }
    @HostBinding('title')
    title: string;
    @HostBinding('class.' + Defaults.classNames.loadButtonLoad)
    displyLoadCls: boolean;
    @HostBinding('class.' + Defaults.classNames.loadButtonCancel)
    displayCancelCls: boolean;
    @HostBinding('value')
    value: string;
    @HostListener('click')
    loadData(): void {
        super.loadData();
    }
    setAttributes(): void {
        super.setAttributes();
        this.value = this.listHost.serviceInstance.busy ? Defaults.messages.loadButtonCancelRequest : Defaults.messages.loadButtonLoad;
    }
}
