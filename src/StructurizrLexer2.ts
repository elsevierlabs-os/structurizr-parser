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
export const HashComment = addNewToken({name: "hashComment", pattern: /\#(.*?)\r?\n/, group: Lexer.SKIPPED });

/// Noise - was /\s+/ but now also absorbing line ends
export const WhiteSpace = addNewToken({ name: 'whiteSpace', pattern: /[\s\t\n\r]+/, group: Lexer.SKIPPED });

/// Literals - was /"(?:[^\\"]|\\(?:[bfnrtv"\\/]|u[0-9a-fA-F]{4}))*"/ but I think this also included escaped char and unicode, maybe not required
export const StringLiteral = addNewToken({name: "stringLiteral", pattern: /"(?:[^"\\]|\\.)*"/ });

/// URL
export const Url = addNewToken({name: "url", pattern: /(https?:\/\/[^ ]*)/i});

/// Identifiers was /[a-zA-Z_0-9]\w*/ and /[a-zA-z][a-zA-z.]*\_?[0-9]*/
export const DottedProperty = createToken({ name: 'dottedProperty', pattern: /[a-zA-Z][a-zA-Z.]*_?[0-9]*/ });
export const Identifier = createToken({ name: 'identifier', pattern: /[a-zA-Z_0-9-]+/, longer_alt: DottedProperty });

/// Keywords
export const BangInclude = addNewToken({name: "bangInclude", pattern: /!include/i });
export const BangConstant = addNewToken({name: "bangConstant", pattern: /!constant/i });
export const BangDocs = addNewToken({name: "bangDocs", pattern: /!docs/i });
export const BangAdrs = addNewToken({name: "bangAdrs", pattern: /!adrs/i });
export const BangIndentifiers = addNewToken({name: "bangIdentifiers", pattern: /!identifiers/i });
export const BangImpliedRelationships = addNewToken({name: "bangImpliedRelationships", pattern: /!impliedrelationships/i });
export const Workspace = addNewToken({ name: "workspace", pattern: /workspace/i, longer_alt: Identifier });
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
export const DeploymentEnvironment = addNewToken({ name: "deploymentEnvironment", pattern: /deploymentenvironment/i, longer_alt: Identifier });
export const DeploymentGroup = addNewToken({ name: "deploymentGroup", pattern: /deploymentgroup/i, longer_alt: Identifier });
export const DeploymentNode = addNewToken({ name: "deploymentNode", pattern: /deploymentnode/i, longer_alt: Identifier });
export const Element = addNewToken({ name: "element", pattern: /element/i, longer_alt: Identifier });
export const HealthCheck = addNewToken({ name: "healthCheck", pattern: /healthcheck/i, longer_alt: Identifier });
export const InstanceOf = addNewToken({ name: "instanceOf", pattern: /instanceof/i, longer_alt: Identifier });
export const InfrastructureNode = addNewToken({ name: "infrastructureNode", pattern: /infrastructurenode/i, longer_alt: Identifier });
export const Views = addNewToken({name: "views", pattern: /views/i, longer_alt: Identifier  });
export const SystemLandscape = addNewToken({name: "systemLandscape", pattern: /systemlandscape/i });
export const SystemContext = addNewToken({name: "systemContext", pattern: /systemcontext/i });
export const Include = addNewToken({name: "include", pattern: /include/i, longer_alt: Identifier});
export const Properties = addNewToken({name: "properties", pattern: /properties/i, longer_alt: Identifier});

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