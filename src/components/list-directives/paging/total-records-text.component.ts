import { SkipSelf, Component, KeyValueDiffers, KeyValueDiffer, DoCheck, OnInit } from '@angular/core';
import { ProgressState } from 'e2e4';

import { RtListService, RtPagedPager, RtBufferedPager, RtRegularPager, RtNullObjectInjectable } from '../../providers/index';

@Component({
    selector: 'rt-total-records-text',
    template: `<ng-content *ngIf="isVisible"></ng-content>`
})
export class TotalRecordsTextComponent implements DoCheck, OnInit {
    private listDiffer: KeyValueDiffer;
    private pagerDiffer: KeyValueDiffer;
    private isVisible: boolean;
    private pager: RtPagedPager | RtBufferedPager | RtRegularPager;
    constructor( @SkipSelf() pagedPager: RtPagedPager, @SkipSelf() bufferedPager: RtBufferedPager, @SkipSelf() regularPager: RtRegularPager, @SkipSelf() private listService: RtListService, differs: KeyValueDiffers) {
        this.listDiffer = differs.find([]).create(null);
        this.pagerDiffer = differs.find([]).create(null);
        this.pager = RtNullObjectInjectable.getFirstNotNullInstance(pagedPager, bufferedPager, regularPager);
    }
    public ngOnInit(): void {
        this.setVisibility();
    }
    public ngDoCheck(): void {
        let stateDiff = this.listDiffer.diff(this.listService);
        if (stateDiff) {
            stateDiff.forEachChangedItem(this.checkStateFieldChanges);
        }
        let pagerDiff = this.pagerDiffer.diff(this.pager);
        if (pagerDiff) {
            pagerDiff.forEachChangedItem(this.checkPagerChanges);
        }
    }
    private checkStateFieldChanges = (item: any): void => {
        if (item.key === 'state') {
            this.setVisibility();
        }
    }
    private checkPagerChanges = (item: any): void => {
        if (item.key === 'totalCount') {
            this.setVisibility();
        }
    }
    private setVisibility(): void {
        this.isVisible = this.listService.state === ProgressState.Done && this.pager.totalCount !== 0;
    }
}
