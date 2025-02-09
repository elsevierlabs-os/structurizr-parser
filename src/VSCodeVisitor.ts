import { BaseStructurizrVisitorWithDefaults } from "./Parser";

class vsCodeVisitor extends BaseStructurizrVisitorWithDefaults {

    c4result: any[];

    constructor() {
        super();
        this.c4result = [];
        this.validateVisitor();
    }

    softwareSystemSection(ctx: any) {
        console.log(`Visiting softwareSystemSection: ${ctx.softwareSystem[0].image}`);
        this.c4result.push({ softwareSystem: ctx.stringLiteral[0] });
        if (ctx.softwareSystemChildSection) { this.visit(ctx.softwareSystemChildSection); }
    }

    softwareSystemChildSection(ctx: any) {
        if (ctx.containerSection) { for (const ctr of ctx.containerSection) { this.visit(ctr); } }
    }

    containerSection(ctx: any) {
        console.log(`Visiting containerSection: ${ctx.container[0].image}`);
        this.c4result.push({ container: ctx.stringLiteral[0] });
        if (ctx.containerChildSection) { this.visit(ctx.containerChildSection); }
    }

    containerChildSection(ctx: any) {
        if (ctx.componentSection) { for (const com of ctx.componentSection) { this.visit(com); } }
    }

    componentSection(ctx: any) {
        console.log(`Visiting componentSection: ${ctx.component[0].image}`);
        this.c4result.push({ component: ctx.stringLiteral[0] });
    }
}

export const VSCodeVisitor = new vsCodeVisitor();