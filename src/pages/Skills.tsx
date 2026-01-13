import { useEffect, useState } from 'react';
import { getSkills, type Skill } from '../services/api';
import { motion, type Variants } from 'framer-motion';

const Skills = () => {
    const [skills, setSkills] = useState<Skill[]>([]);

    useEffect(() => {
        getSkills().then(setSkills);
    }, []);

    const categories = Array.from(new Set(skills.map(s => s.category)));

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    return (
        <section id="skills" style={{ padding: '6rem 2rem', minHeight: '100vh' }}>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '4rem', fontWeight: 800 }}
            >
                Technical <span style={{ color: 'var(--accent)' }}>Arsenal</span>
            </motion.h2>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}
            >
                {categories.map(category => (
                    <motion.div key={category} variants={itemVariants} className="glass-panel" style={{ padding: '2rem', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '100px', height: '100px', background: 'var(--accent)', filter: 'blur(60px)', opacity: 0.3, borderRadius: '50%' }} />

                        <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', borderBottom: '2px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>{category}</h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                            {skills.filter(s => s.category === category).map(skill => (
                                <div key={skill.id}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.95rem' }}>
                                        <span>{skill.name}</span>
                                        <span style={{ color: 'var(--text-secondary)' }}>{skill.proficiency}%</span>
                                    </div>
                                    <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.proficiency}%` }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                            style={{ height: '100%', background: 'linear-gradient(90deg, var(--accent), #a855f7)' }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
