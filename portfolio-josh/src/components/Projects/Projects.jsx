import React, { useEffect, useState } from 'react';
import '../../App.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  return (
    <section className="py-12 project-bg">
      <div className="container mx-auto project-bg">
        <h2 className="text-4xl font-bold text-center mb-4">Projects</h2>
        <h4 className='text-xl  font-bold text-center mb-12 text-gray-400 text-skip-line'>lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:m-14 sm:m-10 md:m-12 lg:grid-cols-3 gap-8 flex-row justify-center align-middle ">
          {Array.isArray(projects) && projects.map((project) => (
            <div key={project.id} className="bg-white shadow-2xl rounded-lg overflow-hidden w-full ">
              <img src={project.photo} alt={project.title} className="w-full h-52 object-cover " />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="bg-gray-200 text-black text-md px-2 py-1 rounded-2xl">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
