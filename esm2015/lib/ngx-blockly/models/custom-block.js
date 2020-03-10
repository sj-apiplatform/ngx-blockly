/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Block } from './block';
/**
 * @abstract
 */
export class CustomBlock extends Block {
    /**
     * @param {?} type
     * @param {?} block
     * @param {?} blockMutator
     * @param {...?} args
     */
    constructor(type, block, blockMutator, ...args) {
        super(type);
        this._block = block;
        this._blockMutator = blockMutator;
        this._args = args;
    }
    /**
     * @param {?} block
     * @return {?}
     */
    init(block) {
        this._block = block;
        this.defineBlock();
        this.block.setOnChange((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.blockInstance.onChange(event);
        }));
    }
    /**
     * @param {?} changeEvent
     * @return {?}
     */
    onChange(changeEvent) {
        // nothing to do
    }
    /**
     * @return {?}
     */
    toXML() {
        return `<block type="${this.type}"></block>`;
    }
    /**
     * @param {?} block
     * @return {?}
     */
    toDartCode(block) {
        return 'Not implemented';
    }
    /**
     * @param {?} block
     * @return {?}
     */
    toJavaScriptCode(block) {
        return 'Not implemented';
    }
    /**
     * @param {?} block
     * @return {?}
     */
    toLuaCode(block) {
        return 'Not implemented';
    }
    /**
     * @param {?} block
     * @return {?}
     */
    toPHPCode(block) {
        return 'Not implemented';
    }
    /**
     * @param {?} block
     * @return {?}
     */
    toPythonCode(block) {
        return 'Not implemented';
    }
    /**
     * @return {?}
     */
    get block() {
        return this._block;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set block(value) {
        this._block = value;
    }
    /**
     * @return {?}
     */
    get blockMutator() {
        return this._blockMutator;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set blockMutator(value) {
        this._blockMutator = value;
    }
    /**
     * @return {?}
     */
    get args() {
        return this._args;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set args(value) {
        this._args = value;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomBlock.prototype._block;
    /**
     * @type {?}
     * @private
     */
    CustomBlock.prototype._blockMutator;
    /**
     * @type {?}
     * @private
     */
    CustomBlock.prototype._args;
    /**
     * @abstract
     * @return {?}
     */
    CustomBlock.prototype.defineBlock = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWJsb2NrLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJsb2NrbHkvIiwic291cmNlcyI6WyJsaWIvbmd4LWJsb2NrbHkvbW9kZWxzL2N1c3RvbS1ibG9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFNBQVMsQ0FBQzs7OztBQUloQyxNQUFNLE9BQWdCLFdBQVksU0FBUSxLQUFLOzs7Ozs7O0lBTzNDLFlBQVksSUFBWSxFQUFFLEtBQVUsRUFBRSxZQUEwQixFQUFFLEdBQUcsSUFBVztRQUM1RSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQztRQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDOzs7OztJQUVNLElBQUksQ0FBQyxLQUFVO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVc7Ozs7UUFBQyxVQUFVLEtBQUs7WUFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7OztJQUlNLFFBQVEsQ0FBQyxXQUFnQjtRQUM1QixnQkFBZ0I7SUFDcEIsQ0FBQzs7OztJQUVNLEtBQUs7UUFDUixPQUFPLGdCQUFnQixJQUFJLENBQUMsSUFBSSxZQUFZLENBQUM7SUFDakQsQ0FBQzs7Ozs7SUFFTSxVQUFVLENBQUMsS0FBa0I7UUFDaEMsT0FBTyxpQkFBaUIsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVNLGdCQUFnQixDQUFDLEtBQWtCO1FBQ3RDLE9BQU8saUJBQWlCLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFTSxTQUFTLENBQUMsS0FBa0I7UUFDL0IsT0FBTyxpQkFBaUIsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVNLFNBQVMsQ0FBQyxLQUFrQjtRQUMvQixPQUFPLGlCQUFpQixDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRU0sWUFBWSxDQUFDLEtBQWtCO1FBQ2xDLE9BQU8saUJBQWlCLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELElBQUksS0FBSztRQUNMLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELElBQUksS0FBSyxDQUFDLEtBQUs7UUFDWCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsSUFBSSxZQUFZO1FBQ1osT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsSUFBSSxZQUFZLENBQUMsS0FBbUI7UUFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELElBQUksSUFBSTtRQUNKLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELElBQUksSUFBSSxDQUFDLEtBQVk7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztDQUNKOzs7Ozs7SUF6RUcsNkJBQW9COzs7OztJQUNwQixvQ0FBb0M7Ozs7O0lBQ3BDLDRCQUFxQjs7Ozs7SUFrQnJCLG9EQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJsb2NrTXV0YXRvciB9IGZyb20gJy4vYmxvY2stbXV0YXRvcic7XG5pbXBvcnQgeyBCbG9jayB9IGZyb20gJy4vYmxvY2snO1xuXG5kZWNsYXJlIHZhciBCbG9ja2x5OiBhbnk7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDdXN0b21CbG9jayBleHRlbmRzIEJsb2NrIHtcblxuICAgIHByaXZhdGUgX2Jsb2NrOiBhbnk7XG4gICAgcHJpdmF0ZSBfYmxvY2tNdXRhdG9yOiBCbG9ja011dGF0b3I7XG4gICAgcHJpdmF0ZSBfYXJnczogYW55W107XG5cblxuICAgIGNvbnN0cnVjdG9yKHR5cGU6IHN0cmluZywgYmxvY2s6IGFueSwgYmxvY2tNdXRhdG9yOiBCbG9ja011dGF0b3IsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIHN1cGVyKHR5cGUpO1xuICAgICAgICB0aGlzLl9ibG9jayA9IGJsb2NrO1xuICAgICAgICB0aGlzLl9ibG9ja011dGF0b3IgPSBibG9ja011dGF0b3I7XG4gICAgICAgIHRoaXMuX2FyZ3MgPSBhcmdzO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0KGJsb2NrOiBhbnkpIHtcbiAgICAgICAgdGhpcy5fYmxvY2sgPSBibG9jaztcbiAgICAgICAgdGhpcy5kZWZpbmVCbG9jaygpO1xuICAgICAgICB0aGlzLmJsb2NrLnNldE9uQ2hhbmdlKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdGhpcy5ibG9ja0luc3RhbmNlLm9uQ2hhbmdlKGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFic3RyYWN0IGRlZmluZUJsb2NrKCk7XG5cbiAgICBwdWJsaWMgb25DaGFuZ2UoY2hhbmdlRXZlbnQ6IGFueSkge1xuICAgICAgICAvLyBub3RoaW5nIHRvIGRvXG4gICAgfVxuXG4gICAgcHVibGljIHRvWE1MKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgPGJsb2NrIHR5cGU9XCIke3RoaXMudHlwZX1cIj48L2Jsb2NrPmA7XG4gICAgfVxuXG4gICAgcHVibGljIHRvRGFydENvZGUoYmxvY2s6IEN1c3RvbUJsb2NrKTogc3RyaW5nIHwgYW55W10ge1xuICAgICAgICByZXR1cm4gJ05vdCBpbXBsZW1lbnRlZCc7XG4gICAgfVxuXG4gICAgcHVibGljIHRvSmF2YVNjcmlwdENvZGUoYmxvY2s6IEN1c3RvbUJsb2NrKTogc3RyaW5nIHwgYW55W10ge1xuICAgICAgICByZXR1cm4gJ05vdCBpbXBsZW1lbnRlZCc7XG4gICAgfVxuXG4gICAgcHVibGljIHRvTHVhQ29kZShibG9jazogQ3VzdG9tQmxvY2spOiBzdHJpbmcgfCBhbnlbXSB7XG4gICAgICAgIHJldHVybiAnTm90IGltcGxlbWVudGVkJztcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9QSFBDb2RlKGJsb2NrOiBDdXN0b21CbG9jayk6IHN0cmluZyB8IGFueVtdIHtcbiAgICAgICAgcmV0dXJuICdOb3QgaW1wbGVtZW50ZWQnO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1B5dGhvbkNvZGUoYmxvY2s6IEN1c3RvbUJsb2NrKTogc3RyaW5nIHwgYW55W10ge1xuICAgICAgICByZXR1cm4gJ05vdCBpbXBsZW1lbnRlZCc7XG4gICAgfVxuXG4gICAgZ2V0IGJsb2NrKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYmxvY2s7XG4gICAgfVxuXG4gICAgc2V0IGJsb2NrKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2Jsb2NrID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGJsb2NrTXV0YXRvcigpOiBCbG9ja011dGF0b3Ige1xuICAgICAgICByZXR1cm4gdGhpcy5fYmxvY2tNdXRhdG9yO1xuICAgIH1cblxuICAgIHNldCBibG9ja011dGF0b3IodmFsdWU6IEJsb2NrTXV0YXRvcikge1xuICAgICAgICB0aGlzLl9ibG9ja011dGF0b3IgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgYXJncygpOiBhbnlbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcmdzO1xuICAgIH1cblxuICAgIHNldCBhcmdzKHZhbHVlOiBhbnlbXSkge1xuICAgICAgICB0aGlzLl9hcmdzID0gdmFsdWU7XG4gICAgfVxufVxuIl19