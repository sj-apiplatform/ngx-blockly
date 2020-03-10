import { AfterViewInit, EventEmitter, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { NgxBlocklyConfig } from './ngx-blockly.config';
import { NgxBlocklyGeneratorConfig } from './ngx-blockly-generator.config';
import { CustomBlock } from './models/custom-block';
export declare class NgxBlocklyComponent implements OnInit, AfterViewInit, OnChanges {
    config: NgxBlocklyConfig;
    generatorConfig: NgxBlocklyGeneratorConfig;
    customBlocks: CustomBlock[];
    workspaceChange: EventEmitter<any>;
    dartCode: EventEmitter<string>;
    javascriptCode: EventEmitter<string>;
    luaCode: EventEmitter<string>;
    phpCode: EventEmitter<string>;
    pythonCode: EventEmitter<string>;
    xmlCode: EventEmitter<string>;
    workspace: any;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    onResize(event: any): void;
    ngOnChanges(changes: {
        [propKey: string]: SimpleChange;
    }): void;
    workspaceToCode(workspaceId: string): void;
    toXml(): string;
    fromXml(xml: string): void;
    appendFromXml(xml: string): void;
    protected resize(): void;
    private _init;
    private _onWorkspaceChange;
}
