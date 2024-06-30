import React, { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import ProjectCard from "./components/cards";
import SkillIcon from "./components/SkillIcon";

function App() {
  const [openSkillId, setOpenSkillId] = useState(null);

  const handleSkillClick = (id) => {
    setOpenSkillId(prevId => (prevId === id ? null : id));
  };

  const skills = [
    { id: 1, title: "HTML", imageUrl: "/assets/svg/HTML5.svg", description: "Lorem ipsum dolor sit amet..." },
    { id: 2, title: "CSS", imageUrl: "/assets/svg/CSS3.svg", description: "Lorem ipsum dolor sit amet..." },
    { id: 3, title: "JavaScript", imageUrl: "/assets/svg/JavaScript.svg", description: "Lorem ipsum dolor sit amet..." },
    { id: 4, title: "React", imageUrl: "/assets/svg/React.svg", description: "Lorem ipsum dolor sit amet..." },
    { id: 5, title: "Node.js", imageUrl: "/assets/svg/Node.js.svg", description: "Lorem ipsum dolor sit amet..." },
    { id: 6, title: "Git", imageUrl: "/assets/svg/Git.svg", description: "Lorem ipsum dolor sit amet..." },
    { id: 7, title: "GitHub", imageUrl: "/assets/svg/GitHub.svg", description: "Lorem ipsum dolor sit amet..." },
    { id: 8, title: "Python", imageUrl: "/assets/svg/Python.svg", description: "Lorem ipsum dolor sit amet..." },
    { id: 9, title: "Java", imageUrl: "/assets/svg/Java.svg", description: "Lorem ipsum dolor sit amet..." },
    { id: 10, title: "PHP", imageUrl: "/assets/svg/PHP.svg", description: "Lorem ipsum dolor sit amet..." },
    { id: 11, title: "MySQL", imageUrl: "/assets/svg/MySQL.svg", description: "Lorem ipsum dolor sit amet..." },
    { id: 12, title: "Microsoft SQL Server", imageUrl: "/assets/svg/Microsoft SQL Server.svg", description: "Lorem ipsum dolor sit amet..." },
    { id: 13, title: "Linux", imageUrl: "/assets/svg/Linux.svg", description: "Lorem ipsum dolor sit amet..." },
    { id: 14, title: "Windows", imageUrl: "/assets/svg/Windows 8.svg", description: "Lorem ipsum dolor sit amet..." }
  ];

  return (
    <div className="portfolio-container">
      <Header />
      <main>
        <section id="hero">
          <h1>
            Hola,
            <br />
            Soy<span> Emiliano Ponce</span>,<br />
            Programador
          </h1>
          <p>Soy un desarrollador web apasionado y creativo.</p>
          <a href="/src/assets/cv/Emiliano Ponce curriculum vitae.docx"><button>CV</button></a>
        </section>

        <section id="skills">
          <h2>Habilidades y herramientas</h2>
          <div className="skills-grid">
            {skills.map(skill => (
              <SkillIcon
                key={skill.id}
                id={skill.id}
                title={skill.title}
                imageUrl={skill.imageUrl}
                description={skill.description}
                isOpen={skill.id === openSkillId}
                onClick={handleSkillClick}
              />
            ))}
          </div>
        </section>

        <section id="projects">
          <h2>Proyectos</h2>
          <div className="projects-grid">
            <ProjectCard
              title="Proyecto Prueba 1"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae molestiae nulla asperiores eligendi cupiditate, fuga eos expedita excepturi, numquam cum autem similique ad porro error! Sit sint vel illo similique."
              imageUrl="/src/assets/images/preview.png"
              authorName="Emiliano Ponce"
              authorEmail="ponceemiliano44@gmail.com"
              authorAlias="jerkey"
              profileImageUrl="/src/assets/images/profile_small.png"
            />
            <ProjectCard
              title="Proyecto Prueba 2"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iure quos sint maxime pariatur delectus similique quibusdam magni earum, magnam eveniet officia recusandae beatae temporibus tempora eius explicabo porro hic!"
              imageUrl="/src/assets/images/preview.png"
              authorName="Emiliano Ponce"
              authorEmail="ponceemiliano44@gmail.com"
              authorAlias="jerkey"
              profileImageUrl="/src/assets/images/profile_small.png"
            />
            <ProjectCard
              title="Proyecto Prueba 3"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iure quos sint maxime pariatur delectus similique quibusdam magni earum, magnam eveniet officia recusandae beatae temporibus tempora eius explicabo porro hic!"
              imageUrl="/src/assets/images/preview.png"
              authorName="Emiliano Ponce"
              authorEmail="ponceemiliano44@gmail.com"
              authorAlias="jerkey"
              profileImageUrl="/src/assets/images/profile_small.png"
            />
            <ProjectCard
              title="Proyecto Prueba 4"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iure quos sint maxime pariatur delectus similique quibusdam magni earum, magnam eveniet officia recusandae beatae temporibus tempora eius explicabo porro hic!"
              imageUrl="/src/assets/images/preview.png"
              authorName="Emiliano Ponce"
              authorEmail="ponceemiliano44@gmail.com"
              authorAlias="jerkey"
              profileImageUrl="/src/assets/images/profile_small.png"
            />
          </div>
        </section>

        <section id="contact">
          <h2>Contacto</h2>

        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
