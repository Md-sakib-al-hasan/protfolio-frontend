import { useEffect, useState } from 'react';
import { getProjects, type Project } from '../services/api';
import { ExternalLink, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            const data = await getProjects();
            setProjects(data);
            setLoading(false);
        };
        fetchProjects();
    }, []);

    return (
        <section id="projects" style={{ padding: '6rem 2rem', minHeight: '100vh', background: 'rgba(0,0,0,0.2)' }}>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '4rem', fontWeight: 800 }}
            >
                Featured <span style={{ color: 'var(--accent)' }}>Projects</span>
            </motion.h2>

            {loading ? (
                <div style={{ textAlign: 'center' }}>Loading...</div>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem', maxWidth: '1200px', margin: '0 auto' }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="glass-panel"
                            style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}
                        >
                            {project.imageUrl && (
                                <div style={{ height: '200px', overflow: 'hidden' }}>
                                    <img src={project.imageUrl} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }} className="hover-zoom" />
                                </div>
                            )}
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.8rem', fontWeight: 700 }}>{project.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6, flex: 1 }}>{project.description}</p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                    {project.tags.map(tag => (
                                        <span key={tag} style={{
                                            fontSize: '0.85rem',
                                            padding: '0.4rem 0.8rem',
                                            borderRadius: '50px',
                                            background: 'rgba(100, 108, 255, 0.1)',
                                            color: 'var(--accent)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.3rem'
                                        }}>
                                            <Tag size={12} /> {tag}
                                        </span>
                                    ))}
                                </div>

                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn"
                                        style={{ textAlign: 'center', marginTop: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}
                                    >
                                        View Project <ExternalLink size={16} />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Projects;
