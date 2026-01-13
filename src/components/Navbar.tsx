import { Link } from 'react-scroll';
import { Terminal, Briefcase, User, Mail, Code, GraduationCap } from 'lucide-react';

const Navbar = () => {
    const navStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        color: 'var(--text-primary)',
        cursor: 'pointer',
        transition: 'color 0.3s'
    };

    return (
        <nav className="glass-panel" style={{
            position: 'fixed',
            top: '1rem',
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '0.8rem 2.5rem',
            zIndex: 1000,
            display: 'flex',
            gap: '2.5rem',
            borderRadius: '50px',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.5)'
        }}>
            <Link to="home" smooth={true} duration={500} spy={true} activeClass="active" style={navStyle}>
                <Terminal size={18} />
                <span style={{ fontWeight: 500 }}>Home</span>
            </Link>
            <Link to="experience" smooth={true} duration={500} spy={true} activeClass="active" style={navStyle}>
                <Briefcase size={18} />
                <span style={{ fontWeight: 500 }}>Experience</span>
            </Link>
            <Link to="education" smooth={true} duration={500} spy={true} activeClass="active" style={navStyle}>
                <GraduationCap size={18} />
                <span style={{ fontWeight: 500 }}>Education</span>
            </Link>
            <Link to="skills" smooth={true} duration={500} spy={true} activeClass="active" style={navStyle}>
                <Code size={18} />
                <span style={{ fontWeight: 500 }}>Skills</span>
            </Link>
            <Link to="projects" smooth={true} duration={500} spy={true} activeClass="active" style={navStyle}>
                <Briefcase size={18} />
                <span style={{ fontWeight: 500 }}>Projects</span>
            </Link>
            <Link to="about" smooth={true} duration={500} spy={true} activeClass="active" style={navStyle}>
                <User size={18} />
                <span style={{ fontWeight: 500 }}>About</span>
            </Link>
            <Link to="contact" smooth={true} duration={500} spy={true} activeClass="active" style={navStyle}>
                <Mail size={18} />
                <span style={{ fontWeight: 500 }}>Contact</span>
            </Link>
        </nav>
    );
};

export default Navbar;
