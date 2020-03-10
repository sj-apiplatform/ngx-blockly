/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
var Category = /** @class */ (function () {
    function Category(name, colour, blocks, categories, custom, style) {
        this._name = name;
        this._colour = colour;
        this._blocks = blocks ? blocks : [];
        this._categories = categories ? categories : [];
        this._custom = custom;
        this._style = style;
    }
    Object.defineProperty(Category.prototype, "blocks", {
        get: /**
         * @return {?}
         */
        function () {
            return this._blocks;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._blocks = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Category.prototype, "categories", {
        get: /**
         * @return {?}
         */
        function () {
            return this._categories;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._categories = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Category.prototype, "colour", {
        get: /**
         * @return {?}
         */
        function () {
            return this._colour;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._colour = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Category.prototype, "name", {
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
    Object.defineProperty(Category.prototype, "custom", {
        get: /**
         * @return {?}
         */
        function () {
            return this._custom;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._custom = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Category.prototype, "style", {
        get: /**
         * @return {?}
         */
        function () {
            return this._style;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._style = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    Category.prototype.toXML = /**
     * @return {?}
     */
    function () {
        var e_1, _a, e_2, _b;
        /** @type {?} */
        var xml = "<category name=\"" + this._name + "\" ";
        if (this.style === undefined) {
            xml += "colour=\"" + this._colour + "\" ";
        }
        else {
            xml += "categorystyle=\"" + this._style + "\" ";
        }
        xml += this.custom ? " custom=\"" + this._custom + "\">" : '>';
        try {
            for (var _c = tslib_1.__values(this._categories), _d = _c.next(); !_d.done; _d = _c.next()) {
                var category = _d.value;
                xml += category.toXML();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            for (var _e = tslib_1.__values(this._blocks), _f = _e.next(); !_f.done; _f = _e.next()) {
                var block = _f.value;
                xml += block.toXML();
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_2) throw e_2.error; }
        }
        xml += '</category>';
        return xml;
    };
    return Category;
}());
export { Category };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYmxvY2tseS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtYmxvY2tseS9tb2RlbHMvY2F0ZWdvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQTtJQVNJLGtCQUFZLElBQVksRUFDWixNQUFjLEVBQ2QsTUFBZ0IsRUFDaEIsVUFBdUIsRUFDdkIsTUFBZSxFQUNmLEtBQWM7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRUQsc0JBQUksNEJBQU07Ozs7UUFBVjtZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDOzs7OztRQUVELFVBQVcsS0FBYztZQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLGdDQUFVOzs7O1FBQWQ7WUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQzs7Ozs7UUFFRCxVQUFlLEtBQWlCO1lBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUM7OztPQUpBO0lBTUQsc0JBQUksNEJBQU07Ozs7UUFBVjtZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDOzs7OztRQUVELFVBQVcsS0FBYTtZQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLDBCQUFJOzs7O1FBQVI7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7Ozs7UUFFRCxVQUFTLEtBQWE7WUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSw0QkFBTTs7OztRQUFWO1lBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7Ozs7O1FBRUQsVUFBVyxLQUFhO1lBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUM7OztPQUpBO0lBTUQsc0JBQUksMkJBQUs7Ozs7UUFBVDtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDOzs7OztRQUVELFVBQVUsS0FBYTtZQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDOzs7T0FKQTs7OztJQU1NLHdCQUFLOzs7SUFBWjs7O1lBQ1EsR0FBRyxHQUFHLHNCQUFtQixJQUFJLENBQUMsS0FBSyxRQUFJO1FBRTNDLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDMUIsR0FBRyxJQUFJLGNBQVcsSUFBSSxDQUFDLE9BQU8sUUFBSSxDQUFDO1NBQ3RDO2FBQU07WUFDSCxHQUFHLElBQUkscUJBQWtCLElBQUksQ0FBQyxNQUFNLFFBQUksQ0FBQztTQUM1QztRQUVELEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxlQUFZLElBQUksQ0FBQyxPQUFPLFFBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDOztZQUV4RCxLQUF1QixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLFdBQVcsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBcEMsSUFBTSxRQUFRLFdBQUE7Z0JBQ2YsR0FBRyxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUMzQjs7Ozs7Ozs7OztZQUVELEtBQW9CLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsT0FBTyxDQUFBLGdCQUFBLDRCQUFFO2dCQUE3QixJQUFNLEtBQUssV0FBQTtnQkFDWixHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ3hCOzs7Ozs7Ozs7UUFDRCxHQUFHLElBQUksYUFBYSxDQUFDO1FBRXJCLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDLEFBN0ZELElBNkZDOzs7Ozs7O0lBM0ZHLDJCQUF5Qjs7Ozs7SUFDekIsK0JBQWdDOzs7OztJQUNoQywyQkFBd0I7Ozs7O0lBQ3hCLHlCQUFzQjs7Ozs7SUFDdEIsMkJBQXdCOzs7OztJQUN4QiwwQkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCbG9jayB9IGZyb20gJy4vYmxvY2snO1xuaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4vbm9kZSc7XG5cbmV4cG9ydCBjbGFzcyBDYXRlZ29yeSBpbXBsZW1lbnRzIE5vZGUge1xuXG4gICAgcHJpdmF0ZSBfYmxvY2tzOiBCbG9ja1tdO1xuICAgIHByaXZhdGUgX2NhdGVnb3JpZXM6IENhdGVnb3J5W107XG4gICAgcHJpdmF0ZSBfY29sb3VyOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuICAgIHByaXZhdGUgX2N1c3RvbTogc3RyaW5nO1xuICAgIHByaXZhdGUgX3N0eWxlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgY29sb3VyOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgYmxvY2tzPzogQmxvY2tbXSxcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzPzogQ2F0ZWdvcnlbXSxcbiAgICAgICAgICAgICAgICBjdXN0b20/OiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgc3R5bGU/OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuX2NvbG91ciA9IGNvbG91cjtcbiAgICAgICAgdGhpcy5fYmxvY2tzID0gYmxvY2tzID8gYmxvY2tzIDogW107XG4gICAgICAgIHRoaXMuX2NhdGVnb3JpZXMgPSBjYXRlZ29yaWVzID8gY2F0ZWdvcmllcyA6IFtdO1xuICAgICAgICB0aGlzLl9jdXN0b20gPSBjdXN0b207XG4gICAgICAgIHRoaXMuX3N0eWxlID0gc3R5bGU7XG4gICAgfVxuXG4gICAgZ2V0IGJsb2NrcygpOiBCbG9ja1tdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Jsb2NrcztcbiAgICB9XG5cbiAgICBzZXQgYmxvY2tzKHZhbHVlOiBCbG9ja1tdKSB7XG4gICAgICAgIHRoaXMuX2Jsb2NrcyA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBjYXRlZ29yaWVzKCk6IENhdGVnb3J5W10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2F0ZWdvcmllcztcbiAgICB9XG5cbiAgICBzZXQgY2F0ZWdvcmllcyh2YWx1ZTogQ2F0ZWdvcnlbXSkge1xuICAgICAgICB0aGlzLl9jYXRlZ29yaWVzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGNvbG91cigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29sb3VyO1xuICAgIH1cblxuICAgIHNldCBjb2xvdXIodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9jb2xvdXIgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICB9XG5cbiAgICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgY3VzdG9tKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jdXN0b207XG4gICAgfVxuXG4gICAgc2V0IGN1c3RvbSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2N1c3RvbSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBzdHlsZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3R5bGU7XG4gICAgfVxuXG4gICAgc2V0IHN0eWxlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fc3R5bGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9YTUwoKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHhtbCA9IGA8Y2F0ZWdvcnkgbmFtZT1cIiR7dGhpcy5fbmFtZX1cIiBgO1xuXG4gICAgICAgIGlmICh0aGlzLnN0eWxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHhtbCArPSBgY29sb3VyPVwiJHt0aGlzLl9jb2xvdXJ9XCIgYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHhtbCArPSBgY2F0ZWdvcnlzdHlsZT1cIiR7dGhpcy5fc3R5bGV9XCIgYDtcbiAgICAgICAgfVxuXG4gICAgICAgIHhtbCArPSB0aGlzLmN1c3RvbSA/IGAgY3VzdG9tPVwiJHt0aGlzLl9jdXN0b219XCI+YCA6ICc+JztcblxuICAgICAgICBmb3IgKGNvbnN0IGNhdGVnb3J5IG9mIHRoaXMuX2NhdGVnb3JpZXMpIHtcbiAgICAgICAgICAgIHhtbCArPSBjYXRlZ29yeS50b1hNTCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBibG9jayBvZiB0aGlzLl9ibG9ja3MpIHtcbiAgICAgICAgICAgIHhtbCArPSBibG9jay50b1hNTCgpO1xuICAgICAgICB9XG4gICAgICAgIHhtbCArPSAnPC9jYXRlZ29yeT4nO1xuXG4gICAgICAgIHJldHVybiB4bWw7XG4gICAgfVxufVxuIl19