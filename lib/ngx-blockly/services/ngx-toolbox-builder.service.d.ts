import { Category } from '../models/category';
import { Node } from '../models/node';
export declare const LOGIC_CATEGORY: Category;
export declare const LOOP_CATEGORY: Category;
export declare const MATH_CATEGORY: Category;
export declare const TEXT_CATEGORY: Category;
export declare const LISTS_CATEGORY: Category;
export declare const COLOUR_CATEGORY: Category;
export declare const VARIABLES_CATEGORY: Category;
export declare const FUNCTIONS_CATEGORY: Category;
export declare class NgxToolboxBuilderService {
    private _nodes;
    build(): string;
    nodes: Node[];
}
