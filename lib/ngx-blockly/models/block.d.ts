export declare abstract class Block {
    private _type;
    private _class;
    constructor(type: string);
    type: string;
    class: any;
    abstract toXML(): any;
}
