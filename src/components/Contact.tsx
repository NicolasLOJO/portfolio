"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { toast, Toaster } from "react-hot-toast";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message envoyé avec succès !");
        (event.target as HTMLFormElement).reset();
      } else {
        toast.error("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (error) {
      toast.error("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-slate-50 dark:bg-slate-900"
    >
      <Toaster position="top-center" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="max-w-4xl mx-auto overflow-hidden p-0">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 bg-primary text-primary-foreground flex flex-col justify-center">
                <h2 className="text-3xl font-bold">Parlons de votre projet.</h2>
                <p className="mt-4 opacity-90">
                  Une idée en tête ? Une opportunité à discuter ? <br />
                  Je suis toujours ouvert à de nouvelles collaborations.
                  Remplissez le formulaire et je vous répondrai au plus vite.
                </p>
              </div>

              <div className="p-8 md:p-12">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="name">Votre nom</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Nicolas Lopez"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Votre email</Label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="nicolas@exemple.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Votre message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Bonjour, je vous contacte pour..."
                      rows={5}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={loading}
                  >
                    {loading ? "Envoi en cours..." : "Envoyer le message"}
                  </Button>
                </form>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
