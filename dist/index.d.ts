import * as chevrotain from 'chevrotain';
import { Lexer, CstParser } from 'chevrotain';

declare const BlockComment: chevrotain.TokenType;
declare const LineComment: chevrotain.TokenType;
declare const HashComment: chevrotain.TokenType;
declare const Url: chevrotain.TokenType;
declare const FilePath: chevrotain.TokenType;
declare const StringLiteral: chevrotain.TokenType;
declare const Identifier: chevrotain.TokenType;
declare const BangInclude: chevrotain.TokenType;
declare const BangConstant: chevrotain.TokenType;
declare const BangDocs: chevrotain.TokenType;
declare const BangAdrs: chevrotain.TokenType;
declare const BangIndentifiers: chevrotain.TokenType;
declare const BangImpliedRelationships: chevrotain.TokenType;
declare const Workspace: chevrotain.TokenType;
declare const Extends: chevrotain.TokenType;
declare const Model: chevrotain.TokenType;
declare const Name: chevrotain.TokenType;
declare const Enterprise: chevrotain.TokenType;
declare const Group: chevrotain.TokenType;
declare const Person: chevrotain.TokenType;
declare const SoftwareSystem: chevrotain.TokenType;
declare const Container: chevrotain.TokenType;
declare const Component: chevrotain.TokenType;
declare const DeploymentEnvironment: chevrotain.TokenType;
declare const DeploymentGroup: chevrotain.TokenType;
declare const DeploymentNode: chevrotain.TokenType;
declare const InfrastructureNode: chevrotain.TokenType;
declare const SoftwareSystemInstance: chevrotain.TokenType;
declare const ContainerInstance: chevrotain.TokenType;
declare const Element: chevrotain.TokenType;
declare const Technology: chevrotain.TokenType;
declare const Tags: chevrotain.TokenType;
declare const Tag: chevrotain.TokenType;
declare const Views: chevrotain.TokenType;
declare const SystemLandscape: chevrotain.TokenType;
declare const SystemContext: chevrotain.TokenType;
declare const Filtered: chevrotain.TokenType;
declare const Dynamic: chevrotain.TokenType;
declare const Deployment: chevrotain.TokenType;
declare const Custom: chevrotain.TokenType;
declare const Image: chevrotain.TokenType;
declare const Title: chevrotain.TokenType;
declare const Animation: chevrotain.TokenType;
declare const Styles: chevrotain.TokenType;
declare const Relationship: chevrotain.TokenType;
declare const Themes: chevrotain.TokenType;
declare const Theme: chevrotain.TokenType;
declare const Branding: chevrotain.TokenType;
declare const Terminology: chevrotain.TokenType;
declare const Configuration: chevrotain.TokenType;
declare const Users: chevrotain.TokenType;
declare const Include: chevrotain.TokenType;
declare const AutoLayout: chevrotain.TokenType;
declare const Description: chevrotain.TokenType;
declare const Properties: chevrotain.TokenType;
declare const Shape: chevrotain.TokenType;
declare const Background: chevrotain.TokenType;
declare const Color: chevrotain.TokenType;
declare const Colour: chevrotain.TokenType;
declare const ShapeEnum: chevrotain.TokenType;
declare const FontSize: chevrotain.TokenType;
declare const Opacity: chevrotain.TokenType;
declare const StructurizrLocale: chevrotain.TokenType;
declare const StructurizrTimezone: chevrotain.TokenType;
declare const StructurizrSort: chevrotain.TokenType;
declare const StructurizrTooltips: chevrotain.TokenType;
declare const StructurizrTitle: chevrotain.TokenType;
declare const StructurizrDescription: chevrotain.TokenType;
declare const StructurizrMetadata: chevrotain.TokenType;
declare const StructurizrEnterpriseBoundary: chevrotain.TokenType;
declare const StructurizrGroupSeparator: chevrotain.TokenType;
declare const StructurizrGroups: chevrotain.TokenType;
declare const StructurizrSoftwareSystemBoundaries: chevrotain.TokenType;
declare const Equals: chevrotain.TokenType;
declare const RelatedTo: chevrotain.TokenType;
declare const Value: chevrotain.TokenType;
declare const Bool: chevrotain.TokenType;
declare const HexColor: chevrotain.TokenType;
declare const Word: chevrotain.TokenType;
declare const Float: chevrotain.TokenType;
declare const Int: chevrotain.TokenType;
declare const Wildcard: chevrotain.TokenType;
declare const LBrace: chevrotain.TokenType;
declare const RBrace: chevrotain.TokenType;
declare const WhiteSpace: chevrotain.TokenType;
declare const allTokens: chevrotain.TokenType[];
declare const StructurizrLexer: Lexer;

declare class structurizrParser extends CstParser {
    constructor();
    workspaceWrapper: chevrotain.ParserMethod<[], chevrotain.CstNode>;
    private workspaceSection;
    private modelSection;
    private modelChildSection;
    private propertiesSection;
    private timezoneProperty;
    private localeProperty;
    private sortProperty;
    private tooltipsProperty;
    private titleProperty;
    private descriptionProperty;
    private metadataProperty;
    private enterpriseBoundaryProperty;
    private groupSeparatorProperty;
    private groupsProperty;
    private softwareSystemBoundariesProperty;
    private systemGroupSection;
    private systemGroupChildSection;
    private descriptionAttribute;
    private tagsAttribute;
    private personSection;
    private personChildSection;
    private softwareSystemSection;
    private softwareSystemChildSection;
    private containerGroupSection;
    private containerGroupChildSection;
    private containerSection;
    private containerChildSection;
    private componentGroupSection;
    private componentGroupChildSection;
    private componentSection;
    private explicitRelationship;
    private implicitRelationship;
    private deploymentEnvironmentSection;
    private deploymentEnvironmentChildSection;
    private deploymentNodeSection;
    private deploymentNodeChildSection;
    private containerInstanceSection;
    private softwareSystemInstanceSection;
    private viewsSection;
    private viewsChildSection;
    private systemLandscapeView;
    private viewOptions;
    private includeOptions;
    private autoLayoutOptions;
    private animationOptions;
    private descriptionOptions;
    private propertiesOptions;
    private systemContextView;
    private containerView;
    private componentView;
    private imageSection;
    private dynamicSection;
    private deploymentSection;
    private stylesSection;
    private elementStyleSection;
    private relationshipStyleSection;
    private shapeStyle;
    private backgroundStyle;
    private colorStyle;
    private colourStyle;
    private fontStyle;
    private opacityStyle;
}
declare const StructurizrParser: structurizrParser;
declare const BaseStructurizrVisitor: new (...args: any[]) => chevrotain.ICstVisitor<any, any>;
declare const BaseStructurizrVisitorWithDefaults: new (...args: any[]) => chevrotain.ICstVisitor<any, any>;

