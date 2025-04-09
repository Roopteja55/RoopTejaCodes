import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import style from "./contact.module.css";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "6b2f5c20-985f-4d56-9101-abce1e876a0f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Form submitted successfully!");
      event.target.reset();
    } else {
      console.error("Submission error:", data);
      setResult(`❌ ${data.message}`);
    }
  };

  return (
    <section id="contact" className="container">
      <h5>Let's Talk</h5>
      <h2>Contact Me</h2>

      <div className={style.contactWrapper}>
        {/* LEFT SIDE */}
        <div className={style.contactOptions}>
          <article className={style.contactOption}>
            <AiOutlineMail className={style.contactIcon} />
            <h4>Email</h4>
            <h5>rooptejalanka2001@gmail.com</h5>
            <a href="mailto:rooptejalanka2001@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className={style.contactOption}>
            <FaLinkedin className={style.contactIcon} />
            <h4>LinkedIn</h4>
            <h5>linkedin.com/in/roop-teja-lanka</h5>
            <a
              href="https://www.linkedin.com/in/roop-teja-lanka/"
              target="_blank"
              rel="noreferrer"
            >
              Visit Profile
            </a>
          </article>

          <article className={style.contactOption}>
            <FaGithub className={style.contactIcon} />
            <h4>GitHub</h4>
            <h5>github.com/Roopteja55</h5>
            <a
              href="https://github.com/Roopteja55"
              target="_blank"
              rel="noreferrer"
            >
              Check Repos
            </a>
          </article>
        </div>

        {/* RIGHT SIDE: FORM */}
        <form className={style.contactForm} onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <p style={{ marginTop: "1rem", color: "#00ffae" }}>{result}</p>
        </form>
      </div>
    </section>
  );
}
