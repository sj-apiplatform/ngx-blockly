/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Block } from './block';
export class XmlBlock extends Block {
    /**
     * @param {?} type
     */
    constructor(type) {
        super(type);
        this._values = [];
    }
    /**
     * @return {?}
     */
    get values() {
        return this._values;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set values(value) {
        this._values = value;
    }
    /**
     * @return {?}
     */
    get field() {
        return this._field;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set field(value) {
        this._field = value;
    }
    /**
     * @return {?}
     */
    toXML() {
        /** @type {?} */
        let xml = `<block type="${this.type}">`;
        for (const value of this.values) {
            xml += value.toXML();
        }
        xml += this.field ? this.field.toXML() : '';
        xml += '</block>';
        return xml;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    XmlBlock.prototype._values;
    /**
     * @type {?}
     * @private
     */
    XmlBlock.prototype._field;
}
export class Value {
    /**
     * @param {?} name
     * @param {?} shadow
     * @param {?} block
     */
    constructor(name, shadow, block) {
        this._name = name;
        this._shadow = shadow;
        this._block = block;
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
    get shadow() {
        return this._shadow;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set shadow(value) {
        this._shadow = value;
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
    toXML() {
        return `<value name="${this.name}">` +
            this.block ? this.block.toXML() : '' +
            this.shadow ? this.shadow.toXML() : '' +
            '</value>';
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    Value.prototype._name;
    /**
     * @type {?}
     * @private
     */
    Value.prototype._shadow;
    /**
     * @type {?}
     * @private
     */
    Value.prototype._block;
}
export class Field {
    /**
     * @param {?} name
     * @param {?} value
     */
    constructor(name, value) {
        this._name = name;
        this._value = value;
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
    get value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._value = value;
    }
    /**
     * @return {?}
     */
    toXML() {
        return `<field name="${this.name}">` + this.value + '</field>';
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    Field.prototype._name;
    /**
     * @type {?}
     * @private
     */
    Field.prototype._value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieG1sLWJsb2NrLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJsb2NrbHkvIiwic291cmNlcyI6WyJsaWIvbmd4LWJsb2NrbHkvbW9kZWxzL3htbC1ibG9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUVoQyxNQUFNLE9BQU8sUUFBUyxTQUFRLEtBQUs7Ozs7SUFLL0IsWUFBWSxJQUFZO1FBQ3BCLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUpSLFlBQU8sR0FBWSxFQUFFLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQUksTUFBTTtRQUNOLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELElBQUksTUFBTSxDQUFDLEtBQWM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELElBQUksS0FBSztRQUNMLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELElBQUksS0FBSyxDQUFDLEtBQVk7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVNLEtBQUs7O1lBQ0osR0FBRyxHQUFHLGdCQUFnQixJQUFJLENBQUMsSUFBSSxJQUFJO1FBRXZDLEtBQUssTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUM3QixHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM1QyxHQUFHLElBQUksVUFBVSxDQUFDO1FBQ2xCLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztDQUNKOzs7Ozs7SUFqQ0csMkJBQThCOzs7OztJQUM5QiwwQkFBc0I7O0FBa0MxQixNQUFNLE9BQU8sS0FBSzs7Ozs7O0lBS2QsWUFBWSxJQUFZLEVBQUUsTUFBZ0IsRUFBRSxLQUFlO1FBQ3ZELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxJQUFJLElBQUk7UUFDSixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxJQUFJLElBQUksQ0FBQyxLQUFhO1FBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxJQUFJLE1BQU07UUFDTixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxJQUFJLE1BQU0sQ0FBQyxLQUFlO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDTCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxJQUFJLEtBQUssQ0FBQyxLQUFlO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFTSxLQUFLO1FBQ1IsT0FBTyxnQkFBZ0IsSUFBSSxDQUFDLElBQUksSUFBSTtZQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDbEMsVUFBVSxDQUFDO0lBQ25CLENBQUM7Q0FDSjs7Ozs7O0lBeENHLHNCQUFzQjs7Ozs7SUFDdEIsd0JBQTBCOzs7OztJQUMxQix1QkFBeUI7O0FBd0M3QixNQUFNLE9BQU8sS0FBSzs7Ozs7SUFJZCxZQUFZLElBQVksRUFBRSxLQUFhO1FBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxJQUFJLElBQUk7UUFDSixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxJQUFJLElBQUksQ0FBQyxLQUFhO1FBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDTCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxJQUFJLEtBQUssQ0FBQyxLQUFhO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFTSxLQUFLO1FBQ1IsT0FBTyxnQkFBZ0IsSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO0lBQ25FLENBQUM7Q0FDSjs7Ozs7O0lBM0JHLHNCQUFzQjs7Ozs7SUFDdEIsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmxvY2sgfSBmcm9tICcuL2Jsb2NrJztcblxuZXhwb3J0IGNsYXNzIFhtbEJsb2NrIGV4dGVuZHMgQmxvY2sge1xuXG4gICAgcHJpdmF0ZSBfdmFsdWVzOiBWYWx1ZVtdID0gW107XG4gICAgcHJpdmF0ZSBfZmllbGQ6IEZpZWxkO1xuXG4gICAgY29uc3RydWN0b3IodHlwZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKHR5cGUpO1xuICAgIH1cblxuICAgIGdldCB2YWx1ZXMoKTogVmFsdWVbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZXM7XG4gICAgfVxuXG4gICAgc2V0IHZhbHVlcyh2YWx1ZTogVmFsdWVbXSkge1xuICAgICAgICB0aGlzLl92YWx1ZXMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgZmllbGQoKTogRmllbGQge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmllbGQ7XG4gICAgfVxuXG4gICAgc2V0IGZpZWxkKHZhbHVlOiBGaWVsZCkge1xuICAgICAgICB0aGlzLl9maWVsZCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1hNTCgpOiBzdHJpbmcge1xuICAgICAgICBsZXQgeG1sID0gYDxibG9jayB0eXBlPVwiJHt0aGlzLnR5cGV9XCI+YDtcblxuICAgICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIHRoaXMudmFsdWVzKSB7XG4gICAgICAgICAgICB4bWwgKz0gdmFsdWUudG9YTUwoKTtcbiAgICAgICAgfVxuICAgICAgICB4bWwgKz0gdGhpcy5maWVsZCA/IHRoaXMuZmllbGQudG9YTUwoKSA6ICcnO1xuICAgICAgICB4bWwgKz0gJzwvYmxvY2s+JztcbiAgICAgICAgcmV0dXJuIHhtbDtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWYWx1ZSB7XG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuICAgIHByaXZhdGUgX3NoYWRvdzogWG1sQmxvY2s7XG4gICAgcHJpdmF0ZSBfYmxvY2s6IFhtbEJsb2NrO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBzaGFkb3c6IFhtbEJsb2NrLCBibG9jazogWG1sQmxvY2spIHtcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuX3NoYWRvdyA9IHNoYWRvdztcbiAgICAgICAgdGhpcy5fYmxvY2sgPSBibG9jaztcbiAgICB9XG5cbiAgICBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICB9XG5cbiAgICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgc2hhZG93KCk6IFhtbEJsb2NrIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NoYWRvdztcbiAgICB9XG5cbiAgICBzZXQgc2hhZG93KHZhbHVlOiBYbWxCbG9jaykge1xuICAgICAgICB0aGlzLl9zaGFkb3cgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgYmxvY2soKTogWG1sQmxvY2sge1xuICAgICAgICByZXR1cm4gdGhpcy5fYmxvY2s7XG4gICAgfVxuXG4gICAgc2V0IGJsb2NrKHZhbHVlOiBYbWxCbG9jaykge1xuICAgICAgICB0aGlzLl9ibG9jayA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1hNTCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYDx2YWx1ZSBuYW1lPVwiJHt0aGlzLm5hbWV9XCI+YCArXG4gICAgICAgIHRoaXMuYmxvY2sgPyB0aGlzLmJsb2NrLnRvWE1MKCkgOiAnJyArXG4gICAgICAgIHRoaXMuc2hhZG93ID8gdGhpcy5zaGFkb3cudG9YTUwoKSA6ICcnICtcbiAgICAgICAgICAgICc8L3ZhbHVlPic7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmllbGQge1xuICAgIHByaXZhdGUgX25hbWU6IHN0cmluZztcbiAgICBwcml2YXRlIF92YWx1ZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgIH1cblxuICAgIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCB2YWx1ZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IHZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9YTUwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGA8ZmllbGQgbmFtZT1cIiR7dGhpcy5uYW1lfVwiPmAgKyB0aGlzLnZhbHVlICsgJzwvZmllbGQ+JztcbiAgICB9XG59XG4iXX0=