"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema } from "@/schema/form-schema";
import { Form } from "@/src/components/ui/form";
import { useState } from "react";
import { InputField } from "./input-field";
import { TextareaField } from "./textarea-field";
import { SubmitButton } from "./submit-button";

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (values) => {
    setIsLoading(true);
    console.log(values);
    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid md:grid-cols-2 md:gap-4 space-y-8 md:space-y-0">
          <InputField
            name="name"
            label="Nom"
            placeholder="Votre nom"
            form={form}
          />
          <InputField
            name="phone"
            label="N° Téléphone"
            placeholder="0655065506"
            form={form}
          />
        </div>

        <InputField
          name="email"
          label="Email"
          placeholder="votre-email@emai.fr"
          form={form}
        />
        <TextareaField
          name="message"
          label="Message"
          placeholder="Veuillez saisir votre demande"
          form={form}
        />
        <SubmitButton isLoading={isLoading} />
      </form>
    </Form>
  );
};
