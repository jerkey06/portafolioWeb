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
    { id: 1, title: "HTML", imageUrl: "/assets/svg/HTML5.svg", experience: "3 años", description: "He tenido mucha experiencia utilizando HTML tanto en proyectos escolares como en proyectos personales. Mayormente, he trabajado con páginas estáticas y estoy familiarizado con la gran mayoría de atributos y etiquetas de HTML.", description2: "Además, sé estructurar bien las páginas, asegurando que el código sea limpio y semántico. He creado sitios web responsivos utilizando CSS para asegurar que se vean bien en diferentes dispositivos y he incorporado JavaScript para agregar interactividad. Estoy comprometido con seguir aprendiendo y mejorando mis habilidades en desarrollo web para crear experiencias de usuario óptimas."},
    { id: 2, title: "CSS", imageUrl: "/assets/svg/CSS3.svg", experience: "3 años", description: "Tengo una amplia experiencia utilizando CSS para diseñar y estilizar páginas web. A lo largo de varios proyectos escolares y personales, he aprendido a manejar eficientemente las propiedades de CSS para crear diseños atractivos y responsivos. ",description2:"Estoy familiarizado con conceptos avanzados como el modelo de caja, la flexbox, y la grid layout, lo que me permite estructurar y organizar el contenido de manera efectiva." },
    { id: 3, title: "JavaScript", imageUrl: "/assets/svg/JavaScript.svg", experience: "3 años", description: "He tenido experiencia con React desde hace unos meses, trabajando en diversos proyectos personales. Conozco bien la creación de componentes y su implementación, lo que me permite construir aplicaciones web modulares y reutilizables. Mayormente, desarrollo estos proyectos utilizando Vite y JavaScript.", description2:"Además, estoy en proceso de aprender TypeScript para mejorar aún más mis habilidades y escribir código más robusto y tipado. Ya tengo la habilidad de crear páginas dinámicas y no estáticas, lo que me permite desarrollar aplicaciones web interactivas y con un mejor rendimiento. Estoy comprometido con seguir aprendiendo y perfeccionando mis conocimientos en React para crear aplicaciones eficientes y escalables." },
    { id: 4, title: "React", imageUrl: "/assets/svg/React.svg", experience: "6 meses", description: "Lorem ipsum dolor sit amet...", description: "Tanto como HTML y CSS, he trabajado con JavaScript desde la preparatoria. Tengo gran experiencia con el manejo del DOM, lo que me permite crear interacciones dinámicas y mejorar la experiencia del usuario en las páginas web. Actualmente, estoy utilizando varias extensiones como React y estudiando TypeScript para mejorar mis habilidades y escribir código más seguro y mantenible.", description2:"JavaScript es uno de los lenguajes que más conozco y en el que tengo más experiencia. He desarrollado numerosos proyectos, tanto personales como académicos, que me han permitido consolidar mis conocimientos y habilidades. Estoy siempre en busca de nuevas técnicas y mejores prácticas para seguir mejorando como desarrollador." },
    { id: 5, title: "Node.js", imageUrl: "/assets/svg/Node.js.svg", experience: "6 meses", description: "En general, conozco lo básico de Node.js, pero estoy en proceso de aprender más sobre este entorno de ejecución. A pesar de ello, tengo conocimientos sólidos sobre los conceptos fundamentales y he trabajado en algunos proyectos que me han permitido aplicar estos conocimientos en la práctica. Estoy motivado a seguir aprendiendo y mejorando mis habilidades en Node.js para poder desarrollar aplicaciones del lado del servidor de manera eficiente y escalable.", description2:""},
    { id: 6, title: "Git", imageUrl: "/assets/svg/Git.svg", experience: "1 año", description: "Tengo un conocimiento sólido de Git, enfocado en el manejo básico de proyectos. He utilizado Git en diversos proyectos personales y académicos, lo que me ha permitido familiarizarme con comandos fundamentales como git init, git clone, git add, git commit, git push y git pull. También he trabajado con ramas (branches) para desarrollar nuevas funcionalidades sin afectar el código principal y sé cómo fusionar (merge) cambios de manera efectiva.", description2:"Además, tengo experiencia usando plataformas de control de versiones como GitHub y GitLab para colaborar en proyectos en equipo. He aprendido a resolver conflictos de merge y a utilizar pull requests para revisar y gestionar cambios en el código. Estoy comprometido a seguir perfeccionando mis habilidades en Git para asegurar una gestión eficiente y organizada del código fuente en proyectos más complejos."},
    { id: 7, title: "GitHub", imageUrl: "/assets/svg/GitHub.svg", experience: "1 año", description: "Tengo experiencia en el uso de GitHub como plataforma para gestionar y colaborar en proyectos de desarrollo de software. He creado y clonado repositorios, gestionado ramas (branches), y realizado commits para registrar cambios en el código. Además, estoy familiarizado con la creación y gestión de pull requests para proponer y revisar cambios en el código, así como con la resolución de conflictos de merge.", description2:"He utilizado las funciones de seguimiento de problemas (issues) y gestión de proyectos en GitHub para organizar tareas y coordinar el trabajo en equipo de manera efectiva. También he explorado características avanzadas como la configuración de webhooks y la integración con servicios de integración continua (CI/CD). Estoy comprometido a seguir aprendiendo y aprovechar al máximo las capacidades de GitHub para mejorar la eficiencia y la colaboración en mis proyectos."},
    { id: 8, title: "Python", imageUrl: "/assets/svg/Python.svg", experience: "2 años", description: "Tengo un buen conocimiento de Python, ya que fue el lenguaje que utilicé durante la preparatoria en proyectos básicos como algoritmos y estructuras de datos. Últimamente, he estado utilizando Python principalmente para el manejo y análisis de datos. ", description2:"Además, he desarrollado scripts y pequeñas aplicaciones en Python para automatizar tareas, procesar archivos y realizar análisis de datos. Estoy interesado en explorar más áreas como el aprendizaje automático (machine learning) y la ciencia de datos para aplicar Python en proyectos más avanzados y desafiantes."},
    { id: 9, title: "Java", imageUrl: "/assets/svg/Java.svg", experience: "1 años", description: "Java fue mi primer lenguaje de programación, que comencé a utilizar desde la secundaria. He trabajado en proyectos básicos donde he aplicado principios de programación orientada a objetos. Mi conocimiento de Java se centra en el manejo de clases y objetos, herencia, encapsulamiento, polimorfismo y otros conceptos fundamentales de la programación orientada a objetos.", description2:"He desarrollado aplicaciones simples y he trabajado en ejercicios prácticos para consolidar mis habilidades en Java. Estoy interesado en seguir ampliando mi conocimiento en este lenguaje y explorar más aplicaciones prácticas y avanzadas." },
    { id: 10, title: "PHP", imageUrl: "/assets/svg/PHP.svg", experience: "6 meses", description: "He utilizado PHP principalmente en proyectos escolares, aunque estoy familiarizado con sus fundamentos. Aunque no es mi lenguaje preferido, tengo habilidad para desarrollar aplicaciones web básicas y trabajar con bases de datos utilizando PHP y MySQL. Estoy dispuesto a utilizar PHP cuando sea necesario, aunque prefiero otros lenguajes para mis proyectos personales.", description2:"" },
    { id: 11, title: "MySQL", imageUrl: "/assets/svg/MySQL.svg", experience: "1 año", description: "Las bases de datos tipo SQL son las que más utilizo, especialmente MySQL, que es una de mis bases de datos favoritas. He utilizado MySQL de manera extensiva en todos mis proyectos, donde he desarrollado una buena habilidad para estructurar bases de datos de manera eficiente. Estoy cómodo trabajando con consultas SQL, diseño de esquemas de bases de datos y optimización de consultas para mejorar el rendimiento.", description2:"" },
    { id: 12, title: "Microsoft SQL", imageUrl: "/assets/svg/Microsoft SQL Server.svg", experience: "3 meses", description: "He utilizado Microsoft SQL Server en un proyecto específico para un minimercado. Este sistema de gestión de bases de datos se adapta bien a aplicaciones de escritorio y me permitió desarrollar una solución robusta para gestionar inventarios, ventas y otros aspectos del negocio. Aunque mi experiencia con Microsoft SQL Server es más limitada en comparación con MySQL, he logrado manejar eficientemente consultas y operaciones básicas en este entorno.", description2:"" },
    { id: 13, title: "Linux", imageUrl: "/assets/svg/Linux.svg", experience: "2 años", description: "Linux es el sistema operativo que prefiero al trabajar en proyectos complejos, ya que facilita el uso de herramientas como Git y proporciona un entorno más limpio. Me gusta utilizar Linux porque puedo mantener separadas mis actividades de desarrollo de software de las tareas diarias que realizo en Windows. Esto me permite centrarme mejor en el desarrollo sin distracciones y aprovechar al máximo las herramientas de línea de comandos y personalización que ofrece Linux.", description2:"" },
    { id: 14, title: "Windows", imageUrl: "/assets/svg/Windows 8.svg", experience: "5 años", description: "Windows es mi sistema operativo principal y lo utilizo habitualmente. Tengo experiencia en su uso tanto para tareas básicas como para ajustes avanzados. Esto incluye la configuración de software, ajustes de sistema, y personalización según mis necesidades. Aunque prefiero Linux para el desarrollo de proyectos complejos, Windows es mi elección para actividades diarias y cuando necesito utilizar software específico que no está disponible en otros sistemas operativos.", description2:"" }
  ];

  const projects = [
    {
      id: 1,
      title: "Aplicacion del clima",
      description: "Esta es una aplicacion del climas que te permite ver el clima de cualquier ciudad del mundo. Esta aplicacion fue creada con React y la API de OpenWeatherMap. Puedes buscar el clima de cualquier ciudad y ver la temperatura actual, la temperatura maxima y minima, la humedad y la velocidad del viento. Ademas, tiene un mapa interactivo que muestra la ubicacion de la ciudad seleccionada.",
      imageUrl: "/assets/images/captura.png",
      authorName: "Emiliano",
      authorEmail: "ponceemiliano44@gmail.com",
      authorAlias: "jerkey",
      profileImageUrl: "/assets/images/profile_small.png",
      cardType: "Web Dev",
      articleStatus: "Terminado",
      projectLink: "https://epgweather-time.netlify.app/"
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