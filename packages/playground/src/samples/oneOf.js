module.exports = {
  schema: {
    type: "object",
    oneOf: [
      {
        $ref: "#/components/schemas/Cat"
      },
      {
        $ref: "#/components/schemas/Dog"
      }
    ],
    "components": {
      "schemas": {
        "Pet": {
          "type": "object",
          "required": [
            "pet_type"
          ],
          "properties": {
            "pet_type": {
              "type": "string"
            }
          },
          "discriminator": {
            "propertyName": "pet_type"
          }
        },
        "Dog": {
          "allOf": [
            {
              "$ref": "#/components/schemas/Pet"
            },
            {
              "type": "object",
              "properties": {
                "bark": {
                  "type": "boolean"
                },
                "breed": {
                  "type": "string",
                  "enum": ["Dingo", "Husky", "Retriever", "Shepherd"]
                }
              }
            }
          ]
        },
        "Cat": {
          "type": "object",
          "allOf": [
            {
              "$ref": "#/components/schemas/Pet"
            },
            {
              "type": "object",
              "properties": {
                "hunts": {
                  "type": "boolean"
                },
                "age": {
                  "type": "integer"
                }
              }
            }
          ]
        },
      }
    }
  },
  formData: {},
};
