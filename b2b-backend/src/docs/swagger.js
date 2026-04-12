// src/docs/swagger.js

import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "B2B E-Commerce API",
      version: "1.0.0",
      description: "API documentation for B2B platform",
    },
    servers: [
      {
        url: "http://localhost:5000/api/v1",
      },
    ],
  },
  apis: ["./src/modules/**/*.js"], // scan routes
};

const swaggerSpec = swaggerJsDoc(options);

export const setupSwagger = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};