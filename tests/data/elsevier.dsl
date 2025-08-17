workspace {

    !impliedRelationships false

    model {
        user = person "User" {
            description "A user of the software system"
            tags "Friendly"
        }
        system = softwareSystem "Software System"

        user -> system "Uses"
    }

    views {
        systemContext system {
            include *
            autolayout lr
        }

        theme https://c4-server-static-assets.develop.nonprod.scopus.elsevier.systems/theme.json
    }
    
}