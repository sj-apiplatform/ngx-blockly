import { Block } from './block';
import { Node } from './node';
export declare class Category implements Node {
    private _blocks;
    private _categories;
    private _colour;
    private _name;
    private _custom;
    private _style;
    constructor(name: string, colour: string, blocks?: Block[], categories?: Category[], custom?: string, style?: string);
    blocks: Block[];
    categories: Category[];
    colour: string;
    name: string;
    custom: string;
    style: string;
    toXML(): string;
}
