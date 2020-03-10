(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ngx-blockly', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['ngx-blockly'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxBlocklyConfig = /** @class */ (function () {
        function NgxBlocklyConfig() {
        }
        return NgxBlocklyConfig;
    }());
    if (false) {
        /** @type {?} */
        NgxBlocklyConfig.prototype.collapse;
        /** @type {?} */
        NgxBlocklyConfig.prototype.comments;
        /** @type {?} */
        NgxBlocklyConfig.prototype.css;
        /** @type {?} */
        NgxBlocklyConfig.prototype.disable;
        /** @type {?} */
        NgxBlocklyConfig.prototype.grid;
        /** @type {?} */
        NgxBlocklyConfig.prototype.horizontalLayout;
        /** @type {?} */
        NgxBlocklyConfig.prototype.maxBlocks;
        /** @type {?} */
        NgxBlocklyConfig.prototype.maxInstances;
        /** @type {?} */
        NgxBlocklyConfig.prototype.media;
        /** @type {?} */
        NgxBlocklyConfig.prototype.oneBasedIndex;
        /** @type {?} */
        NgxBlocklyConfig.prototype.readOnly;
        /** @type {?} */
        NgxBlocklyConfig.prototype.rtl;
        /** @type {?} */
        NgxBlocklyConfig.prototype.scrollbars;
        /** @type {?} */
        NgxBlocklyConfig.prototype.sounds;
        /** @type {?} */
        NgxBlocklyConfig.prototype.theme;
        /** @type {?} */
        NgxBlocklyConfig.prototype.toolbox;
        /** @type {?} */
        NgxBlocklyConfig.prototype.toolboxPosition;
        /** @type {?} */
        NgxBlocklyConfig.prototype.trashcan;
        /** @type {?} */
        NgxBlocklyConfig.prototype.maxTrashcanContents;
        /** @type {?} */
        NgxBlocklyConfig.prototype.zoom;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxBlocklyGeneratorConfig = /** @class */ (function () {
        function NgxBlocklyGeneratorConfig() {
        }
        return NgxBlocklyGeneratorConfig;
    }());
    if (false) {
        /** @type {?} */
        NgxBlocklyGeneratorConfig.prototype.dart;
        /** @type {?} */
        NgxBlocklyGeneratorConfig.prototype.javascript;
        /** @type {?} */
        NgxBlocklyGeneratorConfig.prototype.lua;
        /** @type {?} */
        NgxBlocklyGeneratorConfig.prototype.php;
        /** @type {?} */
        NgxBlocklyGeneratorConfig.prototype.python;
        /** @type {?} */
        NgxBlocklyGeneratorConfig.prototype.xml;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxBlocklyComponent = /** @class */ (function () {
        function NgxBlocklyComponent() {
            this.config = {};
            this.generatorConfig = {};
            this.customBlocks = [];
            this.workspaceChange = new core.EventEmitter();
            this.dartCode = new core.EventEmitter();
            this.javascriptCode = new core.EventEmitter();
            this.luaCode = new core.EventEmitter();
            this.phpCode = new core.EventEmitter();
            this.pythonCode = new core.EventEmitter();
            this.xmlCode = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        NgxBlocklyComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var e_1, _a;
            if (this.customBlocks) {
                var _loop_1 = function (customBlock) {
                    Blockly.Blocks[customBlock.type] = {
                        init: (/**
                         * @return {?}
                         */
                        function () {
                            var _a;
                            /** @type {?} */
                            var block = new ((_a = customBlock.class).bind.apply(_a, __spread([void 0, customBlock.type, this, customBlock.blockMutator], customBlock.args)))();
                            block.init(this);
                            this.mixin({
                                blockInstance: block
                            });
                        })
                    };
                    if (typeof Blockly.Python !== 'undefined') {
                        Blockly.Python[customBlock.type] = (/**
                         * @param {?} b
                         * @return {?}
                         */
                        function (b) {
                            return b.blockInstance.toPythonCode(b);
                        });
                    }
                    if (typeof Blockly.Dart !== 'undefined') {
                        Blockly.Dart[customBlock.type] = (/**
                         * @param {?} b
                         * @return {?}
                         */
                        function (b) {
                            return b.blockInstance.toDartCode(b);
                        });
                    }
                    if (typeof Blockly.JavaScript !== 'undefined') {
                        Blockly.JavaScript[customBlock.type] = (/**
                         * @param {?} b
                         * @return {?}
                         */
                        function (b) {
                            return b.blockInstance.toJavaScriptCode(b);
                        });
                    }
                    if (typeof Blockly.Lua !== 'undefined') {
                        Blockly.Lua[customBlock.type] = (/**
                         * @param {?} b
                         * @return {?}
                         */
                        function (b) {
                            return b.blockInstance.toLuaCode(b);
                        });
                    }
                    if (typeof Blockly.PHP !== 'undefined') {
                        Blockly.PHP[customBlock.type] = (/**
                         * @param {?} b
                         * @return {?}
                         */
                        function (b) {
                            return b.blockInstance.toPHPCode(b);
                        });
                    }
                    if (customBlock.blockMutator) {
                        /** @type {?} */
                        var mutator_mixin = {
                            mutationToDom: (/**
                             * @return {?}
                             */
                            function () {
                                return customBlock.blockMutator.mutationToDom.call(customBlock.blockMutator, this);
                            }),
                            domToMutation: (/**
                             * @param {?} xmlElement
                             * @return {?}
                             */
                            function (xmlElement) {
                                customBlock.blockMutator.domToMutation.call(customBlock.blockMutator, this, xmlElement);
                            })
                        };
                        if (customBlock.blockMutator.blockList && customBlock.blockMutator.blockList.length > 0) {
                            mutator_mixin.decompose = (/**
                             * @param {?} workspace
                             * @return {?}
                             */
                            function (workspace) {
                                return customBlock.blockMutator.decompose.call(customBlock.blockMutator, this, workspace);
                            });
                            mutator_mixin.compose = (/**
                             * @param {?} topBlock
                             * @return {?}
                             */
                            function (topBlock) {
                                customBlock.blockMutator.compose.call(customBlock.blockMutator, this, topBlock);
                            });
                            mutator_mixin.saveConnections = (/**
                             * @param {?} containerBlock
                             * @return {?}
                             */
                            function (containerBlock) {
                                customBlock.blockMutator.saveConnections.call(customBlock.blockMutator, this, containerBlock);
                            });
                        }
                        Blockly.Extensions.unregister(customBlock.blockMutator.name);
                        Blockly.Extensions.registerMutator(customBlock.blockMutator.name, mutator_mixin, (/**
                         * @return {?}
                         */
                        function () {
                            customBlock.blockMutator.afterBlockInit.call(customBlock.blockMutator, this);
                        }), customBlock.blockMutator.blockList);
                    }
                };
                try {
                    for (var _b = __values(this.customBlocks), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var customBlock = _c.value;
                        _loop_1(customBlock);
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
        };
        /**
         * @return {?}
         */
        NgxBlocklyComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            this._init();
        };
        /**
         * @param {?} event
         * @return {?}
         */
        NgxBlocklyComponent.prototype.onResize = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            var _this = this;
            setTimeout((/**
             * @return {?}
             */
            function () { return _this.resize(); }), 200);
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NgxBlocklyComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.config && !changes.config.firstChange) {
                this._init();
            }
        };
        /**
         * @param {?} workspaceId
         * @return {?}
         */
        NgxBlocklyComponent.prototype.workspaceToCode = /**
         * @param {?} workspaceId
         * @return {?}
         */
        function (workspaceId) {
            if (this.generatorConfig.dart) {
                this.dartCode.emit(Blockly.Dart.workspaceToCode(Blockly.Workspace.getById(workspaceId)));
            }
            if (this.generatorConfig.javascript) {
                this.javascriptCode.emit(Blockly.JavaScript.workspaceToCode(Blockly.Workspace.getById(workspaceId)));
            }
            if (this.generatorConfig.lua) {
                this.luaCode.emit(Blockly.Lua.workspaceToCode(Blockly.Workspace.getById(workspaceId)));
            }
            if (this.generatorConfig.php) {
                this.phpCode.emit(Blockly.PHP.workspaceToCode(Blockly.Workspace.getById(workspaceId)));
            }
            if (this.generatorConfig.python) {
                this.pythonCode.emit(Blockly.Python.workspaceToCode(Blockly.Workspace.getById(workspaceId)));
            }
            if (this.generatorConfig.xml) {
                this.xmlCode.emit(Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(Blockly.Workspace.getById(workspaceId))));
            }
        };
        /**
         * @return {?}
         */
        NgxBlocklyComponent.prototype.toXml = /**
         * @return {?}
         */
        function () {
            return Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(this.workspace));
        };
        /**
         * @param {?} xml
         * @return {?}
         */
        NgxBlocklyComponent.prototype.fromXml = /**
         * @param {?} xml
         * @return {?}
         */
        function (xml) {
            Blockly.Xml.clearWorkspaceAndLoadFromXml(Blockly.Xml.textToDom(xml), this.workspace);
        };
        /**
         * @param {?} xml
         * @return {?}
         */
        NgxBlocklyComponent.prototype.appendFromXml = /**
         * @param {?} xml
         * @return {?}
         */
        function (xml) {
            Blockly.Xml.appendDomToWorkspace(Blockly.Xml.textToDom(xml), this.workspace);
        };
        /**
         * @protected
         * @return {?}
         */
        NgxBlocklyComponent.prototype.resize = /**
         * @protected
         * @return {?}
         */
        function () {
            Blockly.svgResize(this.workspace);
        };
        /**
         * @private
         * @return {?}
         */
        NgxBlocklyComponent.prototype._init = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var xml;
            if (this.workspace) {
                xml = this.toXml();
                this.workspace.dispose();
            }
            this.workspace = Blockly.inject('blockly', this.config);
            this.workspace.addChangeListener((/**
             * @param {?} $event
             * @return {?}
             */
            function ($event) {
                _this._onWorkspaceChange($event);
            }));
            if (xml) {
                this.fromXml(xml);
            }
            this.resize();
        };
        /**
         * @private
         * @param {?} $event
         * @return {?}
         */
        NgxBlocklyComponent.prototype._onWorkspaceChange = /**
         * @private
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.workspaceChange.emit($event);
            this.workspaceToCode($event.workspaceId);
        };
        NgxBlocklyComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ngx-blockly',
                        template: "<div id=\"blockly-wrapper\" class=\"blockly-wrapper\">\n    <div id=\"blockly\" class=\"blockly\"></div>\n</div>\n",
                        styles: [".blockly-wrapper{width:100%;height:100%}.blockly,:host ::ng-deep .blocklySvg{position:absolute;width:100%;min-width:100%;height:100%;min-height:100%}"]
                    }] }
        ];
        /** @nocollapse */
        NgxBlocklyComponent.ctorParameters = function () { return []; };
        NgxBlocklyComponent.propDecorators = {
            config: [{ type: core.Input }],
            generatorConfig: [{ type: core.Input }],
            customBlocks: [{ type: core.Input }],
            workspaceChange: [{ type: core.Output }],
            dartCode: [{ type: core.Output }],
            javascriptCode: [{ type: core.Output }],
            luaCode: [{ type: core.Output }],
            phpCode: [{ type: core.Output }],
            pythonCode: [{ type: core.Output }],
            xmlCode: [{ type: core.Output }],
            onResize: [{ type: core.HostListener, args: ['window:resize', ['$event'],] }]
        };
        return NgxBlocklyComponent;
    }());
    if (false) {
        /** @type {?} */
        NgxBlocklyComponent.prototype.config;
        /** @type {?} */
        NgxBlocklyComponent.prototype.generatorConfig;
        /** @type {?} */
        NgxBlocklyComponent.prototype.customBlocks;
        /** @type {?} */
        NgxBlocklyComponent.prototype.workspaceChange;
        /** @type {?} */
        NgxBlocklyComponent.prototype.dartCode;
        /** @type {?} */
        NgxBlocklyComponent.prototype.javascriptCode;
        /** @type {?} */
        NgxBlocklyComponent.prototype.luaCode;
        /** @type {?} */
        NgxBlocklyComponent.prototype.phpCode;
        /** @type {?} */
        NgxBlocklyComponent.prototype.pythonCode;
        /** @type {?} */
        NgxBlocklyComponent.prototype.xmlCode;
        /** @type {?} */
        NgxBlocklyComponent.prototype.workspace;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var   /**
     * @abstract
     */
    Block = /** @class */ (function () {
        function Block(type) {
            this._type = type;
        }
        Object.defineProperty(Block.prototype, "type", {
            get: /**
             * @return {?}
             */
            function () {
                return this._type;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._type = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Block.prototype, "class", {
            get: /**
             * @return {?}
             */
            function () {
                return this._class;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._class = value;
            },
            enumerable: true,
            configurable: true
        });
        return Block;
    }());
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var   /**
     * @abstract
     */
    CustomBlock = /** @class */ (function (_super) {
        __extends(CustomBlock, _super);
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var XmlBlock = /** @class */ (function (_super) {
        __extends(XmlBlock, _super);
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
                for (var _b = __values(this.values), _c = _b.next(); !_c.done; _c = _b.next()) {
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
                for (var _c = __values(this._categories), _d = _c.next(); !_d.done; _d = _c.next()) {
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
                for (var _e = __values(this._blocks), _f = _e.next(); !_f.done; _f = _e.next()) {
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Separator = /** @class */ (function () {
        function Separator() {
        }
        /**
         * @return {?}
         */
        Separator.prototype.toXML = /**
         * @return {?}
         */
        function () {
            return '<sep></sep>';
        };
        return Separator;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function Node() { }
    if (false) {
        /**
         * @return {?}
         */
        Node.prototype.toXML = function () { };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var   /**
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LOGIC_CATEGORY = new Category('Logic', '%{BKY_LOGIC_HUE}', [
        new XmlBlock('controls_if'),
        new XmlBlock('logic_compare'),
        new XmlBlock('logic_operation'),
        new XmlBlock('logic_negate'),
        new XmlBlock('logic_boolean'),
        new XmlBlock('logic_null'),
        new XmlBlock('logic_ternary'),
    ]);
    /** @type {?} */
    var LOOP_CATEGORY = new Category('Loops', '%{BKY_LOOPS_HUE}', [
        new XmlBlock('controls_repeat_ext'),
        new XmlBlock('controls_whileUntil'),
        new XmlBlock('controls_for'),
        new XmlBlock('controls_forEach'),
        new XmlBlock('controls_flow_statements'),
        new XmlBlock('controls_flow_statements')
    ]);
    /** @type {?} */
    var MATH_CATEGORY = new Category('Math', '%{BKY_MATH_HUE}', [
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
    var TEXT_CATEGORY = new Category('Text', '%{BKY_TEXTS_HUE}', [
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
    var LISTS_CATEGORY = new Category('Lists', '%{BKY_LISTS_HUE}', [
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
    var COLOUR_CATEGORY = new Category('Colours', '%{BKY_COLOUR_HUE}', [
        new XmlBlock('colour_picker'),
        new XmlBlock('colour_random'),
        new XmlBlock('colour_random'),
        new XmlBlock('colour_blend')
    ]);
    /** @type {?} */
    var VARIABLES_CATEGORY = new Category('Variables', '%{BKY_VARIABLES_HUE}', [], [], 'VARIABLE');
    /** @type {?} */
    var FUNCTIONS_CATEGORY = new Category('Functions', '%{BKY_PROCEDURES_HUE}', [], [], 'PROCEDURE');
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
                    for (var _b = __values(this._nodes), _c = _b.next(); !_c.done; _c = _b.next()) {
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
            { type: core.Injectable }
        ];
        return NgxToolboxBuilderService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NgxToolboxBuilderService.prototype._nodes;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxBlocklyModule = /** @class */ (function () {
        function NgxBlocklyModule() {
        }
        NgxBlocklyModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [NgxBlocklyComponent],
                        imports: [],
                        exports: [NgxBlocklyComponent],
                        providers: [NgxToolboxBuilderService],
                        schemas: [core.NO_ERRORS_SCHEMA]
                    },] }
        ];
        return NgxBlocklyModule;
    }());

    exports.Block = Block;
    exports.BlockMutator = BlockMutator;
    exports.COLOUR_CATEGORY = COLOUR_CATEGORY;
    exports.Category = Category;
    exports.CustomBlock = CustomBlock;
    exports.FUNCTIONS_CATEGORY = FUNCTIONS_CATEGORY;
    exports.Field = Field;
    exports.LISTS_CATEGORY = LISTS_CATEGORY;
    exports.LOGIC_CATEGORY = LOGIC_CATEGORY;
    exports.LOOP_CATEGORY = LOOP_CATEGORY;
    exports.MATH_CATEGORY = MATH_CATEGORY;
    exports.NgxBlocklyComponent = NgxBlocklyComponent;
    exports.NgxBlocklyConfig = NgxBlocklyConfig;
    exports.NgxBlocklyGeneratorConfig = NgxBlocklyGeneratorConfig;
    exports.NgxBlocklyModule = NgxBlocklyModule;
    exports.NgxToolboxBuilderService = NgxToolboxBuilderService;
    exports.Separator = Separator;
    exports.TEXT_CATEGORY = TEXT_CATEGORY;
    exports.VARIABLES_CATEGORY = VARIABLES_CATEGORY;
    exports.Value = Value;
    exports.XmlBlock = XmlBlock;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-blockly.umd.js.map
