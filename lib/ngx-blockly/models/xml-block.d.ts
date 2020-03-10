import { Block } from './block';
export declare class XmlBlock extends Block {
    private _values;
    private _field;
    constructor(type: string);
    values: Value[];
    field: Field;
    toXML(): string;
}
export declare class Value {
    private _name;
    private _shadow;
    private _block;
    constructor(name: string, shadow: XmlBlock, block: XmlBlock);
    name: string;
    shadow: XmlBlock;
    block: XmlBlock;
    toXML(): string;
}
export declare class Field {
    private _name;
    private _value;
    constructor(name: string, value: string);
    name: string;
    value: string;
    toXML(): string;
}