interface components {
    schemas: {
        /** @description Represents a Structurizr workspace, which is a wrapper for a software architecture model, views, and documentation. */
        Workspace: {
            /**
             * Format: long
             * @description The workspace ID.
             */
            id?: number;
            /** @description The name of the workspace. */
            name?: string;
            /** @description A short description of the workspace. */
            description?: string;
            /** @description A version number for the workspace. */
            version?: string;
            /** @description The thumbnail associated with the workspace; a Base64 encoded PNG file as a data URI (data:image/png;base64). */
            thumbnail?: string;
            /** @description The last modified date, in ISO 8601 format (e.g. "2018-09-08T12:40:03Z"). */
            lastModifiedDate?: string;
            /** @description A string identifying the user who last modified the workspace (e.g. an e-mail address or username). */
            lastModifiedUser?: string;
            /** @description A string identifying the agent that was last used to modify the workspace (e.g. "structurizr-java/1.2.0"). */
            lastModifiedAgent?: string;
            model?: components["schemas"]["Model"];
            views?: components["schemas"]["Views"];
            documentation?: components["schemas"]["Documentation"];
            configuration?: components["schemas"]["WorkspaceConfiguration"];
            /** @description A set of arbitrary name-value properties. */
            properties?: {
                [key: string]: unknown;
            };
        };
        /** @description A software architecture model. */
        Model: {
            /** @description The enterprise associated with this model. */
            enterprise?: {
                /** @description The name of the enterprise. */
                name?: string;
            };
            people?: components["schemas"]["Person"][];
            softwareSystems?: components["schemas"]["SoftwareSystem"][];
            deploymentNodes?: components["schemas"]["DeploymentNode"][];
            /** @description A set of arbitrary name-value properties. */
            properties?: {
                [key: string]: unknown;
            };
        };
        /** @description A person who uses a software system. */
        Person: {
            /** @description The ID of this person in the model. */
            id?: string;
            /** @description The name of this person. */
            name?: string;
            /** @description A short description of this person. */
            description?: string;
            /** @description A comma separated list of tags associated with this person. */
            tags?: string;
            /** @description The URL where more information about this element can be found. */
            url?: string;
            /**
             * @description The location of this person.
             * @enum {string}
             */
            location?: "External" | "Internal" | "Unspecified";
            /** @description The name of the group in which this person should be included in. */
            group?: string;
            /** @description A set of arbitrary name-value properties. */
            properties?: {
                [key: string]: unknown;
            };
            /** @description The set of perspectives associated with this element. */
            perspectives?: components["schemas"]["Perspective"][];
            /** @description The set of relationships from this person to other elements. */
            relationships?: components["schemas"]["Relationship"][];
        };
        /** @description A software system. */
        SoftwareSystem: {
            /** @description The ID of this software system in the model. */
            id?: string;
            /** @description The name of this software system. */
            name?: string;
            /** @description A short description of this software system. */
            description?: string;
            /**
             * @description The location of this software system.
             * @enum {string}
             */
            location?: "External" | "Internal" | "Unspecified";
            /** @description A comma separated list of tags associated with this software system. */
            tags?: string;
            /** @description The URL where more information about this element can be found. */
            url?: string;
            /** @description The set of containers within this software system. */
            containers?: components["schemas"]["Container"][];
            /** @description The name of the group in which this software system should be included in. */
            group?: string;
            /** @description A set of arbitrary name-value properties. */
            properties?: {
                [key: string]: unknown;
            };
            /** @description The set of perspectives associated with this element. */
            perspectives?: components["schemas"]["Perspective"][];
            /** @description The set of relationships from this software system to other elements. */
            relationships?: components["schemas"]["Relationship"][];
            documentation?: components["schemas"]["Documentation"];
        };
        /** @description A container (something that can execute code or host data). */
        Container: {
            /** @description The ID of this container in the model. */
            id?: string;
            /** @description The name of this container. */
            name?: string;
            /** @description A short description of this container. */
            description?: string;
            /** @description The technology associated with this container (e.g. Apache Tomcat). */
            technology?: string;
            /** @description A comma separated list of tags associated with this container. */
            tags?: string;
            /** @description The URL where more information about this element can be found. */
            url?: string;
            /** @description The set of components within this container. */
            components?: components["schemas"]["Component"][];
            /** @description The name of the group in which this container should be included in. */
            group?: string;
            /** @description A set of arbitrary name-value properties. */
            properties?: {
                [key: string]: unknown;
            };
            /** @description The set of perspectives associated with this element. */
            perspectives?: components["schemas"]["Perspective"][];
            /** @description The set of relationships from this container to other elements. */
            relationships?: components["schemas"]["Relationship"][];
            documentation?: components["schemas"]["Documentation"];
        };
        /** @description A component (a grouping of related functionality behind an interface that runs inside a container). */
        Component: {
            /** @description The ID of this component in the model. */
            id?: string;
            /** @description The name of this component. */
            name?: string;
            /** @description A short description of this component. */
            description?: string;
            /** @description The technology associated with this component (e.g. Spring Bean). */
            technology?: string;
            /** @description A comma separated list of tags associated with this component. */
            tags?: string;
            /** @description The URL where more information about this element can be found. */
            url?: string;
            /** @description The name of the group in which this component should be included in. */
            group?: string;
            /** @description A set of arbitrary name-value properties. */
            properties?: {
                [key: string]: unknown;
            };
            /** @description The set of perspectives associated with this element. */
            perspectives?: components["schemas"]["Perspective"][];
            /** @description The set of relationships from this component to other elements. */
            relationships?: components["schemas"]["Relationship"][];
            documentation?: components["schemas"]["Documentation"];
        };
        /** @description A deployment node. */
        DeploymentNode: {
            /** @description The ID of this deployment node in the model. */
            id?: string;
            /** @description The name of this deployment node. */
            name?: string;
            /** @description A short description of this deployment node. */
            description?: string;
            /** @description The technology associated with this deployment node (e.g. Apache Tomcat). */
            technology?: string;
            /** @description The deployment environment in which this deployment node resides (e.g. "Development", "Live", etc). */
            environment?: string;
            /** @description The number of instances; either a number (e.g. 1, 2, etc) or a range (e.g. 0..N, 0..*, 1..3, etc). */
            instances?: string;
            /** @description A comma separated list of tags associated with this deployment node. */
            tags?: string;
            /** @description The URL where more information about this element can be found. */
            url?: string;
            /** @description The set of child/nested deployment nodes. */
            children?: components["schemas"]["DeploymentNode"][];
            infrastructureNodes?: components["schemas"]["InfrastructureNode"][];
            /** @description The set of software systems instances running in this deployment node.. */
            softwareSystemInstances?: components["schemas"]["SoftwareSystemInstance"][];
            /** @description The set of container instances running in this deployment node.. */
            containerInstances?: components["schemas"]["ContainerInstance"][];
            /** @description A set of arbitrary name-value properties. */
            properties?: {
                [key: string]: unknown;
            };
            /** @description The set of perspectives associated with this element. */
            perspectives?: components["schemas"]["Perspective"][];
            /** @description The set of relationships from this deployment node to other elements. */
            relationships?: components["schemas"]["Relationship"][];
        };
        /** @description An infrastructure node. */
        InfrastructureNode: {
            /** @description The ID of this infrastructure node in the model. */
            id?: string;
            /** @description The name of this infrastructure node. */
            name?: string;
            /** @description A short description of this infrastructure node. */
            description?: string;
            /** @description The technology associated with this infrastructure node (e.g. "Route 53"). */
            technology?: string;
            /** @description The deployment environment in which this infrastructure node resides (e.g. "Development", "Live", etc). */
            environment?: string;
            /** @description A comma separated list of tags associated with this infrastructure node. */
            tags?: string;
            /** @description The URL where more information about this element can be found. */
            url?: string;
            /** @description A set of arbitrary name-value properties. */
            properties?: {
                [key: string]: unknown;
            };
            /** @description The set of perspectives associated with this element. */
            perspectives?: components["schemas"]["Perspective"][];
            /** @description The set of relationships from this infrastructure node to other elements. */
            relationships?: components["schemas"]["Relationship"][];
        };
        /** @description An instance of a software system, running on a deployment node. */
        SoftwareSystemInstance: {
            /** @description The ID of this software system instance in the model. */
            id?: string;
            /** @description The ID of the software system this is an instance of. */
            softwareSystemId?: string;
            /** @description The number/index of this instance. */
            instanceId?: number;
            /** @description The deployment environment in which this software system instance resides (e.g. "Development", "Live", etc). */
            environment?: string;
            /** @description A comma separated list of tags associated with this software system instance. */
            tags?: string;
            /** @description A set of arbitrary name-value properties. */
            properties?: {
                [key: string]: unknown;
            };
            /** @description The set of perspectives associated with this element. */
            perspectives?: components["schemas"]["Perspective"][];
            /** @description The set of relationships from this software system instance to other elements. */
            relationships?: components["schemas"]["Relationship"][];
            /** @description The set of HTTP-based health checks for this software system instance. */
            healthChecks?: components["schemas"]["HttpHealthCheck"][];
        };
        /** @description An instance of a container, running on a deployment node. */
        ContainerInstance: {
            /** @description The ID of this container instance in the model. */
            id?: string;
            /** @description The ID of the container this is an instance of. */
            containerId?: string;
            /** @description The number/index of this instance. */
            instanceId?: number;
            /** @description The deployment environment in which this container instance resides (e.g. "Development", "Live", etc). */
            environment?: string;
            /** @description A comma separated list of tags associated with this container instance. */
            tags?: string;
            /** @description A set of arbitrary name-value properties. */
            properties?: {
                [key: string]: unknown;
            };
            /** @description The set of perspectives associated with this element. */
            perspectives?: components["schemas"]["Perspective"][];
            /** @description The set of relationships from this container instance to other elements. */
            relationships?: components["schemas"]["Relationship"][];
            /** @description The set of HTTP-based health checks for this container instance. */
            healthChecks?: components["schemas"]["HttpHealthCheck"][];
        };
        /** @description Describes a HTTP based health check. */
        HttpHealthCheck: {
            /** @description The name of the health check. */
            name?: string;
            /** @description The health check URL/endpoint. */
            url?: string;
            /**
             * Format: integer
             * @description The polling interval, in seconds.
             */
            interval?: number;
            /**
             * Format: integer
             * @description The timeout after which a health check is deemed as failed, in milliseconds.
             */
            timeout?: number;
            /** @description A set of name-value pairs corresponding to HTTP headers that should be sent with the request. */
            headers?: {
                [key: string]: unknown;
            };
        };
        /** @description A relationship between two elements. */
        Relationship: {
            /** @description The ID of this relationship in the model. */
            id?: string;
            /** @description A short description of this relationship. */
            description?: string;
            /** @description A comma separated list of tags associated with this relationship. */
            tags?: string;
            /** @description The URL where more information about this relationship can be found. */
            url?: string;
            /** @description A set of arbitrary name-value properties. */
            properties?: {
                [key: string]: unknown;
            };
            /** @description The set of perspectives associated with this relationship. */
            perspectives?: components["schemas"]["Perspective"][];
            /** @description The ID of the source element. */
            sourceId?: string;
            /** @description The ID of the destination element. */
            destinationId?: string;
            /** @description The technology associated with this relationship (e.g. HTTPS, JDBC, etc). */
            technology?: string;
            /**
             * @description The interaction style (synchronous or asynchronous).
             * @enum {string}
             */
            interactionStyle?: "Synchronous" | "Asynchronous";
            /** @description The ID of the container-container relationship upon which this container instance-container instance relationship is based. */
            linkedRelationshipId?: string;
        };
        /** @description Represents an architectural perspective, that can be applied to elements and relationships. */
        Perspective: {
            /** @description The name of this perspective (e.g. "Security"). */
            name?: string;
            /** @description The description of this perspective. */
            description?: string;
            /** @description The value of this perspective (optional). */
            value?: string;
        };
        /** @description The set of views onto a software architecture model. */
        Views: {
            /** @description The set of system landscape views. */
            systemLandscapeViews?: components["schemas"]["SystemLandscapeView"][];
            /** @description The set of system context views. */
            systemContextViews?: components["schemas"]["SystemContextView"][];
            /** @description The set of container views. */
            containerViews?: components["schemas"]["ContainerView"][];
            /** @description The set of component views. */
            componentViews?: components["schemas"]["ComponentView"][];
            /** @description The set of dynamic views. */
            dynamicViews?: components["schemas"]["DynamicView"][];
            /** @description The set of deployment views. */
            deploymentViews?: components["schemas"]["DeploymentView"][];
            /** @description The set of filtered views. */
            filteredViews?: components["schemas"]["FilteredView"][];
            /** @description The set of image views. */
            imageViews?: components["schemas"]["ImageView"][];
            configuration?: components["schemas"]["Configuration"];
        };
        /** @description A system landscape view. */
        SystemLandscapeView: {
            /** @description A unique identifier for this view. */
            key?: string;
            /** @description An integer representing the creation order of this view. */
            order?: number;
            /** @description The title of this view (optional). */
            title?: string;
            /** @description The description of this view. */
            description?: string;
            /** @description A set of arbitrary name-value properties. */
            properties?: {
                [key: string]: unknown;
            };
            /**
             * @description The paper size that should be used to render this view.
             * @enum {string}
             */
            paperSize?: "A6_Portrait" | "A6_Landscape" | "A5_Portrait" | "A5_Landscape" | "A4_Portrait" | "A4_Landscape" | "A3_Portrait" | "A3_Landscape" | "A2_Portrait" | "A2_Landscape" | "A1_Portrait" | "A1_Landscape" | "A0_Portrait" | "A0_Landscape" | "Letter_Portrait" | "Letter_Landscape" | "Legal_Portrait" | "Legal_Landscape" | "Slide_4_3" | "Slide_16_9" | "Slide_16_10";
            dimensions?: components["schemas"]["Dimensions"];
            automaticLayout?: components["schemas"]["AutomaticLayout"];
            /** @description Specifies whether the enterprise boundary (to differentiate internal elements from external elements) should be visible on the resulting diagram. */
            enterpriseBoundaryVisible?: boolean;
            /** @description The set of elements in this views. */
            elements?: components["schemas"]["ElementView"][];
            /** @description The set of relationships in this views. */
            relationships?: components["schemas"]["RelationshipView"][];
            /** @description The set of animation steps (optional). */
            animations?: components["schemas"]["AnimationStep"][];
        };
        /** @description A system context view. */
        SystemContextView: {
            /** @description A unique identifier for this view. */
            key?: string;
            /** @description An integer representing the creation order of this view. */
            order?: number;
            /** @description The title of this view (optional). */
            title?: string;
            /** @description The description of this view. */
            description?: string;
            /** @description A set of arbitrary name-value properties. */
            properties?: {
                [key: string]: unknown;
            };
            /** @description The ID of the software system this view is associated with. */
            softwareSystemId?: string;
            /**
             * @description The paper size that should be used to render this view.
             * @enum {string}
             */
            paperSize?: "A6_Portrait" | "A6_Landscape" | "A5_Portrait" | "A5_Landscape" | "A4_Portrait" | "A4_Landscape" | "A3_Portrait" | "A3_Landscape" | "A2_Portrait" | "A2_Landscape" | "A1_Portrait" | "A1_Landscape" | "A0_Portrait" | "A0_Landscape" | "Letter_Portrait" | "Letter_Landscape" | "Legal_Portrait" | "Legal_Landscape" | "Slide_4_3" | "Slide_16_9" | "Slide_16_10";
            dimensions?: components["schemas"]["Dimensions"];
            automaticLayout?: components["schemas"]["AutomaticLayout"];
            /** @description Specifies whether the enterprise boundary (to differentiate internal elements from external elements") should be visible on the resulting diagram. */
            enterpriseBoundaryVisible?: boolean;
            /** @description The set of elements in this view. */
            elements?: components["schemas"]["ElementView"][];
            /** @description The set of relationships in this view. */
            relationships?: components["schemas"]["RelationshipView"][];
            /** @description The set of animation steps (optional). */
            animations?: components["schemas"]["AnimationStep"][];
        };
        /** @description A container view. */
        ContainerView: {
            /** @description A unique identifier for this view. */
            key?: string;
            /** @description An integer representing the creation order of this view. */
            order?: number;
            /** @description The title of this view (optional). */
            title?: string;
            /** @description The description of this view. */
            description?: string;
            /** @description A set of arbitrary name-value properties. */
            properties?: {
                [key: string]: unknown;
            };
            /** @description The ID of the software system this view is associated with. */
            softwareSystemId?: string;
            /**
             * @description The paper size that should be used to render this view.
             * @enum {string}
             */
            paperSize?: "A6_Portrait" | "A6_Landscape" | "A5_Portrait" | "A5_Landscape" | "A4_Portrait" | "A4_Landscape" | "A3_Portrait" | "A3_Landscape" | "A2_Portrait" | "A2_Landscape" | "A1_Portrait" | "A1_Landscape" | "A0_Portrait" | "A0_Landscape" | "Letter_Portrait" | "Letter_Landscape" | "Legal_Portrait" | "Legal_Landscape" | "Slide_4_3" | "Slide_16_9" | "Slide_16_10";
            dimensions?: components["schemas"]["Dimensions"];
            automaticLayout?: components["schemas"]["AutomaticLayout"];
            /** @description The set of elements in this views. */
            elements?: components["schemas"]["ElementView"][];
            /** @description The set of relationships in this views. */
            relationships?: components["schemas"]["RelationshipView"][];
            /** @description The set of animation steps (optional). */
            animations?: components["schemas"]["AnimationStep"][];
            /** @description Specifies whether software system boundaries should be visible for "external" containers (those outside the software system in scope). */
            externalSoftwareSystemBoundariesVisible?: boolean;
        };
        /** @description A component view. */
        ComponentView: {
            /** @description A unique identifier for this view. */
            key?: string;
            /** @description An integer representing the creation order of this view. */
            order?: number;
            /** @description The title of this view (optional). */
            title?: string;
            /** @description The description of this view. */
            description?: string;
            /** @description A set of arbitrary name-value properties. */
            properties?: {
                [key: string]: unknown;
            };
            /** @description The ID of the container this view is associated with. */
            containerId?: string;
            /**
             * @description The paper size that should be used to render this view.
             * @enum {string}
             */
            paperSize?: "A6_Portrait" | "A6_Landscape" | "A5_Portrait" | "A5_Landscape" | "A4_Portrait" | "A4_Landscape" | "A3_Portrait" | "A3_Landscape" | "A2_Portrait" | "A2_Landscape" | "A1_Portrait" | "A1_Landscape" | "A0_Portrait" | "A0_Landscape" | "Letter_Portrait" | "Letter_Landscape" | "Legal_Portrait" | "Legal_Landscape" | "Slide_4_3" | "Slide_16_9" | "Slide_16_10";
            dimensions?: components["schemas"]["Dimensions"];
            automaticLayout?: components["schemas"]["AutomaticLayout"];
            /** @description The set of elements in this views. */
            elements?: components["schemas"]["ElementView"][];
            /** @description The set of relationships in this views. */
            relationships?: components["schemas"]["RelationshipView"][];
            /** @description The set of animation steps (optional). */
            animations?: components["schemas"]["AnimationStep"][];
            /** @description Specifies whether container boundaries should be visible for "external" components (those outside the container in scope). */
            externalContainerBoundariesVisible?: boolean;
        };
        /** @description A dynamic view. */
        DynamicView: {
            /** @description A unique identifier for this view. */
            key?: string;
            /** @description An integer representing the creation order of this view. */
            order?: number;
            /** @description The title of this view (optional). */
            title?: string;
            /** @description The description of this view. */
            description?: string;
            /** @description A set of arbitrary name-value properties. */
            properties?: {
                [key: string]: unknown;
            };
            /** @description The ID of the element this view is associated with (optional). */
            elementId?: string;
            /**
             * @description The paper size that should be used to render this view.
             * @enum {string}
             */
            paperSize?: "A6_Portrait" | "A6_Landscape" | "A5_Portrait" | "A5_Landscape" | "A4_Portrait" | "A4_Landscape" | "A3_Portrait" | "A3_Landscape" | "A2_Portrait" | "A2_Landscape" | "A1_Portrait" | "A1_Landscape" | "A0_Portrait" | "A0_Landscape" | "Letter_Portrait" | "Letter_Landscape" | "Legal_Portrait" | "Legal_Landscape" | "Slide_4_3" | "Slide_16_9" | "Slide_16_10";
            dimensions?: components["schemas"]["Dimensions"];
            automaticLayout?: components["schemas"]["AutomaticLayout"];
            /** @description The set of elements in this views. */
            elements?: components["schemas"]["ElementView"][];
            /** @description The set of relationships in this views. */
            relationships?: components["schemas"]["RelationshipView"][];
            /** @description Specifies software system/container boundaries should be visible for "external" containers/components (those outside the element in scope) */
            externalBoundariesVisible?: boolean;
        };
        /** @description A deployment view. */
        DeploymentView: {
            /** @description A unique identifier for this view. */
            key?: string;
            /** @description An integer representing the creation order of this view. */
            order?: number;
            /** @description The title of this view (optional). */
            title?: string;
            /** @description The description of this view. */
            description?: string;
            /** @description A set of arbitrary name-value properties. */
            properties?: {
                [key: string]: unknown;
            };
            /** @description The ID of the software system this view is associated with (optional). */
            softwareSystemId?: string;
            /** @description The name of the environment that this deployment view is for (e.g. "Development", "Live", etc). */
            environment?: string;
            /**
             * @description The paper size that should be used to render this view.
             * @enum {string}
             */
            paperSize?: "A6_Portrait" | "A6_Landscape" | "A5_Portrait" | "A5_Landscape" | "A4_Portrait" | "A4_Landscape" | "A3_Portrait" | "A3_Landscape" | "A2_Portrait" | "A2_Landscape" | "A1_Portrait" | "A1_Landscape" | "A0_Portrait" | "A0_Landscape" | "Letter_Portrait" | "Letter_Landscape" | "Legal_Portrait" | "Legal_Landscape" | "Slide_4_3" | "Slide_16_9" | "Slide_16_10";
            dimensions?: components["schemas"]["Dimensions"];
            automaticLayout?: components["schemas"]["AutomaticLayout"];
            /** @description The set of elements in this views. */
            elements?: components["schemas"]["ElementView"][];
            /** @description The set of relationships in this views. */
            relationships?: components["schemas"]["RelationshipView"][];
            /** @description The set of animation steps (optional). */
            animations?: components["schemas"]["AnimationStep"][];
        };
        /** @description Represents a view on top of a view, which can be used to include or exclude specific elements. */
        FilteredView: {
            /** @description A unique identifier for this view. */
            key?: string;
            /** @description An integer representing the creation order of this view. */
            order?: number;
            /** @description The title of this view (optional). */
            title?: string;
            /** @description The description of this view. */
            description?: string;
            /** @description A set of arbitrary name-value properties. */
            properties?: {
                [key: string]: unknown;
            };
            /** @description The key of the view on which this filtered view is based. */
            baseViewKey?: string;
            /**
             * @description Whether elements/relationships are being included or excluded based upon the set of tags.
             * @enum {string}
             */
            mode?: "Include" | "Exclude";
            /** @description The set of tags to include/exclude elements/relationships when rendering this filtered view. */
            tags?: string[];
        };
        /** @description A view that has been rendered elsewhere (e.g. PlantUML, Mermaid, Kroki, etc) as a image (e.g. PNG). */
        ImageView: {
            /** @description A unique identifier for this view. */
            key?: string;
            /** @description An integer representing the creation order of this view. */
            order?: number;
            /** @description The title of this view (optional). */
            title?: string;
            /** @description The description of this view. */
            description?: string;
            /** @description A set of arbitrary name-value properties. */
            properties?: {
                [key: string]: unknown;
            };
            /** @description The ID of the element this view is associated with (optional). */
            elementId?: string;
            /** @description The content of this image view, which needs to be a URL or a data URI. */
            content?: string;
            /** @description The content type of this view (e.g. "image/png"). */
            contentType?: string;
        };
        /** @description An instance of a model element (Person, Software System, Container or Component) in a View. */
        ElementView: {
            /** @description The ID of the element. */
            id?: string;
            /**
             * Format: integer
             * @description The horizontal position of the element when rendered.
             */
            x?: number;
            /**
             * Format: integer
             * @description The vertical position of the element when rendered.
             */
            y?: number;
        };
        /** @description An instance of a model relationship in a View. */
        RelationshipView: {
            /** @description The ID of the relationship. */
            id?: string;
            /** @description The description of this relationship (used in dynamic views only). */
            description?: string;
            /** @description Signifies whether this relationship represents a return/response message (used in dynamic views only). */
            response?: boolean;
            /** @description Gets the order of this relationship (used in dynamic views only; e.g. 1.0, 1.1, 2.0, etc). */
            order?: string;
            /** @description The set of vertices used to render the relationship. */
            vertices?: components["schemas"]["Vertex"][];
            /**
             * @description The routing algorithm used when rendering this individual relationship.
             * @enum {string}
             */
            routing?: "Direct" | "Curved" | "Orthogonal";
            /**
             * Format: integer
             * @description The position of the annotation along the line; 0 (start) to 100 (end).
             */
            position?: number;
        };
        /** @description The X, Y coordinate of a bend in a line. */
        Vertex: {
            /**
             * Format: integer
             * @description The horizontal position of the vertex when rendered.
             */
            x?: number;
            /**
             * Format: integer
             * @description The vertical position of the vertex when rendered.
             */
            y?: number;
        };
        /** @description An animation step */
        AnimationStep: {
            /**
             * Format: integer
             * @description The order of this animation step.
             */
            order?: number;
            /** @description The set of element IDs that should be included in this animation step. */
            elements?: string[];
            /** @description The set of relationship IDs that should be included in this animation step. */
            relationships?: string[];
        };
        /** @description Represents a width and height pair. */
        Dimensions: {
            /**
             * Format: integer
             * @description The width (pixels).
             */
            width?: number;
            /**
             * Format: integer
             * @description The height (pixels).
             */
            height?: number;
        };
        /** @description Represents the auto-layout configuration for a given view. */
        AutomaticLayout: {
            /**
             * @description The automatic layout implementation.
             * @enum {string}
             */
            implementation?: "Graphviz" | "Dagre";
            /**
             * @description The algorithm rank direction.
             * @enum {string}
             */
            rankDirection?: "TopBottom" | "BottomTop" | "LeftRight" | "RightLeft";
            /**
             * Format: integer
             * @description The separation between ranks (pixels).
             */
            rankSeparation?: number;
            /**
             * Format: integer
             * @description The separation between nodes in the same rank (pixels).
             */
            nodeSeparation?: number;
            /**
             * Format: integer
             * @description The separation between edges (pixels).
             */
            edgeSeparation?: number;
            /** @description Whether vertices should be created during automatic layout. */
            vertices?: boolean;
        };
        /** @description The configuration associated with a set of views. */
        Configuration: {
            /** @description The styles associated with this set of views. */
            styles?: {
                /** @description The set of element styles. */
                elements?: components["schemas"]["ElementStyle"][];
                /** @description The set of relationship styles. */
                relationships?: components["schemas"]["RelationshipStyle"][];
            };
            /** @description The key of the view that was saved most recently. */
            lastSavedView?: string;
            /** @description The key of the view that should be shown by default. */
            defaultView?: string;
            /** @description The URL(s) of the theme(s) to be used when rendering diagrams. */
            themes?: string[];
            branding?: components["schemas"]["Branding"];
            terminology?: components["schemas"]["Terminology"];
            /**
             * @description The type of symbols to use when rendering metadata.
             * @enum {string}
             */
            metadataSymbols?: "SquareBrackets," | "RoundBrackets," | "CurlyBrackets," | "AngleBrackets," | "DoubleAngleBrackets," | "None";
            /** @description A set of arbitrary name-value properties. */
            properties?: {
                [key: string]: unknown;
            };
        };
        /** @description A wrapper for the font and logo for diagram/documentation branding purposes. */
        Branding: {
            /**
             * Format: url
             * @description A Base64 data URI representation of a PNG/JPG/GIF file.
             */
            logo?: string;
            /** @description Represents a font, including a name and an optional URL for web fonts. */
            font?: {
                /** @description The font name (e.g. "Times New Roman", "Open Sans", etc). */
                name?: string;
                /**
                 * Format: url
                 * @description For web fonts, the URL where the font can be found.
                 */
                url?: string;
            };
        };
        /** @description A definition of an element style. */
        ElementStyle: {
            /** @description The tag to which this element style applies. */
            tag?: string;
            /**
             * Format: integer
             * @description The width of the element, in pixels.
             */
            width?: number;
            /**
             * Format: integer
             * @description The height of the element, in pixels.
             */
            height?: number;
            /** @description The background colour of the element, as a HTML RGB hex string (e.g. '#ffffff'). */
            background?: string;
            /** @description The stroke colour of the element, as a HTML RGB hex string (e.g. '#000000'). */
            stroke?: string;
            /**
             * Format: integer
             * @description The width of the stroke, in pixels.
             */
            strokeWidth?: number;
            /** @description The foreground (text) colour of the element, as a HTML RGB hex string (e.g. '#ffffff'). */
            color?: string;
            /**
             * Format: integer
             * @description The standard font size used to render text, in pixels.
             */
            fontSize?: number;
            /**
             * @description The shape used to render the element.
             * @enum {string}
             */
            shape?: "Box" | "RoundedBox" | "Component" | "Circle" | "Ellipse" | "Hexagon" | "Diamond" | "Folder" | "Cylinder" | "Pipe" | "WebBrowser" | "Window" | "MobileDevicePortrait" | "MobileDeviceLandscape" | "Person" | "Robot";
            /** @description A Base64 data URI representation of a PNG/JPG/GIF file. */
            icon?: string;
            /**
             * @description The type of border used to render the element.
             * @enum {string}
             */
            border?: "Solid" | "Dashed" | "Dotted";
            /**
             * Format: integer
             * @description The opacity used when rendering the element; 0-100.
             */
            opacity?: number;
            /** @description Whether the element metadata should be shown or not. */
            metadata?: boolean;
            /** @description Whether the element description should be shown or not. */
            description?: boolean;
        };
        /** @description A definition of a relationship style. */
        RelationshipStyle: {
            /** @description The tag to which this relationship style applies. */
            tag?: string;
            /**
             * Format: integer
             * @description The thickness of the line, in pixels.
             */
            thickness?: number;
            /** @description The colour of the line, as a HTML RGB hex string (e.g. '#ffffff'). */
            color?: string;
            /**
             * Format: integer
             * @description The standard font size used to render the relationship annotation, in pixels.
             */
            fontSize?: number;
            /**
             * Format: integer
             * @description The width of the relationship annotation, in pixels.
             */
            width?: number;
            /** @description A flag to indicate whether the line is rendered as dashed or not. */
            dashed?: boolean;
            /**
             * @description The routing algorithm used when rendering lines.
             * @enum {string}
             */
            routing?: "Direct" | "Curved" | "Orthogonal";
            /**
             * Format: integer
             * @description The position of the annotation along the line; 0 (start) to 100 (end).
             */
            position?: number;
            /**
             * Format: integer
             * @description The opacity used when rendering the line; 0-100.
             */
            opacity?: number;
        };
        /** @description A wrapper for documentation. */
        Documentation: {
            sections?: components["schemas"]["DocumentationSection"][];
            decisions?: components["schemas"]["Decision"][];
            images?: components["schemas"]["Image"][];
        };
        /** @description A documentation section. */
        DocumentationSection: {
            /** @description The Markdown or AsciiDoc content of the section. */
            content?: string;
            /**
             * @description The content format type.
             * @enum {string}
             */
            format?: "Markdown" | "AsciiDoc";
            /**
             * Format: integer
             * @description The order (index) of the section in the document.
             */
            order?: number;
        };
        /** @description A decision record (e.g. architecture decision record). */
        Decision: {
            /** @description The ID of the decision. */
            id?: string;
            /** @description The date that the decision was made (ISO 8601 format). */
            date?: string;
            /**
             * @description The status of the decision.
             * @enum {string}
             */
            status?: "Proposed" | "Accepted" | "Superseded" | "Deprecated" | "Rejected";
            /** @description The title of the decision. */
            title?: string;
            /** @description The Markdown or AsciiDoc content of the section. */
            content?: string;
            /**
             * @description The content format type.
             * @enum {string}
             */
            format?: "Markdown" | "AsciiDoc";
            /** @description The ID of the element (in the model) that this decision applies to (optional). */
            elementId?: string;
        };
        /** @description Represents a base64 encoded image (png/jpg/gif). */
        Image: {
            /** @description The name of the image. */
            name?: string;
            /** @description The (base64 encoded) content of the image. */
            content?: string;
            /** @description The image MIME type (e.g. "image/png"). */
            type?: string;
        };
        /** @description Provides a way for the terminology on diagrams, etc to be modified (e.g. language translations). */
        Terminology: {
            /** @description The terminology used when rendering the enterprise boundary. */
            enterprise?: string;
            /** @description The terminology used when rendering people. */
            person?: string;
            /** @description The terminology used when rendering software systems. */
            softwareSystem?: string;
            /** @description The terminology used when rendering containers. */
            container?: string;
            /** @description The terminology used when rendering components. */
            component?: string;
            /** @description The terminology used when rendering code elements. */
            code?: string;
            /** @description The terminology used when rendering deployment nodes. */
            deploymentNode?: string;
            /** @description The terminology used when rendering relationships. */
            relationship?: string;
        };
        /** @description The workspace configuration (for Structurizr cloud service and on-premises installation). */
        WorkspaceConfiguration: {
            users?: components["schemas"]["User"][];
            /**
             * @description The visibility of the workspace
             * @enum {string}
             */
            visibility?: "Public" | "Private";
            /**
             * @description The scope of the workspace (can be unset for unscoped).
             * @enum {string}
             */
            scope?: "Landscape" | "SoftwareSystem";
        };
        /** @description Represents a user who should have access to a workspace. */
        User: {
            /** @description The username of the user (e.g. e-mail address). */
            username?: string;
            /**
             * @description The user's role.
             * @enum {string}
             */
            role?: "ReadWrite" | "ReadOnly";
        };
        /** @description An API response. */
        APIResponse: {
            /** @description true if the API call was successful, false otherwise. */
            success?: boolean;
            /** @description A human readable response message. */
            message?: string;
            /** @description The internal revision number. */
            revision?: number;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}

declare class rawInterpreter extends BaseStructurizrVisitor {
    private _debug;
    private workspace;
    private _systemGroup;
    private _containerGroup;
    private _componentGroup;
    private _groupSeparator;
    private _currentView;
    constructor();
    set Debug(flag: boolean);
    workspaceWrapper(node: any): {
        id?: number;
        name?: string;
        description?: string;
        version?: string;
        thumbnail?: string;
        lastModifiedDate?: string;
        lastModifiedUser?: string;
        lastModifiedAgent?: string;
        model?: components["schemas"]["Model"];
        views?: components["schemas"]["Views"];
        documentation?: components["schemas"]["Documentation"];
        configuration?: components["schemas"]["WorkspaceConfiguration"];
        properties?: {
            [key: string]: unknown;
        };
    };
    workspaceSection(node: any): void;
    modelSection(node: any): void;
    modelChildSection(node: any): void;
    propertiesSection(node: any): void;
    localeProperty(node: any): void;
    timezoneProperty(node: any): void;
    sortProperty(node: any): void;
    tooltipsProperty(node: any): void;
    titleProperty(node: any): void;
    descriptionProperty(node: any): void;
    metadataProperty(node: any): void;
    enterpriseBoundaryProperty(node: any): void;
    groupSeparatorProperty(node: any): void;
    groupsProperty(node: any): void;
    softwareSystemBoundariesProperty(node: any): void;
    systemGroupSection(node: any): void;
    systemGroupChildSection(node: any): void;
    personSection(node: any): void;
    personChildSection(node: any, person: components["schemas"]["Person"]): void;
    softwareSystemSection(node: any): void;
    softwareSystemChildSection(node: any, system: components["schemas"]["SoftwareSystem"]): void;
    descriptionAttribute(node: any, entity: any): void;
    tagsAttribute(node: any, entity: any): void;
    containerGroupSection(node: any): void;
    containerGroupChildSection(node: any): void;
    containerSection(node: any, system: components["schemas"]["SoftwareSystem"]): void;
    containerChildSection(node: any, container: components["schemas"]["Container"]): void;
    componentGroupSection(node: any): void;
    componentGroupChildSection(node: any): void;
    componentSection(node: any, container: components["schemas"]["Container"]): void;
    explicitRelationship(node: any): void;
    implicitRelationship(node: any): void;
    deploymentEnvironmentSection(node: any): void;
    deploymentEnvironmentChildSection(node: any): void;
    deploymentNodeSection(node: any): void;
    deploymentNodeChildSection(node: any): void;
    containerInstanceSection(node: any): void;
    softwareSystemInstanceSection(node: any): void;
    viewsSection(node: any): void;
    viewsChildSection(node: any): void;
    systemLandscapeView(node: any): void;
    viewOptions(node: any, view: any): void;
    includeOptions(node: any, view: any): void;
    autoLayoutOptions(node: any, view: any): void;
    animationOptions(node: any): void;
    descriptionOptions(node: any): void;
    propertiesOptions(node: any): void;
    systemContextView(node: any): void;
    containerView(node: any): void;
    componentView(node: any): void;
    imageSection(node: any): void;
    dynamicSection(node: any): void;
    deploymentSection(node: any): void;
    stylesSection(node: any): void;
    elementStyleSection(node: any): void;
    relationshipStyleSection(node: any): void;
    shapeStyle(node: any, es: components["schemas"]["ElementStyle"]): void;
    backgroundStyle(node: any, es: components["schemas"]["ElementStyle"]): void;
    colorStyle(node: any, es: components["schemas"]["ElementStyle"]): void;
    colourStyle(node: any, es: components["schemas"]["ElementStyle"]): void;
    fontStyle(node: any, es: components["schemas"]["ElementStyle"]): void;
    opacityStyle(node: any, es: components["schemas"]["ElementStyle"]): void;
    findSourceEntity(s_id: string): {
        id?: string;
        name?: string;
        description?: string;
        tags?: string;
        url?: string;
        location?: "External" | "Internal" | "Unspecified";
        group?: string;
        properties?: {
            [key: string]: unknown;
        };
        perspectives?: components["schemas"]["Perspective"][];
        relationships?: components["schemas"]["Relationship"][];
    } | {
        id?: string;
        name?: string;
        description?: string;
        technology?: string;
        tags?: string;
        url?: string;
        group?: string;
        properties?: {
            [key: string]: unknown;
        };
        perspectives?: components["schemas"]["Perspective"][];
        relationships?: components["schemas"]["Relationship"][];
        documentation?: components["schemas"]["Documentation"];
    };
    addAllElements(view: any): void;
}
declare const RawInterpreter: rawInterpreter;

declare class vsCodeVisitor extends BaseStructurizrVisitorWithDefaults {
    c4result: any[];
    constructor();
    workspaceWrapper(node: any): void;
    softwareSystemSection(ctx: any): void;
    softwareSystemChildSection(ctx: any): void;
    containerSection(ctx: any): void;
    containerChildSection(ctx: any): void;
    componentSection(ctx: any): void;
}
declare const VSCodeVisitor: vsCodeVisitor;

export { Animation, AutoLayout, Background, BangAdrs, BangConstant, BangDocs, BangImpliedRelationships, BangInclude, BangIndentifiers, BaseStructurizrVisitor, BaseStructurizrVisitorWithDefaults, BlockComment, Bool, Branding, Color, Colour, Component, Configuration, Container, ContainerInstance, Custom, Deployment, DeploymentEnvironment, DeploymentGroup, DeploymentNode, Description, Dynamic, Element, Enterprise, Equals, Extends, FilePath, Filtered, Float, FontSize, Group, HashComment, HexColor, Identifier, Image, Include, InfrastructureNode, Int, LBrace, LineComment, Model, Name, Opacity, Person, Properties, RBrace, RawInterpreter, RelatedTo, Relationship, Shape, ShapeEnum, SoftwareSystem, SoftwareSystemInstance, StringLiteral, StructurizrDescription, StructurizrEnterpriseBoundary, StructurizrGroupSeparator, StructurizrGroups, StructurizrLexer, StructurizrLocale, StructurizrMetadata, StructurizrParser, StructurizrSoftwareSystemBoundaries, StructurizrSort, StructurizrTimezone, StructurizrTitle, StructurizrTooltips, Styles, SystemContext, SystemLandscape, Tag, Tags, Technology, Terminology, Theme, Themes, Title, Url, Users, VSCodeVisitor, Value, Views, WhiteSpace, Wildcard, Word, Workspace, allTokens };
