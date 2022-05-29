import marked from "marked";

export const formatMarkdown = (markdown: string) => {
  const markdownText = markdown ?? "";

  if (markdownText === "") return "";

  return marked(
    markdownText.replaceAll(
      "\\n",
      `
       `
    ),
    { breaks: true }
  );
};
