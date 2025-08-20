{
  "definitions": [
    {
      "title": "Profile",
      "id": "profile",
      "plugins": {
        "xwalk": {
          "page": {
            "resourceType": "core/franklin/components/block/v1/block",
            "template": {
              "name": "Profile",
              "model": "profile"
            }
          }
        }
      }
    }
  ],
  "models": [
    {
      "id": "profile",
      "fields": [
        {
          "component": "reference",
          "valueType": "string",
          "name": "image",
          "label": "Image",
          "multi": false
        },
        {
          "component": "richtext",
          "valueType": "string",
          "name": "personName",
          "label": "Person Name",
          "value": ""
        },
        {
          "component": "text",
          "valueType": "string",
          "name": "designation",
          "label": "Designation",
          "value": ""
        }
      ]
    }
  ],
  "filters": []
}
