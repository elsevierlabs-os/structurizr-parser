import { BaseStructurizrVisitorWithDefaults } from "./Parser";

class vsCodeVisitor extends BaseStructurizrVisitorWithDefaults {

    private _debug:boolean = false;
    c4result: any[] = [];
    properties: any[] = [];

    constructor() {
        super();
        this.c4result = [];
        this.properties = [];
        this.validateVisitor();
    }

    public set Debug(flag: boolean) {
        this._debug = flag;
    }    

    workspaceWrapper(node: any) {
        this.c4result = [];
        this.properties = [];
        if (node.workspaceSection) {
            this.visit(node.workspaceSection);
        }
    }

    propertiesSection(ctx: any) {
        this._debug && console.log(`Visiting propertiesSection`);
        if (ctx.localWorkspaceIdProperty) {
            this.visit(ctx.localWorkspaceIdProperty);
        }
    }

    localWorkspaceIdProperty(ctx: any) {
        this._debug && console.log(`Visiting localWorkspaceIdProperty: ${ctx.stringLiteral[0].image}`);
        this.properties.push({ localWorkspaceId: ctx.stringLiteral[0] });
    }

    softwareSystemSection(ctx: any) {
        this._debug && console.log(`Visiting softwareSystemSection: ${ctx.softwareSystem[0].image}`);
        this.c4result.push({ softwareSystem: ctx.stringLiteral[0] });
        if (ctx.softwareSystemChildSection) { this.visit(ctx.softwareSystemChildSection); }
    }

    softwareSystemChildSection(ctx: any) {
        if (ctx.containerSection) { for (const ctr of ctx.containerSection) { this.visit(ctr); } }
    }

    containerSection(ctx: any) {
        this._debug && console.log(`Visiting containerSection: ${ctx.container[0].image}`);
        this.c4result.push({ container: ctx.stringLiteral[0] });
        if (ctx.containerChildSection) { this.visit(ctx.containerChildSection); }
    }

    containerChildSection(ctx: any) {
        if (ctx.componentSection) { for (const com of ctx.componentSection) { this.visit(com); } }
    }

    componentSection(ctx: any) {
        this._debug && console.log(`Visiting componentSection: ${ctx.component[0].image}`);
        this.c4result.push({ component: ctx.stringLiteral[0] });
    }
}

export const VSCodeVisitor = new vsCodeVisitor();