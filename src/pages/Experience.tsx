import { useEffect, useState } from 'react';
import { getExperience, type Experience as ExperienceType } from '../services/api';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    const [experiences, setExperiences] = useState<ExperienceType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchExperience = async () => {
            const data = await getExperience();
            // Sort by start date descending
            data.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
            setExperiences(data);
            setLoading(false);
        };
        fetchExperience();
    }, []);

    const formatDate = (dateString: string) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return '';
        return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    };

    return (
        <section id="experience" style={{ padding: '6rem 2rem', minHeight: '100vh' }}>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '4rem', fontWeight: 800 }}
            >
                Professional <span style={{ color: 'var(--accent)' }}>Experience</span>
            </motion.h2>

            {loading ? (
                <div style={{ textAlign: 'center' }}>Loading...</div>
            ) : (
                <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
                    {/* Timeline line */}
                    <div style={{ 
                        position: 'absolute', 
                        left: '20px', 
                        top: 0, 
                        bottom: 0, 
                        width: '2px', 
                        background: 'rgba(255,255,255,0.1)',
                        zIndex: 0
                    }} className="desktop-timeline" />

                    <style>{`
                        @media (min-width: 768px) {
                            .desktop-timeline { left: 50% !important; transform: translateX(-50%); }
                        }
                    `}</style>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                style={{ 
                                    display: 'flex', 
                                    flexDirection: 'column',
                                    position: 'relative',
                                    zIndex: 1
                                }}
                                className={`experience-item ${index % 2 === 0 ? 'left' : 'right'}`}
                            >
                                {/* Timeline Dot */}
                                <div style={{ 
                                    position: 'absolute', 
                                    left: '20px',
                                    top: '0',
                                    width: '16px', 
                                    height: '16px', 
                                    borderRadius: '50%', 
                                    background: 'var(--accent)', 
                                    border: '4px solid #1a1a1a', 
                                    transform: 'translateX(-50%)',
                                    zIndex: 2 
                                }} className="timeline-dot" />
                                
                                <style>{`
                                    @media (min-width: 768px) {
                                        .experience-item { flex-direction: row; align-items: flex-start; }
                                        .experience-item.left { flex-direction: row-reverse; }
                                        .experience-item.right { flex-direction: row; }
                                        .timeline-dot { left: 50% !important; top: 24px !important; }
                                        .experience-card { width: 45%; }
                                        .experience-item.left .experience-card { margin-left: auto; margin-right: 50px; text-align: right; }
                                        .experience-item.right .experience-card { margin-left: 50px; margin-right: auto; text-align: left; }
                                        .experience-item.left .experience-card .header-flex { flex-direction: row-reverse; }
                                    }
                                    @media (max-width: 767px) {
                                        .experience-card { margin-left: 40px; }
                                    }
                                `}</style>

                                <div className="glass-panel experience-card" style={{ 
                                    padding: '1.5rem', 
                                    borderRadius: '16px', 
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    background: 'rgba(255,255,255,0.03)'
                                }}>
                                    <div className="header-flex" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff' }}>{exp.company}</h3>
                                        <span style={{ 
                                            fontSize: '0.8rem', 
                                            padding: '0.2rem 0.6rem', 
                                            borderRadius: '20px', 
                                            background: 'rgba(100, 108, 255, 0.2)', 
                                            color: 'var(--accent)',
                                            fontWeight: 500
                                        }}>
                                            {exp.current ? 'Present' : `${formatDate(exp.endDate || '')}`}
                                        </span>
                                    </div>
                                    
                                    <h4 style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Briefcase size={16} /> {exp.role}
                                    </h4>

                                    <div style={{ fontSize: '0.9rem', color: '#888', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Calendar size={14} /> 
                                        {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate || '')}
                                    </div>

                                    <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#ccc' }}>
                                        {exp.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

export default Experience;
