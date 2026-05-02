workspace {

    !impliedRelationships false

    properties {
        "localWorkspaceId" "4"
    }

    model {
        u = person "User"
        ss = softwareSystem "Software System" {
            wa = container "Web Application"
            db = container "Database Schema" {
                tags "Database"
            }
        }

        u -> wa "Uses"
        wa -> db "Reads from and writes to"
    }

    views {
        systemContext ss "Diagram1" {
            include *
            autolayout lr
        }

        container ss "Diagram2" {
            include *
            autolayout lr
        }

        styles {
            element "Element" {
                color #f88728
                stroke #f88728
                strokeWidth 7
                shape roundedbox
            }
            element "Person" {
                shape person
            }
            element "Database" {
                shape cylinder
            }
            element "Boundary" {
                strokeWidth 5
            }
            relationship "Relationship" {
                thickness 4
            }
        }

        # Do not change the theme or add 'styles' to this DSL file. Contact the Structurizr Server admin for any theme changes.
        # The rationale for this restriction is to ensure that C4 diagrams are consistent across all workspaces in the C4 Server.
        theme https://c4-server-static-assets.develop.nonprod.scopus.elsevier.systems/theme.json        
    }
}