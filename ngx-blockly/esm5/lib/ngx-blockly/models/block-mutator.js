/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
BlockMutator = /** @class */ (function () {
    function BlockMutator(name, blockList) {
        if (blockList === void 0) { blockList = null; }
        this._name = name;
        this._blockList = blockList;
    }
    Object.defineProperty(BlockMutator.prototype, "name", {
        get: /**
         * @return {?}
         */
        function () {
            return this._name;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlockMutator.prototype, "blockList", {
        get: /**
         * @return {?}
         */
        function () {
            return this._blockList;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._blockList = value;
        },
        enumerable: true,
        configurable: true
    });
    return BlockMutator;
}());
/**
 * @abstract
 */
export { BlockMutator };
if (false) {
    /**
     * @type {?}
     * @private
     */
    BlockMutator.prototype._name;
    /**
     * @type {?}
     * @private
     */
    BlockMutator.prototype._blockList;
    /**
     * @abstract
     * @param {?} block
     * @return {?}
     */
    BlockMutator.prototype.mutationToDom = function (block) { };
    /**
     * @abstract
     * @param {?} block
     * @param {?} xmlElement
     * @return {?}
     */
    BlockMutator.prototype.domToMutation = function (block, xmlElement) { };
    /**
     * @abstract
     * @param {?} block
     * @param {?} workspace
     * @return {?}
     */
    BlockMutator.prototype.decompose = function (block, workspace) { };
    /**
     * @abstract
     * @param {?} block
     * @param {?} topBlock
     * @return {?}
     */
    BlockMutator.prototype.compose = function (block, topBlock) { };
    /**
     * @abstract
     * @param {?} block
     * @param {?} containerBlock
     * @return {?}
     */
    BlockMutator.prototype.saveConnections = function (block, containerBlock) { };
    /**
     * @abstract
     * @param {?} block
     * @return {?}
     */
    BlockMutator.prototype.afterBlockInit = function (block) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2stbXV0YXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ibG9ja2x5LyIsInNvdXJjZXMiOlsibGliL25neC1ibG9ja2x5L21vZGVscy9ibG9jay1tdXRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7OztJQUtJLHNCQUFZLElBQVksRUFBRSxTQUEwQjtRQUExQiwwQkFBQSxFQUFBLGdCQUEwQjtRQUNoRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBY0Qsc0JBQUksOEJBQUk7Ozs7UUFBUjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDOzs7OztRQUVELFVBQVMsS0FBYTtZQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLG1DQUFTOzs7O1FBQWI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzs7Ozs7UUFFRCxVQUFjLEtBQWU7WUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQzs7O09BSkE7SUFLTCxtQkFBQztBQUFELENBQUMsQUFyQ0QsSUFxQ0M7Ozs7Ozs7Ozs7SUFuQ0csNkJBQXNCOzs7OztJQUN0QixrQ0FBNkI7Ozs7OztJQU83Qiw0REFBMEM7Ozs7Ozs7SUFFMUMsd0VBQTJEOzs7Ozs7O0lBRTNELG1FQUFzRDs7Ozs7OztJQUV0RCxnRUFBbUQ7Ozs7Ozs7SUFFbkQsOEVBQWlFOzs7Ozs7SUFFakUsNkRBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmxvY2tNdXRhdG9yIHtcblxuICAgIHByaXZhdGUgX25hbWU6IHN0cmluZztcbiAgICBwcml2YXRlIF9ibG9ja0xpc3Q6IHN0cmluZ1tdO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBibG9ja0xpc3Q6IHN0cmluZ1tdID0gbnVsbCkge1xuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5fYmxvY2tMaXN0ID0gYmxvY2tMaXN0O1xuICAgIH1cblxuICAgIHB1YmxpYyBhYnN0cmFjdCBtdXRhdGlvblRvRG9tKGJsb2NrOiBhbnkpO1xuXG4gICAgcHVibGljIGFic3RyYWN0IGRvbVRvTXV0YXRpb24oYmxvY2s6IGFueSwgeG1sRWxlbWVudDogYW55KTtcblxuICAgIHB1YmxpYyBhYnN0cmFjdCBkZWNvbXBvc2UoYmxvY2s6IGFueSwgd29ya3NwYWNlOiBhbnkpO1xuXG4gICAgcHVibGljIGFic3RyYWN0IGNvbXBvc2UoYmxvY2s6IGFueSwgdG9wQmxvY2s6IGFueSk7XG5cbiAgICBwdWJsaWMgYWJzdHJhY3Qgc2F2ZUNvbm5lY3Rpb25zKGJsb2NrOiBhbnksIGNvbnRhaW5lckJsb2NrOiBhbnkpO1xuXG4gICAgcHVibGljIGFic3RyYWN0IGFmdGVyQmxvY2tJbml0KGJsb2NrOiBhbnkpO1xuXG4gICAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgfVxuXG4gICAgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGJsb2NrTGlzdCgpOiBzdHJpbmdbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ibG9ja0xpc3Q7XG4gICAgfVxuXG4gICAgc2V0IGJsb2NrTGlzdCh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICAgICAgdGhpcy5fYmxvY2tMaXN0ID0gdmFsdWU7XG4gICAgfVxufVxuIl19