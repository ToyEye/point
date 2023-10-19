import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas/";

const config = defineConfig({
  projectId: "ja91qsig",
  dataset: "production",
  title: "Litvinova Point",
  apiVersion: "2023-18-10",
  basePath: "/admin",

  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
