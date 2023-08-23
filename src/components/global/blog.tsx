import datasource from "@/datalayer";
import { serialize } from "next-mdx-remote/serialize";
export default function BlogComponent(props){
    return (
        <>
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
  
  export const getStaticProps = async (context) => {
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