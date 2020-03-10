import { BlockMutator } from './block-mutator';
import { Block } from './block';
export declare abstract class CustomBlock extends Block {
    private _block;
    private _blockMutator;
    private _args;
    constructor(type: string, block: any, blockMutator: BlockMutator, ...args: any[]);
    init(block: any): void;
    abstract defineBlock(): any;
    onChange(changeEvent: any): void;
    toXML(): string;
    toDartCode(block: CustomBlock): string | any[];
    toJavaScriptCode(block: CustomBlock): string | any[];
    toLuaCode(block: CustomBlock): string | any[];
    toPHPCode(block: CustomBlock): string | any[];
    toPythonCode(block: CustomBlock): string | any[];
    block: any;
    blockMutator: BlockMutator;
    args: any[];
}
