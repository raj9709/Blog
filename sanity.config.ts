import { getDefaultDocumentNode } from "./structure"
/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision"
import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { schema } from "./sanity/schema"
import { myTheme } from "./theme"
import StudioNavbar from "./components/StudioNavbar"
import StudioLogo from "./components/StudioLogo"
import { markdownSchema } from "sanity-plugin-markdown/next"
import { CustomMarkdownInput } from "./components/CustomMarkdownInput"
const dataset=process.env.NEXT_PUBLIC_SANITY_DATASET;
const projectId=process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const apiVersion=process.env.NEXT_PUBLIC_SANITY_API_VERSION 



export default defineConfig({
  basePath: "/studio",
  name: "Genzworld_content_studio",
  title: "Genzworld Content Studio",
  projectId: "4q4e83g9",

  dataset: "production",
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool({ defaultDocumentNode: getDefaultDocumentNode }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    // defaultDocumentNode: getDefaultDocumentNode,
    visionTool(),
    // markdownSchema({ input: CustomMarkdownInput }),
    // { defaultApiVersion: apiVersion }
  ],
  theme: myTheme,
  studio: {
    components: {
      navbar: StudioNavbar,
      logo: StudioLogo,
    },
  },
});
