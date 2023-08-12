import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import styles from "./Contact.module.scss";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Send the email using emailjs
    emailjs
      .send(
        // Service ID, Template ID, Template Parameters, Public Key
        "service_6zv5vsd",
        "template_wgjljqn",
        {
          from_name: form.name,
          to_name: "Jacob",

          from_email: form.email,
          to_email: "jacob@jacob.day",

          message: form.message,
        },
        "cTE1HnzxjT9vQZP9a"
      )
      .then(
        () => {
          setLoading(false);

          // Reset form
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          // console.log(error);
          console.error(error);

          alert("Message failed to send. Please try again.");
        }
      );
  };

  return (
    <section className={styles.contact}>
      <motion.div
        className={styles.formContainer}
        variants={slideIn("left", "tween", 0.2, 1)}
      >
        <h1>Get in touch</h1>
        <h2>Contact.</h2>

        <form ref={formRef} onSubmit={handleSubmit}>
          {/* Name Input */}
          <div>
            <label htmlFor="name">Your name</label>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="What is your name?"
              required
            />
          </div>

          {/* E-mail Input */}
          <div>
            <label htmlFor="email">Your email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What is your email address?"
              required
            />
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor="message">Your message</label>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What is your message?"
              required
            />
          </div>

          {/* Send Button */}
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        className={styles.modelContainer}
        variants={slideIn("right", "tween", 0.2, 1)}
      >
        <EarthCanvas />
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Contact, "contact");
