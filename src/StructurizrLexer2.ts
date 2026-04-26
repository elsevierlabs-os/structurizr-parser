import { createToken, ITokenConfig, Lexer } from "chevrotain";

export const allTokens: any[] = [];

/// If we want to build token list in the same order as definition you can try doing this
/// If you rename this `createToken` you do not have to rewrite the code but you need to specify 
/// what createToken method you are calling in here
const addNewToken = (config: ITokenConfig) => {
    const newToken = createToken(config);
    allTokens.push(newToken);
    return newToken;
};

/// Comments
export const BlockComment = addNewToken({name: "blockComment", pattern: /\/\*[^*]*\*+([^/*][^*]*\*+)*\//, group: Lexer.SKIPPED });
export const LineComment = addNewToken({name: "lineComment", pattern: /\/\/(.*?)\r?\n/, group: Lexer.SKIPPED });
export const HashComment = addNewToken({name: "hashComment", pattern: /\#\s(.*?)\r?\n/, group: Lexer.SKIPPED });

/// Noise - was /\s+/ but now also absorbing line ends
export const WhiteSpace = addNewToken({ name: 'whiteSpace', pattern: /[\s\t\n\r]+/, group: Lexer.SKIPPED });

/// Literals - was /"(?:[^\\"]|\\(?:[bfnrtv"\\/]|u[0-9a-fA-F]{4}))*"/ but I think this also included escaped char and unicode, maybe not required
export const StringBoolean = addNewToken({name: "stringBoolean", pattern: /"(?:true|false)"/i });
export const StringLiteral = addNewToken({name: "stringLiteral", pattern: /"(?:[^"\\]|\\.)*"/ });

/// URL
export const Url = addNewToken({name: "url", pattern: /(https?:\/\/[^ ]*)/i});

// Relative file path
export const FilePath = addNewToken({name: "filePath", pattern: /\.\.?\/[^\n"?:*<>|]+\.[A-z0-9]+/i });

/// Identifiers was /[a-zA-Z_0-9]\w*/ and /[a-zA-z][a-zA-z.]*\_?[0-9]*/
export const DottedProperty = createToken({ name: 'dottedProperty', pattern: /[a-zA-Z][a-zA-Z.]*_?[0-9]*/ });
export const Identifier = createToken({ name: 'identifier', pattern: /[a-zA-Z_0-9-]*[a-zA-Z_0-9][a-zA-Z_0-9-]*/, longer_alt: DottedProperty });

/// Keywords
export const BangInclude = addNewToken({name: "bangInclude", pattern: /!include/i });
export const BangComponents = addNewToken({name: "bangComponents", pattern: /!components/i });
export const BangConstant = addNewToken({name: "bangConstant", pattern: /!constant/i });
export const BangDocs = addNewToken({name: "bangDocs", pattern: /!docs/i });
export const BangAdrs = addNewToken({name: "bangAdrs", pattern: /!adrs/i });
export const BangElements = addNewToken({name: "bangElements", pattern: /!elements/i });
export const BangElement = addNewToken({name: "bangElement", pattern: /!element/i });
export const BangIndentifiers = addNewToken({name: "bangIdentifiers", pattern: /!identifiers/i });
export const BangImpliedRelationships = addNewToken({name: "bangImpliedRelationships", pattern: /!impliedrelationships/i });
export const BangPlugin = addNewToken({name: "bangPlugin", pattern: /!plugins/i });
export const BangRelationships = addNewToken({name: "bangRelationships", pattern: /!relationships/i });
export const BangRelationship = addNewToken({name: "bangRelationship", pattern: /!relationship/i });
export const BangScript = addNewToken({name: "bangScript", pattern: /!script/i });
export const Workspace = addNewToken({ name: "workspace", pattern: /workspace/i, longer_alt: Identifier });
export const Extends = addNewToken({ name: "extends", pattern: /extends/i, longer_alt: Identifier });
export const Name = addNewToken({ name: "name", pattern: /name/i, longer_alt: Identifier });
export const Model = addNewToken({ name: "model", pattern: /model/i, longer_alt: Identifier });
export const Archetypes = addNewToken({ name: "archetypes", pattern: /archetypes/i, longer_alt: Identifier });
export const Enterprise = addNewToken({ name: "enterprise", pattern: /enterprise/i, longer_alt: Identifier });
export const Group = addNewToken({ name: "group", pattern: /group/i, longer_alt: Identifier });
export const Person = addNewToken({ name: "person", pattern: /person/i, longer_alt: Identifier });
export const SoftwareSystemInstance = addNewToken({ name: "softwareSystemInstance", pattern: /softwaresysteminstance/i, longer_alt: Identifier });
export const SoftwareSystem = addNewToken({ name: "softwareSystem", pattern: /softwaresystem/i, longer_alt: Identifier });
export const ContainerInstance = addNewToken({ name: "containerInstance", pattern: /containerinstance/i, longer_alt: Identifier });
export const Container = addNewToken({ name: "container", pattern: /container/i, longer_alt: Identifier });
export const Component = addNewToken({ name: "component", pattern: /component/i, longer_alt: Identifier });
export const Custom = addNewToken({ name: "custom", pattern: /custom/i, longer_alt: Identifier });
export const DeploymentEnvironment = addNewToken({ name: "deploymentEnvironment", pattern: /deploymentenvironment/i, longer_alt: Identifier });
export const DeploymentGroup = addNewToken({ name: "deploymentGroup", pattern: /deploymentgroup/i, longer_alt: Identifier });
export const DeploymentNode = addNewToken({ name: "deploymentNode", pattern: /deploymentnode/i, longer_alt: Identifier });
export const Deployment = addNewToken({ name: "deployment", pattern: /deployment/i, longer_alt: Identifier });
export const Description = addNewToken({ name: "description", pattern: /description/i, longer_alt: Identifier });
export const Dynamic = addNewToken({ name: "dynamic", pattern: /dynamic/i, longer_alt: Identifier });
export const Element = addNewToken({ name: "element", pattern: /element/i, longer_alt: Identifier });
export const Exclude = addNewToken({ name: "exclude", pattern: /exclude/i, longer_alt: Identifier });
export const Filtered = addNewToken({ name: "filtered", pattern: /filtered/i, longer_alt: Identifier });
export const HealthCheck = addNewToken({ name: "healthCheck", pattern: /healthcheck/i, longer_alt: Identifier });
export const Include = addNewToken({ name: "include", pattern: /include/i, longer_alt: Identifier });
export const Image = addNewToken({ name: "image", pattern: /image/i, longer_alt: Identifier });
export const InstanceOf = addNewToken({ name: "instanceOf", pattern: /instanceof/i, longer_alt: Identifier });
export const Instances = addNewToken({ name: "instances", pattern: /instances/i, longer_alt: Identifier });
export const InfrastructureNode = addNewToken({ name: "infrastructureNode", pattern: /infrastructurenode/i, longer_alt: Identifier });
export const Views = addNewToken({name: "views", pattern: /views/i, longer_alt: Identifier  });
export const SystemLandscape = addNewToken({name: "systemLandscape", pattern: /systemlandscape/i });
export const SystemContext = addNewToken({name: "systemContext", pattern: /systemcontext/i });
export const Tags = addNewToken({name: "tags", pattern: /tags/i, longer_alt: Identifier });
export const Tag = addNewToken({name: "tag", pattern: /tag/i, longer_alt: Tags });
export const Technology = addNewToken({name: "technology", pattern: /technology/i, longer_alt: Identifier });
export const Perspectives = addNewToken({name: "perspectives", pattern: /perspectives/i, longer_alt: Identifier});
export const Properties = addNewToken({name: "properties", pattern: /properties/i, longer_alt: Identifier});
export const AutoLayout = addNewToken({name: "autoLayout", pattern: /autoLayout/i, longer_alt: Identifier});
export const Default = addNewToken({name: "default", pattern: /default/i, longer_alt: Identifier});
export const Animation = addNewToken({name: "animation", pattern: /animation/i, longer_alt: Identifier});
export const Title = addNewToken({name: "title", pattern: /title/i, longer_alt: Identifier});
export const Styles = addNewToken({name: "styles", pattern: /styles/i, longer_alt: Identifier});
export const Light = addNewToken({name: "light", pattern: /light/i, longer_alt: Identifier});
export const Dark = addNewToken({name: "dark", pattern: /dark/i, longer_alt: Identifier});
export const Relationship = addNewToken({name: "relationship", pattern: /relationship/i, longer_alt: Identifier});
export const Themes = addNewToken({name: "themes", pattern: /themes/i, longer_alt: Identifier});
export const Theme = addNewToken({name: "theme", pattern: /theme/i, longer_alt: Themes});
export const Terminology = addNewToken({name: "terminology", pattern: /terminology/i, longer_alt: Identifier});
export const Configuration = addNewToken({name: "configuration", pattern: /configuration/i, longer_alt: Identifier});
export const Scope = addNewToken({name: "scope", pattern: /scope/i, longer_alt: Identifier});
export const Visibility = addNewToken({name: "visibility", pattern: /visibility/i, longer_alt: Identifier});
export const Users = addNewToken({name: "users", pattern: /users/i, longer_alt: Identifier});

/// Values
export const HexColor = addNewToken({ name: "hexColor", pattern: /#[0-9A-Fa-f]{6}/, longer_alt: HashComment });
export const Boolean = addNewToken({ name: "boolean", pattern: /true|false/i, longer_alt: Identifier });

/// Furniture
export const LBrace = addNewToken({ name: "lBrace", pattern: /\{/, label: "{" });
export const RBrace = addNewToken({ name: "rBrace", pattern: /\}/, label: "}" });

/// Relationships
export const Equals = addNewToken({ name: "equals", pattern: /=/ });
export const RelatedTo = addNewToken({ name: "relatedTo", pattern: /->/ });

/// Wildcards
export const Wildcard = addNewToken({name: "wildcard", pattern: /(\*)/ });

/// Add Identifier as a longer alternative to all keywords so that they are not accidentally matched as keywords when they are used as identifiers
allTokens.push(Identifier);
allTokens.push(DottedProperty);

export const StructurizrLexer2 = new Lexer(allTokens);