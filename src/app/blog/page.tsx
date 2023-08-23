import Footer from "@/components/body/footer";
import { HeadElement } from "@/components/body/head";
import Navbar from "@/components/body/navbar";
import { metasitedata } from "@/lib/utils";
import { Metadata } from "next/types";
import datasource from "@/datalayer";

export const metadata: Metadata = {
    title: metasitedata.title + "Blog",
    description: metasitedata.description,
  };


export default function BlogPage() {
    return (
        <>
        <HeadElement url="" image="" title="Contacts" description="" />
        <Navbar />
        <Footer />
        </>
    );
}