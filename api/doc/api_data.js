define({ "api": [
  {
    "type": "get",
    "url": "/members",
    "title": "List members",
    "name": "Show_member_list",
    "description": "<p>Shows member list.</p>",
    "group": "Members",
    "examples": [
      {
        "title": "Use pseudocode:",
        "content": "$http([\n    method => \"GET\"\n    url => \"http://{base_url}/members\",\n]);",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "data.places",
            "description": "<p>place list</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>Object with data</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/MemberController.php",
    "groupTitle": "Members",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          },
          {
            "group": "Error 4xx",
            "type": "object",
            "optional": true,
            "field": "errors",
            "description": "<p>Object with errors</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": true,
            "field": "exception",
            "description": "<p>Exception name</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": true,
            "field": "file",
            "description": "<p>Error's file</p>"
          },
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": true,
            "field": "line",
            "description": "<p>Error's line number</p>"
          },
          {
            "group": "Error 4xx",
            "type": "array",
            "optional": true,
            "field": "trace",
            "description": "<p>Array with trace</p>"
          }
        ]
      }
    }
  }
] });
