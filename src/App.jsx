import React, { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import ProjectCard from "./components/cards";
import SkillIcon from "./components/SkillIcon";
import ContactForm from "./components/ContactForm";

function App() {
  const [openSkillId, setOpenSkillId] = useState(null);
  const [openCardId, setOpenCardId] = useState(null);

  const handleSkillClick = (id) => {
    setOpenSkillId(prevId => (prevId === id ? null : id));
  };

  const handleCardToggle = (id, isOpen) => {
    setOpenCardId(isOpen ? id : null);
  };


  const skills = [
    { id: 1, title: "HTML", imageUrl: "/assets/svg/HTML5.svg", experience: "3 years", description: "He tenido mucha experiencia utilizando HTML tanto en proyectos escolares como en proyectos personales. Mayormente, he trabajado con páginas estáticas y estoy familiarizado con la gran mayoría de atributos y etiquetas de HTML.", description2: "Además, sé estructurar bien las páginas, asegurando que el código sea limpio y semántico. He creado sitios web responsivos utilizando CSS para asegurar que se vean bien en diferentes dispositivos y he incorporado JavaScript para agregar interactividad. Estoy comprometido con seguir aprendiendo y mejorando mis habilidades en desarrollo web para crear experiencias de usuario óptimas."},
    { id: 2, title: "CSS", imageUrl: "/assets/svg/CSS3.svg", experience: "4 years", description: "Tengo una amplia experiencia utilizando CSS para diseñar y estilizar páginas web. A lo largo de varios proyectos escolares y personales, he aprendido a manejar eficientemente las propiedades de CSS para crear diseños atractivos y responsivos. ",description2:"Estoy familiarizado con conceptos avanzados como el modelo de caja, la flexbox, y la grid layout, lo que me permite estructurar y organizar el contenido de manera efectiva" },
    { id: 3, title: "JavaScript", imageUrl: "/assets/svg/JavaScript.svg", experience: "3 years", description: "He tenido experiencia con React desde hace unos meses, trabajando en diversos proyectos personales. Conozco bien la creación de componentes y su implementación, lo que me permite construir aplicaciones web modulares y reutilizables. Mayormente, desarrollo estos proyectos utilizando Vite y JavaScript.", description2:"Además, estoy en proceso de aprender TypeScript para mejorar aún más mis habilidades y escribir código más robusto y tipado. Ya tengo la habilidad de crear páginas dinámicas y no estáticas, lo que me permite desarrollar aplicaciones web interactivas y con un mejor rendimiento. Estoy comprometido con seguir aprendiendo y perfeccionando mis conocimientos en React para crear aplicaciones eficientes y escalables." },
    { id: 4, title: "React", imageUrl: "/assets/svg/React.svg", experience: "2 years", description: "Lorem ipsum dolor sit amet..." },
    { id: 5, title: "Node.js", imageUrl: "/assets/svg/Node.js.svg", experience: "2 years", description: "Lorem ipsum dolor sit amet..." },
    { id: 6, title: "Git", imageUrl: "/assets/svg/Git.svg", experience: "3 years", description: "Lorem ipsum dolor sit amet..." },
    { id: 7, title: "GitHub", imageUrl: "/assets/svg/GitHub.svg", experience: "3 years", description: "Lorem ipsum dolor sit amet..." },
    { id: 8, title: "Python", imageUrl: "/assets/svg/Python.svg", experience: "1 year", description: "Lorem ipsum dolor sit amet..." },
    { id: 9, title: "Java", imageUrl: "/assets/svg/Java.svg", experience: "2 years", description: "Lorem ipsum dolor sit amet..." },
    { id: 10, title: "PHP", imageUrl: "/assets/svg/PHP.svg", experience: "1 year", description: "Lorem ipsum dolor sit amet..." },
    { id: 11, title: "MySQL", imageUrl: "/assets/svg/MySQL.svg", experience: "2 years", description: "Lorem ipsum dolor sit amet..." },
    { id: 12, title: "Microsoft SQL", imageUrl: "/assets/svg/Microsoft SQL Server.svg", experience: "1 year", description: "Lorem ipsum dolor sit amet..." },
    { id: 13, title: "Linux", imageUrl: "/assets/svg/Linux.svg", experience: "2 years", description: "Lorem ipsum dolor sit amet..." },
    { id: 14, title: "Windows", imageUrl: "/assets/svg/Windows 8.svg", experience: "5 years", description: "Lorem ipsum dolor sit amet..." }
  ];

  const projects = [
    {
      id: 1,
      title: "Proyecto Prueba 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae molestiae nulla asperiores eligendi cupiditate, fuga eos expedita excepturi, numquam cum autem similique ad porro error! Sit sint vel illo similique.",
      imageUrl: "/assets/images/preview.png",
      authorName: "Emiliano",
      authorEmail: "ponceemiliano44@gmail.com",
      authorAlias: "jerkey",
      profileImageUrl: "/assets/images/profile_small.png",
      cardType: "Web Dev",
      articleStatus: "Latest Article",
      projectLink: "/project1"
    },
    {
      id: 2,
      title: "Proyecto Prueba 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iure quos sint maxime pariatur delectus similique quibusdam magni earum, magnam eveniet officia recusandae beatae temporibus tempora eius explicabo porro hic!",
      imageUrl: "/assets/images/preview.png",
      authorName: "Emiliano",
      authorEmail: "ponceemiliano44@gmail.com",
      authorAlias: "jerkey",
      profileImageUrl: "/assets/images/profile_small.png",
      cardType: "Mobile App",
      articleStatus: "Featured",
      projectLink: "/project2"
    },
    {
      id: 3,
      title: "Proyecto Prueba 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iure quos sint maxime pariatur delectus similique quibusdam magni earum, magnam eveniet officia recusandae beatae temporibus tempora eius explicabo porro hic!",
      imageUrl: "/assets/images/preview.png",
      authorName: "Emiliano",
      authorEmail: "ponceemiliano44@gmail.com",
      authorAlias: "jerkey",
      profileImageUrl: "/assets/images/profile_small.png",
      cardType: "Mobile App",
      articleStatus: "Featured",
      projectLink: "/project3"
    },
    {
      id: 4,
      title: "Proyecto Prueba 4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iure quos sint maxime pariatur delectus similique quibusdam magni earum, magnam eveniet officia recusandae beatae temporibus tempora eius explicabo porro hic!",
      imageUrl: "/assets/images/preview.png",
      authorName: "Emiliano",
      authorEmail: "ponceemiliano44@gmail.com",
      authorAlias: "jerkey",
      profileImageUrl: "/assets/images/profile_small.png",
      cardType: "Mobile App",
      articleStatus: "Featured",
      projectLink: "/project4"
    },
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
              experience={skill.experience}
              description={skill.description}
              description2={skill.description2}
              isOpen={skill.id === openSkillId}
              onClick={handleSkillClick}
            />
          ))}
        </div>
      </section>

        <section id="projects">
          <h3>Proyectos</h3>
          <div className="projects-grid">
            {projects.map(project => (
              <ProjectCard
                key={project.id}
                {...project}
                onCardToggle={(isOpen) => handleCardToggle(project.id, isOpen)}
                isDisabled={openCardId !== null && openCardId !== project.id}
              />
            ))}
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;