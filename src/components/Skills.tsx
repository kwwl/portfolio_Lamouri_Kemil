import './Skills.css';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
}

function Skills() {
  const skills: Skill[] = [
    { name: 'Python', level: 85, category: 'frontend' },
    { name: 'SQL', level: 80, category: 'frontend' },
    { name: 'R', level: 70, category: 'frontend' },
    { name: 'Pandas / NumPy', level: 85, category: 'frontend' },
    { name: 'Scikit-learn', level: 75, category: 'backend' },
    { name: 'TensorFlow / Keras', level: 70, category: 'backend' },
    { name: 'Machine Learning', level: 75, category: 'backend' },
    { name: 'Data Analysis', level: 85, category: 'backend' },
    { name: 'Dataiku', level: 80, category: 'tools' },
    { name: 'Tableau / Power BI', level: 75, category: 'tools' },
    { name: 'Google Analytics', level: 70, category: 'tools' },
    { name: 'Git / GitHub', level: 80, category: 'tools' },
  ];

  const softSkills = [
    'Esprit analytique et logique',
    'Curiosité et apprentissage rapide',
    'Sens de l\'organisation',
    'Communication claire et efficace',
    'Esprit d\'équipe et collaboration',
    'Résolution de problèmes',
    'Rigueur et attention aux détails',
    'Adaptabilité',
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Compétences</h2>

        <div className="skills-grid">
          <div className="technical-skills">
            <h3 className="subsection-title">Compétences Techniques</h3>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className={`skill-progress ${skill.category}`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="soft-skills">
            <h3 className="subsection-title">Soft Skills</h3>
            <div className="soft-skills-grid">
              {softSkills.map((skill, index) => (
                <div key={index} className="soft-skill-item">
                  <span className="checkmark">✓</span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
