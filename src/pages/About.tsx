import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      style={{
        padding: "6rem 2rem",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ maxWidth: "800px", textAlign: "center" }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "2rem",
            background: "linear-gradient(to right, #fff, #94a3b8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          About Me
        </h2>

        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: 1.8,
            color: "var(--text-secondary)",
            marginBottom: "1.5rem",
          }}
        >
          I am a <strong>Backend-focused Software Engineer</strong> with
          hands-on experience building scalable, production-ready systems using
          <strong> NestJS, Node.js, Express.js, and PostgreSQL</strong>. I
          currently work as a{" "}
          <strong>Junior Backend Developer at Softvence Agency</strong>, where I
          design APIs, optimize databases, and deploy cloud-based applications.
        </p>

        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: 1.8,
            color: "var(--text-secondary)",
          }}
        >
          I have experience with{" "}
          <strong>Docker, Kubernetes, AWS, CI/CD pipelines</strong>, and message
          brokers like <strong>RabbitMQ and Kafka</strong>. I enjoy writing
          clean, maintainable code and building backend architectures that are
          reliable, secure, and easy to scale.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
