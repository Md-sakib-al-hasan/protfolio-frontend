import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import About from "./pages/About";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => (
  <section
    id="contact"
    style={{
      padding: "6rem 2rem",
      textAlign: "center",
      background: "rgba(0,0,0,0.3)",
      minHeight: "60vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      <h2 style={{ fontSize: "3rem", marginBottom: "2rem", fontWeight: 800 }}>
        Get In Touch
      </h2>
      <p
        style={{
          fontSize: "1.2rem",
          color: "var(--text-secondary)",
          marginBottom: "3rem",
        }}
      >
        Interested in working together? Feel free to reach out!
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <a
          href="mailto:mdsakibalhasanprogrammer1@gmail.com
"
          className="btn"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.8rem",
            fontSize: "1.2rem",
            padding: "1rem 2rem",
            background: "var(--accent)",
            color: "white",
          }}
        >
          <Mail /> mdsakibalhasanprogrammer1@gmail.com
        </a>
        <a
          href="tel:+8801625457343"
          className="btn"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.8rem",
            fontSize: "1.2rem",
            padding: "1rem 2rem",
            background: "rgba(255,255,255,0.05)",
            color: "white",
          }}
        >
          <Phone /> +8801712-906519
        </a>
      </div>
      <p style={{ marginTop: "4rem", color: "#666", fontSize: "0.9rem" }}>
        © {new Date().getFullYear()} Sakib Al Hasan. All rights reserved.
      </p>
    </motion.div>
  </section>
);

// ... (existing code)

function App() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Navbar />
      <Home />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
