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
import { useState } from "react";
import datasource from "@/datalayer";
import { ContactFormSchema, ContactFormResolver } from "@/lib/form-schema";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/body/icons";
import styles from "../styles/contacts.module.css";

const contactFS = ContactFormSchema();
export default function ContactForm(props) {
  let { url } = props;

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
