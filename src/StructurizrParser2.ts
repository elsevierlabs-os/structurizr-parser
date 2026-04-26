import { CstParser } from "chevrotain";
import { allTokens, BangImpliedRelationships, Boolean, Description, DottedProperty, Extends, FilePath, LBrace, Model, Name, Properties, RBrace, StringBoolean, StringLiteral, Views, Workspace } from "./StructurizrLexer2";
import { Identifier } from "./Lexer";

// This class takes all the tokens identified and parses the DSL according to the rulesets defined by the Structurizr schema

class structurizrParser2 extends CstParser {
    constructor() {
        super(allTokens);
        // very important to call this after all the rules have been defined.
        // otherwise the parser may not work correctly as it will lack information
        // derived during the self analysis phase.
        this.performSelfAnalysis();
    }

    // Rules go here
    public workspaceWrapper = this.RULE("workspaceWrapper", () => {
        this.CONSUME(Workspace);
        this.OR([
            { ALT: () => { this.CONSUME(Extends); this.CONSUME(FilePath) } },
            { ALT: () => { this.OPTION1(() => { this.CONSUME1(StringLiteral); }); this.OPTION2(() => { this.CONSUME2(StringLiteral); }) } }
        ]);
        this.SUBRULE(this.workspaceSection);
    });

    private workspaceSection = this.RULE("workspaceSection", () => {
        this.CONSUME(LBrace);
        const seen = { name: false, description: false, bang: false };
        this.MANY(() => {
            this.OR([
                {
                    ALT: () => {
                        if (!seen.name) {
                            this.CONSUME(Name);
                            this.CONSUME1(StringLiteral);
                            seen.name = true;
                        }
                    }
                },
                {
                    ALT: () => {
                        if (!seen.description) {
                            this.CONSUME(Description);
                            this.CONSUME2(StringLiteral);
                            seen.description = true;
                        }
                    }
                },
                {
                    ALT: () => {
                        if (!seen.bang) {
                            this.CONSUME(BangImpliedRelationships);
                            this.OR1([
                                { ALT: () => this.CONSUME(Boolean) },
                                { ALT: () => this.CONSUME(StringBoolean) }
                            ]);
                            seen.bang = true;
                        }
                    }
                }
            ]);
        });
        this.OPTION(() => {
            this.SUBRULE(this.propertiesSection);
        });
        this.SUBRULE(this.modelSection);
        this.OPTION1(() => {
            this.SUBRULE(this.viewsSection);
        });
        this.CONSUME(RBrace);
    });

    private modelSection = this.RULE("modelSection", () => {
        this.CONSUME(Model);
        this.SUBRULE(this.modelChildSection);
    });

    private modelChildSection = this.RULE("modelChildSection", () => {
        this.CONSUME1(LBrace);
        this.MANY(() => {
            this.OR([
                { ALT: () => { this.SUBRULE(this.propertiesSection) } },
                // { ALT: () => { this.SUBRULE(this.systemGroupSection) } },
                // { ALT: () => { this.SUBRULE(this.personSection) } },
                // { ALT: () => { this.SUBRULE(this.softwareSystemSection) } },
                // { ALT: () => { this.SUBRULE(this.explicitRelationship) } },
                // { ALT: () => { this.SUBRULE(this.deploymentEnvironmentSection) } }
            ]);
        });
        this.CONSUME1(RBrace);
    });

    private propertiesSection = this.RULE("propertiesSection", () => {
        this.CONSUME(Properties);
        this.CONSUME(LBrace);
        this.MANY(() => {
            this.SUBRULE(this.propertySet);
        });
        this.CONSUME(RBrace);
    });

    private propertySet = this.RULE("propertySet", () => {
        this.OR([
            { ALT: () => this.CONSUME(DottedProperty, { LABEL: "key" }) },
            { ALT: () => this.CONSUME(Identifier, { LABEL: "key" }) },
            { ALT: () => this.CONSUME(StringLiteral, { LABEL: "key" }) }
        ]);
    });

    private viewsSection = this.RULE("viewsSection", () => {
        this.CONSUME(Views);
        // this.SUBRULE(this.viewsChildSection);
    });
}

export const StructurizrParser2 = new structurizrParser2();
export const BaseStructurizrVisitor2 = StructurizrParser2.getBaseCstVisitorConstructor();
export const BaseStructurizrVisitorWithDefaults2 = StructurizrParser2.getBaseCstVisitorConstructorWithDefaults();