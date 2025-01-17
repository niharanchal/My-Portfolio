import React, { useState } from "react";
import portfolio from "../assets/portfolio.webp";
import noteApp from "../assets/note.png";
import sports from "../assets/sport.avif";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null); // State to track the selected project

  // Details about the projects
  const projects = [
    {
      img: portfolio,
      alt: "My Portfolio",
      title: "Portfolio",
      description:
        "I created a portfolio using React, leveraging several React packages to enhance its functionality and design. It highlights my skills, such as HTML, CSS, JavaScript, React, and MERN stack development, along with projects like an e-commerce app, a note app, and more. The portfolio also features a contact form to facilitate easy communication for anyone interested in reaching out to me.",
        gitlink:"https://github.com/niharanchal/My-Portfolio",
    },
    {
      img: noteApp,
      alt: "Note App",
      title: "Note App",
      description:
        "Developed a full-stack web application that enables users to register, securely log in, and manage personal notes with CRUD functionality. Upon registration, user passwords are hashed for security, and each user receives a unique JWT (JSON Web Token) for session authentication. Users can create, read, update, and delete their notes, with secure access ensured by the JWT token. A logout feature clears the JWT token, effectively logging the user out.React.js for the front-end interface, Node.js and Express.js for server-side logic and API creation, MongoDB for data storage, and Tailwind CSS for responsive UI design.",
        gitlink:"https://github.com/niharanchal/Notes-App",
    },
    {
      img: sports,
      alt: "Sports Collection",
      title: "Sports Collection",
      description:
        "Developed a full-stack web application for exploring sports products like equipment, apparel, and accessories. Users can browse all products without authentication, but adding items to the cart requires login. The app includes secure user registration with hashed passwords and JWT-based authentication. Logged-in users can add products to their cart, view items, update quantities, and remove products, with cart data securely tied to their account and stored in a database for session persistence. Cart data is retrieved across devices upon login. A logout feature clears the JWT token, ensuring secure session termination. Built using React.js, Node.js, Express.js, MongoDB, and Tailwind CSS.",
        gitlink:"https://github.com/niharanchal/Sports-Collections",
    },
  ];

  const handleImageClick = (project) => {
    setSelectedProject(project); // Set the selected project to display in the modal
  };

  const closeModal = () => {
    setSelectedProject(null); // Close the modal
  };

  return (
    <section className="projects" id="projects">
      <h2 className="projecttitle">
        My <span>Projects</span>
      </h2>
      <span className="projectdesc">
        I’ve designed and developed websites that are visually appealing and
        functional, providing a great user experience.
      </span>
      <div className="projectImgs">
        {projects.map((project, index) => (
          <img
            key={index}
            src={project.img}
            alt={project.alt}
            className="projectImg"
            onClick={() => handleImageClick(project)} // Open modal on click
          />
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            {/* <img
              src={selectedProject.img}
              alt={selectedProject.alt}
              className="modal-img"
            /> */}
            <h3 className="modal-title">{selectedProject.title}</h3>
            <p className="modal-desc">{selectedProject.description}</p>
            <h4 className="git">Git-hub:<span><a href={selectedProject.gitlink} target="blank">{selectedProject.gitlink}</a></span></h4>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
