import React from "react";
import { Helmet } from "react-helmet";

interface IHead {
  title: string;
  metaTags?: {
    title: string;
    image: string;
    type: string;
  };
}

export const Head = ({ title, metaTags }: IHead) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta
        name="description"
        content="First Team Physiotherapy - Hartlepool based physiotherapy specialising in sports physiotherapy. "
      />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/static/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/static/favicon/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />

      {metaTags && <meta property="og:title" content={metaTags.title} />}
      {metaTags && <meta property="og:type" content={metaTags.type} />}
      {metaTags && <meta property="og:url" content={window.location.href} />}
      {metaTags && <meta property="og:image" content={metaTags.image} />}
      {metaTags && <meta name="twitter:title" content={metaTags.title} />}
      {metaTags && <meta name="twitter:image" content={metaTags.image} />}
      {metaTags && <meta name="twitter:card" content="summary_large_image" />}
    </Helmet>
  );
};
