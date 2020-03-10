/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Block } from './block';
/**
 * @abstract
 */
var /**
 * @abstract
 */
CustomBlock = /** @class */ (function (_super) {
    tslib_1.__extends(CustomBlock, _super);
    function CustomBlock(type, block, blockMutator) {
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        var _this = _super.call(this, type) || this;
        _this._block = block;
        _this._blockMutator = blockMutator;
        _this._args = args;
        return _this;
    }
    /**
     * @param {?} block
     * @return {?}
     */
    CustomBlock.prototype.init = /**
     * @param {?} block
     * @return {?}
     */
    function (block) {
        this._block = block;
        this.defineBlock();
        this.block.setOnChange((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.blockInstance.onChange(event);
        }));
    };
    /**
     * @param {?} changeEvent
     * @return {?}
     */
    CustomBlock.prototype.onChange = /**
     * @param {?} changeEvent
     * @return {?}
     */
    function (changeEvent) {
        // nothing to do
    };
    /**
     * @return {?}
     */
    CustomBlock.prototype.toXML = /**
     * @return {?}
     */
    function () {
        return "<block type=\"" + this.type + "\"></block>";
    };
    /**
     * @param {?} block
     * @return {?}
     */
    CustomBlock.prototype.toDartCode = /**
     * @param {?} block
     * @return {?}
     */
    function (block) {
        return 'Not implemented';
    };
    /**
     * @param {?} block
     * @return {?}
     */
    CustomBlock.prototype.toJavaScriptCode = /**
     * @param {?} block
     * @return {?}
     */
    function (block) {
        return 'Not implemented';
    };
    /**
     * @param {?} block
     * @return {?}
     */
    CustomBlock.prototype.toLuaCode = /**
     * @param {?} block
     * @return {?}
     */
    function (block) {
        return 'Not implemented';
    };
    /**
     * @param {?} block
     * @return {?}
     */
    CustomBlock.prototype.toPHPCode = /**
     * @param {?} block
     * @return {?}
     */
    function (block) {
        return 'Not implemented';
    };
    /**
     * @param {?} block
     * @return {?}
     */
    CustomBlock.prototype.toPythonCode = /**
     * @param {?} block
     * @return {?}
     */
    function (block) {
        return 'Not implemented';
    };
    Object.defineProperty(CustomBlock.prototype, "block", {
        get: /**
         * @return {?}
         */
        function () {
            return this._block;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._block = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomBlock.prototype, "blockMutator", {
        get: /**
         * @return {?}
         */
        function () {
            return this._blockMutator;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._blockMutator = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomBlock.prototype, "args", {
        get: /**
         * @return {?}
         */
        function () {
            return this._args;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._args = value;
        },
        enumerable: true,
        configurable: true
    });
    return CustomBlock;
}(Block));
/**
 * @abstract
 */
export { CustomBlock };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWJsb2NrLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJsb2NrbHkvIiwic291cmNlcyI6WyJsaWIvbmd4LWJsb2NrbHkvbW9kZWxzL2N1c3RvbS1ibG9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxTQUFTLENBQUM7Ozs7QUFJaEM7Ozs7SUFBMEMsdUNBQUs7SUFPM0MscUJBQVksSUFBWSxFQUFFLEtBQVUsRUFBRSxZQUEwQjtRQUFFLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQsNkJBQWM7O1FBQWhGLFlBQ0ksa0JBQU0sSUFBSSxDQUFDLFNBSWQ7UUFIRyxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixLQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQztRQUNsQyxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzs7SUFDdEIsQ0FBQzs7Ozs7SUFFTSwwQkFBSTs7OztJQUFYLFVBQVksS0FBVTtRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXOzs7O1FBQUMsVUFBVSxLQUFLO1lBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7SUFJTSw4QkFBUTs7OztJQUFmLFVBQWdCLFdBQWdCO1FBQzVCLGdCQUFnQjtJQUNwQixDQUFDOzs7O0lBRU0sMkJBQUs7OztJQUFaO1FBQ0ksT0FBTyxtQkFBZ0IsSUFBSSxDQUFDLElBQUksZ0JBQVksQ0FBQztJQUNqRCxDQUFDOzs7OztJQUVNLGdDQUFVOzs7O0lBQWpCLFVBQWtCLEtBQWtCO1FBQ2hDLE9BQU8saUJBQWlCLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFTSxzQ0FBZ0I7Ozs7SUFBdkIsVUFBd0IsS0FBa0I7UUFDdEMsT0FBTyxpQkFBaUIsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVNLCtCQUFTOzs7O0lBQWhCLFVBQWlCLEtBQWtCO1FBQy9CLE9BQU8saUJBQWlCLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFTSwrQkFBUzs7OztJQUFoQixVQUFpQixLQUFrQjtRQUMvQixPQUFPLGlCQUFpQixDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRU0sa0NBQVk7Ozs7SUFBbkIsVUFBb0IsS0FBa0I7UUFDbEMsT0FBTyxpQkFBaUIsQ0FBQztJQUM3QixDQUFDO0lBRUQsc0JBQUksOEJBQUs7Ozs7UUFBVDtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDOzs7OztRQUVELFVBQVUsS0FBSztZQUNYLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUM7OztPQUpBO0lBTUQsc0JBQUkscUNBQVk7Ozs7UUFBaEI7WUFDSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDOUIsQ0FBQzs7Ozs7UUFFRCxVQUFpQixLQUFtQjtZQUNoQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMvQixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLDZCQUFJOzs7O1FBQVI7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7Ozs7UUFFRCxVQUFTLEtBQVk7WUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQzs7O09BSkE7SUFLTCxrQkFBQztBQUFELENBQUMsQUEzRUQsQ0FBMEMsS0FBSyxHQTJFOUM7Ozs7Ozs7Ozs7SUF6RUcsNkJBQW9COzs7OztJQUNwQixvQ0FBb0M7Ozs7O0lBQ3BDLDRCQUFxQjs7Ozs7SUFrQnJCLG9EQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJsb2NrTXV0YXRvciB9IGZyb20gJy4vYmxvY2stbXV0YXRvcic7XG5pbXBvcnQgeyBCbG9jayB9IGZyb20gJy4vYmxvY2snO1xuXG5kZWNsYXJlIHZhciBCbG9ja2x5OiBhbnk7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDdXN0b21CbG9jayBleHRlbmRzIEJsb2NrIHtcblxuICAgIHByaXZhdGUgX2Jsb2NrOiBhbnk7XG4gICAgcHJpdmF0ZSBfYmxvY2tNdXRhdG9yOiBCbG9ja011dGF0b3I7XG4gICAgcHJpdmF0ZSBfYXJnczogYW55W107XG5cblxuICAgIGNvbnN0cnVjdG9yKHR5cGU6IHN0cmluZywgYmxvY2s6IGFueSwgYmxvY2tNdXRhdG9yOiBCbG9ja011dGF0b3IsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIHN1cGVyKHR5cGUpO1xuICAgICAgICB0aGlzLl9ibG9jayA9IGJsb2NrO1xuICAgICAgICB0aGlzLl9ibG9ja011dGF0b3IgPSBibG9ja011dGF0b3I7XG4gICAgICAgIHRoaXMuX2FyZ3MgPSBhcmdzO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0KGJsb2NrOiBhbnkpIHtcbiAgICAgICAgdGhpcy5fYmxvY2sgPSBibG9jaztcbiAgICAgICAgdGhpcy5kZWZpbmVCbG9jaygpO1xuICAgICAgICB0aGlzLmJsb2NrLnNldE9uQ2hhbmdlKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdGhpcy5ibG9ja0luc3RhbmNlLm9uQ2hhbmdlKGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFic3RyYWN0IGRlZmluZUJsb2NrKCk7XG5cbiAgICBwdWJsaWMgb25DaGFuZ2UoY2hhbmdlRXZlbnQ6IGFueSkge1xuICAgICAgICAvLyBub3RoaW5nIHRvIGRvXG4gICAgfVxuXG4gICAgcHVibGljIHRvWE1MKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgPGJsb2NrIHR5cGU9XCIke3RoaXMudHlwZX1cIj48L2Jsb2NrPmA7XG4gICAgfVxuXG4gICAgcHVibGljIHRvRGFydENvZGUoYmxvY2s6IEN1c3RvbUJsb2NrKTogc3RyaW5nIHwgYW55W10ge1xuICAgICAgICByZXR1cm4gJ05vdCBpbXBsZW1lbnRlZCc7XG4gICAgfVxuXG4gICAgcHVibGljIHRvSmF2YVNjcmlwdENvZGUoYmxvY2s6IEN1c3RvbUJsb2NrKTogc3RyaW5nIHwgYW55W10ge1xuICAgICAgICByZXR1cm4gJ05vdCBpbXBsZW1lbnRlZCc7XG4gICAgfVxuXG4gICAgcHVibGljIHRvTHVhQ29kZShibG9jazogQ3VzdG9tQmxvY2spOiBzdHJpbmcgfCBhbnlbXSB7XG4gICAgICAgIHJldHVybiAnTm90IGltcGxlbWVudGVkJztcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9QSFBDb2RlKGJsb2NrOiBDdXN0b21CbG9jayk6IHN0cmluZyB8IGFueVtdIHtcbiAgICAgICAgcmV0dXJuICdOb3QgaW1wbGVtZW50ZWQnO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1B5dGhvbkNvZGUoYmxvY2s6IEN1c3RvbUJsb2NrKTogc3RyaW5nIHwgYW55W10ge1xuICAgICAgICByZXR1cm4gJ05vdCBpbXBsZW1lbnRlZCc7XG4gICAgfVxuXG4gICAgZ2V0IGJsb2NrKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYmxvY2s7XG4gICAgfVxuXG4gICAgc2V0IGJsb2NrKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2Jsb2NrID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGJsb2NrTXV0YXRvcigpOiBCbG9ja011dGF0b3Ige1xuICAgICAgICByZXR1cm4gdGhpcy5fYmxvY2tNdXRhdG9yO1xuICAgIH1cblxuICAgIHNldCBibG9ja011dGF0b3IodmFsdWU6IEJsb2NrTXV0YXRvcikge1xuICAgICAgICB0aGlzLl9ibG9ja011dGF0b3IgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgYXJncygpOiBhbnlbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcmdzO1xuICAgIH1cblxuICAgIHNldCBhcmdzKHZhbHVlOiBhbnlbXSkge1xuICAgICAgICB0aGlzLl9hcmdzID0gdmFsdWU7XG4gICAgfVxufVxuIl19