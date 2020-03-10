/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Block } from './block';
var XmlBlock = /** @class */ (function (_super) {
    tslib_1.__extends(XmlBlock, _super);
    function XmlBlock(type) {
        var _this = _super.call(this, type) || this;
        _this._values = [];
        return _this;
    }
    Object.defineProperty(XmlBlock.prototype, "values", {
        get: /**
         * @return {?}
         */
        function () {
            return this._values;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._values = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XmlBlock.prototype, "field", {
        get: /**
         * @return {?}
         */
        function () {
            return this._field;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._field = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    XmlBlock.prototype.toXML = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        /** @type {?} */
        var xml = "<block type=\"" + this.type + "\">";
        try {
            for (var _b = tslib_1.__values(this.values), _c = _b.next(); !_c.done; _c = _b.next()) {
                var value = _c.value;
                xml += value.toXML();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        xml += this.field ? this.field.toXML() : '';
        xml += '</block>';
        return xml;
    };
    return XmlBlock;
}(Block));
export { XmlBlock };
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
var Value = /** @class */ (function () {
    function Value(name, shadow, block) {
        this._name = name;
        this._shadow = shadow;
        this._block = block;
    }
    Object.defineProperty(Value.prototype, "name", {
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
    Object.defineProperty(Value.prototype, "shadow", {
        get: /**
         * @return {?}
         */
        function () {
            return this._shadow;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._shadow = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Value.prototype, "block", {
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
    /**
     * @return {?}
     */
    Value.prototype.toXML = /**
     * @return {?}
     */
    function () {
        return "<value name=\"" + this.name + "\">" +
            this.block ? this.block.toXML() : '' +
            this.shadow ? this.shadow.toXML() : '' +
            '</value>';
    };
    return Value;
}());
export { Value };
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
var Field = /** @class */ (function () {
    function Field(name, value) {
        this._name = name;
        this._value = value;
    }
    Object.defineProperty(Field.prototype, "name", {
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
    Object.defineProperty(Field.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    Field.prototype.toXML = /**
     * @return {?}
     */
    function () {
        return "<field name=\"" + this.name + "\">" + this.value + '</field>';
    };
    return Field;
}());
export { Field };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieG1sLWJsb2NrLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJsb2NrbHkvIiwic291cmNlcyI6WyJsaWIvbmd4LWJsb2NrbHkvbW9kZWxzL3htbC1ibG9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFFaEM7SUFBOEIsb0NBQUs7SUFLL0Isa0JBQVksSUFBWTtRQUF4QixZQUNJLGtCQUFNLElBQUksQ0FBQyxTQUNkO1FBTE8sYUFBTyxHQUFZLEVBQUUsQ0FBQzs7SUFLOUIsQ0FBQztJQUVELHNCQUFJLDRCQUFNOzs7O1FBQVY7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzs7Ozs7UUFFRCxVQUFXLEtBQWM7WUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDekIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSwyQkFBSzs7OztRQUFUO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7Ozs7O1FBRUQsVUFBVSxLQUFZO1lBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUM7OztPQUpBOzs7O0lBTU0sd0JBQUs7OztJQUFaOzs7WUFDUSxHQUFHLEdBQUcsbUJBQWdCLElBQUksQ0FBQyxJQUFJLFFBQUk7O1lBRXZDLEtBQW9CLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsTUFBTSxDQUFBLGdCQUFBLDRCQUFFO2dCQUE1QixJQUFNLEtBQUssV0FBQTtnQkFDWixHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ3hCOzs7Ozs7Ozs7UUFDRCxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzVDLEdBQUcsSUFBSSxVQUFVLENBQUM7UUFDbEIsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBQ0wsZUFBQztBQUFELENBQUMsQUFuQ0QsQ0FBOEIsS0FBSyxHQW1DbEM7Ozs7Ozs7SUFqQ0csMkJBQThCOzs7OztJQUM5QiwwQkFBc0I7O0FBa0MxQjtJQUtJLGVBQVksSUFBWSxFQUFFLE1BQWdCLEVBQUUsS0FBZTtRQUN2RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRUQsc0JBQUksdUJBQUk7Ozs7UUFBUjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDOzs7OztRQUVELFVBQVMsS0FBYTtZQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLHlCQUFNOzs7O1FBQVY7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzs7Ozs7UUFFRCxVQUFXLEtBQWU7WUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDekIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSx3QkFBSzs7OztRQUFUO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7Ozs7O1FBRUQsVUFBVSxLQUFlO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUM7OztPQUpBOzs7O0lBTU0scUJBQUs7OztJQUFaO1FBQ0ksT0FBTyxtQkFBZ0IsSUFBSSxDQUFDLElBQUksUUFBSTtZQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDbEMsVUFBVSxDQUFDO0lBQ25CLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQyxBQXpDRCxJQXlDQzs7Ozs7OztJQXhDRyxzQkFBc0I7Ozs7O0lBQ3RCLHdCQUEwQjs7Ozs7SUFDMUIsdUJBQXlCOztBQXdDN0I7SUFJSSxlQUFZLElBQVksRUFBRSxLQUFhO1FBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxzQkFBSSx1QkFBSTs7OztRQUFSO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7Ozs7O1FBRUQsVUFBUyxLQUFhO1lBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUM7OztPQUpBO0lBTUQsc0JBQUksd0JBQUs7Ozs7UUFBVDtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDOzs7OztRQUVELFVBQVUsS0FBYTtZQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDOzs7T0FKQTs7OztJQU1NLHFCQUFLOzs7SUFBWjtRQUNJLE9BQU8sbUJBQWdCLElBQUksQ0FBQyxJQUFJLFFBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztJQUNuRSxDQUFDO0lBQ0wsWUFBQztBQUFELENBQUMsQUE1QkQsSUE0QkM7Ozs7Ozs7SUEzQkcsc0JBQXNCOzs7OztJQUN0Qix1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCbG9jayB9IGZyb20gJy4vYmxvY2snO1xuXG5leHBvcnQgY2xhc3MgWG1sQmxvY2sgZXh0ZW5kcyBCbG9jayB7XG5cbiAgICBwcml2YXRlIF92YWx1ZXM6IFZhbHVlW10gPSBbXTtcbiAgICBwcml2YXRlIF9maWVsZDogRmllbGQ7XG5cbiAgICBjb25zdHJ1Y3Rvcih0eXBlOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIodHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlcygpOiBWYWx1ZVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlcztcbiAgICB9XG5cbiAgICBzZXQgdmFsdWVzKHZhbHVlOiBWYWx1ZVtdKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlcyA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBmaWVsZCgpOiBGaWVsZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maWVsZDtcbiAgICB9XG5cbiAgICBzZXQgZmllbGQodmFsdWU6IEZpZWxkKSB7XG4gICAgICAgIHRoaXMuX2ZpZWxkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIHRvWE1MKCk6IHN0cmluZyB7XG4gICAgICAgIGxldCB4bWwgPSBgPGJsb2NrIHR5cGU9XCIke3RoaXMudHlwZX1cIj5gO1xuXG4gICAgICAgIGZvciAoY29uc3QgdmFsdWUgb2YgdGhpcy52YWx1ZXMpIHtcbiAgICAgICAgICAgIHhtbCArPSB2YWx1ZS50b1hNTCgpO1xuICAgICAgICB9XG4gICAgICAgIHhtbCArPSB0aGlzLmZpZWxkID8gdGhpcy5maWVsZC50b1hNTCgpIDogJyc7XG4gICAgICAgIHhtbCArPSAnPC9ibG9jaz4nO1xuICAgICAgICByZXR1cm4geG1sO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZhbHVlIHtcbiAgICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfc2hhZG93OiBYbWxCbG9jaztcbiAgICBwcml2YXRlIF9ibG9jazogWG1sQmxvY2s7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHNoYWRvdzogWG1sQmxvY2ssIGJsb2NrOiBYbWxCbG9jaykge1xuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5fc2hhZG93ID0gc2hhZG93O1xuICAgICAgICB0aGlzLl9ibG9jayA9IGJsb2NrO1xuICAgIH1cblxuICAgIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgIH1cblxuICAgIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBzaGFkb3coKTogWG1sQmxvY2sge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2hhZG93O1xuICAgIH1cblxuICAgIHNldCBzaGFkb3codmFsdWU6IFhtbEJsb2NrKSB7XG4gICAgICAgIHRoaXMuX3NoYWRvdyA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBibG9jaygpOiBYbWxCbG9jayB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ibG9jaztcbiAgICB9XG5cbiAgICBzZXQgYmxvY2sodmFsdWU6IFhtbEJsb2NrKSB7XG4gICAgICAgIHRoaXMuX2Jsb2NrID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIHRvWE1MKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgPHZhbHVlIG5hbWU9XCIke3RoaXMubmFtZX1cIj5gICtcbiAgICAgICAgdGhpcy5ibG9jayA/IHRoaXMuYmxvY2sudG9YTUwoKSA6ICcnICtcbiAgICAgICAgdGhpcy5zaGFkb3cgPyB0aGlzLnNoYWRvdy50b1hNTCgpIDogJycgK1xuICAgICAgICAgICAgJzwvdmFsdWU+JztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGaWVsZCB7XG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuICAgIHByaXZhdGUgX3ZhbHVlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgfVxuXG4gICAgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgdmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1hNTCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYDxmaWVsZCBuYW1lPVwiJHt0aGlzLm5hbWV9XCI+YCArIHRoaXMudmFsdWUgKyAnPC9maWVsZD4nO1xuICAgIH1cbn1cbiJdfQ==