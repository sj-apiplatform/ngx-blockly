/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
export class BlockMutator {
    /**
     * @param {?} name
     * @param {?=} blockList
     */
    constructor(name, blockList = null) {
        this._name = name;
        this._blockList = blockList;
    }
    /**
     * @return {?}
     */
    get name() {
        return this._name;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set name(value) {
        this._name = value;
    }
    /**
     * @return {?}
     */
    get blockList() {
        return this._blockList;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set blockList(value) {
        this._blockList = value;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2stbXV0YXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ibG9ja2x5LyIsInNvdXJjZXMiOlsibGliL25neC1ibG9ja2x5L21vZGVscy9ibG9jay1tdXRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxNQUFNLE9BQWdCLFlBQVk7Ozs7O0lBSzlCLFlBQVksSUFBWSxFQUFFLFlBQXNCLElBQUk7UUFDaEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFDaEMsQ0FBQzs7OztJQWNELElBQUksSUFBSTtRQUNKLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELElBQUksSUFBSSxDQUFDLEtBQWE7UUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELElBQUksU0FBUztRQUNULE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELElBQUksU0FBUyxDQUFDLEtBQWU7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztDQUNKOzs7Ozs7SUFuQ0csNkJBQXNCOzs7OztJQUN0QixrQ0FBNkI7Ozs7OztJQU83Qiw0REFBMEM7Ozs7Ozs7SUFFMUMsd0VBQTJEOzs7Ozs7O0lBRTNELG1FQUFzRDs7Ozs7OztJQUV0RCxnRUFBbUQ7Ozs7Ozs7SUFFbkQsOEVBQWlFOzs7Ozs7SUFFakUsNkRBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmxvY2tNdXRhdG9yIHtcblxuICAgIHByaXZhdGUgX25hbWU6IHN0cmluZztcbiAgICBwcml2YXRlIF9ibG9ja0xpc3Q6IHN0cmluZ1tdO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBibG9ja0xpc3Q6IHN0cmluZ1tdID0gbnVsbCkge1xuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5fYmxvY2tMaXN0ID0gYmxvY2tMaXN0O1xuICAgIH1cblxuICAgIHB1YmxpYyBhYnN0cmFjdCBtdXRhdGlvblRvRG9tKGJsb2NrOiBhbnkpO1xuXG4gICAgcHVibGljIGFic3RyYWN0IGRvbVRvTXV0YXRpb24oYmxvY2s6IGFueSwgeG1sRWxlbWVudDogYW55KTtcblxuICAgIHB1YmxpYyBhYnN0cmFjdCBkZWNvbXBvc2UoYmxvY2s6IGFueSwgd29ya3NwYWNlOiBhbnkpO1xuXG4gICAgcHVibGljIGFic3RyYWN0IGNvbXBvc2UoYmxvY2s6IGFueSwgdG9wQmxvY2s6IGFueSk7XG5cbiAgICBwdWJsaWMgYWJzdHJhY3Qgc2F2ZUNvbm5lY3Rpb25zKGJsb2NrOiBhbnksIGNvbnRhaW5lckJsb2NrOiBhbnkpO1xuXG4gICAgcHVibGljIGFic3RyYWN0IGFmdGVyQmxvY2tJbml0KGJsb2NrOiBhbnkpO1xuXG4gICAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgfVxuXG4gICAgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGJsb2NrTGlzdCgpOiBzdHJpbmdbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ibG9ja0xpc3Q7XG4gICAgfVxuXG4gICAgc2V0IGJsb2NrTGlzdCh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICAgICAgdGhpcy5fYmxvY2tMaXN0ID0gdmFsdWU7XG4gICAgfVxufVxuIl19