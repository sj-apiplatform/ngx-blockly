/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
export class Block {
    /**
     * @param {?} type
     */
    constructor(type) {
        this._type = type;
    }
    /**
     * @return {?}
     */
    get type() {
        return this._type;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set type(value) {
        this._type = value;
    }
    /**
     * @return {?}
     */
    get class() {
        return this._class;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set class(value) {
        this._class = value;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    Block.prototype._type;
    /**
     * @type {?}
     * @private
     */
    Block.prototype._class;
    /**
     * @abstract
     * @return {?}
     */
    Block.prototype.toXML = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYmxvY2tseS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtYmxvY2tseS9tb2RlbHMvYmxvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE1BQU0sT0FBZ0IsS0FBSzs7OztJQUt2QixZQUFZLElBQVk7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELElBQUksSUFBSTtRQUNKLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELElBQUksSUFBSSxDQUFDLEtBQWE7UUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELElBQUksS0FBSztRQUNMLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELElBQUksS0FBSyxDQUFDLEtBQVU7UUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztDQUdKOzs7Ozs7SUF4Qkcsc0JBQXNCOzs7OztJQUN0Qix1QkFBb0I7Ozs7O0lBc0JwQix3Q0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgYWJzdHJhY3QgY2xhc3MgQmxvY2sge1xuXG4gICAgcHJpdmF0ZSBfdHlwZTogc3RyaW5nO1xuICAgIHByaXZhdGUgX2NsYXNzOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcih0eXBlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fdHlwZSA9IHR5cGU7XG4gICAgfVxuXG4gICAgZ2V0IHR5cGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gICAgfVxuXG4gICAgc2V0IHR5cGUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGNsYXNzKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jbGFzcztcbiAgICB9XG5cbiAgICBzZXQgY2xhc3ModmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLl9jbGFzcyA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhYnN0cmFjdCB0b1hNTCgpO1xufVxuIl19