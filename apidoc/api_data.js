define({ "api": [
  {
    "type": "get",
    "url": "/discovery",
    "title": "Get avaiable things and rpis",
    "name": "Discovery",
    "group": "Thing",
    "description": "<p>Get avaiable things and rpis until when you requested.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "response",
            "description": "<p>List of rpis and their attached things</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Discovery Example:",
          "content": "{\n    \"b07882d6-5c28-597b-89f9-d250f74b0bad\": {\n        \"time\": \"2016-09-20 18:05:56.124096\",\n        \"things\": [\n            {\n                \"id\": \"0\",\n                \"attributes\": {},\n                \"type\": \"lamp\"\n            },\n            {\n                \"id\": \"1\",\n                \"attributes\": {},\n                \"type\": \"temperature\"\n            }\n        ],\n        \"ip\": \"192.168.1.4\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "I1820/http/route.py",
    "groupTitle": "Thing"
  },
  {
    "type": "post",
    "url": "/thing",
    "title": "Get thing states or Change thing settings",
    "name": "Thing",
    "group": "Thing",
    "description": "<p>Read or Update thing states and settings respectively based on I1820 Information Model.</p>",
    "error": {
      "examples": [
        {
          "title": "Thing Not Found:",
          "content": "HTTP/1.1 400 Bad Request\nhumidity is not one of things",
          "type": "string"
        },
        {
          "title": "RPi Not Discovered:",
          "content": "HTTP/1.1 404 Not Found\naa60d333-42ee-4311-87fc-ac08b1dd8773 is not one of our RPi's",
          "type": "string"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "request",
            "description": "<p>Thing requested states or Thing target settings</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "States Request Example:",
          "content": "{\n    \"type\": \"temperature\",\n    \"device_id\": 0,\n    \"rpi_id\": \"cdede389-2315-419c-b1d5-ee9a9b43be2a\",\n    \"states\": [\n        \"temperature\"\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Settings Target Example:",
          "content": "{\n    \"type\": \"lamp\",\n    \"device_id\": 0,\n    \"rpi_id\": \"cdede389-2315-419c-b1d5-ee9a9b43be2a\",\n    \"settings\": {\n        \"on\": true\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "response",
            "description": "<p>Value of thing requested states or New value of thing target settings</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "States Request Example:",
          "content": "{\n    \"temperature\": 10\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "I1820/http/route.py",
    "groupTitle": "Thing"
  }
] });
