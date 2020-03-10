/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { NgxBlocklyConfig } from './ngx-blockly.config';
import { NgxBlocklyGeneratorConfig } from './ngx-blockly-generator.config';
export class NgxBlocklyComponent {
    constructor() {
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
    ngOnInit() {
        if (this.customBlocks) {
            for (const customBlock of this.customBlocks) {
                Blockly.Blocks[customBlock.type] = {
                    init: (/**
                     * @return {?}
                     */
                    function () {
                        /** @type {?} */
                        const block = new customBlock.class(customBlock.type, this, customBlock.blockMutator, ...customBlock.args);
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
                    const mutator_mixin = {
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
            }
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._init();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        setTimeout((/**
         * @return {?}
         */
        () => this.resize()), 200);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.config && !changes.config.firstChange) {
            this._init();
        }
    }
    /**
     * @param {?} workspaceId
     * @return {?}
     */
    workspaceToCode(workspaceId) {
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
    }
    /**
     * @return {?}
     */
    toXml() {
        return Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(this.workspace));
    }
    /**
     * @param {?} xml
     * @return {?}
     */
    fromXml(xml) {
        Blockly.Xml.clearWorkspaceAndLoadFromXml(Blockly.Xml.textToDom(xml), this.workspace);
    }
    /**
     * @param {?} xml
     * @return {?}
     */
    appendFromXml(xml) {
        Blockly.Xml.appendDomToWorkspace(Blockly.Xml.textToDom(xml), this.workspace);
    }
    /**
     * @protected
     * @return {?}
     */
    resize() {
        Blockly.svgResize(this.workspace);
    }
    /**
     * @private
     * @return {?}
     */
    _init() {
        /** @type {?} */
        let xml;
        if (this.workspace) {
            xml = this.toXml();
            this.workspace.dispose();
        }
        this.workspace = Blockly.inject('blockly', this.config);
        this.workspace.addChangeListener((/**
         * @param {?} $event
         * @return {?}
         */
        ($event) => {
            this._onWorkspaceChange($event);
        }));
        if (xml) {
            this.fromXml(xml);
        }
        this.resize();
    }
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    _onWorkspaceChange($event) {
        this.workspaceChange.emit($event);
        this.workspaceToCode($event.workspaceId);
    }
}
NgxBlocklyComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-blockly',
                template: "<div id=\"blockly-wrapper\" class=\"blockly-wrapper\">\n    <div id=\"blockly\" class=\"blockly\"></div>\n</div>\n",
                styles: [".blockly-wrapper{width:100%;height:100%}.blockly,:host ::ng-deep .blocklySvg{position:absolute;width:100%;min-width:100%;height:100%;min-height:100%}"]
            }] }
];
/** @nocollapse */
NgxBlocklyComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJsb2NrbHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJsb2NrbHkvIiwic291cmNlcyI6WyJsaWIvbmd4LWJsb2NrbHkvbmd4LWJsb2NrbHkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQTJCLE1BQU0sZUFBZSxDQUFDO0FBQ3JJLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBVTNFLE1BQU0sT0FBTyxtQkFBbUI7SUFlNUI7UUFiZ0IsV0FBTSxHQUFxQixFQUFFLENBQUM7UUFDOUIsb0JBQWUsR0FBOEIsRUFBRSxDQUFDO1FBQ2hELGlCQUFZLEdBQWtCLEVBQUUsQ0FBQztRQUNoQyxvQkFBZSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzdELGFBQVEsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUM1RCxtQkFBYyxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ2xFLFlBQU8sR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUMzRCxZQUFPLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFDM0QsZUFBVSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzlELFlBQU8sR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQUs1RSxDQUFDOzs7O0lBRUQsUUFBUTtRQUNKLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuQixLQUFLLE1BQU0sV0FBVyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3pDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHO29CQUMvQixJQUFJOzs7b0JBQUU7OzhCQUNJLEtBQUssR0FBRyxJQUFJ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QUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQjs7OztRQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDeEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxHQUFHLEVBQUU7WUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7OztJQUVPLGtCQUFrQixDQUFDLE1BQVc7UUFDbEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7O1lBdEtKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsOEhBQTJDOzthQUU5Qzs7Ozs7cUJBR0ksS0FBSzs4QkFDTCxLQUFLOzJCQUNMLEtBQUs7OEJBQ0wsTUFBTTt1QkFDTixNQUFNOzZCQUNOLE1BQU07c0JBQ04sTUFBTTtzQkFDTixNQUFNO3lCQUNOLE1BQU07c0JBQ04sTUFBTTt1QkFtRk4sWUFBWSxTQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OztJQTVGekMscUNBQThDOztJQUM5Qyw4Q0FBZ0U7O0lBQ2hFLDJDQUFpRDs7SUFDakQsOENBQThFOztJQUM5RSx1Q0FBNkU7O0lBQzdFLDZDQUFtRjs7SUFDbkYsc0NBQTRFOztJQUM1RSxzQ0FBNEU7O0lBQzVFLHlDQUErRTs7SUFDL0Usc0NBQTRFOztJQUU1RSx3Q0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hCbG9ja2x5Q29uZmlnIH0gZnJvbSAnLi9uZ3gtYmxvY2tseS5jb25maWcnO1xuaW1wb3J0IHsgTmd4QmxvY2tseUdlbmVyYXRvckNvbmZpZyB9IGZyb20gJy4vbmd4LWJsb2NrbHktZ2VuZXJhdG9yLmNvbmZpZyc7XG5pbXBvcnQgeyBDdXN0b21CbG9jayB9IGZyb20gJy4vbW9kZWxzL2N1c3RvbS1ibG9jayc7XG5cbmRlY2xhcmUgdmFyIEJsb2NrbHk6IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZ3gtYmxvY2tseScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL25neC1ibG9ja2x5LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9uZ3gtYmxvY2tseS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmd4QmxvY2tseUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcblxuICAgIEBJbnB1dCgpIHB1YmxpYyBjb25maWc6IE5neEJsb2NrbHlDb25maWcgPSB7fTtcbiAgICBASW5wdXQoKSBwdWJsaWMgZ2VuZXJhdG9yQ29uZmlnOiBOZ3hCbG9ja2x5R2VuZXJhdG9yQ29uZmlnID0ge307XG4gICAgQElucHV0KCkgcHVibGljIGN1c3RvbUJsb2NrczogQ3VzdG9tQmxvY2tbXSA9IFtdO1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgd29ya3NwYWNlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgZGFydENvZGU6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gICAgQE91dHB1dCgpIHB1YmxpYyBqYXZhc2NyaXB0Q29kZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIGx1YUNvZGU6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gICAgQE91dHB1dCgpIHB1YmxpYyBwaHBDb2RlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgcHl0aG9uQ29kZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIHhtbENvZGU6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgICBwdWJsaWMgd29ya3NwYWNlOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tQmxvY2tzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGN1c3RvbUJsb2NrIG9mIHRoaXMuY3VzdG9tQmxvY2tzKSB7XG4gICAgICAgICAgICAgICAgQmxvY2tseS5CbG9ja3NbY3VzdG9tQmxvY2sudHlwZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gbmV3IGN1c3RvbUJsb2NrLmNsYXNzKGN1c3RvbUJsb2NrLnR5cGUsIHRoaXMsIGN1c3RvbUJsb2NrLmJsb2NrTXV0YXRvciwgLi4uY3VzdG9tQmxvY2suYXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBibG9jay5pbml0KHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5taXhpbih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrSW5zdGFuY2U6IGJsb2NrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBCbG9ja2x5LlB5dGhvbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgQmxvY2tseS5QeXRob25bY3VzdG9tQmxvY2sudHlwZV0gPSBmdW5jdGlvbiAoYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGIuYmxvY2tJbnN0YW5jZS50b1B5dGhvbkNvZGUoYik7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgQmxvY2tseS5EYXJ0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBCbG9ja2x5LkRhcnRbY3VzdG9tQmxvY2sudHlwZV0gPSBmdW5jdGlvbiAoYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGIuYmxvY2tJbnN0YW5jZS50b0RhcnRDb2RlKGIpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIEJsb2NrbHkuSmF2YVNjcmlwdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgQmxvY2tseS5KYXZhU2NyaXB0W2N1c3RvbUJsb2NrLnR5cGVdID0gZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiLmJsb2NrSW5zdGFuY2UudG9KYXZhU2NyaXB0Q29kZShiKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBCbG9ja2x5Lkx1YSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgQmxvY2tseS5MdWFbY3VzdG9tQmxvY2sudHlwZV0gPSBmdW5jdGlvbiAoYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGIuYmxvY2tJbnN0YW5jZS50b0x1YUNvZGUoYik7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgQmxvY2tseS5QSFAgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIEJsb2NrbHkuUEhQW2N1c3RvbUJsb2NrLnR5cGVdID0gZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiLmJsb2NrSW5zdGFuY2UudG9QSFBDb2RlKGIpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY3VzdG9tQmxvY2suYmxvY2tNdXRhdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG11dGF0b3JfbWl4aW46IGFueSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uVG9Eb206IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VzdG9tQmxvY2suYmxvY2tNdXRhdG9yLm11dGF0aW9uVG9Eb20uY2FsbChjdXN0b21CbG9jay5ibG9ja011dGF0b3IsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVRvTXV0YXRpb246IGZ1bmN0aW9uICh4bWxFbGVtZW50OiBhbnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21CbG9jay5ibG9ja011dGF0b3IuZG9tVG9NdXRhdGlvbi5jYWxsKGN1c3RvbUJsb2NrLmJsb2NrTXV0YXRvciwgdGhpcywgeG1sRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXN0b21CbG9jay5ibG9ja011dGF0b3IuYmxvY2tMaXN0ICYmIGN1c3RvbUJsb2NrLmJsb2NrTXV0YXRvci5ibG9ja0xpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRvcl9taXhpbi5kZWNvbXBvc2UgPSBmdW5jdGlvbih3b3Jrc3BhY2U6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXN0b21CbG9jay5ibG9ja011dGF0b3IuZGVjb21wb3NlLmNhbGwoY3VzdG9tQmxvY2suYmxvY2tNdXRhdG9yLCB0aGlzLCB3b3Jrc3BhY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0b3JfbWl4aW4uY29tcG9zZSA9IGZ1bmN0aW9uKHRvcEJsb2NrOiBhbnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21CbG9jay5ibG9ja011dGF0b3IuY29tcG9zZS5jYWxsKGN1c3RvbUJsb2NrLmJsb2NrTXV0YXRvciwgdGhpcywgdG9wQmxvY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0b3JfbWl4aW4uc2F2ZUNvbm5lY3Rpb25zID0gZnVuY3Rpb24oY29udGFpbmVyQmxvY2s6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUJsb2NrLmJsb2NrTXV0YXRvci5zYXZlQ29ubmVjdGlvbnMuY2FsbChjdXN0b21CbG9jay5ibG9ja011dGF0b3IsIHRoaXMsIGNvbnRhaW5lckJsb2NrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQmxvY2tseS5FeHRlbnNpb25zLnVucmVnaXN0ZXIoY3VzdG9tQmxvY2suYmxvY2tNdXRhdG9yLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBCbG9ja2x5LkV4dGVuc2lvbnMucmVnaXN0ZXJNdXRhdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQmxvY2suYmxvY2tNdXRhdG9yLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtdXRhdG9yX21peGluLFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQmxvY2suYmxvY2tNdXRhdG9yLmFmdGVyQmxvY2tJbml0LmNhbGwoY3VzdG9tQmxvY2suYmxvY2tNdXRhdG9yLCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21CbG9jay5ibG9ja011dGF0b3IuYmxvY2tMaXN0XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgIHRoaXMuX2luaXQoKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSlcbiAgICBvblJlc2l6ZShldmVudCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmVzaXplKCksIDIwMCk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczoge1twcm9wS2V5OiBzdHJpbmddOiBTaW1wbGVDaGFuZ2V9KSB7XG4gICAgICAgIGlmIChjaGFuZ2VzLmNvbmZpZyAmJiAhY2hhbmdlcy5jb25maWcuZmlyc3RDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2luaXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB3b3Jrc3BhY2VUb0NvZGUod29ya3NwYWNlSWQ6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5nZW5lcmF0b3JDb25maWcuZGFydCkge1xuICAgICAgICAgICB0aGlzLmRhcnRDb2RlLmVtaXQoQmxvY2tseS5EYXJ0LndvcmtzcGFjZVRvQ29kZShCbG9ja2x5LldvcmtzcGFjZS5nZXRCeUlkKHdvcmtzcGFjZUlkKSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmdlbmVyYXRvckNvbmZpZy5qYXZhc2NyaXB0KSB7XG4gICAgICAgICAgICB0aGlzLmphdmFzY3JpcHRDb2RlLmVtaXQoQmxvY2tseS5KYXZhU2NyaXB0LndvcmtzcGFjZVRvQ29kZShCbG9ja2x5LldvcmtzcGFjZS5nZXRCeUlkKHdvcmtzcGFjZUlkKSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmdlbmVyYXRvckNvbmZpZy5sdWEpIHtcbiAgICAgICAgICAgIHRoaXMubHVhQ29kZS5lbWl0KEJsb2NrbHkuTHVhLndvcmtzcGFjZVRvQ29kZShCbG9ja2x5LldvcmtzcGFjZS5nZXRCeUlkKHdvcmtzcGFjZUlkKSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmdlbmVyYXRvckNvbmZpZy5waHApIHtcbiAgICAgICAgICAgIHRoaXMucGhwQ29kZS5lbWl0KEJsb2NrbHkuUEhQLndvcmtzcGFjZVRvQ29kZShCbG9ja2x5LldvcmtzcGFjZS5nZXRCeUlkKHdvcmtzcGFjZUlkKSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmdlbmVyYXRvckNvbmZpZy5weXRob24pIHtcbiAgICAgICAgICAgIHRoaXMucHl0aG9uQ29kZS5lbWl0KEJsb2NrbHkuUHl0aG9uLndvcmtzcGFjZVRvQ29kZShCbG9ja2x5LldvcmtzcGFjZS5nZXRCeUlkKHdvcmtzcGFjZUlkKSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmdlbmVyYXRvckNvbmZpZy54bWwpIHtcbiAgICAgICAgICAgIHRoaXMueG1sQ29kZS5lbWl0KEJsb2NrbHkuWG1sLmRvbVRvUHJldHR5VGV4dChCbG9ja2x5LlhtbC53b3Jrc3BhY2VUb0RvbShCbG9ja2x5LldvcmtzcGFjZS5nZXRCeUlkKHdvcmtzcGFjZUlkKSkpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB0b1htbCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gQmxvY2tseS5YbWwuZG9tVG9QcmV0dHlUZXh0KEJsb2NrbHkuWG1sLndvcmtzcGFjZVRvRG9tKHRoaXMud29ya3NwYWNlKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGZyb21YbWwoeG1sOiBzdHJpbmcpIHtcbiAgICAgICAgQmxvY2tseS5YbWwuY2xlYXJXb3Jrc3BhY2VBbmRMb2FkRnJvbVhtbChCbG9ja2x5LlhtbC50ZXh0VG9Eb20oeG1sKSwgdGhpcy53b3Jrc3BhY2UpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhcHBlbmRGcm9tWG1sKHhtbDogc3RyaW5nKSB7XG4gICAgICAgIEJsb2NrbHkuWG1sLmFwcGVuZERvbVRvV29ya3NwYWNlKEJsb2NrbHkuWG1sLnRleHRUb0RvbSh4bWwpLCB0aGlzLndvcmtzcGFjZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlc2l6ZSgpIHtcbiAgICAgICAgQmxvY2tseS5zdmdSZXNpemUodGhpcy53b3Jrc3BhY2UpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXQoKSB7XG4gICAgICAgIGxldCB4bWw6IHN0cmluZztcbiAgICAgICAgaWYgKHRoaXMud29ya3NwYWNlKSB7XG4gICAgICAgICAgICB4bWwgPSB0aGlzLnRvWG1sKCk7XG4gICAgICAgICAgICB0aGlzLndvcmtzcGFjZS5kaXNwb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy53b3Jrc3BhY2UgPSBCbG9ja2x5LmluamVjdCgnYmxvY2tseScsIHRoaXMuY29uZmlnKTtcbiAgICAgICAgdGhpcy53b3Jrc3BhY2UuYWRkQ2hhbmdlTGlzdGVuZXIoKCRldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fb25Xb3Jrc3BhY2VDaGFuZ2UoJGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh4bWwpIHtcbiAgICAgICAgICAgIHRoaXMuZnJvbVhtbCh4bWwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzaXplKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfb25Xb3Jrc3BhY2VDaGFuZ2UoJGV2ZW50OiBhbnkpIHtcbiAgICAgICAgdGhpcy53b3Jrc3BhY2VDaGFuZ2UuZW1pdCgkZXZlbnQpO1xuICAgICAgICB0aGlzLndvcmtzcGFjZVRvQ29kZSgkZXZlbnQud29ya3NwYWNlSWQpO1xuICAgIH1cbn1cbiJdfQ==