import { CstParser } from "chevrotain";
import { Animation, AutoLayout, Background, Bool, Color, Colour, Component, Container, ContainerInstance, Deployment, DeploymentEnvironment, DeploymentNode, Description, Dynamic, Element, Equals, Extends, FilePath, FontSize, Group, HexColor, Identifier, Image, Include, Int, LBrace, Model, Name, Opacity, Person, Properties, RBrace, RelatedTo, Relationship, Shape, ShapeEnum, SoftwareSystem, SoftwareSystemInstance, StringLiteral, StructurizrDescription, StructurizrEnterpriseBoundary, StructurizrGroupSeparator, StructurizrGroups, StructurizrLocale, StructurizrMetadata, StructurizrSoftwareSystemBoundaries, StructurizrSort, StructurizrTimezone, StructurizrTitle, StructurizrTooltips, Styles, SystemContext, SystemLandscape, Tags, Title, Url, Value, Views, Wildcard, Word, Workspace, allTokens } from "./Lexer";

// This class takes all the tokens identified and parses the DSL according to the rulesets defined by the Structurizr schema

class structurizrParser extends CstParser {
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
      {ALT: () => { this.CONSUME(Extends); this.CONSUME(FilePath)}},
      {ALT: () => { this.OPTION1(() => {this.CONSUME1(StringLiteral);}); this.OPTION2(() => {this.CONSUME2(StringLiteral);})}}
    ]);
    this.SUBRULE(this.workspaceSection);
  });

  private workspaceSection = this.RULE("workspaceSection", () => {
    this.CONSUME(LBrace);
    this.OPTION1(() => { this.CONSUME(Name); this.CONSUME1(StringLiteral); });
    this.OPTION2(() => { this.CONSUME(Description); this.CONSUME2(StringLiteral); });
    this.SUBRULE(this.modelSection);
    this.OPTION(() => {
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
            {ALT: () => {this.SUBRULE(this.propertiesSection)}},
            {ALT: () => {this.SUBRULE(this.systemGroupSection)}},
            {ALT: () => {this.SUBRULE(this.personSection)}},
            {ALT: () => {this.SUBRULE(this.softwareSystemSection)}},
            {ALT: () => {this.SUBRULE(this.explicitRelationship)}},
            {ALT: () => {this.SUBRULE(this.deploymentEnvironmentSection)}}
        ]);
    });
    this.CONSUME1(RBrace);
  });

  private propertiesSection = this.RULE("propertiesSection", () => {
    this.CONSUME(Properties);
    this.CONSUME(LBrace);
    this.MANY(() => {
      this.OR([
        {ALT: () => {this.SUBRULE(this.timezoneProperty)}},
        {ALT: () => {this.SUBRULE(this.localeProperty)}},
        {ALT: () => {this.SUBRULE(this.sortProperty)}},
        {ALT: () => {this.SUBRULE(this.tooltipsProperty)}},
        {ALT: () => {this.SUBRULE(this.titleProperty)}},
        {ALT: () => {this.SUBRULE(this.descriptionProperty)}},
        {ALT: () => {this.SUBRULE(this.metadataProperty)}},
        {ALT: () => {this.SUBRULE(this.enterpriseBoundaryProperty)}},
        {ALT: () => {this.SUBRULE(this.groupSeparatorProperty)}},
        {ALT: () => {this.SUBRULE(this.groupsProperty)}},
        {ALT: () => {this.SUBRULE(this.softwareSystemBoundariesProperty)}}
      ]);
    });
    this.CONSUME(RBrace);
  });

  private timezoneProperty = this.RULE("timezoneProperty", () => {
    this.CONSUME(StructurizrTimezone); 
    this.CONSUME(StringLiteral);
  });

  private localeProperty = this.RULE("localeProperty", () => {
    this.CONSUME(StructurizrLocale); 
    this.CONSUME(StringLiteral);
  });

  private sortProperty = this.RULE("sortProperty", () => {
    this.CONSUME(StructurizrSort); 
    this.CONSUME(StringLiteral);
  });

  private tooltipsProperty = this.RULE("tooltipsProperty", () => {
    this.CONSUME(StructurizrTooltips); 
    this.CONSUME(Bool);
  });

  private titleProperty = this.RULE("titleProperty", () => {
    this.CONSUME(StructurizrTitle); 
    this.CONSUME(Bool);
  });

  private descriptionProperty = this.RULE("descriptionProperty", () => {
    this.CONSUME(StructurizrDescription); 
    this.CONSUME(Bool);
  });

  private metadataProperty = this.RULE("metadataProperty", () => {
    this.CONSUME(StructurizrMetadata); 
    this.CONSUME(Bool);
  });

  private enterpriseBoundaryProperty = this.RULE("enterpriseBoundaryProperty", () => {
    this.CONSUME(StructurizrEnterpriseBoundary); 
    this.CONSUME(Bool);
  });

  private groupSeparatorProperty = this.RULE("groupSeparatorProperty", () => {
    this.CONSUME(StructurizrGroupSeparator); 
    this.CONSUME(StringLiteral);
  });

  private groupsProperty = this.RULE("groupsProperty", () => {
    this.CONSUME(StructurizrGroups); 
    this.CONSUME(Bool);
  });

  private softwareSystemBoundariesProperty = this.RULE("softwareSystemBoundariesProperty", () => {
    this.CONSUME(StructurizrSoftwareSystemBoundaries); 
    this.CONSUME(Bool);
  });

  private systemGroupSection = this.RULE("systemGroupSection", () => {
    this.OPTION(() => {
        this.CONSUME(Identifier);
        this.CONSUME(Equals);
    });
    this.CONSUME(Group);
    this.CONSUME(StringLiteral);
    this.SUBRULE(this.systemGroupChildSection);
  });

  private systemGroupChildSection = this.RULE("systemGroupChildSection", () => {
    this.CONSUME(LBrace);
    this.MANY(() => {
        this.OR([
            {ALT: () => {this.SUBRULE(this.systemGroupSection)}},
            {ALT: () => {this.SUBRULE(this.personSection)}},
            {ALT: () => {this.SUBRULE(this.softwareSystemSection)}}
        ]);
    });
    this.CONSUME(RBrace);
  });

  private descriptionAttribute = this.RULE("descriptionAttribute", () => {
    this.CONSUME(Description);
    this.CONSUME(StringLiteral);
  });

  private tagsAttribute = this.RULE("tagsAttribute", () => {
    this.CONSUME(Tags);
    this.AT_LEAST_ONE(() => {
      this.CONSUME(StringLiteral);
    });
  });

  private personSection = this.RULE("personSection", () => {
    this.OPTION(() => {
        this.CONSUME(Identifier);
        this.CONSUME(Equals);
    });
    this.CONSUME(Person);
    this.CONSUME(StringLiteral);
    this.MANY(() => {
        this.CONSUME1(StringLiteral);
    });
    this.OPTION1(() => {
        this.SUBRULE(this.personChildSection);
    });
  });

  private personChildSection = this.RULE("personChildSection", () => {
    this.CONSUME1(LBrace);
    this.MANY(() => {
      this.OR([
        {ALT: () => {this.SUBRULE(this.tagsAttribute)}},
        {ALT: () => {this.SUBRULE(this.descriptionAttribute)}},
        {ALT: () => {this.SUBRULE(this.implicitRelationship)}}
      ]);
    });
    this.CONSUME1(RBrace);
  });

  private softwareSystemSection = this.RULE("softwareSystemSection", () => {
    this.OPTION(() => {
        this.CONSUME(Identifier);
        this.CONSUME(Equals);
    });
    this.CONSUME(SoftwareSystem);
    this.CONSUME(StringLiteral);
    this.MANY(() => {
        this.CONSUME1(StringLiteral);
    });
    this.OPTION1(() => {
      this.SUBRULE(this.softwareSystemChildSection);
    });
  });

  private softwareSystemChildSection = this.RULE("softwareSystemChildSection", () => {
    this.CONSUME1(LBrace);
    this.MANY(() => {
      this.OR([
        {ALT: () => {this.SUBRULE(this.tagsAttribute)}},
        {ALT: () => {this.SUBRULE(this.descriptionAttribute)}},
        {ALT: () => {this.SUBRULE(this.containerGroupSection)}},
        {ALT: () => {this.SUBRULE(this.containerSection)}},
        {ALT: () => {this.SUBRULE(this.implicitRelationship)}}
      ]);
    });
    this.CONSUME1(RBrace);
  });

  private containerGroupSection = this.RULE("containerGroupSection", () => {
    this.OPTION(() => {
        this.CONSUME(Identifier);
        this.CONSUME(Equals);
    });
    this.CONSUME(Group);
    this.CONSUME(StringLiteral);
    this.SUBRULE(this.containerGroupChildSection);
  });

  private containerGroupChildSection = this.RULE("containerGroupChildSection", () => {
    this.CONSUME(LBrace);
    this.MANY(() => {
        this.OR([
            {ALT: () => {this.SUBRULE(this.containerGroupSection)}},
            {ALT: () => {this.SUBRULE(this.containerSection)}}
        ]);
    });
    this.CONSUME(RBrace);
  });

  private containerSection = this.RULE("containerSection", () => {
    this.OPTION(() => {
        this.CONSUME(Identifier);
        this.CONSUME(Equals);
    });
    this.CONSUME(Container);
    this.CONSUME(StringLiteral);
    this.MANY(() => {
        this.CONSUME1(StringLiteral);
    });
    this.OPTION1(() => this.SUBRULE(this.containerChildSection));    
  });

  private containerChildSection = this.RULE("containerChildSection", () => {
    this.CONSUME1(LBrace);
    this.MANY(() => {
      this.OR([
        {ALT: () => {this.SUBRULE(this.componentGroupSection)}},
        {ALT: () => {this.SUBRULE(this.componentSection)}},
        {ALT: () => {this.SUBRULE(this.implicitRelationship)}}
      ]);
    });
    this.CONSUME1(RBrace);
  });
  
  private componentGroupSection = this.RULE("componentGroupSection", () => {
    this.OPTION(() => {
        this.CONSUME(Identifier);
        this.CONSUME(Equals);
    });
    this.CONSUME(Group);
    this.CONSUME(StringLiteral);
    this.SUBRULE(this.componentGroupChildSection);
  });

  private componentGroupChildSection = this.RULE("componentGroupChildSection", () => {
    this.CONSUME(LBrace);
    this.MANY(() => {
        this.OR([
            {ALT: () => {this.SUBRULE(this.componentGroupSection)}},
            {ALT: () => {this.SUBRULE(this.componentSection)}}
        ]);
    });
    this.CONSUME(RBrace);
  });

  private componentSection = this.RULE("componentSection", () => {
    this.OPTION(() => {
        this.CONSUME(Identifier);
        this.CONSUME(Equals);
    });
    this.CONSUME(Component);
    this.CONSUME(StringLiteral);
    this.MANY(() => {
        this.CONSUME1(StringLiteral);
    }); 
  });

  private explicitRelationship = this.RULE("explicitRelationship", () => {
    this.CONSUME(Identifier);
    this.CONSUME(RelatedTo);
    this.CONSUME1(Identifier);
    this.MANY(() => {
      this.CONSUME(StringLiteral);
    });
  });

  private implicitRelationship = this.RULE("implicitRelationship", () => {
    this.CONSUME(RelatedTo);
    this.CONSUME1(Identifier);
    this.MANY(() => {
      this.CONSUME(StringLiteral);
    });
  });

  private deploymentEnvironmentSection = this.RULE("deploymentEnvironmentSection", () => {
    this.OPTION(() => {
      this.CONSUME(Identifier);
      this.CONSUME(Equals);
    });
    this.CONSUME(DeploymentEnvironment);
    this.CONSUME(StringLiteral);
    this.SUBRULE(this.deploymentEnvironmentChildSection);
  });

  private deploymentEnvironmentChildSection = this.RULE("deploymentEnvironmentChildSection", () => {
    this.CONSUME(LBrace);
    this.MANY(() => this.OR([
      {ALT: () => {this.SUBRULE(this.deploymentNodeSection)}},
      {ALT: () => {this.SUBRULE(this.containerInstanceSection)}},
      {ALT: () => {this.SUBRULE(this.explicitRelationship)}}
    ]));
    this.CONSUME(RBrace);
  });

  private deploymentNodeSection = this.RULE("deploymentNodeSection", () => {
    this.OPTION(() => {
      this.CONSUME(Identifier);
      this.CONSUME(Equals);
    });
    this.CONSUME(DeploymentNode);
    this.CONSUME(StringLiteral);
    this.OPTION1(() => this.CONSUME1(StringLiteral));
    this.OPTION2(() => this.CONSUME2(StringLiteral));
    this.OPTION3(() => this.CONSUME3(StringLiteral));
    this.OPTION4(() => this.CONSUME4(Int));
    this.OPTION5(() => this.SUBRULE(this.deploymentNodeChildSection));
  });

  private deploymentNodeChildSection = this.RULE("deploymentNodeChildSection", () => {
    this.CONSUME(LBrace);
    this.MANY(() => this.OR([
      {ALT: () => {this.SUBRULE(this.deploymentNodeSection)}},
      {ALT: () => {this.SUBRULE(this.containerInstanceSection)}},
      {ALT: () => {this.SUBRULE(this.softwareSystemInstanceSection)}}
    ]));
    this.CONSUME(RBrace);
  });

  private containerInstanceSection = this.RULE("containerInstanceSection", () => {
    this.OPTION(() => {
      this.CONSUME(Identifier);
      this.CONSUME(Equals);
    });
    this.CONSUME(ContainerInstance);
    this.CONSUME1(Identifier);
    this.MANY(() => {
      this.CONSUME(StringLiteral);
    });
  });

  private softwareSystemInstanceSection = this.RULE("softwareSystemInstanceSection", () => {
    this.CONSUME(SoftwareSystemInstance);
    this.CONSUME(Identifier);
    this.MANY(() => {this.CONSUME(StringLiteral)});
  });

  private viewsSection = this.RULE("viewsSection", () => {
    this.CONSUME(Views);
    this.SUBRULE(this.viewsChildSection);
  });

  private viewsChildSection = this.RULE("viewsChildSection", () => {
    this.CONSUME1(LBrace);
    this.MANY(() => {
      this.OR([
        {ALT: () => {this.SUBRULE(this.systemLandscapeView)}},
        {ALT: () => {this.SUBRULE(this.systemContextView)}},
        {ALT: () => {this.SUBRULE(this.containerView)}},
        {ALT: () => {this.SUBRULE(this.componentView)}},
        {ALT: () => {this.SUBRULE(this.imageSection)}},
        {ALT: () => {this.SUBRULE(this.stylesSection)}},
        {ALT: () => {this.SUBRULE(this.dynamicSection)}},
        {ALT: () => {this.SUBRULE(this.deploymentSection)}}
      ]);
    });
    this.CONSUME1(RBrace);
  });

  private systemLandscapeView = this.RULE("systemLandscapeView", () => {
    this.CONSUME(SystemLandscape);
    this.MANY(() => {
      this.CONSUME(StringLiteral);
    });
    this.SUBRULE(this.viewOptions);
  });

  private viewOptions = this.RULE("viewOptions", () => {
    this.CONSUME(LBrace);
    this.MANY(() => {
      this.OR([
        {ALT: () => {this.SUBRULE(this.includeOptions)}},
        {ALT: () => {this.SUBRULE(this.autoLayoutOptions)}},
        {ALT: () => {this.SUBRULE(this.animationOptions)}},
        {ALT: () => {this.SUBRULE(this.descriptionOptions)}},
        {ALT: () => {this.SUBRULE(this.propertiesOptions)}}
      ])
    });
    this.CONSUME(RBrace);
  });

  private includeOptions = this.RULE("includeOptions", () => {
    this.CONSUME(Include);
    this.OR([
      {ALT: () => {this.CONSUME(Wildcard)}},
      {ALT: () => {this.CONSUME(Identifier)}}
    ]);
  });

  private autoLayoutOptions = this.RULE("autoLayoutOptions", () => {
    this.CONSUME(AutoLayout);
    this.OPTION(() => {this.CONSUME(Identifier)});
    this.OPTION1(() => {this.CONSUME(Int)});
    this.OPTION2(() => {this.CONSUME1(Int)});

  });

  private animationOptions = this.RULE("animationOptions", () => {
    this.CONSUME(Animation);
    this.CONSUME(LBrace);
    this.MANY(() => {
      this.CONSUME(Identifier);
      this.OPTION(() => this.CONSUME(Value));
    });
    this.CONSUME(RBrace);
  });

  private descriptionOptions = this.RULE("descriptionOptions", () => {
    this.CONSUME(Description);
    this.CONSUME(StringLiteral);
  });

  private propertiesOptions = this.RULE("propertiesOptions", () => {
    this.CONSUME(Properties);
    this.CONSUME(LBrace);
    this.MANY(() => {
      this.OR([
        {ALT: () => {this.SUBRULE(this.timezoneProperty)}},
        {ALT: () => {this.SUBRULE(this.localeProperty)}},
        {ALT: () => {this.SUBRULE(this.sortProperty)}},
        {ALT: () => {this.SUBRULE(this.tooltipsProperty)}},
        {ALT: () => {this.SUBRULE(this.titleProperty)}},
        {ALT: () => {this.SUBRULE(this.descriptionProperty)}},
        {ALT: () => {this.SUBRULE(this.metadataProperty)}},
        {ALT: () => {this.SUBRULE(this.enterpriseBoundaryProperty)}},
        {ALT: () => {this.SUBRULE(this.groupSeparatorProperty)}},
        {ALT: () => {this.SUBRULE(this.groupsProperty)}},
        {ALT: () => {this.SUBRULE(this.softwareSystemBoundariesProperty)}}
      ]);
    });
    this.CONSUME(RBrace);
  });

  private systemContextView = this.RULE("systemContextView", () => {
    this.CONSUME(SystemContext);
    this.CONSUME(Identifier);
    this.MANY(() => {
      this.CONSUME2(StringLiteral);
    });
    this.SUBRULE(this.viewOptions);
  });

  private containerView = this.RULE("containerView", () => {
    this.CONSUME(Container);
    this.CONSUME(Identifier);
    this.MANY(() => {
      this.CONSUME2(StringLiteral);
    });
    this.SUBRULE(this.viewOptions);
  });

  private componentView = this.RULE("componentView", () => {
    this.CONSUME(Component);
    this.CONSUME(Identifier);
    this.MANY(() => {
      this.CONSUME2(StringLiteral);
    });
    this.SUBRULE(this.viewOptions);
  });

  private imageSection = this.RULE("imageSection", () => {
    this.CONSUME(Image);
    this.OR([
      {ALT: () => {this.CONSUME(Wildcard)}},
      {ALT: () => {this.CONSUME(Identifier)}}
    ]);
    this.OPTION(() => this.CONSUME(StringLiteral));
    this.CONSUME(LBrace);
    this.OR2([
      {ALT: () => {
        this.CONSUME2(Image);
        this.CONSUME(Url);
      }}
    ]);
    this.OPTION2(() => {
      this.CONSUME(Title);
      this.CONSUME2(StringLiteral);
    })
    this.CONSUME(RBrace);
  });

  private dynamicSection = this.RULE("dynamicSection", () => {
    this.CONSUME(Dynamic);
    this.CONSUME(Identifier);
    this.OPTION(() => this.CONSUME(StringLiteral));
    this.OPTION1(() => this.CONSUME1(StringLiteral));
    this.CONSUME(LBrace);
    this.MANY(() => {
      this.OR([
        {ALT: () => this.SUBRULE(this.explicitRelationship)},
        {ALT: () => this.SUBRULE(this.autoLayoutOptions)},
        {ALT: () => {this.CONSUME(Description); this.CONSUME3(StringLiteral)}}
      ]);
    });
    this.CONSUME(RBrace);
  });

  private deploymentSection = this.RULE("deploymentSection", () => {
    this.CONSUME(Deployment);
    this.CONSUME(Identifier);
    this.CONSUME(StringLiteral);
    this.OPTION(() => this.CONSUME1(StringLiteral));
    this.OPTION1(() => this.CONSUME2(StringLiteral));
    this.CONSUME(LBrace);
    this.MANY(() => {
      this.OR([
        {ALT: () => {this.SUBRULE(this.includeOptions)}},
        {ALT: () => {this.SUBRULE(this.animationOptions)}},
        {ALT: () => {this.SUBRULE(this.autoLayoutOptions)}},
        {ALT: () => {this.CONSUME(Description); this.CONSUME3(StringLiteral)}}
      ]);
    })
    this.CONSUME(RBrace);
  });

  private stylesSection = this.RULE("stylesSection", () => {
    this.CONSUME(Styles);
    this.CONSUME(LBrace);
    this.MANY(() => {
      this.OR([
        {ALT: () => {this.SUBRULE(this.elementStyleSection)}},
        {ALT: () => {this.SUBRULE(this.relationshipStyleSection)}}
      ]);
    });
    this.CONSUME(RBrace);
  });

  private elementStyleSection = this.RULE("elementStyleSection", () => {
    this.CONSUME(Element);
    this.CONSUME(StringLiteral);
    this.CONSUME(LBrace);
    this.MANY(() => {
      this.OR([
        {ALT: () => {this.SUBRULE(this.shapeStyle)}},
        {ALT: () => {this.SUBRULE(this.backgroundStyle)}},
        {ALT: () => {this.SUBRULE(this.colorStyle)}},
        {ALT: () => {this.SUBRULE(this.colourStyle)}},
        {ALT: () => {this.SUBRULE(this.fontStyle)}},
        {ALT: () => {this.SUBRULE(this.opacityStyle)}}
      ]);
    });
    this.CONSUME(RBrace);
  });

  private relationshipStyleSection = this.RULE("relationshipStyleSection", () => {
    this.CONSUME(Relationship);
    this.CONSUME(Identifier);
    this.CONSUME(LBrace);
    this.MANY(() => {
      this.OR([
        {ALT: () => {this.SUBRULE(this.backgroundStyle)}},
        {ALT: () => {this.SUBRULE(this.colorStyle)}},
        {ALT: () => {this.SUBRULE(this.colourStyle)}}
      ]);
    });
    this.CONSUME(RBrace);
  });

  private shapeStyle = this.RULE("shapeStyle", () => {
    this.CONSUME(Shape);
    this.OR([
      {ALT: () => {this.CONSUME(ShapeEnum)}},
      {ALT: () => {this.CONSUME(Person)}}
    ]);
    ;
  });

  private backgroundStyle = this.RULE("backgroundStyle", () => {
    this.CONSUME(Background);
    this.CONSUME(HexColor);
  });

  private colorStyle = this.RULE("colorStyle", () => {
    this.CONSUME(Color);
    this.CONSUME(HexColor);
  });

  private colourStyle = this.RULE("colourStyle", () => {
    this.CONSUME(Colour);
    this.CONSUME(HexColor);
  });

  private fontStyle = this.RULE("fontStyle", () => {
    this.CONSUME(FontSize);
    this.CONSUME(Int);
  });

  private opacityStyle = this.RULE("opacityStyle", () => {
    this.CONSUME(Opacity);
    this.CONSUME(Int);
  });
}

export const StructurizrParser = new structurizrParser();
export const BaseStructurizrVisitor = StructurizrParser.getBaseCstVisitorConstructor();
export const BaseStructurizrVisitorWithDefaults = StructurizrParser.getBaseCstVisitorConstructorWithDefaults();