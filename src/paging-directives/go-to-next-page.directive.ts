import { Directive, ElementRef, HostBinding, HostListener, KeyValueDiffers } from '@angular/core';
import { PagedPager } from 'e2e4';

import { GoToControlBase } from './go-to-control-base';
import { RtListService } from './list-service';

@Directive({
    selector: '[rtGoToNextPage]'
})
export class GoToNextPageDirective extends GoToControlBase {
    constructor(private listService: RtListService, pager: PagedPager, differs: KeyValueDiffers, elementRef: ElementRef) {
        super(pager, differs, elementRef);
    }
    @HostListener('click')
    public goToNextPage(): void {
        if (this.pager.tryMoveToNextPage()) {
            this.listService.loadData();
        }
    }
    @HostBinding('attr.disabled')
    public get disabled(): boolean {
        return this.innerDisabled;
    }
    public isDisabled(): boolean {
        return this.pager.pageNumber === this.pager.pageCount;
    }
}