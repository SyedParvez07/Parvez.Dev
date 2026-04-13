"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    // Validate form inputs
    const message = form.current.user_message.value.trim();
    const email = form.current.user_email.value.trim();
    
    if (!message || !email) {
      setError(true);
      return;
    }
    
    if (!email.includes("@")) {
      setError(true);
      return;
    }

    // Check if environment variables are set
    if (!process.env.NEXT_PUBLIC_SERVICE_ID || !process.env.NEXT_PUBLIC_TEMPLATE_ID || !process.env.NEXT_PUBLIC_PUBLIC_KEY) {
      setError(true);
      return;
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
          aria-label="Contact form"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="user_message" className="font-semibold">Message</label>
            <textarea
              id="user_message"
              rows={6}
              className="bg-transparent border-b-2 border-b-black outline-none resize-none"
              name="user_message"
              placeholder="Dear Parvez Dev,..."
              required
              aria-required="true"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="user_email" className="font-semibold">Email Address</label>
            <input
              id="user_email"
              name="user_email"
              type="email"
              className="bg-transparent border-b-2 border-b-black outline-none"
              placeholder="your@email.com"
              required
              aria-required="true"
            />
          </div>
          <span>Regards</span>
          <button 
            type="submit"
            className="bg-purple-200 rounded font-semibold text-gray-600 p-4 hover:bg-purple-300 transition-colors"
            aria-label="Send contact message"
          >
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold" role="alert">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold" role="alert">
              Something went wrong! Please fill in all fields correctly and ensure environment variables are set.
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
