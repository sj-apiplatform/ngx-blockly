/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class Category {
    /**
     * @param {?} name
     * @param {?} colour
     * @param {?=} blocks
     * @param {?=} categories
     * @param {?=} custom
     * @param {?=} style
     */
    constructor(name, colour, blocks, categories, custom, style) {
        this._name = name;
        this._colour = colour;
        this._blocks = blocks ? blocks : [];
        this._categories = categories ? categories : [];
        this._custom = custom;
        this._style = style;
    }
    /**
     * @return {?}
     */
    get blocks() {
        return this._blocks;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set blocks(value) {
        this._blocks = value;
    }
    /**
     * @return {?}
     */
    get categories() {
        return this._categories;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set categories(value) {
        this._categories = value;
    }
    /**
     * @return {?}
     */
    get colour() {
        return this._colour;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set colour(value) {
        this._colour = value;
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
    get custom() {
        return this._custom;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set custom(value) {
        this._custom = value;
    }
    /**
     * @return {?}
     */
    get style() {
        return this._style;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set style(value) {
        this._style = value;
    }
    /**
     * @return {?}
     */
    toXML() {
        /** @type {?} */
        let xml = `<category name="${this._name}" `;
        if (this.style === undefined) {
            xml += `colour="${this._colour}" `;
        }
        else {
            xml += `categorystyle="${this._style}" `;
        }
        xml += this.custom ? ` custom="${this._custom}">` : '>';
        for (const category of this._categories) {
            xml += category.toXML();
        }
        for (const block of this._blocks) {
            xml += block.toXML();
        }
        xml += '</category>';
        return xml;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    Category.prototype._blocks;
    /**
     * @type {?}
     * @private
     */
    Category.prototype._categories;
    /**
     * @type {?}
     * @private
     */
    Category.prototype._colour;
    /**
     * @type {?}
     * @private
     */
    Category.prototype._name;
    /**
     * @type {?}
     * @private
     */
    Category.prototype._custom;
    /**
     * @type {?}
     * @private
     */
    Category.prototype._style;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYmxvY2tseS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtYmxvY2tseS9tb2RlbHMvY2F0ZWdvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE1BQU0sT0FBTyxRQUFROzs7Ozs7Ozs7SUFTakIsWUFBWSxJQUFZLEVBQ1osTUFBYyxFQUNkLE1BQWdCLEVBQ2hCLFVBQXVCLEVBQ3ZCLE1BQWUsRUFDZixLQUFjO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELElBQUksTUFBTTtRQUNOLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELElBQUksTUFBTSxDQUFDLEtBQWM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELElBQUksVUFBVTtRQUNWLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELElBQUksVUFBVSxDQUFDLEtBQWlCO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCxJQUFJLE1BQU07UUFDTixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxJQUFJLE1BQU0sQ0FBQyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxJQUFJLElBQUk7UUFDSixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxJQUFJLElBQUksQ0FBQyxLQUFhO1FBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxJQUFJLE1BQU07UUFDTixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxJQUFJLE1BQU0sQ0FBQyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDTCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxJQUFJLEtBQUssQ0FBQyxLQUFhO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFTSxLQUFLOztZQUNKLEdBQUcsR0FBRyxtQkFBbUIsSUFBSSxDQUFDLEtBQUssSUFBSTtRQUUzQyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQzFCLEdBQUcsSUFBSSxXQUFXLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQztTQUN0QzthQUFNO1lBQ0gsR0FBRyxJQUFJLGtCQUFrQixJQUFJLENBQUMsTUFBTSxJQUFJLENBQUM7U0FDNUM7UUFFRCxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsWUFBWSxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUV4RCxLQUFLLE1BQU0sUUFBUSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckMsR0FBRyxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUMzQjtRQUVELEtBQUssTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUM5QixHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsR0FBRyxJQUFJLGFBQWEsQ0FBQztRQUVyQixPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7Q0FDSjs7Ozs7O0lBM0ZHLDJCQUF5Qjs7Ozs7SUFDekIsK0JBQWdDOzs7OztJQUNoQywyQkFBd0I7Ozs7O0lBQ3hCLHlCQUFzQjs7Ozs7SUFDdEIsMkJBQXdCOzs7OztJQUN4QiwwQkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCbG9jayB9IGZyb20gJy4vYmxvY2snO1xuaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4vbm9kZSc7XG5cbmV4cG9ydCBjbGFzcyBDYXRlZ29yeSBpbXBsZW1lbnRzIE5vZGUge1xuXG4gICAgcHJpdmF0ZSBfYmxvY2tzOiBCbG9ja1tdO1xuICAgIHByaXZhdGUgX2NhdGVnb3JpZXM6IENhdGVnb3J5W107XG4gICAgcHJpdmF0ZSBfY29sb3VyOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuICAgIHByaXZhdGUgX2N1c3RvbTogc3RyaW5nO1xuICAgIHByaXZhdGUgX3N0eWxlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgY29sb3VyOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgYmxvY2tzPzogQmxvY2tbXSxcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzPzogQ2F0ZWdvcnlbXSxcbiAgICAgICAgICAgICAgICBjdXN0b20/OiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgc3R5bGU/OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuX2NvbG91ciA9IGNvbG91cjtcbiAgICAgICAgdGhpcy5fYmxvY2tzID0gYmxvY2tzID8gYmxvY2tzIDogW107XG4gICAgICAgIHRoaXMuX2NhdGVnb3JpZXMgPSBjYXRlZ29yaWVzID8gY2F0ZWdvcmllcyA6IFtdO1xuICAgICAgICB0aGlzLl9jdXN0b20gPSBjdXN0b207XG4gICAgICAgIHRoaXMuX3N0eWxlID0gc3R5bGU7XG4gICAgfVxuXG4gICAgZ2V0IGJsb2NrcygpOiBCbG9ja1tdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Jsb2NrcztcbiAgICB9XG5cbiAgICBzZXQgYmxvY2tzKHZhbHVlOiBCbG9ja1tdKSB7XG4gICAgICAgIHRoaXMuX2Jsb2NrcyA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBjYXRlZ29yaWVzKCk6IENhdGVnb3J5W10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2F0ZWdvcmllcztcbiAgICB9XG5cbiAgICBzZXQgY2F0ZWdvcmllcyh2YWx1ZTogQ2F0ZWdvcnlbXSkge1xuICAgICAgICB0aGlzLl9jYXRlZ29yaWVzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGNvbG91cigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29sb3VyO1xuICAgIH1cblxuICAgIHNldCBjb2xvdXIodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9jb2xvdXIgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICB9XG5cbiAgICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgY3VzdG9tKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jdXN0b207XG4gICAgfVxuXG4gICAgc2V0IGN1c3RvbSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2N1c3RvbSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBzdHlsZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3R5bGU7XG4gICAgfVxuXG4gICAgc2V0IHN0eWxlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fc3R5bGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9YTUwoKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHhtbCA9IGA8Y2F0ZWdvcnkgbmFtZT1cIiR7dGhpcy5fbmFtZX1cIiBgO1xuXG4gICAgICAgIGlmICh0aGlzLnN0eWxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHhtbCArPSBgY29sb3VyPVwiJHt0aGlzLl9jb2xvdXJ9XCIgYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHhtbCArPSBgY2F0ZWdvcnlzdHlsZT1cIiR7dGhpcy5fc3R5bGV9XCIgYDtcbiAgICAgICAgfVxuXG4gICAgICAgIHhtbCArPSB0aGlzLmN1c3RvbSA/IGAgY3VzdG9tPVwiJHt0aGlzLl9jdXN0b219XCI+YCA6ICc+JztcblxuICAgICAgICBmb3IgKGNvbnN0IGNhdGVnb3J5IG9mIHRoaXMuX2NhdGVnb3JpZXMpIHtcbiAgICAgICAgICAgIHhtbCArPSBjYXRlZ29yeS50b1hNTCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBibG9jayBvZiB0aGlzLl9ibG9ja3MpIHtcbiAgICAgICAgICAgIHhtbCArPSBibG9jay50b1hNTCgpO1xuICAgICAgICB9XG4gICAgICAgIHhtbCArPSAnPC9jYXRlZ29yeT4nO1xuXG4gICAgICAgIHJldHVybiB4bWw7XG4gICAgfVxufVxuIl19