"use client"
import { HeadElement } from "@/components/body/head";
import Navbar from "@/components/body/navbar";
import Footer from "@/components/body/footer";
import BlogComponent from "@/components/global/blog";


export default function BlogSlugPage() {
  
    // const ogUrl = new URL(`${docs.image.largeimage.url}`);
    // ogUrl.searchParams.set("heading", docs.title);
    // ogUrl.searchParams.set("type", docs.title);
    // ogUrl.searchParams.set("mode", "light");
  
    return (
      <>
        {/* <HeadElementRemote head={docs} surl={ogUrl} /> */}
        <HeadElement url="" image="" title="Contacts" description="" />
        <Navbar />
          <BlogComponent />
          <Footer />
      </>
    );
  }

  
  