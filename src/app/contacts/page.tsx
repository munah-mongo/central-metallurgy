"use client";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/contacts.module.css";
import Navbar from "@/components/body/navbar";
import Footer from "@/components/body/footer";
import { HeadElement } from "@/components/body/head";
import { metasitedata } from "@/lib/utils";
import { Metadata } from "next/types";
import datasource from "@/datalayer";
import { ContactFormSchema, ContactFormResolver } from "@/lib/form-schema";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/body/icons";

export const metadata: Metadata = {
  title: metasitedata.title + "Contacts",
  description: metasitedata.description,
};

const contactFS = ContactFormSchema();
export default function Contacts({ url }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = ContactFormResolver();

  //submitting form data
  async function onSubmit(data: z.infer<typeof contactFS>) {
    let values = form.getValues();
    setIsLoading(true);
    const responce = await datasource.postContactForm({ data, url });
    if (responce) {
      form.reset(values);
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
    return;
  }

  return (
    <>
      <HeadElement url="" image="" title="Contacts" description="" />

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
      />

      <Navbar />
      <div className={styles.contacts}>
        <div className={styles.contents}>
          <h2>GET IN TOUCH</h2>
        </div>
      </div>
      <div className={styles.contact}>
        <div className={styles.content}>
          <p>Do you have any questions for us or need a quote?</p>
        </div>
        <div className={styles.container}>
          <div className={styles.contactInfo}>
            <div className={styles.box}>
              <div className={styles.icon}>
                <i className="fa fa-map-marker-alt" aria-hidden="true"></i>
              </div>
              <div className={styles.text}>
                <h3>Address</h3>
                <p>1st Floor, New Market Plaza</p>
                <p>Nairobi, Kenya</p>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.icon}>
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className={styles.text}>
                <h3>Office Tel</h3>
                <p>+254 700 000 000</p>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.icon}>
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className={styles.text}>
                <h3>Email</h3>
                <p>info@email.com</p>
              </div>
            </div>
          </div>
          <div className={styles.contactForm}>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-2/3 space-y-6 text-foreground"
              >
                <h2>Message Us</h2>
                <div className={styles.inputBox}>
                  <FormField
                    control={form.control}
                    name="fullname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold">
                          Full Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter full name"
                            className="text-lg font-medium min-h-[50px]"
                            {...field}
                            {...form.register("fullname")}
                          />
                        </FormControl>
                        {/* <FormDescription>
                  </FormDescription> */}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className={styles.inputBox}>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold">
                          Email Address
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Enter email address"
                            className="text-lg font-medium min-h-[50px]"
                            {...field}
                            {...form.register("email")}
                          />
                        </FormControl>
                        {/* <FormDescription>
                  </FormDescription> */}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className={styles.inputBox}>
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold">
                          Company Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter company name"
                            className="text-lg font-medium min-h-[50px]"
                            {...field}
                            {...form.register("company")}
                          />
                        </FormControl>
                        {/* <FormDescription>
                  </FormDescription> */}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className={styles.inputBox}>
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold">
                          Subject
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter your subject"
                            className="text-lg font-medium min-h-[50px]"
                            {...field}
                            {...form.register("subject")}
                          />
                        </FormControl>
                        {/* <FormDescription>
                  </FormDescription> */}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className={styles.inputBox}>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold">
                          Message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Type your message"
                            className="resize-none text-lg font-medium text-foreground placeholder:text-foreground min-h-[50px] bg-slate-100"
                            {...field}
                            {...form.register("message")}
                          />
                        </FormControl>
                        {/* <FormDescription>
                  </FormDescription> */}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className={styles.inputBox}>
                  <Button type="submit" name="submit" disabled={isLoading}>
                    {isLoading && (
                      <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Send Message
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
    const url = process.env.BACKEND_API_URL;
  
    return {
      props: {
        url: url,
      },
    };
  };
