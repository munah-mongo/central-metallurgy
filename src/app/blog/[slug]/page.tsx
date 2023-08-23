"use client"
import { HeadElement } from "@/components/body/head";
import Navbar from "@/components/body/navbar";
import Footer from "@/components/body/footer";
import { metasitedata } from "@/lib/utils";
import { Metadata } from "next/types";
import datasource from "@/datalayer";
import { serialize } from "next-mdx-remote/serialize";

export default function BlogSlugPage({ doc, source}) {
    let docs = doc;
  
    // const ogUrl = new URL(`${docs.image.largeimage.url}`);
    // ogUrl.searchParams.set("heading", docs.title);
    // ogUrl.searchParams.set("type", docs.title);
    // ogUrl.searchParams.set("mode", "light");
  
    return (
      <>
        {/* <HeadElementRemote head={docs} surl={ogUrl} /> */}
        <HeadElement url="" image="" title="Contacts" description="" />
        <Navbar />
          <main
            className={`flex flex-col mx-32 py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px] justify-items-center justify-center items-center `}
          >
            <article
              itemScope
              itemType="https://schema.org/mainEntityOfPage"
              className="bg-transparent"
              lang="en"
            >
              <div className="flex flex-col mx-24 justify-items-center justify-center items-center w-full min-w-full">
                {/* <Mdx code={source} /> */}
                <hr className="my-4 md:my-6" />
              </div>
            </article>
          </main>
          <Footer />
      </>
    );
  }

  export const getStaticPaths = async () => {
    const slugs = await datasource.getBlogSlugs();
    const paths = slugs?.map((slug) => ({
      params: {
        slug,
      },
    }));
    return {
      paths,
      fallback: true,
    };
  };
  
  BlogSlugPage.getInitialProps = async (context) => {
    const slug = context.params.slug;
  
    const doc = await datasource.getBlogsBySlug({ slug });
    const mdxSource = await serialize(doc.text);
  
    if (!doc) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  
    return {
      props: {
        doc,
        source: mdxSource,
      },
      revalidate: 5,
    };
  };
  