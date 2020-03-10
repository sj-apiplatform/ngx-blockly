/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { NgxBlocklyConfig } from './ngx-blockly.config';
import { NgxBlocklyGeneratorConfig } from './ngx-blockly-generator.config';
var NgxBlocklyComponent = /** @class */ (function () {
    function NgxBlocklyComponent() {
        this.config = {};
        this.generatorConfig = {};
        this.customBlocks = [];
        this.workspaceChange = new EventEmitter();
        this.dartCode = new EventEmitter();
        this.javascriptCode = new EventEmitter();
        this.luaCode = new EventEmitter();
        this.phpCode = new EventEmitter();
        this.pythonCode = new EventEmitter();
        this.xmlCode = new EventEmitter();
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
                        var block = new ((_a = customBlock.class).bind.apply(_a, tslib_1.__spread([void 0, customBlock.type, this, customBlock.blockMutator], customBlock.args)))();
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
                for (var _b = tslib_1.__values(this.customBlocks), _c = _b.next(); !_c.done; _c = _b.next()) {
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
        { type: Component, args: [{
                    selector: 'ngx-blockly',
                    template: "<div id=\"blockly-wrapper\" class=\"blockly-wrapper\">\n    <div id=\"blockly\" class=\"blockly\"></div>\n</div>\n",
                    styles: [".blockly-wrapper{width:100%;height:100%}.blockly,:host ::ng-deep .blocklySvg{position:absolute;width:100%;min-width:100%;height:100%;min-height:100%}"]
                }] }
    ];
    /** @nocollapse */
    NgxBlocklyComponent.ctorParameters = function () { return []; };
    NgxBlocklyComponent.propDecorators = {
        config: [{ type: Input }],
        generatorConfig: [{ type: Input }],
        customBlocks: [{ type: Input }],
        workspaceChange: [{ type: Output }],
        dartCode: [{ type: Output }],
        javascriptCode: [{ type: Output }],
        luaCode: [{ type: Output }],
        phpCode: [{ type: Output }],
        pythonCode: [{ type: Output }],
        xmlCode: [{ type: Output }],
        onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
    };
    return NgxBlocklyComponent;
}());
export { NgxBlocklyComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJsb2NrbHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJsb2NrbHkvIiwic291cmNlcyI6WyJsaWIvbmd4LWJsb2NrbHkvbmd4LWJsb2NrbHkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUEyQixNQUFNLGVBQWUsQ0FBQztBQUNySSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUszRTtJQW9CSTtRQWJnQixXQUFNLEdBQXFCLEVBQUUsQ0FBQztRQUM5QixvQkFBZSxHQUE4QixFQUFFLENBQUM7UUFDaEQsaUJBQVksR0FBa0IsRUFBRSxDQUFDO1FBQ2hDLG9CQUFlLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDN0QsYUFBUSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzVELG1CQUFjLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFDbEUsWUFBTyxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzNELFlBQU8sR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUMzRCxlQUFVLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFDOUQsWUFBTyxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO0lBSzVFLENBQUM7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7O1FBQ0ksSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO29DQUNSLFdBQVc7Z0JBQ2xCLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHO29CQUMvQixJQUFJOzs7b0JBQUU7Ozs0QkFDSSxLQUFLLFFBQU8sQ0FBQSxLQUFBLFdBQVcsQ0FBQyxLQUFLLENBQUEsMENBQUMsV0FBVyxDQUFD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NEU7O0lBQzVFLHNDQUE0RTs7SUFDNUUseUNBQStFOztJQUMvRSxzQ0FBNEU7O0lBRTVFLHdDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neEJsb2NrbHlDb25maWcgfSBmcm9tICcuL25neC1ibG9ja2x5LmNvbmZpZyc7XG5pbXBvcnQgeyBOZ3hCbG9ja2x5R2VuZXJhdG9yQ29uZmlnIH0gZnJvbSAnLi9uZ3gtYmxvY2tseS1nZW5lcmF0b3IuY29uZmlnJztcbmltcG9ydCB7IEN1c3RvbUJsb2NrIH0gZnJvbSAnLi9tb2RlbHMvY3VzdG9tLWJsb2NrJztcblxuZGVjbGFyZSB2YXIgQmxvY2tseTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25neC1ibG9ja2x5JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbmd4LWJsb2NrbHkuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL25neC1ibG9ja2x5LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hCbG9ja2x5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuXG4gICAgQElucHV0KCkgcHVibGljIGNvbmZpZzogTmd4QmxvY2tseUNvbmZpZyA9IHt9O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBnZW5lcmF0b3JDb25maWc6IE5neEJsb2NrbHlHZW5lcmF0b3JDb25maWcgPSB7fTtcbiAgICBASW5wdXQoKSBwdWJsaWMgY3VzdG9tQmxvY2tzOiBDdXN0b21CbG9ja1tdID0gW107XG4gICAgQE91dHB1dCgpIHB1YmxpYyB3b3Jrc3BhY2VDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQE91dHB1dCgpIHB1YmxpYyBkYXJ0Q29kZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIGphdmFzY3JpcHRDb2RlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgbHVhQ29kZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIHBocENvZGU6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gICAgQE91dHB1dCgpIHB1YmxpYyBweXRob25Db2RlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgeG1sQ29kZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAgIHB1YmxpYyB3b3Jrc3BhY2U6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5jdXN0b21CbG9ja3MpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgY3VzdG9tQmxvY2sgb2YgdGhpcy5jdXN0b21CbG9ja3MpIHtcbiAgICAgICAgICAgICAgICBCbG9ja2x5LkJsb2Nrc1tjdXN0b21CbG9jay50eXBlXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmxvY2sgPSBuZXcgY3VzdG9tQmxvY2suY2xhc3MoY3VzdG9tQmxvY2sudHlwZSwgdGhpcywgY3VzdG9tQmxvY2suYmxvY2tNdXRhdG9yLCAuLi5jdXN0b21CbG9jay5hcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrLmluaXQodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1peGluKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tJbnN0YW5jZTogYmxvY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIEJsb2NrbHkuUHl0aG9uICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBCbG9ja2x5LlB5dGhvbltjdXN0b21CbG9jay50eXBlXSA9IGZ1bmN0aW9uIChiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYi5ibG9ja0luc3RhbmNlLnRvUHl0aG9uQ29kZShiKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBCbG9ja2x5LkRhcnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIEJsb2NrbHkuRGFydFtjdXN0b21CbG9jay50eXBlXSA9IGZ1bmN0aW9uIChiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYi5ibG9ja0luc3RhbmNlLnRvRGFydENvZGUoYik7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgQmxvY2tseS5KYXZhU2NyaXB0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBCbG9ja2x5LkphdmFTY3JpcHRbY3VzdG9tQmxvY2sudHlwZV0gPSBmdW5jdGlvbiAoYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGIuYmxvY2tJbnN0YW5jZS50b0phdmFTY3JpcHRDb2RlKGIpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIEJsb2NrbHkuTHVhICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBCbG9ja2x5Lkx1YVtjdXN0b21CbG9jay50eXBlXSA9IGZ1bmN0aW9uIChiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYi5ibG9ja0luc3RhbmNlLnRvTHVhQ29kZShiKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBCbG9ja2x5LlBIUCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgQmxvY2tseS5QSFBbY3VzdG9tQmxvY2sudHlwZV0gPSBmdW5jdGlvbiAoYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGIuYmxvY2tJbnN0YW5jZS50b1BIUENvZGUoYik7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjdXN0b21CbG9jay5ibG9ja011dGF0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbXV0YXRvcl9taXhpbjogYW55ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25Ub0RvbTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXN0b21CbG9jay5ibG9ja011dGF0b3IubXV0YXRpb25Ub0RvbS5jYWxsKGN1c3RvbUJsb2NrLmJsb2NrTXV0YXRvciwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tVG9NdXRhdGlvbjogZnVuY3Rpb24gKHhtbEVsZW1lbnQ6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUJsb2NrLmJsb2NrTXV0YXRvci5kb21Ub011dGF0aW9uLmNhbGwoY3VzdG9tQmxvY2suYmxvY2tNdXRhdG9yLCB0aGlzLCB4bWxFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1c3RvbUJsb2NrLmJsb2NrTXV0YXRvci5ibG9ja0xpc3QgJiYgY3VzdG9tQmxvY2suYmxvY2tNdXRhdG9yLmJsb2NrTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtdXRhdG9yX21peGluLmRlY29tcG9zZSA9IGZ1bmN0aW9uKHdvcmtzcGFjZTogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1c3RvbUJsb2NrLmJsb2NrTXV0YXRvci5kZWNvbXBvc2UuY2FsbChjdXN0b21CbG9jay5ibG9ja011dGF0b3IsIHRoaXMsIHdvcmtzcGFjZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRvcl9taXhpbi5jb21wb3NlID0gZnVuY3Rpb24odG9wQmxvY2s6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUJsb2NrLmJsb2NrTXV0YXRvci5jb21wb3NlLmNhbGwoY3VzdG9tQmxvY2suYmxvY2tNdXRhdG9yLCB0aGlzLCB0b3BCbG9jayk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRvcl9taXhpbi5zYXZlQ29ubmVjdGlvbnMgPSBmdW5jdGlvbihjb250YWluZXJCbG9jazogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQmxvY2suYmxvY2tNdXRhdG9yLnNhdmVDb25uZWN0aW9ucy5jYWxsKGN1c3RvbUJsb2NrLmJsb2NrTXV0YXRvciwgdGhpcywgY29udGFpbmVyQmxvY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBCbG9ja2x5LkV4dGVuc2lvbnMudW5yZWdpc3RlcihjdXN0b21CbG9jay5ibG9ja011dGF0b3IubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIEJsb2NrbHkuRXh0ZW5zaW9ucy5yZWdpc3Rlck11dGF0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21CbG9jay5ibG9ja011dGF0b3IubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0b3JfbWl4aW4sXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21CbG9jay5ibG9ja011dGF0b3IuYWZ0ZXJCbG9ja0luaXQuY2FsbChjdXN0b21CbG9jay5ibG9ja011dGF0b3IsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUJsb2NrLmJsb2NrTXV0YXRvci5ibG9ja0xpc3RcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgdGhpcy5faW5pdCgpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxuICAgIG9uUmVzaXplKGV2ZW50KSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZXNpemUoKSwgMjAwKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7W3Byb3BLZXk6IHN0cmluZ106IFNpbXBsZUNoYW5nZX0pIHtcbiAgICAgICAgaWYgKGNoYW5nZXMuY29uZmlnICYmICFjaGFuZ2VzLmNvbmZpZy5maXJzdENoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5faW5pdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHdvcmtzcGFjZVRvQ29kZSh3b3Jrc3BhY2VJZDogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLmdlbmVyYXRvckNvbmZpZy5kYXJ0KSB7XG4gICAgICAgICAgIHRoaXMuZGFydENvZGUuZW1pdChCbG9ja2x5LkRhcnQud29ya3NwYWNlVG9Db2RlKEJsb2NrbHkuV29ya3NwYWNlLmdldEJ5SWQod29ya3NwYWNlSWQpKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ2VuZXJhdG9yQ29uZmlnLmphdmFzY3JpcHQpIHtcbiAgICAgICAgICAgIHRoaXMuamF2YXNjcmlwdENvZGUuZW1pdChCbG9ja2x5LkphdmFTY3JpcHQud29ya3NwYWNlVG9Db2RlKEJsb2NrbHkuV29ya3NwYWNlLmdldEJ5SWQod29ya3NwYWNlSWQpKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ2VuZXJhdG9yQ29uZmlnLmx1YSkge1xuICAgICAgICAgICAgdGhpcy5sdWFDb2RlLmVtaXQoQmxvY2tseS5MdWEud29ya3NwYWNlVG9Db2RlKEJsb2NrbHkuV29ya3NwYWNlLmdldEJ5SWQod29ya3NwYWNlSWQpKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ2VuZXJhdG9yQ29uZmlnLnBocCkge1xuICAgICAgICAgICAgdGhpcy5waHBDb2RlLmVtaXQoQmxvY2tseS5QSFAud29ya3NwYWNlVG9Db2RlKEJsb2NrbHkuV29ya3NwYWNlLmdldEJ5SWQod29ya3NwYWNlSWQpKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ2VuZXJhdG9yQ29uZmlnLnB5dGhvbikge1xuICAgICAgICAgICAgdGhpcy5weXRob25Db2RlLmVtaXQoQmxvY2tseS5QeXRob24ud29ya3NwYWNlVG9Db2RlKEJsb2NrbHkuV29ya3NwYWNlLmdldEJ5SWQod29ya3NwYWNlSWQpKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ2VuZXJhdG9yQ29uZmlnLnhtbCkge1xuICAgICAgICAgICAgdGhpcy54bWxDb2RlLmVtaXQoQmxvY2tseS5YbWwuZG9tVG9QcmV0dHlUZXh0KEJsb2NrbHkuWG1sLndvcmtzcGFjZVRvRG9tKEJsb2NrbHkuV29ya3NwYWNlLmdldEJ5SWQod29ya3NwYWNlSWQpKSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHRvWG1sKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBCbG9ja2x5LlhtbC5kb21Ub1ByZXR0eVRleHQoQmxvY2tseS5YbWwud29ya3NwYWNlVG9Eb20odGhpcy53b3Jrc3BhY2UpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZnJvbVhtbCh4bWw6IHN0cmluZykge1xuICAgICAgICBCbG9ja2x5LlhtbC5jbGVhcldvcmtzcGFjZUFuZExvYWRGcm9tWG1sKEJsb2NrbHkuWG1sLnRleHRUb0RvbSh4bWwpLCB0aGlzLndvcmtzcGFjZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFwcGVuZEZyb21YbWwoeG1sOiBzdHJpbmcpIHtcbiAgICAgICAgQmxvY2tseS5YbWwuYXBwZW5kRG9tVG9Xb3Jrc3BhY2UoQmxvY2tseS5YbWwudGV4dFRvRG9tKHhtbCksIHRoaXMud29ya3NwYWNlKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVzaXplKCkge1xuICAgICAgICBCbG9ja2x5LnN2Z1Jlc2l6ZSh0aGlzLndvcmtzcGFjZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdCgpIHtcbiAgICAgICAgbGV0IHhtbDogc3RyaW5nO1xuICAgICAgICBpZiAodGhpcy53b3Jrc3BhY2UpIHtcbiAgICAgICAgICAgIHhtbCA9IHRoaXMudG9YbWwoKTtcbiAgICAgICAgICAgIHRoaXMud29ya3NwYWNlLmRpc3Bvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLndvcmtzcGFjZSA9IEJsb2NrbHkuaW5qZWN0KCdibG9ja2x5JywgdGhpcy5jb25maWcpO1xuICAgICAgICB0aGlzLndvcmtzcGFjZS5hZGRDaGFuZ2VMaXN0ZW5lcigoJGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9vbldvcmtzcGFjZUNoYW5nZSgkZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHhtbCkge1xuICAgICAgICAgICAgdGhpcy5mcm9tWG1sKHhtbCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXNpemUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9vbldvcmtzcGFjZUNoYW5nZSgkZXZlbnQ6IGFueSkge1xuICAgICAgICB0aGlzLndvcmtzcGFjZUNoYW5nZS5lbWl0KCRldmVudCk7XG4gICAgICAgIHRoaXMud29ya3NwYWNlVG9Db2RlKCRldmVudC53b3Jrc3BhY2VJZCk7XG4gICAgfVxufVxuIl19