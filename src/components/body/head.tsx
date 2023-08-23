import Head from "next/head";

export const metadata = {
  title: "Central Metallurgical Kenya & Labs",
  description:
    "Central Metallurgical Kenya and Labs is a premier metallurgical testing laboratory dedicated to delivering accurate and insightful material analysis. With advanced technology and a skilled team, we serve diverse industries, ensuring quality, compliance, and informed decision-making. Trust us to uncover the hidden properties of your materials and drive excellence in your products.",
};
export function HeadElement({ url, image, title, description}: any) {
  return (
    <>
      <Head>
        <title>{`${metadata.title} | ${title}`}</title>
        <meta name="description" content={description || metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge, chrome=1" />
        <meta name="revisit-after" content="1 days"/>
        <base href={url}/>
        <link rel="canonical" href={url}/>
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url}/>
        <meta
          property="og:title"
          content={title || metadata.title}
        />
        <meta
          property="og:description"
          content={description || metadata.description}
        />
        <meta
          property="og:image"
          content={image}
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta
          property="twitter:title"
          content={title || metadata.title}
        />
        <meta
          property="twitter:description"
          content={description || metadata.description}
        />
        <meta
          property="twitter:image"
          content={image}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="shortcut icon" href="/logos/favicons/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/logos/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image.png"
          sizes="32x32"
          href="/logos/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image.png"
          sizes="16x16"
          href="/logos/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/logos/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/logos/favicons/safari-pinned-tab.svg"
          color="#35ED35"
        />
        <meta name="msapplication-TileColor" content="#35ED35" />
        <meta name="theme-color" content="#35ED35" />
      </Head>
    </>
  );
}
