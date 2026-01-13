import { useEffect, useState } from 'react';
import { getEducation, type Education as EducationType } from '../services/api';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
    const [educations, setEducations] = useState<EducationType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEducation = async () => {
            const data = await getEducation();
            // Sort by start date descending
            data.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
            setEducations(data);
            setLoading(false);
        };
        fetchEducation();
    }, []);

    const formatDate = (dateString: string) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return '';
        return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    };

    return (
        <section id="education" style={{ padding: '6rem 2rem', minHeight: '80vh' }}>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '4rem', fontWeight: 800 }}
            >
                Academic <span style={{ color: 'var(--accent)' }}>Background</span>
            </motion.h2>

            {loading ? (
                <div style={{ textAlign: 'center' }}>Loading...</div>
            ) : (
                <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {educations.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-panel"
                            style={{ 
                                padding: '2rem', 
                                borderRadius: '20px', 
                                border: '1px solid rgba(255,255,255,0.05)',
                                background: 'rgba(255,255,255,0.03)',
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '1.5rem',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{ 
                                background: 'rgba(100, 108, 255, 0.1)', 
                                padding: '1rem', 
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--accent)'
                            }}>
                                <GraduationCap size={32} />
                            </div>

                            <div style={{ flex: 1 }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: '#fff' }}>{edu.institution}</h3>
                                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.5 }}>
                                    {edu.degree}
                                </p>
                                
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', fontSize: '0.9rem', color: '#888' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Calendar size={16} />
                                        <span>{formatDate(edu.startDate)} - {edu.endDate ? formatDate(edu.endDate) : 'Present'}</span>
                                    </div>
                                    {edu.location && (
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <MapPin size={16} />
                                            <span>{edu.location}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Education;
