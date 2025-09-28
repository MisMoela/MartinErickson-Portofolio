import { Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

// Define the shape of the toast props for type safety
interface ToastProps {
  title: string;
  description: string;
}

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_hrivaqm", // 🔑 Replace with your service ID
        "template_hj0pkwc", // 🔑 Replace with your template ID
        formRef.current,
        {
          publicKey: "ZbHI2nMIsXx8YcvHP", // 🔑 Replace with your public key
        }
      )
      .then(
        () => {
          toast({
            title: "Message sent!",
            description: "Thank you for your message, I'll get back to you soon!",
          } as ToastProps);
          setIsSubmitting(false);
          formRef.current?.reset(); // ✅ reset form after sending
        },
        (error) => {
          toast({
            title: "Message failed",
            description: "Something went wrong. Please try again later.",
          } as ToastProps);
          console.error("FAILED...", error.text);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out. 
          I'm always open to seeking new opportunities
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 text-left">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:martinerickson.work@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    martinerickson.work@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+6281210781375"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +62 81210781375
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground">Jakarta, Indonesia</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect with Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/martin-erickson-10b930307/"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://www.instagram.com/m4rtin.17/"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact form card */}
          <div className="card p-8 shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Name..."
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="yourgmail@email.com..."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full flex items-center justify-center gap-2",
                  "bg-primary text-primary-foreground px-4 py-3 rounded-full hover:bg-primary/90 transition-colors"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
