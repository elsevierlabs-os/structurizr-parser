// src/Lexer.ts
import { createToken, Lexer } from "chevrotain";
var BlockComment = createToken({ name: "blockComment", pattern: /\/\*[^*]*\*+([^/*][^*]*\*+)*\//, group: Lexer.SKIPPED });
var LineComment = createToken({ name: "lineComment", pattern: /\/\/(.*?)\r?\n/, group: Lexer.SKIPPED });
var HashComment = createToken({ name: "hashComment", pattern: /\#(.*?)\r?\n/, group: Lexer.SKIPPED });
var Url = createToken({ name: "url", pattern: /(https?:\/\/[^ ]*)/i });
var FilePath = createToken({ name: "filePath", pattern: /\.\.?\/[^\n"?:*<>|]+\.[A-z0-9]+/i });
var StringLiteral = createToken({ name: "stringLiteral", pattern: /"(?:[^"\\]|\\.)*"/ });
var Identifier = createToken({ name: "identifier", pattern: /[a-zA-Z_0-9]+/ });
var BangInclude = createToken({ name: "bangInclude", pattern: /!include/i });
var BangConstant = createToken({ name: "bangConstant", pattern: /!constant/i });
var BangDocs = createToken({ name: "bangDocs", pattern: /!docs/i });
var BangAdrs = createToken({ name: "bangAdrs", pattern: /!adrs/i });
var BangIndentifiers = createToken({ name: "bangIdentifiers", pattern: /!identifiers/i });
var BangImpliedRelationships = createToken({ name: "bangImpliedRelationships", pattern: /!impliedrelationships/i });
var Workspace = createToken({ name: "workspace", pattern: /workspace/i, longer_alt: Identifier });
var Extends = createToken({ name: "extends", pattern: /extends/i, longer_alt: Identifier });
var Model = createToken({ name: "model", pattern: /model/i, longer_alt: Identifier });
var Name = createToken({ name: "name", pattern: /name/i, longer_alt: Identifier });
var Enterprise = createToken({ name: "enterprise", pattern: /enterprise/i, longer_alt: Identifier });
var Group = createToken({ name: "group", pattern: /group/i, longer_alt: Identifier });
var Person = createToken({ name: "person", pattern: /person/i, longer_alt: Identifier });
var SoftwareSystem = createToken({ name: "softwareSystem", pattern: /softwaresystem/i, longer_alt: Identifier });
var Container = createToken({ name: "container", pattern: /container/i, longer_alt: Identifier });
var Component = createToken({ name: "component", pattern: /component/i, longer_alt: Identifier });
var DeploymentEnvironment = createToken({ name: "deploymentEnvironment", pattern: /deploymentenvironment/i });
var DeploymentGroup = createToken({ name: "deploymentGroup", pattern: /deploymentgroup/i });
var DeploymentNode = createToken({ name: "deploymentNode", pattern: /deploymentnode/i });
var InfrastructureNode = createToken({ name: "infrastructureNodel", pattern: /infrastructurenode/i });
var SoftwareSystemInstance = createToken({ name: "softwareSystemInstance", pattern: /softwaresysteminstance/i });
var ContainerInstance = createToken({ name: "containerInstance", pattern: /containerinstance/i });
var Element = createToken({ name: "element", pattern: /element/i, longer_alt: Identifier });
var Technology = createToken({ name: "technology", pattern: /technology/i, longer_alt: Identifier });
var Tags = createToken({ name: "tags", pattern: /tags/i, longer_alt: Identifier });
var Tag = createToken({ name: "tag", pattern: /tag/i, longer_alt: Tags });
var Views = createToken({ name: "views", pattern: /views/i, longer_alt: Identifier });
var SystemLandscape = createToken({ name: "systemLandscape", pattern: /systemlandscape/i });
var SystemContext = createToken({ name: "systemContext", pattern: /systemcontext/i });
var Filtered = createToken({ name: "filtered", pattern: /filtered/i, longer_alt: Identifier });
var Dynamic = createToken({ name: "dynamic", pattern: /dynamic/i, longer_alt: Identifier });
var Deployment = createToken({ name: "deployment", pattern: /deployment/i, longer_alt: Identifier });
var Custom = createToken({ name: "custom", pattern: /custom/i, longer_alt: Identifier });
var Image = createToken({ name: "image", pattern: /image/i, longer_alt: Identifier });
var Title = createToken({ name: "title", pattern: /title/i, longer_alt: Identifier });
var Animation = createToken({ name: "animation", pattern: /animation/i, longer_alt: Identifier });
var Styles = createToken({ name: "styles", pattern: /styles/i, longer_alt: Identifier });
var Relationship = createToken({ name: "relationship", pattern: /relationship/i, longer_alt: Identifier });
var Themes = createToken({ name: "themes", pattern: /themes/i, longer_alt: Identifier });
var Theme = createToken({ name: "theme", pattern: /theme/i, longer_alt: Themes });
var Branding = createToken({ name: "branding", pattern: /branding/i, longer_alt: Identifier });
var Terminology = createToken({ name: "terminology", pattern: /terminology/i, longer_alt: Identifier });
var Configuration = createToken({ name: "configuration", pattern: /configuration/i, longer_alt: Identifier });
var Users = createToken({ name: "users", pattern: /users/i, longer_alt: Identifier });
var Include = createToken({ name: "include", pattern: /include/i, longer_alt: Identifier });
var AutoLayout = createToken({ name: "autoLayout", pattern: /autoLayout/i, longer_alt: Identifier });
var Description = createToken({ name: "description", pattern: /description/i, longer_alt: Identifier });
var Properties = createToken({ name: "properties", pattern: /properties/i, longer_alt: Identifier });
var Shape = createToken({ name: "shape", pattern: /shape/i, longer_alt: Identifier });
var Background = createToken({ name: "background", pattern: /background/i, longer_alt: Identifier });
var Color = createToken({ name: "color", pattern: /color/i, longer_alt: Identifier });
var Colour = createToken({ name: "colour", pattern: /colour/i, longer_alt: Identifier });
var ShapeEnum = createToken({ name: "shapeEnum", pattern: /Box|RoundedBox|Circle|Ellipse|Hexagon|Cylinder|Pipe|Person|Robot|Folder|WebBrowser|MobileDevicePortrait|MobileDeviceLandscape|Component/i, longer_alt: Identifier });
var FontSize = createToken({ name: "fontSize", pattern: /fontsize/i, longer_alt: Identifier });
var Opacity = createToken({ name: "opacity", pattern: /opacity/i, longer_alt: Identifier });
var StructurizrLocale = createToken({ name: "structurizrLocale", pattern: /"structurizr\.locale"|structurizr\.locale/i, longer_alt: Identifier });
var StructurizrTimezone = createToken({ name: "structurizrTimezone", pattern: /"structurizr\.timezone"|structurizr\.timezone/i, longer_alt: Identifier });
var StructurizrSort = createToken({ name: "structurizrSort", pattern: /"structurizr\.sort"|structurizr\.sort/i, longer_alt: Identifier });
var StructurizrTooltips = createToken({ name: "structurizrTooltips", pattern: /"structurizr\.tooltips"|structurizr\.tooltips/i, longer_alt: Identifier });
var StructurizrTitle = createToken({ name: "structurizrTitle", pattern: /"structurizr\.title"|structurizr\.title/i, longer_alt: Identifier });
var StructurizrDescription = createToken({ name: "structurizrDescription", pattern: /"structurizr\.description"|structurizr\.description/i, longer_alt: Identifier });
var StructurizrMetadata = createToken({ name: "structurizrMetadata", pattern: /"structurizr\.metadata"|structurizr\.metadata/i, longer_alt: Identifier });
var StructurizrEnterpriseBoundary = createToken({ name: "structurizrEnterpriseBoundary", pattern: /"structurizr\.enterpriseBoundary"|structurizr\.enterpriseBoundary/i, longer_alt: Identifier });
var StructurizrGroupSeparator = createToken({ name: "structurizrGroupSeparator", pattern: /"structurizr\.groupSeparator"|structurizr\.groupSeparator/i, longer_alt: Identifier });
var StructurizrGroups = createToken({ name: "structurizrGroups", pattern: /"structurizr\.groups"|structurizr\.groups/i, longer_alt: Identifier });
var StructurizrSoftwareSystemBoundaries = createToken({ name: "structurizrSoftwareSystemBoundaries", pattern: /"structurizr\.softwareSystemBoundaries"|structurizr\.softwareSystemBoundaries/i, longer_alt: Identifier });
var Equals = createToken({ name: "equals", pattern: /=/ });
var RelatedTo = createToken({ name: "relatedTo", pattern: /->/ });
var Value = createToken({ name: "value", pattern: Lexer.NA });
var Bool = createToken({ name: "bool", pattern: /(true|false)/i, categories: Value, longer_alt: Identifier });
var HexColor = createToken({ name: "hexColor", pattern: /#[0-9A-Fa-f]{6}/, categories: Value });
var Word = createToken({ name: "word", pattern: /[a-zA-Z][a-zA-Z0-9_]*/, categories: Value, longer_alt: Identifier });
var Float = createToken({ name: "float", pattern: /-?[0-9]+\.[0-9]+/, categories: Value });
var Int = createToken({ name: "int", pattern: /-?(?:0|[1-9][0-9]*)/, categories: Value });
var Wildcard = createToken({ name: "wildcard", pattern: /(\*)/ });
var LBrace = createToken({ name: "lBrace", pattern: /\{/, label: "{" });
var RBrace = createToken({ name: "rBrace", pattern: /\}/, label: "}" });
var WhiteSpace = createToken({ name: "whiteSpace", pattern: /[\s\t\n\r]+/, group: Lexer.SKIPPED });
var allTokens = [
  WhiteSpace,
  BlockComment,
  LineComment,
  Url,
  FilePath,
  HexColor,
  HashComment,
  StructurizrLocale,
  StructurizrTimezone,
  StructurizrSort,
  StructurizrTooltips,
  StructurizrTitle,
  StructurizrDescription,
  StructurizrMetadata,
  StructurizrEnterpriseBoundary,
  StructurizrGroupSeparator,
  StructurizrGroups,
  StructurizrSoftwareSystemBoundaries,
  StringLiteral,
  BangInclude,
  BangConstant,
  BangDocs,
  BangAdrs,
  BangIndentifiers,
  BangImpliedRelationships,
  Workspace,
  Extends,
  Name,
  Model,
  Enterprise,
  Group,
  Person,
  SoftwareSystemInstance,
  SoftwareSystem,
  ContainerInstance,
  Container,
  Component,
  DeploymentEnvironment,
  DeploymentGroup,
  DeploymentNode,
  InfrastructureNode,
  Element,
  Technology,
  Tags,
  Tag,
  Views,
  SystemLandscape,
  SystemContext,
  Filtered,
  Dynamic,
  Deployment,
  Custom,
  Image,
  Title,
  Animation,
  Styles,
  Relationship,
  Themes,
  Theme,
  Branding,
  Terminology,
  Configuration,
  Users,
  Include,
  AutoLayout,
  Description,
  Properties,
  Shape,
  Background,
  Color,
  Colour,
  ShapeEnum,
  FontSize,
  Opacity,
  Equals,
  RelatedTo,
  Bool,
  Int,
  Identifier,
  Value,
  Word,
  Float,
  Wildcard,
  LBrace,
  RBrace
];
var StructurizrLexer = new Lexer(allTokens);

// src/Parser.ts
import { CstParser } from "chevrotain";
var structurizrParser = class extends CstParser {
  constructor() {
    super(allTokens);
    this.performSelfAnalysis();
  }
  // Rules go here
  workspaceWrapper = this.RULE("workspaceWrapper", () => {
    this.CONSUME(Workspace);
    this.OR([
      { ALT: () => {
        this.CONSUME(Extends);
        this.CONSUME(FilePath);
      } },
      { ALT: () => {
        this.OPTION1(() => {
          this.CONSUME1(StringLiteral);
        });
        this.OPTION2(() => {
          this.CONSUME2(StringLiteral);
        });
      } }
    ]);
    this.SUBRULE(this.workspaceSection);
  });
  workspaceSection = this.RULE("workspaceSection", () => {
    this.CONSUME(LBrace);
    this.OPTION1(() => {
      this.CONSUME(Name);
      this.CONSUME1(StringLiteral);
    });
    this.OPTION2(() => {
      this.CONSUME(Description);
      this.CONSUME2(StringLiteral);
    });
    this.SUBRULE(this.modelSection);
    this.OPTION(() => {
      this.SUBRULE(this.viewsSection);
    });
    this.CONSUME(RBrace);
  });
  modelSection = this.RULE("modelSection", () => {
    this.CONSUME(Model);
    this.SUBRULE(this.modelChildSection);
  });
  modelChildSection = this.RULE("modelChildSection", () => {
    this.CONSUME1(LBrace);
    this.MANY(() => {
      this.OR([
        { ALT: () => {
          this.SUBRULE(this.propertiesSection);
        } },
        { ALT: () => {
          this.SUBRULE(this.systemGroupSection);
        } },
        { ALT: () => {
          this.SUBRULE(this.personSection);
        } },
        { ALT: () => {
          this.SUBRULE(this.softwareSystemSection);
        } },
        { ALT: () => {
          this.SUBRULE(this.explicitRelationship);
        } },
        { ALT: () => {
          this.SUBRULE(this.deploymentEnvironmentSection);
        } }
      ]);
    });
    this.CONSUME1(RBrace);
  });
  propertiesSection = this.RULE("propertiesSection", () => {
    this.CONSUME(Properties);
    this.CONSUME(LBrace);
    this.MANY(() => {
      this.OR([
        { ALT: () => {
          this.SUBRULE(this.timezoneProperty);
        } },
        { ALT: () => {
          this.SUBRULE(this.localeProperty);
        } },
        { ALT: () => {
          this.SUBRULE(this.sortProperty);
        } },
        { ALT: () => {
          this.SUBRULE(this.tooltipsProperty);
        } },
        { ALT: () => {
          this.SUBRULE(this.titleProperty);
        } },
        { ALT: () => {
          this.SUBRULE(this.descriptionProperty);
        } },
        { ALT: () => {
          this.SUBRULE(this.metadataProperty);
        } },
        { ALT: () => {
          this.SUBRULE(this.enterpriseBoundaryProperty);
        } },
        { ALT: () => {
          this.SUBRULE(this.groupSeparatorProperty);
        } },
        { ALT: () => {
          this.SUBRULE(this.groupsProperty);
        } },
        { ALT: () => {
          this.SUBRULE(this.softwareSystemBoundariesProperty);
        } }
      ]);
    });
    this.CONSUME(RBrace);
  });
  timezoneProperty = this.RULE("timezoneProperty", () => {
    this.CONSUME(StructurizrTimezone);
    this.CONSUME(StringLiteral);
  });
  localeProperty = this.RULE("localeProperty", () => {
    this.CONSUME(StructurizrLocale);
    this.CONSUME(StringLiteral);
  });
  sortProperty = this.RULE("sortProperty", () => {
    this.CONSUME(StructurizrSort);
    this.CONSUME(StringLiteral);
  });
  tooltipsProperty = this.RULE("tooltipsProperty", () => {
    this.CONSUME(StructurizrTooltips);
    this.CONSUME(Bool);
  });
  titleProperty = this.RULE("titleProperty", () => {
    this.CONSUME(StructurizrTitle);
    this.CONSUME(Bool);
  });
  descriptionProperty = this.RULE("descriptionProperty", () => {
    this.CONSUME(StructurizrDescription);
    this.CONSUME(Bool);
  });
  metadataProperty = this.RULE("metadataProperty", () => {
    this.CONSUME(StructurizrMetadata);
    this.CONSUME(Bool);
  });
  enterpriseBoundaryProperty = this.RULE("enterpriseBoundaryProperty", () => {
    this.CONSUME(StructurizrEnterpriseBoundary);
    this.CONSUME(Bool);
  });
  groupSeparatorProperty = this.RULE("groupSeparatorProperty", () => {
    this.CONSUME(StructurizrGroupSeparator);
    this.CONSUME(StringLiteral);
  });
  groupsProperty = this.RULE("groupsProperty", () => {
    this.CONSUME(StructurizrGroups);
    this.CONSUME(Bool);
  });
  softwareSystemBoundariesProperty = this.RULE("softwareSystemBoundariesProperty", () => {
    this.CONSUME(StructurizrSoftwareSystemBoundaries);
    this.CONSUME(Bool);
  });
  systemGroupSection = this.RULE("systemGroupSection", () => {
    this.OPTION(() => {
      this.CONSUME(Identifier);
      this.CONSUME(Equals);
    });
    this.CONSUME(Group);
    this.CONSUME(StringLiteral);
    this.SUBRULE(this.systemGroupChildSection);
  });
  systemGroupChildSection = this.RULE("systemGroupChildSection", () => {
    this.CONSUME(LBrace);
    this.MANY(() => {
      this.OR([
        { ALT: () => {
          this.SUBRULE(this.systemGroupSection);
        } },
        { ALT: () => {
          this.SUBRULE(this.personSection);
        } },
        { ALT: () => {
          this.SUBRULE(this.softwareSystemSection);
        } }
      ]);
    });
    this.CONSUME(RBrace);
  });
  descriptionAttribute = this.RULE("descriptionAttribute", () => {
    this.CONSUME(Description);
    this.CONSUME(StringLiteral);
  });
  tagsAttribute = this.RULE("tagsAttribute", () => {
    this.CONSUME(Tags);
    this.AT_LEAST_ONE(() => {
      this.CONSUME(StringLiteral);
    });
  });
  personSection = this.RULE("personSection", () => {
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
  personChildSection = this.RULE("personChildSection", () => {
    this.CONSUME1(LBrace);
    this.MANY(() => {
      this.OR([
        { ALT: () => {
          this.SUBRULE(this.tagsAttribute);
        } },
        { ALT: () => {
          this.SUBRULE(this.descriptionAttribute);
        } },
        { ALT: () => {
          this.SUBRULE(this.implicitRelationship);
        } }
      ]);
    });
    this.CONSUME1(RBrace);
  });
  softwareSystemSection = this.RULE("softwareSystemSection", () => {
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
  softwareSystemChildSection = this.RULE("softwareSystemChildSection", () => {
    this.CONSUME1(LBrace);
    this.MANY(() => {
      this.OR([
        { ALT: () => {
          this.SUBRULE(this.tagsAttribute);
        } },
        { ALT: () => {
          this.SUBRULE(this.descriptionAttribute);
        } },
        { ALT: () => {
          this.SUBRULE(this.containerGroupSection);
        } },
        { ALT: () => {
          this.SUBRULE(this.containerSection);
        } },
        { ALT: () => {
          this.SUBRULE(this.implicitRelationship);
        } }
      ]);
    });
    this.CONSUME1(RBrace);
  });
  containerGroupSection = this.RULE("containerGroupSection", () => {
    this.OPTION(() => {
      this.CONSUME(Identifier);
      this.CONSUME(Equals);
    });
    this.CONSUME(Group);
    this.CONSUME(StringLiteral);
    this.SUBRULE(this.containerGroupChildSection);
  });
  containerGroupChildSection = this.RULE("containerGroupChildSection", () => {
    this.CONSUME(LBrace);
    this.MANY(() => {
      this.OR([
        { ALT: () => {
          this.SUBRULE(this.containerGroupSection);
        } },
        { ALT: () => {
          this.SUBRULE(this.containerSection);
        } }
      ]);
    });
    this.CONSUME(RBrace);
  });
  containerSection = this.RULE("containerSection", () => {
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
  containerChildSection = this.RULE("containerChildSection", () => {
    this.CONSUME1(LBrace);
    this.MANY(() => {
      this.OR([
        { ALT: () => {
          this.SUBRULE(this.componentGroupSection);
        } },
        { ALT: () => {
          this.SUBRULE(this.componentSection);
        } },
        { ALT: () => {
          this.SUBRULE(this.implicitRelationship);
        } }
      ]);
    });
    this.CONSUME1(RBrace);
  });
  componentGroupSection = this.RULE("componentGroupSection", () => {
    this.OPTION(() => {
      this.CONSUME(Identifier);
      this.CONSUME(Equals);
    });
    this.CONSUME(Group);
    this.CONSUME(StringLiteral);
    this.SUBRULE(this.componentGroupChildSection);
  });
  componentGroupChildSection = this.RULE("componentGroupChildSection", () => {
    this.CONSUME(LBrace);
    this.MANY(() => {
      this.OR([
        { ALT: () => {
          this.SUBRULE(this.componentGroupSection);
        } },
        { ALT: () => {
          this.SUBRULE(this.componentSection);
        } }
      ]);
    });
    this.CONSUME(RBrace);
  });
  componentSection = this.RULE("componentSection", () => {
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
  explicitRelationship = this.RULE("explicitRelationship", () => {
    this.CONSUME(Identifier);
    this.CONSUME(RelatedTo);
    this.CONSUME1(Identifier);
    this.MANY(() => {
      this.CONSUME(StringLiteral);
    });
  });
  implicitRelationship = this.RULE("implicitRelationship", () => {
    this.CONSUME(RelatedTo);
    this.CONSUME1(Identifier);
    this.MANY(() => {
      this.CONSUME(StringLiteral);
    });
  });
  deploymentEnvironmentSection = this.RULE("deploymentEnvironmentSection", () => {
    this.OPTION(() => {
      this.CONSUME(Identifier);
      this.CONSUME(Equals);
    });
    this.CONSUME(DeploymentEnvironment);
    this.CONSUME(StringLiteral);
    this.SUBRULE(this.deploymentEnvironmentChildSection);
  });
  deploymentEnvironmentChildSection = this.RULE("deploymentEnvironmentChildSection", () => {
    this.CONSUME(LBrace);
    this.MANY(() => this.OR([
      { ALT: () => {
        this.SUBRULE(this.deploymentNodeSection);
      } },
      { ALT: () => {
        this.SUBRULE(this.containerInstanceSection);
      } },
      { ALT: () => {
        this.SUBRULE(this.explicitRelationship);
      } }
    ]));
    this.CONSUME(RBrace);
  });
  deploymentNodeSection = this.RULE("deploymentNodeSection", () => {
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
  deploymentNodeChildSection = this.RULE("deploymentNodeChildSection", () => {
    this.CONSUME(LBrace);
    this.MANY(() => this.OR([
      { ALT: () => {
        this.SUBRULE(this.deploymentNodeSection);
      } },
      { ALT: () => {
        this.SUBRULE(this.containerInstanceSection);
      } },
      { ALT: () => {
        this.SUBRULE(this.softwareSystemInstanceSection);
      } }
    ]));
    this.CONSUME(RBrace);
  });
  containerInstanceSection = this.RULE("containerInstanceSection", () => {
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
  softwareSystemInstanceSection = this.RULE("softwareSystemInstanceSection", () => {
    this.CONSUME(SoftwareSystemInstance);
    this.CONSUME(Identifier);
    this.MANY(() => {
      this.CONSUME(StringLiteral);
    });
  });
  viewsSection = this.RULE("viewsSection", () => {
    this.CONSUME(Views);
    this.SUBRULE(this.viewsChildSection);
  });
  viewsChildSection = this.RULE("viewsChildSection", () => {
    this.CONSUME1(LBrace);
    this.MANY(() => {
      this.OR([
        { ALT: () => {
          this.SUBRULE(this.systemLandscapeView);
        } },
        { ALT: () => {
          this.SUBRULE(this.systemContextView);
        } },
        { ALT: () => {
          this.SUBRULE(this.containerView);
        } },
        { ALT: () => {
          this.SUBRULE(this.componentView);
        } },
        { ALT: () => {
          this.SUBRULE(this.imageSection);
        } },
        { ALT: () => {
          this.SUBRULE(this.stylesSection);
        } },
        { ALT: () => {
          this.SUBRULE(this.dynamicSection);
        } },
        { ALT: () => {
          this.SUBRULE(this.deploymentSection);
        } }
      ]);
    });
    this.CONSUME1(RBrace);
  });
  systemLandscapeView = this.RULE("systemLandscapeView", () => {
    this.CONSUME(SystemLandscape);
    this.MANY(() => {
      this.CONSUME(StringLiteral);
    });
    this.SUBRULE(this.viewOptions);
  });
  viewOptions = this.RULE("viewOptions", () => {
    this.CONSUME(LBrace);
    this.MANY(() => {
      this.OR([
        { ALT: () => {
          this.SUBRULE(this.includeOptions);
        } },
        { ALT: () => {
          this.SUBRULE(this.autoLayoutOptions);
        } },
        { ALT: () => {
          this.SUBRULE(this.animationOptions);
        } },
        { ALT: () => {
          this.SUBRULE(this.descriptionOptions);
        } },
        { ALT: () => {
          this.SUBRULE(this.propertiesOptions);
        } }
      ]);
    });
    this.CONSUME(RBrace);
  });
  includeOptions = this.RULE("includeOptions", () => {
    this.CONSUME(Include);
    this.OR([
      { ALT: () => {
        this.CONSUME(Wildcard);
      } },
      { ALT: () => {
        this.CONSUME(Identifier);
      } }
    ]);
  });
  autoLayoutOptions = this.RULE("autoLayoutOptions", () => {
    this.CONSUME(AutoLayout);
    this.OPTION(() => {
      this.CONSUME(Identifier);
    });
    this.OPTION1(() => {
      this.CONSUME(Int);
    });
    this.OPTION2(() => {
      this.CONSUME1(Int);
    });
  });
  animationOptions = this.RULE("animationOptions", () => {
    this.CONSUME(Animation);
    this.CONSUME(LBrace);
    this.MANY(() => {
      this.CONSUME(Identifier);
      this.OPTION(() => this.CONSUME(Value));
    });
    this.CONSUME(RBrace);
  });
  descriptionOptions = this.RULE("descriptionOptions", () => {
    this.CONSUME(Description);
    this.CONSUME(StringLiteral);
  });
  propertiesOptions = this.RULE("propertiesOptions", () => {
    this.CONSUME(Properties);
    this.CONSUME(LBrace);
    this.MANY(() => {
      this.OR([
        { ALT: () => {
          this.SUBRULE(this.timezoneProperty);
        } },
        { ALT: () => {
          this.SUBRULE(this.localeProperty);
        } },
        { ALT: () => {
          this.SUBRULE(this.sortProperty);
        } },
        { ALT: () => {
          this.SUBRULE(this.tooltipsProperty);
        } },
        { ALT: () => {
          this.SUBRULE(this.titleProperty);
        } },
        { ALT: () => {
          this.SUBRULE(this.descriptionProperty);
        } },
        { ALT: () => {
          this.SUBRULE(this.metadataProperty);
        } },
        { ALT: () => {
          this.SUBRULE(this.enterpriseBoundaryProperty);
        } },
        { ALT: () => {
          this.SUBRULE(this.groupSeparatorProperty);
        } },
        { ALT: () => {
          this.SUBRULE(this.groupsProperty);
        } },
        { ALT: () => {
          this.SUBRULE(this.softwareSystemBoundariesProperty);
        } }
      ]);
    });
    this.CONSUME(RBrace);
  });
  systemContextView = this.RULE("systemContextView", () => {
    this.CONSUME(SystemContext);
    this.CONSUME(Identifier);
    this.MANY(() => {
      this.CONSUME2(StringLiteral);
    });
    this.SUBRULE(this.viewOptions);
  });
  containerView = this.RULE("containerView", () => {
    this.CONSUME(Container);
    this.CONSUME(Identifier);
    this.MANY(() => {
      this.CONSUME2(StringLiteral);
    });
    this.SUBRULE(this.viewOptions);
  });
  componentView = this.RULE("componentView", () => {
    this.CONSUME(Component);
    this.CONSUME(Identifier);
    this.MANY(() => {
      this.CONSUME2(StringLiteral);
    });
    this.SUBRULE(this.viewOptions);
  });
  imageSection = this.RULE("imageSection", () => {
    this.CONSUME(Image);
    this.OR([
      { ALT: () => {
        this.CONSUME(Wildcard);
      } },
      { ALT: () => {
        this.CONSUME(Identifier);
      } }
    ]);
    this.OPTION(() => this.CONSUME(StringLiteral));
    this.CONSUME(LBrace);
    this.OR2([
      { ALT: () => {
        this.CONSUME2(Image);
        this.CONSUME(Url);
      } }
    ]);
    this.OPTION2(() => {
      this.CONSUME(Title);
      this.CONSUME2(StringLiteral);
    });
    this.CONSUME(RBrace);
  });
  dynamicSection = this.RULE("dynamicSection", () => {
    this.CONSUME(Dynamic);
    this.CONSUME(Identifier);
    this.OPTION(() => this.CONSUME(StringLiteral));
    this.OPTION1(() => this.CONSUME1(StringLiteral));
    this.CONSUME(LBrace);
    this.MANY(() => {
      this.OR([
        { ALT: () => this.SUBRULE(this.explicitRelationship) },
        { ALT: () => this.SUBRULE(this.autoLayoutOptions) },
        { ALT: () => {
          this.CONSUME(Description);
          this.CONSUME3(StringLiteral);
        } }
      ]);
    });
    this.CONSUME(RBrace);
  });
  deploymentSection = this.RULE("deploymentSection", () => {
    this.CONSUME(Deployment);
    this.CONSUME(Identifier);
    this.CONSUME(StringLiteral);
    this.OPTION(() => this.CONSUME1(StringLiteral));
    this.OPTION1(() => this.CONSUME2(StringLiteral));
    this.CONSUME(LBrace);
    this.MANY(() => {
      this.OR([
        { ALT: () => {
          this.SUBRULE(this.includeOptions);
        } },
        { ALT: () => {
          this.SUBRULE(this.animationOptions);
        } },
        { ALT: () => {
          this.SUBRULE(this.autoLayoutOptions);
        } },
        { ALT: () => {
          this.CONSUME(Description);
          this.CONSUME3(StringLiteral);
        } }
      ]);
    });
    this.CONSUME(RBrace);
  });
  stylesSection = this.RULE("stylesSection", () => {
    this.CONSUME(Styles);
    this.CONSUME(LBrace);
    this.MANY(() => {
      this.OR([
        { ALT: () => {
          this.SUBRULE(this.elementStyleSection);
        } },
        { ALT: () => {
          this.SUBRULE(this.relationshipStyleSection);
        } }
      ]);
    });
    this.CONSUME(RBrace);
  });
  elementStyleSection = this.RULE("elementStyleSection", () => {
    this.CONSUME(Element);
    this.CONSUME(StringLiteral);
    this.CONSUME(LBrace);
    this.MANY(() => {
      this.OR([
        { ALT: () => {
          this.SUBRULE(this.shapeStyle);
        } },
        { ALT: () => {
          this.SUBRULE(this.backgroundStyle);
        } },
        { ALT: () => {
          this.SUBRULE(this.colorStyle);
        } },
        { ALT: () => {
          this.SUBRULE(this.colourStyle);
        } },
        { ALT: () => {
          this.SUBRULE(this.fontStyle);
        } },
        { ALT: () => {
          this.SUBRULE(this.opacityStyle);
        } }
      ]);
    });
    this.CONSUME(RBrace);
  });
  relationshipStyleSection = this.RULE("relationshipStyleSection", () => {
    this.CONSUME(Relationship);
    this.CONSUME(Identifier);
    this.CONSUME(LBrace);
    this.MANY(() => {
      this.OR([
        { ALT: () => {
          this.SUBRULE(this.backgroundStyle);
        } },
        { ALT: () => {
          this.SUBRULE(this.colorStyle);
        } },
        { ALT: () => {
          this.SUBRULE(this.colourStyle);
        } }
      ]);
    });
    this.CONSUME(RBrace);
  });
  shapeStyle = this.RULE("shapeStyle", () => {
    this.CONSUME(Shape);
    this.OR([
      { ALT: () => {
        this.CONSUME(ShapeEnum);
      } },
      { ALT: () => {
        this.CONSUME(Person);
      } }
    ]);
    ;
  });
  backgroundStyle = this.RULE("backgroundStyle", () => {
    this.CONSUME(Background);
    this.CONSUME(HexColor);
  });
  colorStyle = this.RULE("colorStyle", () => {
    this.CONSUME(Color);
    this.CONSUME(HexColor);
  });
  colourStyle = this.RULE("colourStyle", () => {
    this.CONSUME(Colour);
    this.CONSUME(HexColor);
  });
  fontStyle = this.RULE("fontStyle", () => {
    this.CONSUME(FontSize);
    this.CONSUME(Int);
  });
  opacityStyle = this.RULE("opacityStyle", () => {
    this.CONSUME(Opacity);
    this.CONSUME(Int);
  });
};
var StructurizrParser = new structurizrParser();
var BaseStructurizrVisitor = StructurizrParser.getBaseCstVisitorConstructor();
var BaseStructurizrVisitorWithDefaults = StructurizrParser.getBaseCstVisitorConstructorWithDefaults();

// src/stack.ts
var Stack = class {
  items;
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  clear() {
    this.items = [];
  }
  dump(separator) {
    return this.items.join(separator);
  }
  print() {
    console.log(this.items);
  }
};

// src/RawInterpreter.ts
var rawInterpreter = class extends BaseStructurizrVisitor {
  _debug = false;
  workspace = {};
  // This is used to build group values that are recorded in the workspace object
  _systemGroup = new Stack();
  _containerGroup = new Stack();
  _componentGroup = new Stack();
  _groupSeparator = "/";
  // View helpers
  _currentView = 0 /* Unknown */;
  constructor() {
    super();
    this._systemGroup.clear();
    this._containerGroup.clear();
    this._componentGroup.clear();
    this.validateVisitor();
  }
  set Debug(flag) {
    this._debug = flag;
  }
  workspaceWrapper(node) {
    this._debug && console.log("Here we are at workspaceWrapper node:");
    this.workspace = {};
    this.workspace.name = "Name";
    this.workspace.description = "Description";
    if (node.workspaceSection) {
      this.visit(node.workspaceSection);
    }
    return this.workspace;
  }
  workspaceSection(node) {
    this._debug && console.log("Here we are at workspaceSection node:");
    if (node.name) {
      this.workspace.name = node.stringLiteral[0]?.image;
    }
    ;
    if (node.description) {
      this.workspace.description = node.stringLiteral[1]?.image;
    }
    ;
    if (node.modelSection) {
      this.visit(node.modelSection);
    }
    if (node.viewsSection) {
      this.visit(node.viewsSection);
    }
  }
  modelSection(node) {
    this._debug && console.log("Here we are at modelSection node:");
    this.workspace.model = {};
    this.workspace.model.people = [];
    this.workspace.model.softwareSystems = [];
    this.workspace.model.deploymentNodes = [];
    if (node.modelChildSection) {
      this.visit(node.modelChildSection);
    }
  }
  modelChildSection(node) {
    this._debug && console.log("Here we are at modelChildSection node:");
    if (node.propertiesSection) {
      this.visit(node.propertiesSection);
    }
    if (node.systemGroupSection) {
      for (const group of node.systemGroupSection) {
        this.visit(group);
      }
    }
    if (node.personSection) {
      for (const person of node.personSection) {
        this.visit(person);
      }
    }
    if (node.softwareSystemSection) {
      for (const sSystem of node.softwareSystemSection) {
        this.visit(sSystem);
      }
    }
    if (node.explicitRelationship) {
      for (const relationship of node.explicitRelationship) {
        this.visit(relationship);
      }
    }
    if (node.deploymentEnvironmentSection) {
      for (const depEnv of node.deploymentEnvironmentSection) {
        this.visit(depEnv);
      }
    }
  }
  // This should ideally be from the list at https://docs.structurizr.com/ui/properties
  // TODO: And change the parser to identify the property names and fail if not aligned
  // TODO: This will mean a lot more handlers for each property and whether it is model or view related
  propertiesSection(node) {
    this._debug && console.log("Here we are at propertiesSection node:");
    if (node.localeProperty) {
      this.visit(node.localeProperty);
    }
    if (node.timezoneProperty) {
      this.visit(node.timezoneProperty);
    }
    if (node.sortProperty) {
      this.visit(node.sortProperty);
    }
    if (node.tooltipsProperty) {
      this.visit(node.tooltipsProperty);
    }
    if (node.titleProperty) {
      this.visit(node.titleProperty);
    }
    if (node.descriptionProperty) {
      this.visit(node.descriptionProperty);
    }
    if (node.metadataProperty) {
      this.visit(node.metadataProperty);
    }
    if (node.enterpriseBoundaryProperty) {
      this.visit(node.enterpriseBoundaryProperty);
    }
    if (node.groupSeparatorProperty) {
      this.visit(node.groupSeparatorProperty);
    }
    if (node.groupsProperty) {
      this.visit(node.groupsProperty);
    }
    if (node.softwareSystemBoundariesProperty) {
      this.visit(node.softwareSystemBoundariesProperty);
    }
  }
  localeProperty(node) {
    this._debug && console.log("Here we are at localeProperty node:");
  }
  timezoneProperty(node) {
    this._debug && console.log("Here we are at timezoneProperty node:");
  }
  sortProperty(node) {
    this._debug && console.log("Here we are at sortProperty node:");
  }
  tooltipsProperty(node) {
    this._debug && console.log("Here we are at tooltipsProperty node:");
  }
  titleProperty(node) {
    this._debug && console.log("Here we are at titleProperty node:");
  }
  descriptionProperty(node) {
    this._debug && console.log("Here we are at descriptionProperty node:");
  }
  metadataProperty(node) {
    this._debug && console.log("Here we are at metadataProperty node:");
  }
  enterpriseBoundaryProperty(node) {
    this._debug && console.log("Here we are at enterpriseBoundaryProperty node:");
  }
  groupSeparatorProperty(node) {
    this._debug && console.log("Here we are at groupSeparatorProperty node:");
    const value = stripQuotes(node.stringLiteral?.[0]?.image);
    if (!this.workspace.model?.properties) {
      this.workspace.model.properties = {};
    }
    this.workspace.model.properties["structurizr.groupseparator"] = value;
    this._groupSeparator = value;
  }
  groupsProperty(node) {
    this._debug && console.log("Here we are at groupsProperty node:");
  }
  softwareSystemBoundariesProperty(node) {
    this._debug && console.log("Here we are at softwareSystemBoundariesProperty node:");
  }
  systemGroupSection(node) {
    this._debug && console.log("Here we are at systemGroupSection node:");
    const groupName = stripQuotes(node.stringLiteral?.[0]?.image ?? "");
    this._systemGroup.push(groupName);
    if (node.systemGroupChildSection) {
      this.visit(node.systemGroupChildSection);
    }
    this._systemGroup.pop();
  }
  systemGroupChildSection(node) {
    this._debug && console.log("Here we are at systemGroupChildSection with node:");
    if (node.systemGroupSection) {
      for (const group of node.systemGroupSection) {
        this.visit(group);
      }
    }
    if (node.personSection) {
      for (const person of node.personSection) {
        this.visit(person);
      }
    }
    if (node.softwareSystemSection) {
      for (const sSystem of node.softwareSystemSection) {
        this.visit(sSystem);
      }
    }
  }
  personSection(node) {
    this._debug && console.log("Here we are at personSection node:");
    console.log(JSON.stringify(node, null, 2));
    const id = node.identifier[0].image;
    const name = stripQuotes(node.stringLiteral[0]?.image ?? "");
    const description = stripQuotes(node.stringLiteral[1]?.image ?? "");
    const p = {};
    p.id = id;
    p.name = name;
    p.description = description;
    p.perspectives = [];
    p.relationships = [];
    this.workspace.model?.people?.push(p);
    if (node.personChildSection) {
      this.visit(node.personChildSection, p);
    }
  }
  personChildSection(node, person) {
    this._debug && console.log(`Here we are at personChildSection with node: ${node.name}`);
    console.log(JSON.stringify(node, null, 2));
    if (node.descriptionAttribute) {
      this.visit(node.descriptionAttribute, person);
    }
    if (node.tagsAttribute) {
      this.visit(node.tagsAttribute, person);
    }
    if (node.implicitRelationship) {
      for (const rel of node.implicitRelationship) {
        this.visit(rel, person);
      }
    }
  }
  softwareSystemSection(node) {
    this._debug && console.log("Here we are at softwareSystemSection node:");
    const id = node.identifier[0].image;
    const name = stripQuotes(node.stringLiteral[0]?.image ?? "");
    const description = stripQuotes(node.stringLiteral[1]?.image ?? "");
    const s = {};
    s.id = id;
    s.name = name;
    s.description = description;
    if (!this._systemGroup.isEmpty()) {
      s.group = this._systemGroup.dump(this._groupSeparator);
    }
    s.containers = [];
    s.perspectives = [];
    s.relationships = [];
    this.workspace.model?.softwareSystems?.push(s);
    if (node.softwareSystemChildSection) {
      this.visit(node.softwareSystemChildSection, s);
    }
  }
  softwareSystemChildSection(node, system) {
    this._debug && console.log(`Here we are at softwareSystemChildSection with node: ${system.name}`);
    if (node.descriptionAttribute) {
      this.visit(node.descriptionAttribute, system);
    }
    if (node.tagsAttribute) {
      this.visit(node.tagsAttribute, system);
    }
    if (node.containerSection) {
      for (const ctr of node.containerSection) {
        this.visit(ctr, system);
      }
    }
  }
  descriptionAttribute(node, entity) {
    this._debug && console.log(`Here we are at descriptionAttribute with node: ${node.name}`);
    const desc = stripQuotes(node.stringLiteral?.[0]?.image ?? "");
    entity.description = desc;
  }
  tagsAttribute(node, entity) {
    this._debug && console.log(`Here we are at tagsAttribute with node: ${node.name}`);
    for (const tag of node.stringLiteral) {
      const newTag = stripQuotes(tag.image);
      entity.tags = entity.tags ? `${entity.tags},${newTag}` : newTag;
    }
  }
  containerGroupSection(node) {
    this._debug && console.log(`Here we are at containerGroupSection with node: ${node.name}`);
    const groupName = stripQuotes(node.stringLiteral?.[0]?.image ?? "");
    this._containerGroup.push(groupName);
    if (node.containerGroupChildSection) {
      this.visit(node.containerGroupChildSection);
    }
    this._containerGroup.pop();
  }
  containerGroupChildSection(node) {
    this._debug && console.log(`Here we are at containerGroupChildSection with node: ${node.name}`);
  }
  containerSection(node, system) {
    this._debug && console.log(`Here we are at ContainerSection with node: ${node.name}`);
    const id = node.identifier[0].image;
    const name = stripQuotes(node.stringLiteral[0]?.image ?? "");
    const description = stripQuotes(node.stringLiteral[1]?.image ?? "");
    const tech = stripQuotes(node.stringLiteral[2]?.image ?? "");
    const c = {};
    c.id = id;
    c.name = name;
    c.description = description;
    c.technology = tech;
    if (!this._containerGroup.isEmpty()) {
      c.group = this._containerGroup.dump(this._groupSeparator);
    }
    c.components = [];
    c.perspectives = [];
    c.relationships = [];
    system.containers?.push(c);
    if (node.containerChildSection) {
      this.visit(node.containerChildSection, c);
    }
  }
  containerChildSection(node, container) {
    this._debug && console.log(`Here we are at ContainerChildSection with node: ${node.name}`);
    if (node.componentSection) {
      for (const com of node.componentSection) {
        this.visit(com, container);
      }
    }
  }
  componentGroupSection(node) {
    this._debug && console.log(`Here we are at componentGroupSection with node: ${node.name}`);
    const groupName = stripQuotes(node.stringLiteral?.[0]?.image ?? "");
    this._componentGroup.push(groupName);
    if (node.componentGroupChildSection) {
      this.visit(node.componentGroupChildSection);
    }
    this._componentGroup.pop();
  }
  componentGroupChildSection(node) {
    this._debug && console.log(`Here we are at componentGroupChildSection with node: ${node.name}`);
  }
  componentSection(node, container) {
    this._debug && console.log(`Here we are at ComponentSection with node: ${node.name}`);
    const id = node.identifier[0].image;
    const name = stripQuotes(node.stringLiteral[0]?.image ?? "");
    const description = stripQuotes(node.stringLiteral[1]?.image ?? "");
    const tech = stripQuotes(node.stringLiteral[2]?.image ?? "");
    const c = {};
    c.id = id;
    c.name = name;
    c.description = description;
    c.technology = tech;
    if (!this._componentGroup.isEmpty()) {
      c.group = this._componentGroup.dump(this._groupSeparator);
    }
    c.perspectives = [];
    c.relationships = [];
    container.components?.push(c);
  }
  explicitRelationship(node) {
    this._debug && console.log("Here we are at explicitRelationship node:");
    const s_id = node.identifier[0].image;
    const t_id = node.identifier[1].image;
    const desc = node.stringLiteral?.[0]?.image ?? "";
    const src = this.findSourceEntity(s_id);
    if (src) {
      const rel = {};
      rel.id = "";
      rel.sourceId = s_id;
      rel.destinationId = t_id;
      rel.description = stripQuotes(desc);
      src.relationships?.push(rel);
    }
  }
  implicitRelationship(node) {
    this._debug && console.log(`Here we are at implicitRelationship with node: ${node.name}`);
  }
  deploymentEnvironmentSection(node) {
    this._debug && console.log(`Here we are at deploymentEnvironmentSection with node: ${node.name}`);
  }
  deploymentEnvironmentChildSection(node) {
    this._debug && console.log(`Here we are at deploymentEnvironmentChildSection with node: ${node.name}`);
  }
  deploymentNodeSection(node) {
    this._debug && console.log(`Here we are at deploymentNodeSection with node: ${node.name}`);
  }
  deploymentNodeChildSection(node) {
    this._debug && console.log(`Here we are at deploymentNodeChildSection with node: ${node.name}`);
  }
  containerInstanceSection(node) {
    this._debug && console.log(`Here we are at containerInstanceSection with node: ${node.name}`);
  }
  softwareSystemInstanceSection(node) {
    this._debug && console.log(`Here we are at softwareSystemInstanceSection with node: ${node.name}`);
  }
  viewsSection(node) {
    this._debug && console.log("Here we are at viewsSection node:");
    if (!this.workspace.views) {
      this.workspace.views = {};
    }
    if (node.viewsChildSection) {
      this.visit(node.viewsChildSection);
    }
  }
  viewsChildSection(node) {
    this._debug && console.log("Here we are at viewsChildSection node:");
    if (node.systemLandscapeView) {
      for (const view of node.systemLandscapeView) {
        this.visit(view);
      }
    }
    if (node.systemContextView) {
      for (const view of node.systemContextView) {
        this.visit(view);
      }
    }
    if (node.containerView) {
      for (const view of node.containerView) {
        this.visit(view);
      }
    }
    if (node.componentView) {
      for (const view of node.componentView) {
        this.visit(view);
      }
    }
    if (node.imageSection) {
      for (const image of node.imageSection) {
        this.visit(image);
      }
    }
    if (node.stylesSection) {
      for (const style of node.stylesSection) {
        this.visit(style);
      }
    }
    if (node.dynamicSection) {
      for (const dyn of node.dynamicSection) {
        this.visit(dyn);
      }
    }
    if (node.deploymentSection) {
      for (const deployment of node.deploymentSection) {
        this.visit(deployment);
      }
    }
  }
  systemLandscapeView(node) {
    this._debug && console.log(`Here we are at systemLandscapeView with node: ${node.name}`);
    this._currentView = 1 /* SystemLandscape */;
    if (!this.workspace.views?.systemLandscapeViews) {
      this.workspace.views.systemLandscapeViews = [];
    }
    const key = stripQuotes(node.stringLiteral?.[0]?.image ?? "");
    const desc = stripQuotes(node.stringLiteral?.[1]?.image ?? "");
    const sl = {};
    sl.key = key;
    sl.description = desc;
    this.workspace.views?.systemLandscapeViews.push(sl);
    if (node.viewOptions) {
      this.visit(node.viewOptions, sl);
    }
  }
  viewOptions(node, view) {
    this._debug && console.log("Here we are at viewOptions node:");
    if (node.includeOptions) {
      for (const inc of node.includeOptions) {
        this.visit(inc, view);
      }
    }
    if (node.autoLayoutOptions) {
      this.visit(node.autoLayoutOptions, view);
    }
    if (node.animationOptions) {
    }
    if (node.descriptionOptions) {
    }
    if (node.propertiesOptions) {
    }
  }
  includeOptions(node, view) {
    this._debug && console.log("Here we are at includeOptions node:");
    if (!view.elements) {
      view.elements = [];
    }
    if (node.wildcard) {
      this.addAllElements(view);
    }
    if (node.identifier) {
      const e = {};
      e.id = node.identifier[0].image ?? "";
      view.elements.push(e);
    }
  }
  autoLayoutOptions(node, view) {
    this._debug && console.log("Here we are at autoLayoutOptions node:");
    if (!view.automaticLayout) {
      view.automaticLayout = {};
    }
    const rankDir = node.identifier?.[0].image;
    const rankSep = node.int?.[0].image;
    const nodeSep = node.int?.[1].image;
    let rankDirEnum = "TopBottom" /* TopBottom */;
    if (rankDir) {
      switch (rankDir) {
        case "tb":
          rankDirEnum = "TopBottom" /* TopBottom */;
          break;
        case "bt":
          rankDirEnum = "BottomTop" /* BottomTop */;
          break;
        case "lr":
          rankDirEnum = "LeftRight" /* LeftRight */;
          break;
        case "rl":
          rankDirEnum = "RightLeft" /* RightLeft */;
          break;
      }
    }
    view.automaticLayout["rankDirection"] = rankDirEnum;
  }
  animationOptions(node) {
    this._debug && console.log(`Here we are at animationOptions with node: ${node.name}`);
  }
  descriptionOptions(node) {
    this._debug && console.log(`Here we are at descriptionOptions with node: ${node.name}`);
  }
  propertiesOptions(node) {
    this._debug && console.log(`Here we are at propertiesOptions with node: ${node.name}`);
    if (node.localeProperty) {
      this.visit(node.localeProperty);
    }
    if (node.timezoneProperty) {
      this.visit(node.timezoneProperty);
    }
    if (node.sortProperty) {
      this.visit(node.sortProperty);
    }
    if (node.tooltipsProperty) {
      this.visit(node.tooltipsProperty);
    }
    if (node.titleProperty) {
      this.visit(node.titleProperty);
    }
    if (node.descriptionProperty) {
      this.visit(node.descriptionProperty);
    }
    if (node.metadataProperty) {
      this.visit(node.metadataProperty);
    }
    if (node.enterpriseBoundaryProperty) {
      this.visit(node.enterpriseBoundaryProperty);
    }
    if (node.groupSeparatorProperty) {
      this.visit(node.groupSeparatorProperty);
    }
    if (node.groupsProperty) {
      this.visit(node.groupsProperty);
    }
    if (node.softwareSystemBoundariesProperty) {
      this.visit(node.softwareSystemBoundariesProperty);
    }
  }
  systemContextView(node) {
    this._debug && console.log("Here we are at systemContextView node:");
    this._currentView = 2 /* SystemContext */;
    if (!this.workspace.views?.systemContextViews) {
      this.workspace.views.systemContextViews = [];
    }
    const id = node.identifier[0].image ?? "";
    const key = stripQuotes(node.stringLiteral?.[0]?.image ?? "");
    const desc = stripQuotes(node.stringLiteral?.[1]?.image ?? "");
    const cv = {};
    cv.softwareSystemId = id;
    cv.key = key;
    cv.description = desc;
    this.workspace.views?.systemContextViews.push(cv);
    if (node.viewOptions) {
      this.visit(node.viewOptions, cv);
    }
  }
  containerView(node) {
    this._debug && console.log(`Here we are at containerView with node: ${node.name}`);
    this._currentView = 3 /* Container */;
    if (!this.workspace.views?.containerViews) {
      this.workspace.views.containerViews = [];
    }
  }
  componentView(node) {
    this._debug && console.log(`Here we are at componentView with node: ${node.name}`);
    this._currentView = 4 /* Component */;
    if (!this.workspace.views?.componentViews) {
      this.workspace.views.componentViews = [];
    }
  }
  imageSection(node) {
    this._debug && console.log(`Here we are at imageSection with node: ${node.name}`);
    this._currentView = 9 /* Image */;
    if (!this.workspace.views?.imageViews) {
      this.workspace.views.imageViews = [];
    }
  }
  dynamicSection(node) {
    this._debug && console.log(`Here we are at dynamicSection with node: ${node.name}`);
    this._currentView = 6 /* Dynamic */;
    if (!this.workspace.views?.dynamicViews) {
      this.workspace.views.dynamicViews = [];
    }
  }
  deploymentSection(node) {
    this._debug && console.log(`Here we are at deploymentSection with node: ${node.name}`);
    this._currentView = 7 /* Deployment */;
    if (!this.workspace.views?.deploymentViews) {
      this.workspace.views.deploymentViews = [];
    }
  }
  stylesSection(node) {
    this._debug && console.log(`Here we are at stylesSection with node: ${node.name}`);
    if (!this.workspace.views?.configuration) {
      this.workspace.views.configuration = {};
    }
    if (!this.workspace.views?.configuration.styles) {
      this.workspace.views.configuration.styles = {};
    }
    if (node.elementStyleSection) {
      if (!this.workspace.views?.configuration.styles.elements) {
        this.workspace.views.configuration.styles.elements = [];
      }
      for (const es of node.elementStyleSection) {
        this.visit(es);
      }
      ;
    }
  }
  elementStyleSection(node) {
    this._debug && console.log(`Here we are at elementStyleSection with node: ${node.name}`);
    const es = {};
    es.tag = stripQuotes(node.stringLiteral[0].image ?? "");
    if (node.shapeStyle) {
      this.visit(node.shapeStyle, es);
    }
    if (node.backgroundStyle) {
      this.visit(node.backgroundStyle, es);
    }
    if (node.colorStyle) {
      this.visit(node.colorStyle, es);
    }
    if (node.colourStyle) {
      this.visit(node.colourStyle, es);
    }
    if (node.fontStyle) {
      this.visit(node.fontStyle, es);
    }
    if (node.opacityStyle) {
      this.visit(node.opacityStyle, es);
    }
    this.workspace.views?.configuration?.styles?.elements?.push(es);
  }
  relationshipStyleSection(node) {
    this._debug && console.log(`Here we are at relationshipStyleSection with node: ${node.name}`);
  }
  shapeStyle(node, es) {
    this._debug && console.log(`Here we are at shapeStyle with node: ${node.name}`);
  }
  backgroundStyle(node, es) {
    this._debug && console.log(`Here we are at backgroundStyle with node: ${node.name}`);
    es.background = stripQuotes(node.hexColor[0].image ?? "");
  }
  colorStyle(node, es) {
    this._debug && console.log(`Here we are at colorStyle with node: ${node.name}`);
    es.color = stripQuotes(node.hexColor[0].image ?? "");
  }
  colourStyle(node, es) {
    this._debug && console.log(`Here we are at colourStyle with node: ${node.name}`);
    es.color = stripQuotes(node.hexColor[0].image ?? "");
  }
  fontStyle(node, es) {
    this._debug && console.log(`Here we are at fontStyle with node: ${node.name}`);
    es.fontSize = node.int[0].image;
  }
  opacityStyle(node, es) {
    this._debug && console.log(`Here we are at opacityStyle with node: ${node.name}`);
    es.opacity = node.int[0].image;
  }
  findSourceEntity(s_id) {
    let p = this.workspace.model?.people?.find((pr) => pr.id === s_id);
    if (p) return p;
    if (this.workspace.model?.softwareSystems) {
      for (const element of this.workspace.model?.softwareSystems) {
        if (element.id === s_id) return element;
        if (element.containers) {
          for (const element2 of element.containers) {
            if (element2.id === s_id) return element2;
            if (element2.components) {
              for (const element3 of element2.components) {
                if (element3.id === s_id) return element3;
              }
            }
          }
        }
      }
    }
    throw new Error("Failed to find a match for the source ID presented: " + s_id);
  }
  addAllElements(view) {
    switch (this._currentView) {
      // System Landscape view: Include all people and software systems.
      case 1 /* SystemLandscape */: {
        if (this.workspace.model?.softwareSystems) {
          for (const sl of this.workspace.model?.softwareSystems) {
            const e = {};
            e.id = sl.id;
            view.elements.push(e);
          }
        }
        ;
        if (this.workspace.model?.people) {
          for (const pl of this.workspace.model.people) {
            const p = {};
            p.id = pl.id;
            view.elements.push(p);
          }
        }
        break;
      }
      // System Context view: Include the software system in scope; 
      // plus all people and software systems that are directly connected to 
      // the software system in scope.
      case 2 /* SystemContext */: {
        const ss = {};
        ss.id = view.softwareSystemId;
        view.elements.push(ss);
        break;
      }
      // Container view: Include all containers within the software system in scope; 
      // plus all people and software systems that are directly connected to those containers.
      case 3 /* Container */: {
        const ss = {};
        ss.id = view.softwareSystemId;
        view.elements.push(ss);
        break;
      }
      // Component view: Include all components within the container in scope; 
      // plus all people, software systems and containers (belonging to the software system in scope) 
      // directly connected to them.
      case 4 /* Component */: {
        break;
      }
    }
  }
};
function stripQuotes(str) {
  if (typeof str !== "string") {
    throw new TypeError("Expected a string");
  }
  return str.replace(/^"(.+)"$/, "$1");
}
var RawInterpreter = new rawInterpreter();

// src/VSCodeVisitor.ts
var vsCodeVisitor = class extends BaseStructurizrVisitorWithDefaults {
  c4result = [];
  constructor() {
    super();
    this.c4result = [];
    this.validateVisitor();
  }
  workspaceWrapper(node) {
    this.c4result = [];
    if (node.workspaceSection) {
      this.visit(node.workspaceSection);
    }
  }
  softwareSystemSection(ctx) {
    console.log(`Visiting softwareSystemSection: ${ctx.softwareSystem[0].image}`);
    this.c4result.push({ softwareSystem: ctx.stringLiteral[0] });
    if (ctx.softwareSystemChildSection) {
      this.visit(ctx.softwareSystemChildSection);
    }
  }
  softwareSystemChildSection(ctx) {
    if (ctx.containerSection) {
      for (const ctr of ctx.containerSection) {
        this.visit(ctr);
      }
    }
  }
  containerSection(ctx) {
    console.log(`Visiting containerSection: ${ctx.container[0].image}`);
    this.c4result.push({ container: ctx.stringLiteral[0] });
    if (ctx.containerChildSection) {
      this.visit(ctx.containerChildSection);
    }
  }
  containerChildSection(ctx) {
    if (ctx.componentSection) {
      for (const com of ctx.componentSection) {
        this.visit(com);
      }
    }
  }
  componentSection(ctx) {
    console.log(`Visiting componentSection: ${ctx.component[0].image}`);
    this.c4result.push({ component: ctx.stringLiteral[0] });
  }
};
var VSCodeVisitor = new vsCodeVisitor();
export {
  Animation,
  AutoLayout,
  Background,
  BangAdrs,
  BangConstant,
  BangDocs,
  BangImpliedRelationships,
  BangInclude,
  BangIndentifiers,
  BaseStructurizrVisitor,
  BaseStructurizrVisitorWithDefaults,
  BlockComment,
  Bool,
  Branding,
  Color,
  Colour,
  Component,
  Configuration,
  Container,
  ContainerInstance,
  Custom,
  Deployment,
  DeploymentEnvironment,
  DeploymentGroup,
  DeploymentNode,
  Description,
  Dynamic,
  Element,
  Enterprise,
  Equals,
  Extends,
  FilePath,
  Filtered,
  Float,
  FontSize,
  Group,
  HashComment,
  HexColor,
  Identifier,
  Image,
  Include,
  InfrastructureNode,
  Int,
  LBrace,
  LineComment,
  Model,
  Name,
  Opacity,
  Person,
  Properties,
  RBrace,
  RawInterpreter,
  RelatedTo,
  Relationship,
  Shape,
  ShapeEnum,
  SoftwareSystem,
  SoftwareSystemInstance,
  StringLiteral,
  StructurizrDescription,
  StructurizrEnterpriseBoundary,
  StructurizrGroupSeparator,
  StructurizrGroups,
  StructurizrLexer,
  StructurizrLocale,
  StructurizrMetadata,
  StructurizrParser,
  StructurizrSoftwareSystemBoundaries,
  StructurizrSort,
  StructurizrTimezone,
  StructurizrTitle,
  StructurizrTooltips,
  Styles,
  SystemContext,
  SystemLandscape,
  Tag,
  Tags,
  Technology,
  Terminology,
  Theme,
  Themes,
  Title,
  Url,
  Users,
  VSCodeVisitor,
  Value,
  Views,
  WhiteSpace,
  Wildcard,
  Word,
  Workspace,
  allTokens
};
