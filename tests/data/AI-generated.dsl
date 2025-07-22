workspace "Full Language Coverage" {
  // Metadata
  title "Comprehensive Structurizr DSL Test Document"
  description "This document exercises all key language features, artifacts, and syntax."

  // Model section
  model {
    // Elements
    person "Alice" {
      description "A user of the system"
      tags "end-user"
    }

    softwareSystem "Order Management System" {
      description "Handles orders"
      
      // Containers within the software system
      container "Web Application" {
        description "Allows users to place orders"
        technology "React, Node.js"
        tags "frontend"
      }

      container "Database" {
        description "Stores order data"
        technology "PostgreSQL"
        tags "database"
      }

      // Relationships
      "Alice" -> "Web Application" "Uses"
      "Web Application" -> "Database" "Reads from and writes to" {
        // Relationship with properties
        technology "JDBC"
        // Relationship tags
        tags "data-access"
      }
    }

    // Additional elements
    person "Bob" {
      description "A system administrator"
      tags "admin"
    }

    // More relationships
    "Bob" -> "Order Management System" "Manages" {
      tags "admin-relationship"
    }
  }

  // Views section
  views {
    systemLandscape {
      include *
      autolayout
    }

    systemContext {
      include "Order Management System"
      include "Alice"
      include "Bob"
      autolayout
    }

    container {
      include "Order Management System"
      autolayout
    }

    // Styles
    styles {
      element "Person" {
        shape "Person"
        background "#08427b"
        color "#ffffff"
      }
      element "softwareSystem" {
        shape "RoundedBox"
        background "#1168bd"
        color "#ffffff"
      }
      element "container" {
        shape "Cylinder"
        background "#999999"
        color "#000000"
      }
      relationship {
        color "#ff0000"
        dashed true
      }
    }
  }

  // Deployment view
  deployment {
    // Nodes representing infrastructure
    node "Web Server" {
      description "Hosts the web application"
      technology "AWS EC2"
    }

    node "Database Server" {
      description "Hosts the PostgreSQL database"
      technology "AWS RDS"
    }

    // Deployment nodes
    "Web Application" -> "Web Server" {}
    "Database" -> "Database Server" {}
  }

  // Additional features
  // Comments, annotations, and custom properties
  // Use of '!' for comments
  // Use of tags and properties on elements and relationships
  // Use of multiline descriptions and properties
}