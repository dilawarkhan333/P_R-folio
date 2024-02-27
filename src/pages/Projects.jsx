import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import birdslocal from "../assets/projects/birdslocal.png";
import project from "../assets/projects/localbusiness.png";
import clbhouse from "../assets/projects/clubhouses.png";
import bookstore from "../assets/projects/bookstore.png";
import estore from "../assets/projects/estore.png";
import lms from "../assets/projects/lms.png";
const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clbhouse}
              isBlog={false}
              title="Social-Media Web"
              description="Our project utilizes the MERN stack, comprising MongoDB, Express.js, React.js, and Node.js. The frontend is developed with React.js, employing styling libraries such as Tailwind CSS, Material-UI (MUI), and Semantic UI for enhanced aesthetics and user experience. Meanwhile, the backend, powered by Node.js and Express.js, facilitates robust server-side logic and data management. With this combination, we aim to deliver a seamless web application that prioritizes scalability, performance, and modern design principles."
              ghLink="https://github.com/dilawarkhan333/club-house"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Business Portal"
              description="Welcome to [Business-Genius Portal], the ultimate platform where visionary entrepreneurs and savvy investors converge to catalyze business success. Our platform serves as a dynamic marketplace, facilitating seamless connections between ambitious entrepreneurs seeking investment opportunities and astute investors eager to fuel innovative ventures. Whether you're a seasoned entrepreneur with a groundbreaking idea or an investor seeking the next big opportunity, [Business-Genius Portal] provides the perfect ecosystem for collaboration, growth, and prosperity. Join us today and embark on a journey towards mutual success and prosperity."
              ghLink="https://github.com/dilawarkhan333/Bussinessgenius_Portal"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={estore}
              isBlog={false}
              title="E‑Commerce Store"
              description="Welcome to our one-stop online marketplace! Discover a wide selection of trendy shoes, stylish clothing, glamorous makeup, and exquisite jewelry, all in one place. Whether you're looking to revamp your wardrobe, enhance your beauty routine, or find the perfect accessory, we've got you covered. With top-quality products and convenient shopping, elevate your style effortlessly with us."
              ghLink="https://github.com/dilawarkhan333/Ecommerce_store"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={birdslocal}
              isBlog={false}
              title="Birds Blog Website"
              description="Welcome to Birds Blog, your premier destination for a wide variety of stunning birds and animals! Browse through our collection of avian companions and furry friends, each lovingly cared for and looking for a forever home. With detailed listings, expert care guides, and exceptional customer service, we make finding your perfect feathered or furry companion a breeze. Start your journey with Birds Blog today!"
              ghLink="https://github.com/dilawarkhan333/firstrctassign"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookstore}
              isBlog={false}
              title="Book Store"
              description="Welcome to our bookstore, where every page holds a new adventure! Dive into our diverse collection of books spanning genres from thrilling mysteries to heartwarming romances, captivating memoirs to insightful self-help guides. Whether you're a seasoned bibliophile or just discovering the joy of reading, our curated selection offers something for every reader. Explore the world through the power of words and embark on a literary journey with us today!"
              ghLink="https://github.com/dilawarkhan333/Bookstore"
              demoLink="https://warm-twilight-317719.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lms}
              isBlog={false}
              title="Learning Management System"
              description="LMS (Learning Management System) software built with PHP, Ajax, jQuery, and MySQL. Features include user management, course creation, content upload, assessment tools, communication options, reporting, and analytics. Customizable and scalable with robust security measures. It facilitates educational course delivery and management, benefiting administrators and learners."
              ghLink="https://github.com/Monitr-project/Preston_lms"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects