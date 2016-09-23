import { CancelLoadDirective } from './list-controls/cancel-load.directive';
import { LoadDataDirective } from './list-controls/load-data.directive';
import { RowNumberComponent } from './list-controls/row-number.component';
import { SortDirective } from './list-controls/sort.directive';

export var LIST_DIRECTIVES: any[] = [
    LoadDataDirective,
    CancelLoadDirective,
    RowNumberComponent,
    SortDirective
];

export { ListComponent } from './list-controls/list.component';
export { BufferedListComponent } from './list-controls/buffered-list.component';
export { PagedListComponent } from './list-controls/paged-list.component';

import { ListStateDoneComponent } from './list-state/list-state-done.component';
import { ListStateFailedComponent } from './list-state/list-state-failed.component';
import { ListStateInProgressComponent } from './list-state/list-state-in-progress.component';
import { ListStateInitialComponent } from './list-state/list-state-initial.component';
import { ListStateNoDataComponent } from './list-state/list-state-no-data.component';
import { ListStateRequestCanceledComponent } from './list-state/list-state-request-canceled.component';

export var LIST_STATE_DIRECTIVES: any[] = [
    ListStateNoDataComponent,
    ListStateRequestCanceledComponent,
    ListStateDoneComponent,
    ListStateFailedComponent,
    ListStateInitialComponent,
    ListStateInProgressComponent
];

import { DisplayPagerComponent } from './paging/display-pager.component';
import { LoadMoreDirective } from './paging/load-more.directive';
import { RowCountDirective } from './paging/row-count.directive';

export var BUFFERED_FOOTER_DIRECTIVES: any[] = [
    DisplayPagerComponent,
    LoadMoreDirective,
    RowCountDirective
];
import { GoToFirstPageDirective } from './paging/go-to-first-page.directive';
import { GoToLastPageDirective } from './paging/go-to-last-page.directive';
import { GoToNextPageDirective } from './paging/go-to-next-page.directive';
import { GoToPrevPageDirective } from './paging/go-to-prev-page.directive';
import { PageNumberDirective } from './paging/page-number.directive';
import { PageSizeDirective } from './paging/page-size.directive';

export var PAGED_FOOTER_DIRECTIVES: any[] = [
    DisplayPagerComponent,
    GoToFirstPageDirective,
    GoToLastPageDirective,
    GoToNextPageDirective,
    GoToPrevPageDirective,
    PageSizeDirective,
    PageNumberDirective,
    DisplayPagerComponent
];