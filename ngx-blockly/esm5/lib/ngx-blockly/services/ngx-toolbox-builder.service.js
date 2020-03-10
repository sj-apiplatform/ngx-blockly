/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { XmlBlock } from '../models/xml-block';
/** @type {?} */
export var LOGIC_CATEGORY = new Category('Logic', '%{BKY_LOGIC_HUE}', [
    new XmlBlock('controls_if'),
    new XmlBlock('logic_compare'),
    new XmlBlock('logic_operation'),
    new XmlBlock('logic_negate'),
    new XmlBlock('logic_boolean'),
    new XmlBlock('logic_null'),
    new XmlBlock('logic_ternary'),
]);
/** @type {?} */
export var LOOP_CATEGORY = new Category('Loops', '%{BKY_LOOPS_HUE}', [
    new XmlBlock('controls_repeat_ext'),
    new XmlBlock('controls_whileUntil'),
    new XmlBlock('controls_for'),
    new XmlBlock('controls_forEach'),
    new XmlBlock('controls_flow_statements'),
    new XmlBlock('controls_flow_statements')
]);
/** @type {?} */
export var MATH_CATEGORY = new Category('Math', '%{BKY_MATH_HUE}', [
    new XmlBlock('math_number'),
    new XmlBlock('math_arithmetic'),
    new XmlBlock('math_single'),
    new XmlBlock('math_trig'),
    new XmlBlock('math_constant'),
    new XmlBlock('math_number_property'),
    new XmlBlock('math_round'),
    new XmlBlock('math_on_list'),
    new XmlBlock('math_modulo'),
    new XmlBlock('math_constrain'),
    new XmlBlock('math_random_int'),
    new XmlBlock('math_random_float'),
    new XmlBlock('math_atan2')
]);
/** @type {?} */
export var TEXT_CATEGORY = new Category('Text', '%{BKY_TEXTS_HUE}', [
    new XmlBlock('text'),
    new XmlBlock('text_join'),
    new XmlBlock('text_append'),
    new XmlBlock('text_length'),
    new XmlBlock('text_isEmpty'),
    new XmlBlock('text_indexOf'),
    new XmlBlock('text_charAt'),
    new XmlBlock('text_getSubstring'),
    new XmlBlock('text_changeCase'),
    new XmlBlock('text_trim'),
    new XmlBlock('text_print'),
    new XmlBlock('text_prompt_ext')
]);
/** @type {?} */
export var LISTS_CATEGORY = new Category('Lists', '%{BKY_LISTS_HUE}', [
    new XmlBlock('lists_create_with'),
    new XmlBlock('lists_create_with'),
    new XmlBlock('lists_repeat'),
    new XmlBlock('lists_length'),
    new XmlBlock('lists_isEmpty'),
    new XmlBlock('lists_indexOf'),
    new XmlBlock('lists_getIndex'),
    new XmlBlock('lists_setIndex'),
    new XmlBlock('lists_getSublist'),
    new XmlBlock('lists_split'),
    new XmlBlock('lists_sort'),
]);
/** @type {?} */
export var COLOUR_CATEGORY = new Category('Colours', '%{BKY_COLOUR_HUE}', [
    new XmlBlock('colour_picker'),
    new XmlBlock('colour_random'),
    new XmlBlock('colour_random'),
    new XmlBlock('colour_blend')
]);
/** @type {?} */
export var VARIABLES_CATEGORY = new Category('Variables', '%{BKY_VARIABLES_HUE}', [], [], 'VARIABLE');
/** @type {?} */
export var FUNCTIONS_CATEGORY = new Category('Functions', '%{BKY_PROCEDURES_HUE}', [], [], 'PROCEDURE');
var NgxToolboxBuilderService = /** @class */ (function () {
    function NgxToolboxBuilderService() {
    }
    /**
     * @return {?}
     */
    NgxToolboxBuilderService.prototype.build = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        /** @type {?} */
        var xml = '<xml id="toolbox" style="display: none">';
        if (this._nodes) {
            try {
                for (var _b = tslib_1.__values(this._nodes), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var node = _c.value;
                    xml += node.toXML();
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        xml += '</xml>';
        return xml;
    };
    Object.defineProperty(NgxToolboxBuilderService.prototype, "nodes", {
        get: /**
         * @return {?}
         */
        function () {
            return this._nodes;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._nodes = value;
        },
        enumerable: true,
        configurable: true
    });
    NgxToolboxBuilderService.decorators = [
        { type: Injectable }
    ];
    return NgxToolboxBuilderService;
}());
export { NgxToolboxBuilderService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxToolboxBuilderService.prototype._nodes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRvb2xib3gtYnVpbGRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJsb2NrbHkvIiwic291cmNlcyI6WyJsaWIvbmd4LWJsb2NrbHkvc2VydmljZXMvbmd4LXRvb2xib3gtYnVpbGRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUcvQyxNQUFNLEtBQU8sY0FBYyxHQUFhLElBQUksUUFBUSxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRTtJQUM5RSxJQUFJLFFBQVEsQ0FBQyxhQUFhLENBQUM7SUFDM0IsSUFBSSxRQUFRLENBQUMsZUFBZSxDQUFDO0lBQzdCLElBQUksUUFBUSxDQUFDLGlCQUFpQixDQUFDO0lBQy9CLElBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQztJQUM1QixJQUFJLFFBQVEsQ0FBQyxlQUFlLENBQUM7SUFDN0IsSUFBSSxRQUFRLENBQUMsWUFBWSxDQUFDO0lBQzFCLElBQUksUUFBUSxDQUFDLGVBQWUsQ0FBQztDQUNoQyxDQUFDOztBQUVGLE1BQU0sS0FBTyxhQUFhLEdBQWEsSUFBSSxRQUFRLENBQUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFO0lBQzdFLElBQUksUUFBUSxDQUFDLHFCQUFxQixDQUFDO0lBQ25DLElBQUksUUFBUSxDQUFDLHFCQUFxQixDQUFDO0lBQ25DLElBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQztJQUM1QixJQUFJLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQztJQUNoQyxJQUFJLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQztJQUN4QyxJQUFJLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQztDQUMzQyxDQUFDOztBQUdGLE1BQU0sS0FBTyxhQUFhLEdBQWEs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LElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTs7Z0JBQ2IsS0FBbUIsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyxNQUFNLENBQUEsZ0JBQUEsNEJBQUU7b0JBQTNCLElBQU0sSUFBSSxXQUFBO29CQUNYLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQ3ZCOzs7Ozs7Ozs7U0FDSjtRQUNELEdBQUcsSUFBSSxRQUFRLENBQUM7UUFDaEIsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBRUQsc0JBQUksMkNBQUs7Ozs7UUFBVDtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDOzs7OztRQUVELFVBQVUsS0FBYTtZQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDOzs7T0FKQTs7Z0JBbEJKLFVBQVU7O0lBdUJYLCtCQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0F0Qlksd0JBQXdCOzs7Ozs7SUFFakMsMENBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2F0ZWdvcnkgfSBmcm9tICcuLi9tb2RlbHMvY2F0ZWdvcnknO1xuaW1wb3J0IHsgWG1sQmxvY2sgfSBmcm9tICcuLi9tb2RlbHMveG1sLWJsb2NrJztcbmltcG9ydCB7IE5vZGUgfSBmcm9tICcuLi9tb2RlbHMvbm9kZSc7XG5cbmV4cG9ydCBjb25zdCBMT0dJQ19DQVRFR09SWTogQ2F0ZWdvcnkgPSBuZXcgQ2F0ZWdvcnkoJ0xvZ2ljJywgJyV7QktZX0xPR0lDX0hVRX0nLCBbXG4gICAgbmV3IFhtbEJsb2NrKCdjb250cm9sc19pZicpLFxuICAgIG5ldyBYbWxCbG9jaygnbG9naWNfY29tcGFyZScpLFxuICAgIG5ldyBYbWxCbG9jaygnbG9naWNfb3BlcmF0aW9uJyksXG4gICAgbmV3IFhtbEJsb2NrKCdsb2dpY19uZWdhdGUnKSxcbiAgICBuZXcgWG1sQmxvY2soJ2xvZ2ljX2Jvb2xlYW4nKSxcbiAgICBuZXcgWG1sQmxvY2soJ2xvZ2ljX251bGwnKSxcbiAgICBuZXcgWG1sQmxvY2soJ2xvZ2ljX3Rlcm5hcnknKSxcbl0pO1xuXG5leHBvcnQgY29uc3QgTE9PUF9DQVRFR09SWTogQ2F0ZWdvcnkgPSBuZXcgQ2F0ZWdvcnkoJ0xvb3BzJywgJyV7QktZX0xPT1BTX0hVRX0nLCBbXG4gICAgbmV3IFhtbEJsb2NrKCdjb250cm9sc19yZXBlYXRfZXh0JyksXG4gICAgbmV3IFhtbEJsb2NrKCdjb250cm9sc193aGlsZVVudGlsJyksXG4gICAgbmV3IFhtbEJsb2NrKCdjb250cm9sc19mb3InKSxcbiAgICBuZXcgWG1sQmxvY2soJ2NvbnRyb2xzX2ZvckVhY2gnKSxcbiAgICBuZXcgWG1sQmxvY2soJ2NvbnRyb2xzX2Zsb3dfc3RhdGVtZW50cycpLFxuICAgIG5ldyBYbWxCbG9jaygnY29udHJvbHNfZmxvd19zdGF0ZW1lbnRzJylcbl0pO1xuXG5cbmV4cG9ydCBjb25zdCBNQVRIX0NBVEVHT1JZOiBDYXRlZ29yeSA9IG5ldyBDYXRlZ29yeSgnTWF0aCcsICcle0JLWV9NQVRIX0hVRX0nLCBbXG4gICAgbmV3IFhtbEJsb2NrKCdtYXRoX251bWJlcicpLFxuICAgIG5ldyBYbWxCbG9jaygnbWF0aF9hcml0aG1ldGljJyksXG4gICAgbmV3IFhtbEJsb2NrKCdtYXRoX3NpbmdsZScpLFxuICAgIG5ldyBYbWxCbG9jaygnbWF0aF90cmlnJyksXG4gICAgbmV3IFhtbEJsb2NrKCdtYXRoX2NvbnN0YW50JyksXG4gICAgbmV3IFhtbEJsb2NrKCdtYXRoX251bWJlcl9wcm9wZXJ0eScpLFxuICAgIG5ldyBYbWxCbG9jaygnbWF0aF9yb3VuZCcpLFxuICAgIG5ldyBYbWxCbG9jaygnbWF0aF9vbl9saXN0JyksXG4gICAgbmV3IFhtbEJsb2NrKCdtYXRoX21vZHVsbycpLFxuICAgIG5ldyBYbWxCbG9jaygnbWF0aF9jb25zdHJhaW4nKSxcbiAgICBuZXcgWG1sQmxvY2soJ21hdGhfcmFuZG9tX2ludCcpLFxuICAgIG5ldyBYbWxCbG9jaygnbWF0aF9yYW5kb21fZmxvYXQnKSxcbiAgICBuZXcgWG1sQmxvY2soJ21hdGhfYXRhbjInKVxuXSk7XG5cbmV4cG9ydCBjb25zdCBURVhUX0NBVEVHT1JZOiBDYXRlZ29yeSA9IG5ldyBDYXRlZ29yeSgnVGV4dCcsICcle0JLWV9URVhUU19IVUV9JywgW1xuICAgIG5ldyBYbWxCbG9jaygndGV4dCcpLFxuICAgIG5ldyBYbWxCbG9jaygndGV4dF9qb2luJyksXG4gICAgbmV3IFhtbEJsb2NrKCd0ZXh0X2FwcGVuZCcpLFxuICAgIG5ldyBYbWxCbG9jaygndGV4dF9sZW5ndGgnKSxcbiAgICBuZXcgWG1sQmxvY2soJ3RleHRfaXNFbXB0eScpLFxuICAgIG5ldyBYbWxCbG9jaygndGV4dF9pbmRleE9mJyksXG4gICAgbmV3IFhtbEJsb2NrKCd0ZXh0X2NoYXJBdCcpLFxuICAgIG5ldyBYbWxCbG9jaygndGV4dF9nZXRTdWJzdHJpbmcnKSxcbiAgICBuZXcgWG1sQmxvY2soJ3RleHRfY2hhbmdlQ2FzZScpLFxuICAgIG5ldyBYbWxCbG9jaygndGV4dF90cmltJyksXG4gICAgbmV3IFhtbEJsb2NrKCd0ZXh0X3ByaW50JyksXG4gICAgbmV3IFhtbEJsb2NrKCd0ZXh0X3Byb21wdF9leHQnKVxuXSk7XG5cbmV4cG9ydCBjb25zdCBMSVNUU19DQVRFR09SWTogQ2F0ZWdvcnkgPSBuZXcgQ2F0ZWdvcnkoJ0xpc3RzJywgJyV7QktZX0xJU1RTX0hVRX0nLCBbXG4gICAgbmV3IFhtbEJsb2NrKCdsaXN0c19jcmVhdGVfd2l0aCcpLFxuICAgIG5ldyBYbWxCbG9jaygnbGlzdHNfY3JlYXRlX3dpdGgnKSxcbiAgICBuZXcgWG1sQmxvY2soJ2xpc3RzX3JlcGVhdCcpLFxuICAgIG5ldyBYbWxCbG9jaygnbGlzdHNfbGVuZ3RoJyksXG4gICAgbmV3IFhtbEJsb2NrKCdsaXN0c19pc0VtcHR5JyksXG4gICAgbmV3IFhtbEJsb2NrKCdsaXN0c19pbmRleE9mJyksXG4gICAgbmV3IFhtbEJsb2NrKCdsaXN0c19nZXRJbmRleCcpLFxuICAgIG5ldyBYbWxCbG9jaygnbGlzdHNfc2V0SW5kZXgnKSxcbiAgICBuZXcgWG1sQmxvY2soJ2xpc3RzX2dldFN1Ymxpc3QnKSxcbiAgICBuZXcgWG1sQmxvY2soJ2xpc3RzX3NwbGl0JyksXG4gICAgbmV3IFhtbEJsb2NrKCdsaXN0c19zb3J0JyksXG5dKTtcblxuZXhwb3J0IGNvbnN0IENPTE9VUl9DQVRFR09SWTogQ2F0ZWdvcnkgPSBuZXcgQ2F0ZWdvcnkoJ0NvbG91cnMnLCAnJXtCS1lfQ09MT1VSX0hVRX0nLCBbXG4gICAgbmV3IFhtbEJsb2NrKCdjb2xvdXJfcGlja2VyJyksXG4gICAgbmV3IFhtbEJsb2NrKCdjb2xvdXJfcmFuZG9tJyksXG4gICAgbmV3IFhtbEJsb2NrKCdjb2xvdXJfcmFuZG9tJyksXG4gICAgbmV3IFhtbEJsb2NrKCdjb2xvdXJfYmxlbmQnKVxuXSk7XG5cbmV4cG9ydCBjb25zdCBWQVJJQUJMRVNfQ0FURUdPUlk6IENhdGVnb3J5ID0gbmV3IENhdGVnb3J5KCdWYXJpYWJsZXMnLCAnJXtCS1lfVkFSSUFCTEVTX0hVRX0nLCBbXSwgW10sICdWQVJJQUJMRScpO1xuXG5leHBvcnQgY29uc3QgRlVOQ1RJT05TX0NBVEVHT1JZOiBDYXRlZ29yeSA9IG5ldyBDYXRlZ29yeSgnRnVuY3Rpb25zJywgJyV7QktZX1BST0NFRFVSRVNfSFVFfScsIFtdLCBbXSwgJ1BST0NFRFVSRScpO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmd4VG9vbGJveEJ1aWxkZXJTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgX25vZGVzOiBOb2RlW107XG5cbiAgICBwdWJsaWMgYnVpbGQoKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHhtbCA9ICc8eG1sIGlkPVwidG9vbGJveFwiIHN0eWxlPVwiZGlzcGxheTogbm9uZVwiPic7XG4gICAgICAgIGlmICh0aGlzLl9ub2Rlcykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIHRoaXMuX25vZGVzKSB7XG4gICAgICAgICAgICAgICAgeG1sICs9IG5vZGUudG9YTUwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB4bWwgKz0gJzwveG1sPic7XG4gICAgICAgIHJldHVybiB4bWw7XG4gICAgfVxuXG4gICAgZ2V0IG5vZGVzKCk6IE5vZGVbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ub2RlcztcbiAgICB9XG5cbiAgICBzZXQgbm9kZXModmFsdWU6IE5vZGVbXSkge1xuICAgICAgICB0aGlzLl9ub2RlcyA9IHZhbHVlO1xuICAgIH1cbn1cbiJdfQ==