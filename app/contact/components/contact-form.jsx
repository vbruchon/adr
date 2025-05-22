"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema } from "@/schema/form-schema";
import { Form } from "@/src/components/ui/form";
import { useState, useRef } from "react";
import { InputField } from "./input-field";
import { TextareaField } from "./textarea-field";
import { SubmitButton } from "./submit-button";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "sonner";

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const recaptchaRef = useRef < ReCAPTCHA > null;

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

    try {
      const token = await recaptchaRef.current.executeAsync();
      recaptchaRef.current.reset();

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, token }),
      });

      if (response.ok) {
        toast.success("Votre message a été envoyé avec succès");
        form.reset();
      } else {
        toast.error("Une erreur s'est produite. Veuillez réessayer plus tard");
      }
    } catch (err) {
      console.error("Erreur lors de l'envoi du formulaire", err);
      toast.error("Une erreur inattendue est survenue");
    } finally {
      setIsLoading(false);
    }
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
          placeholder="votre-email@exemple.fr"
          form={form}
        />
        <TextareaField
          name="message"
          label="Message"
          placeholder="Veuillez saisir votre demande"
          form={form}
        />

        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.RECAPTCHA_SITE_KEY}
          size="invisible"
        />

        <SubmitButton isLoading={isLoading} />
      </form>
    </Form>
  );
};
