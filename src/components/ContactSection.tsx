import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef<number | null>(null);
  const [formStatus, setFormStatus] = useState<{
    message: string;
    isError: boolean;
  } | null>(null);

  // This ensures reCAPTCHA is rendered properly after component mount
  useEffect(() => {
    // Check if grecaptcha is loaded
    if (window.grecaptcha && document.getElementById("recaptcha")) {
      try {
        // Render the recaptcha
        recaptchaRef.current = window.grecaptcha.render("recaptcha", {
          sitekey: "6LcobDsfAAAAAJ5SkZfzeqgRB6SufTNWDmJyojTK",
        });
      } catch (error) {
        // Already rendered, ignore
      }
    }
  }, []);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    // Get the reCAPTCHA response
    let gRecaptchaResponse = "";
    if (recaptchaRef.current !== null) {
      gRecaptchaResponse = window.grecaptcha.getResponse(recaptchaRef.current);
    }

    if (!gRecaptchaResponse) {
      setFormStatus({
        message: "Please complete the reCAPTCHA verification.",
        isError: true,
      });
      setIsSubmitting(false);
      return;
    }

    const dataToPost = {
      name,
      email,
      msg: message,
      gRecaptchaResponse,
    };

    try {
      const contactReq = await fetch("/api/contact", {
        body: JSON.stringify(dataToPost),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const resp = await contactReq.json();

      // Reset reCAPTCHA
      if (recaptchaRef.current !== null) {
        window.grecaptcha.reset(recaptchaRef.current);
      }

      // Reset form fields
      setName("");
      setEmail("");
      setMessage("");

      if (resp?.error) {
        console.error(resp);
        setFormStatus({
          message: "Something went wrong. Please try again later.",
          isError: true,
        });
      } else {
        setFormStatus({
          message: "Thanks! I'll reach out to you as soon as possible!",
          isError: false,
        });
      }
    } catch (error) {
      console.error(error);
      setFormStatus({
        message: "Something went wrong. Please try again later.",
        isError: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-3xl font-bold mb-4">📬 Get in Touch</h2>
          <p className="text-foreground/70 max-w-4xl">
            Have a question or want to talk about projects? Drop me a message
            and I'll get back to you as soon as possible.
          </p>
        </motion.div>{" "}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative">
            {/* Contact Information Card */}
            <div className="lg:col-span-2 rounded-2xl border border-purple-500/20 p-8 bg-card/40 backdrop-blur-xl shadow-lg shadow-purple-500/5 transform hover:scale-[1.01] transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Contact Information
              </h3>

              <div className="space-y-6 text-foreground/80">
                <div className="flex items-center group">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mr-4 group-hover:bg-purple-500/20 transition-colors duration-300">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Location</p>
                    <p className="font-medium">Pune, India</p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mr-4 group-hover:bg-purple-500/20 transition-colors duration-300">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Email</p>
                    <a
                      href="mailto:sid@siddhesh.me"
                      className="font-medium text-purple-500 hover:text-purple-600 transition-colors"
                    >
                      sid@siddhesh.me
                    </a>
                  </div>
                </div>{" "}
                <div className="pt-6 border-t border-border/30">
                  <p className="text-sm text-foreground/60 mb-4">
                    Connect with me
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/SiddheshNan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-card/80 hover:bg-purple-500/10 border border-border/20 hover:border-purple-500/30 shadow-sm hover:shadow-md transition-all duration-300 group"
                    >
                      <svg
                        className="w-5 h-5 text-foreground/70 group-hover:text-purple-500 transition-colors"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      <span className="font-medium text-foreground/70 group-hover:text-purple-500 transition-colors">
                        GitHub
                      </span>
                    </a>
                    <a
                      href="https://linkedin.com/in/siddheshnan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-card/80 hover:bg-purple-500/10 border border-border/20 hover:border-purple-500/30 shadow-sm hover:shadow-md transition-all duration-300 group"
                    >
                      <svg
                        className="w-5 h-5 text-foreground/70 group-hover:text-purple-500 transition-colors"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                      <span className="font-medium text-foreground/70 group-hover:text-purple-500 transition-colors">
                        LinkedIn
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Card */}
            <div className="lg:col-span-3 rounded-2xl border border-purple-500/20 p-8 bg-card/40 backdrop-blur-xl shadow-lg shadow-purple-500/5">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Send a Message
              </h3>

              <form
                id="contactForm"
                className="space-y-5"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 gap-5">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground/70"
                    >
                      Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200"
                        required
                        maxLength={64}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground/70"
                    >
                      Email
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200"
                        required
                        maxLength={64}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="msg"
                      className="block text-sm font-medium text-foreground/70"
                    >
                      Message
                    </label>
                    <div className="relative">
                      <textarea
                        className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200"
                        placeholder="Write your message here..."
                        name="msg"
                        id="msg"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                        maxLength={2500}
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="g-recaptcha" id="recaptcha"></div>
                </div>

                <div className="flex items-center justify-between">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </Button>

                  {formStatus && (
                    <div
                      className={`rounded-md px-4 py-2 ${
                        formStatus.isError
                          ? "bg-red-500/10 text-red-500"
                          : "bg-green-500/10 text-green-500"
                      }`}
                    >
                      <p className="text-sm font-medium">
                        {formStatus.message}
                      </p>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute -z-10 top-1/2 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl opacity-30"></div>
          <div className="absolute -z-10 bottom-1/4 right-1/4 w-72 h-72 bg-pink-500/20 rounded-full filter blur-3xl opacity-30"></div>
        </motion.div>
      </div>
    </section>
  );
}
