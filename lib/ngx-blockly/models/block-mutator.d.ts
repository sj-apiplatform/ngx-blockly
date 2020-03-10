export declare abstract class BlockMutator {
    private _name;
    private _blockList;
    constructor(name: string, blockList?: string[]);
    abstract mutationToDom(block: any): any;
    abstract domToMutation(block: any, xmlElement: any): any;
    abstract decompose(block: any, workspace: any): any;
    abstract compose(block: any, topBlock: any): any;
    abstract saveConnections(block: any, containerBlock: any): any;
    abstract afterBlockInit(block: any): any;
    name: string;
    blockList: string[];
}
