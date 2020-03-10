import { __spread, __values, __extends } from 'tslib';
import { EventEmitter, Component, Input, Output, HostListener, Injectable, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

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
var  /**
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
var  /**
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
var  /**
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
        { type: Injectable }
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
        { type: NgModule, args: [{
                    declarations: [NgxBlocklyComponent],
                    imports: [],
                    exports: [NgxBlocklyComponent],
                    providers: [NgxToolboxBuilderService],
                    schemas: [NO_ERRORS_SCHEMA]
                },] }
    ];
    return NgxBlocklyModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { Block, BlockMutator, COLOUR_CATEGORY, Category, CustomBlock, FUNCTIONS_CATEGORY, Field, LISTS_CATEGORY, LOGIC_CATEGORY, LOOP_CATEGORY, MATH_CATEGORY, NgxBlocklyComponent, NgxBlocklyConfig, NgxBlocklyGeneratorConfig, NgxBlocklyModule, NgxToolboxBuilderService, Separator, TEXT_CATEGORY, VARIABLES_CATEGORY, Value, XmlBlock };
//# sourceMappingURL=ngx-blockly.js.map
