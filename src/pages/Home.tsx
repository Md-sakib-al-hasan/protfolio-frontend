import { useEffect, useState } from "react";
import {
  getExperience,
  type Experience as ExperienceType,
  getProfileSummary,
  CV_URL,
  PROFILE_IMAGE_URL,
} from "../services/api";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Download, Linkedin, Code } from "lucide-react";
import { Link } from "react-scroll";

const Home = () => {
  const [currentExp, setCurrentExp] = useState<ExperienceType | null>(null);
  const [summary, setSummary] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [experiences, summaryData] = await Promise.all([
          getExperience(),
          getProfileSummary(),
        ]);

        const current = experiences.find((exp: ExperienceType) => exp.current);
        if (current) {
          setCurrentExp(current);
        }

        if (summaryData && summaryData.content) {
          setSummary(summaryData.content);
        }
      } catch (error) {
        console.error("Error fetching home data:", error);
      }
    };
    fetchData();
  }, []);

  const titleContent = currentExp ? (
    <>
      {currentExp.role} at{" "}
      <span style={{ color: "var(--accent)", fontWeight: 700 }}>
        {currentExp.company}
      </span>
    </>
  ) : (
    "Backend Developer"
  );

  const bio =
    summary ||
    "Passionate about building scalable backend systems. Specialized in NestJS, Prisma ORM, and cloud architecture (AWS/VPS).";

  return (
    <section
      id="home"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        padding: "2rem",
        position: "relative",
      }}
    >
      {/* Background Elements */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: "300px",
          height: "300px",
          background: "purple",
          filter: "blur(150px)",
          opacity: 0.15,
          zIndex: -1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "10%",
          width: "300px",
          height: "300px",
          background: "blue",
          filter: "blur(150px)",
          opacity: 0.15,
          zIndex: -1,
        }}
      />

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          overflow: "hidden",
          marginBottom: "2.5rem",
          border: "4px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 0 50px rgba(100, 108, 255, 0.3)",
        }}
      >
        <img
          src={PROFILE_IMAGE_URL}
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/profile.jpg";
          }}
          alt="Sakib Al Hasan"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <h1
          style={{
            fontSize: "4.5rem",
            fontWeight: 800,
            marginBottom: "1rem",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Sakib{" "}
          <span
            style={{
              background: "linear-gradient(to right, #646cff, #a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Al Hasan
          </span>
        </h1>
        <h2
          style={{
            fontSize: "1.8rem",
            color: "var(--text-secondary)",
            marginBottom: "2rem",
            fontWeight: 500,
          }}
        >
          {titleContent}
        </h2>
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        style={{ maxWidth: "750px", marginBottom: "3rem" }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "0.3rem 1rem",
            background: "rgba(100, 108, 255, 0.1)",
            color: "var(--accent)",
            borderRadius: "20px",
            fontSize: "0.8rem",
            fontWeight: 600,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          Professional Summary
        </div>
        <p
          style={{
            fontSize: "1.25rem",
            color: "var(--text-secondary)",
            lineHeight: 1.7,
          }}
        >
          {bio}
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        style={{
          display: "flex",
          gap: "1.2rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <a
          href={CV_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "var(--accent)",
            color: "white",
            cursor: "pointer",
          }}
        >
          <FileText size={18} /> View CV
        </a>
        <a
          href={CV_URL}
          download="Md_Sakib_Al_Hasan_CV.pdf"
          className="btn"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "rgba(255,255,255,0.05)",
          }}
        >
          <Download size={18} /> Download CV
        </a>
        <a
          href="https://www.linkedin.com/in/md-sakib-al-hasan-46942126b/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "rgba(255,255,255,0.05)",
          }}
        >
          <Linkedin size={18} /> LinkedIn
        </a>
        <a
          href="https://leetcode.com/u/sourav_c/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "rgba(255,255,255,0.05)",
          }}
        >
          <Code size={18} /> LeetCode
        </a>
        <a
          href="https://codeforces.com/profile/sourav_chowdhury"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "rgba(255,255,255,0.05)",
          }}
        >
          <Code size={18} /> Codeforces
        </a>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="btn"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "rgba(255,255,255,0.05)",
            cursor: "pointer",
          }}
        >
          Projects <ArrowRight size={18} />
        </Link>
      </motion.div>
    </section>
  );
};

export default Home;
