import { DefaultSelectionService, SelectionTuple } from 'e2e4';

import { SelectionEventsEmitter } from './selection-events-emitter';

export class RtSelectionService extends DefaultSelectionService {
    public eventEmitters: Array<SelectionEventsEmitter> = new Array<SelectionEventsEmitter>();
    public areaEventsEmitter: SelectionEventsEmitter;
    protected processSelection(tuple: SelectionTuple, selected: boolean): void {
        const initialSelectState = tuple.item.selected;
        super.processSelection(tuple, selected);
        if (initialSelectState !== selected) {
            if (this.eventEmitters.length > tuple.index && this.eventEmitters[tuple.index]) {
                this.emitEvents(this.eventEmitters[tuple.index], selected, tuple);
            }
            if (this.areaEventsEmitter) {
                this.emitEvents(this.areaEventsEmitter, selected, tuple);
            }
        }
    }
    private emitEvents(emitter: SelectionEventsEmitter, selected: boolean, tuple: SelectionTuple): void {
        if (Object.prototype.hasOwnProperty.call(emitter, 'selected')) {
            (<any>emitter).selected = selected;
        }
        if (selected) {
            emitter.itemSelected.emit({ index: tuple.index, item: tuple.item });
        } else {
            emitter.itemDeselected.emit({ index: tuple.index, item: tuple.item });
        }
        emitter.selectionChanged.emit({ index: tuple.index, item: tuple.item });
    }
    public destroy(): void {
        delete this.areaEventsEmitter;
        this.eventEmitters.length = 0;
        super.destroy();
    }
}
