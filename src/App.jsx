import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import {
  LinkedinLogo,
  GithubLogo,
  Envelope,
  DiscordLogo,
} from "@phosphor-icons/react";

import { Container, Profile, Presentation, Links, Skills } from "./App.js";

import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Link } from "./components/Link/index.jsx";
import { Section } from "./components/Section";
import { Skill } from "./components/Skill";
import { Project } from "./components/Project";
import { Certificate } from "./components/Certificate";
import { BackToTop } from "./components/BackToTop";
import { Footer } from "./components/Footer";

import { register } from "swiper/element/bundle";
register();

function App() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  function handleSectionScroll(sectionId) {
    const headerHeight = document.getElementById("header").offsetHeight;
    const section = document.getElementById(sectionId);
    const offsetTop = section.offsetTop - headerHeight;
    window.scrollTo({ top: offsetTop });
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const skillsData = [
    { icon: "html", title: "HTML" },
    { icon: "css", title: "CSS" },
    { icon: "javascript", title: "JavaScript" },
    { icon: "git", title: "Git" },
    { icon: "react", title: "ReactJS" },
    { icon: "styledcomponents", title: "Styled Components" },
    { icon: "figma", title: "Figma" },
    { icon: "nodejs", title: "Node.js" },
    { icon: "sqlite", title: "SQLite" },
    { icon: "express", title: "Express.js" },
  ];

  const projectsData = [
    {
      title: "Magazine-Caps",
      repo: "magazine-caps",
      demo: "https://philipef.github.io/magazine-caps/",
      description: "Projeto desenvolvido com intuito de praticar os principais fundamentos do JavaScript Vanilla",
      path: "https://i.imgur.com/5fe5MU3.png",
      tags: [
        "JavaScript Vanilla",
        "Tailwind CSS",
      ],
    },
    {
      title: "To-Do-List Turbinado",
      repo: "to-do-list-turbinado-react",
      demo: "https://to-do-list-react-murex-eight.vercel.app/",
      description: "Projeto desenvolvido com intuito de praticar as minhas habilidades com a biblioteca React.js. Neste projeto pude praticar gerenciamento de estado e compartilhando de propriedades utilizando um dos hooks mais utilizados no React.js o useState.",
      path: "https://i.imgur.com/R2HNHfE.png",
      tags: [
        "ReactJS",
        "Javascript",
      ],
    },
    {
      title: "React Interview Challenge",
      repo: "challenge-react.js-01",
      demo: "https://challenge-react01.vercel.app/",
      description: "Desafio para teste técnico utilizando a biblioteca React. Este teste é bastante utilizado para as empresas para recrutamento de candidatos.",
      path: "https://i.imgur.com/S5pTSxp.png",
      tags: [
        "ReactJS",
        "JavaScript",
      ],
    },
    {
      title: "React Form Multi",
      repo: "react-form-multi",
      demo: "https://github.com/PhilipeF/react-form-multi",
      description: "Formulário em React utilizando validações padrões onde é possível o cliente registar o seu nome, e-mail, análise de satisfação com emoji e um comentário. Essas informação são exibidas em tela no final do cilco, conforme vemos em muitos sites de e-commerce.",
      path: "https://i.imgur.com/0ejbGc4.png",
      tags: [
        "JavaScript ",
        "ReactJS",
      ],
    },
    {
      title: "Appointments",
      repo: "appointiments",
      demo: "https://github.com/PhilipeF/appointiments",
      description: "Projeto desenvolvido durante o Ignite que é um treinamento imersivo em ReactJS da Rocketseat. Neste projeto é possivel registrar entradas e saídas de valores e um total.",
      path: "https://i.imgur.com/hV6HbYt.png",
      tags: [
        "HTML",
        "Style Componentes",
        "JavaScript",
        "ReactJS",
        "MirageJS"
      ],
    },
    {
      title: "Letmeask",
      repo: "letmeask-",
      demo: "https://github.com/PhilipeF/letmeask-",
      description: "Letmeask é perfeito para criadores de conteúdos poderem criar salas de Q&A com o seu público, de uma forma muito organizada e democrática.",
      path: "https://i.imgur.com/2ivpa3g.png",
      tags: [
        "HTML",
        "Scss",
        "JavaScript",
        "ReactJS",
        "TypeScript",
        "Firebase"
      ],
    },
  ];

  const certificatesData = [
    {
      src: "https://i.imgur.com/2qQtpIe.png",
      alt: "Certificado de conclusão do intensivação em JavaScript da HashTag Treinamentos.",
    },
    {
      src: "https://i.imgur.com/fWkzrjx.png",
      alt: "Certificado tirado junto a Coodesh em React.js !!",
    },
    {
      src: "https://i.imgur.com/08u1A9N.png",
      alt: "Certificado da conclusão curso em VTEX IO Native.",
    },
  ];

  return (
    <Container>
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        handleSectionScroll={handleSectionScroll}
      />

      {!isDesktop && (
        <Menu
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          activeSection={activeSection}
          handleSectionScroll={handleSectionScroll}
        />
      )}

      <main>
        <Section id="home" title="" setActiveSection={setActiveSection}>
          <Profile>
            <img
              src="https://github.com/PhilipeF.png"
              alt="Homem de pele negra e cabelos enrolados crespo, usando uma camiseta de polo branca e sorrindo."
            />
          </Profile>

          <Presentation>
            <h1>
              Olá! Sou <span>Philipe</span>, <br></br> Desenvolvedor Web <br></br>
              Front-End
            </h1>

            <Links>
              <Link
                href="https://www.linkedin.com/in/philipe-ferreira7/"
                title="LinkedIn"
              >
                <LinkedinLogo size={24} />
              </Link>

              <Link href="https://github.com/PhilipeF" title="GitHub">
                <GithubLogo size={24} />
              </Link>
            </Links>
          </Presentation>
        </Section>

        <Section id="about" title="Sobre" setActiveSection={setActiveSection}>
          <p>
            Olá, me chamo Philipe sou natural de Volta Redonda - RJ e atualmente estou me especializando em JavaScript, TypeScript, React.js e Next.js.
          </p>
          <p>
            Já passei por cursos, treinamentos e bootcamps com o Gustavo Guanabara, Maky Brito, Diego Fernandes, Roger Melo, Matheus Battisti, Bonieki Lacerda e entre outros professores, a fim de sempre estar aprimorando os meus conhecimentos e me manter atualizado. Sou fascinado pela arte de aprender, gosto de estudar desenvolvimento web e de dar vida ao layout proporcionando uma experiência incrível ao cliente final.
          </p>
          <p>
            Neste momento estou em busca de uma oportunidade como Desenvolvedor Web
            Front-End, onde possa contribuir com minhas habilidades e
            conhecimentos adquiridos até aqui para melhor ajudar a empresa.
          </p>

          <Skills>
            {skillsData.map((skill, index) => (
              <Skill key={index} icon={skill.icon} title={skill.title} />
            ))}
          </Skills>
        </Section>

        <Section
          id="projects"
          title="Projetos"
          setActiveSection={setActiveSection}
        >
          <swiper-container
            space-between="32"
            slides-per-view="auto"
            autoplay="true"
            loop="true"
            grab-cursor="true"
          >
            {projectsData.map((project, index) => (
              <swiper-slide key={index}>
                <Project
                  title={project.title}
                  repo={project.repo}
                  demo={project.demo}
                  description={project.description}
                  path={project.path}
                  tags={project.tags}
                />
              </swiper-slide>
            ))}
          </swiper-container>
        </Section>

        <Section
          id="certificates"
          title="Certificados"
          setActiveSection={setActiveSection}
        >
          <swiper-container
            space-between="32"
            slides-per-view="auto"
            autoplay="false"
            loop="true"
            grab-cursor="true"
          >
            {certificatesData.map((certificate, index) => (
              <swiper-slide key={index}>
                <Certificate src={certificate.src} alt={certificate.alt} />
              </swiper-slide>
            ))}
          </swiper-container>
        </Section>

        <Section
          id="contact"
          title="Contato"
          setActiveSection={setActiveSection}
        >
          <div>
            <p>Vamos construir algo juntos?</p>

            <Links>
              <Link href="mailto:philipesferreiraa#gmail.com" title="E-mail">
                <Envelope size={24} />
              </Link>

              <Link
                href="http://discordapp.com/users/689830389371633742"

                title="Discord"
              >
                <DiscordLogo size={24} />
              </Link>
            </Links>
          </div>
        </Section>
      </main>

      {showBackToTop && <BackToTop handleSectionScroll={handleSectionScroll} />}

      <Footer />
    </Container>
  );
}

export default App;
