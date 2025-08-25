import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/**/index.en.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
    summary: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" }, required: true },
    repoUrl: { type: "string", required: true },
    demoUrl: { type: "string", required: false },
    coverImage: { type: "string", required: false }
  },
  computedFields: {
    url: { type: "string", resolve: (doc) => `/projects/${doc.slug}/` }
  }
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Project]
});