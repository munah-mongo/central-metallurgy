"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export function ContactFormSchema() {
  const FormSchema = z.object({
    fullname: z
      .string()
      .min(2, {
        message: "Fullname must be at least 2 characters.",
      })
      .max(50, {
        message: "Fullname must not exceed 50 characters.",
      }),
    email: z
      .string()
      .min(1, {
        message: "Email must be at least 1 character.",
      })
      .email({
        message: "This is not a valid email.",
      }),
    company: z.string().min(1, {
      message: "Company / Institution must be at least 1 character.",
    }),
    subject: z.string(
        {
            required_error: "Please select an subject to display.",
          }
    ).min(1, {
      message: "Subject must be at least 1 character.",
    }),
    message: z.string().min(1, {
      message: "Message must be at least 1 character.",
    }),
  });

  return FormSchema;
}

export function ContactFormResolver() {
  const contactFS = ContactFormSchema();
  const form = useForm<z.infer<typeof contactFS>>({
    resolver: zodResolver(contactFS),
    defaultValues: {
        fullname: "",
        email: "",
        company: "",
        subject: "",
        message: "",
    }
  });

  return form;
}
