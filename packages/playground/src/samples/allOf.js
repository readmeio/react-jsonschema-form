module.exports = {
  schema: {
    type: "object",
    allOf: [
      {
        properties: {
          lorem: {
            type: ["string", "number"],
          },
        },
      },
      {
        properties: {
          lorem: {
            type: "number",
            minLength: 5,
          },
          ipsum: {
            type: "string",
          },
        },
      },
    ],
  },
  formData: {},
};
