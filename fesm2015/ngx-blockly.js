import { EventEmitter, Component, Input, Output, HostListener, Injectable, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxBlocklyConfig {
}
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
class NgxBlocklyGeneratorConfig {
}
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
class NgxBlocklyComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class Block {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class CustomBlock extends Block {
    /**
     * @param {?} type
     * @param {?} block
     * @param {?} blockMutator
     * @param {...?} args
     */
    constructor(type, block, blockMutator, ...args) {
        super(type);
        this._block = block;
        this._blockMutator = blockMutator;
        this._args = args;
    }
    /**
     * @param {?} block
     * @return {?}
     */
    init(block) {
        this._block = block;
        this.defineBlock();
        this.block.setOnChange((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.blockInstance.onChange(event);
        }));
    }
    /**
     * @param {?} changeEvent
     * @return {?}
     */
    onChange(changeEvent) {
        // nothing to do
    }
    /**
     * @return {?}
     */
    toXML() {
        return `<block type="${this.type}"></block>`;
    }
    /**
     * @param {?} block
     * @return {?}
     */
    toDartCode(block) {
        return 'Not implemented';
    }
    /**
     * @param {?} block
     * @return {?}
     */
    toJavaScriptCode(block) {
        return 'Not implemented';
    }
    /**
     * @param {?} block
     * @return {?}
     */
    toLuaCode(block) {
        return 'Not implemented';
    }
    /**
     * @param {?} block
     * @return {?}
     */
    toPHPCode(block) {
        return 'Not implemented';
    }
    /**
     * @param {?} block
     * @return {?}
     */
    toPythonCode(block) {
        return 'Not implemented';
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
    get blockMutator() {
        return this._blockMutator;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set blockMutator(value) {
        this._blockMutator = value;
    }
    /**
     * @return {?}
     */
    get args() {
        return this._args;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set args(value) {
        this._args = value;
    }
}
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
class XmlBlock extends Block {
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
class Value {
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
class Field {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Category {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Separator {
    /**
     * @return {?}
     */
    toXML() {
        return '<sep></sep>';
    }
}

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
class BlockMutator {
    /**
     * @param {?} name
     * @param {?=} blockList
     */
    constructor(name, blockList = null) {
        this._name = name;
        this._blockList = blockList;
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
    get blockList() {
        return this._blockList;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set blockList(value) {
        this._blockList = value;
    }
}
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
const LOGIC_CATEGORY = new Category('Logic', '%{BKY_LOGIC_HUE}', [
    new XmlBlock('controls_if'),
    new XmlBlock('logic_compare'),
    new XmlBlock('logic_operation'),
    new XmlBlock('logic_negate'),
    new XmlBlock('logic_boolean'),
    new XmlBlock('logic_null'),
    new XmlBlock('logic_ternary'),
]);
/** @type {?} */
const LOOP_CATEGORY = new Category('Loops', '%{BKY_LOOPS_HUE}', [
    new XmlBlock('controls_repeat_ext'),
    new XmlBlock('controls_whileUntil'),
    new XmlBlock('controls_for'),
    new XmlBlock('controls_forEach'),
    new XmlBlock('controls_flow_statements'),
    new XmlBlock('controls_flow_statements')
]);
/** @type {?} */
const MATH_CATEGORY = new Category('Math', '%{BKY_MATH_HUE}', [
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
const TEXT_CATEGORY = new Category('Text', '%{BKY_TEXTS_HUE}', [
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
const LISTS_CATEGORY = new Category('Lists', '%{BKY_LISTS_HUE}', [
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
const COLOUR_CATEGORY = new Category('Colours', '%{BKY_COLOUR_HUE}', [
    new XmlBlock('colour_picker'),
    new XmlBlock('colour_random'),
    new XmlBlock('colour_random'),
    new XmlBlock('colour_blend')
]);
/** @type {?} */
const VARIABLES_CATEGORY = new Category('Variables', '%{BKY_VARIABLES_HUE}', [], [], 'VARIABLE');
/** @type {?} */
const FUNCTIONS_CATEGORY = new Category('Functions', '%{BKY_PROCEDURES_HUE}', [], [], 'PROCEDURE');
class NgxToolboxBuilderService {
    /**
     * @return {?}
     */
    build() {
        /** @type {?} */
        let xml = '<xml id="toolbox" style="display: none">';
        if (this._nodes) {
            for (const node of this._nodes) {
                xml += node.toXML();
            }
        }
        xml += '</xml>';
        return xml;
    }
    /**
     * @return {?}
     */
    get nodes() {
        return this._nodes;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nodes(value) {
        this._nodes = value;
    }
}
NgxToolboxBuilderService.decorators = [
    { type: Injectable }
];
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
class NgxBlocklyModule {
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
