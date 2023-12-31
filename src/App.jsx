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
    { icon: "mysql", title: "MySQL" },
    { icon: "express", title: "Express.js" },
  ];

  const projectsData = [
    {
      title: "Magazine-Caps",
      repo: "magazine-caps",
      demo: "https://philipef.github.io/magazine-caps/",
      description: "Projeto desenvolvido com intuito de praticar os principais fundamentos do JavaScript. Consiste em um modelo de loja virtual onde o cliente pode adicionar, remover, acrescentar e decrementar produtos, com formulário para validação de dados e histórico dos pedidos realizados.",
      path: "https://i.imgur.com/5fe5MU3.png",
      tags: [
        "JavaScript",
        "Tailwind CSS",
      ],
    },
    {
      title: "To-Do-List Turbinado",
      repo: "to-do-list-turbinado-react",
      demo: "https://to-do-list-turbinado-react.vercel.app/",
      description: "Projeto desenvolvido com intuito de praticar os principais fundamentos da biblioteca React.js. Neste projeto pude trabalhar com gerenciamento de estado e compartilhando de propriedades utilizando um dos hooks mais utilizados do React.js o useState.",
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
      description: "Desafio para teste técnico utilizando a biblioteca React.js. Este teste é bastante utilizado em processos seletivos para recrutamento de candidatos.",
      path: "https://i.imgur.com/S5pTSxp.png",
      tags: [
        "ReactJS",
        "JavaScript",
      ],
    },
    {
      title: "React Form Multi",
      repo: "react-form-multi",
      demo: "https://react-form-multi.vercel.app/",
      description: "Projeto simples porém muito agregador para fixar as bases da biblioteca React.js. Foi criado um formulário utilizando validações padrões onde é possível registar o seu nome, e-mail, análise de satisfação com emoji e um comentário. Essas informação são exibidas em tela no final do ciclo.",
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
      description: "Projeto desenvolvido durante o Ignite - Bootcamp imersivo em React.js da Rocketseat. Neste projeto é possivel registrar entradas, saídas de valores e um total. Ideal para quem quer se manter organizado financeiramente.",
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
      src: "https://i.imgur.com/5kOU66b.png",
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
            Olá, meu nome é Philipe, nasci em Volta Redonda - RJ e estou atualmente focado em aprimorar minhas habilidades em JavaScript, TypeScript, React.js e Next.js.
          </p>
          <p>
            Ao longo da minha jornada, participei de cursos, treinamentos e bootcamps ministrados por renomados profissionais, incluindo Gustavo Guanabara, Maky Brito, Diego Fernandes, Roger Melo, Matheus Battisti, Bonieki Lacerda, e outros professores, buscando constantemente atualizações e conhecimentos.
          </p>
          <p> Sou apaixonado pela arte de aprender e dedicado ao estudo do desenvolvimento web, especialmente em criar novas funcionalidades e transformar designs em experiências incríveis para os clientes finais.
          </p>
          <p>
            Com uma trajetória de 3 (três) anos como desenvolvedor web freelancer ativo, tive a oportunidade de colaborar em diversas plataformas como 99Freelas, Workana, Freelancer, Upwork, entre outras. Durante esse período, concentrei meus esforços no desenvolvimento de soluções para e-commerce, utilizando minhas principais habilidades em WordPress, VTEX IO, JavaScript, React.js, HTML e CSS. Recentemente, obtive certificação em JavaScript, React.js e VTEX IO, consolidando ainda mais meu conhecimento nessa área.
          </p>
          <p>
            O meu foco é me especializar no front-end, mas já tive a oportunidade de trabalhar com o back-end de algumas aplicações utilizando o Node.js e MySQL.
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
              <Link href="mailto:philipesferreiraa@gmail.com" title="E-mail">
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
    </Container >
  );
}

export default App;
