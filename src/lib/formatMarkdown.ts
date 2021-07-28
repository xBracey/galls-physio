import marked from "marked";

export const formatMarkdown = (markdown: string) => {
  return marked(
    markdown.replaceAll(
      "\\n",
      `
       `
    ),
    { breaks: true }
  );
};
