import marked from "marked";

export const formatMarkdown = (markdown: string) => {
  const markdownText = markdown ?? "";

  return marked(
    markdownText.replaceAll(
      "\\n",
      `
       `
    ),
    { breaks: true }
  );
};
