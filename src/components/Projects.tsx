// import { CodeIcon } from '@heroicons/react/solid';

import { projects } from "../data/projectsData";

const Projects = () => {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          {/* <CodeIcon/> */}
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects I have completed
          </h1>

          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          I Love backend and when it comes to languages,I am captivated by Python at the moment. Its simplicity and readability, coupled with its versatility, make it an incredible language for web development, data analysis, automation, and much more.With powerful frameworks like Flask, Django, and especially FastAPI, Python allows me to build robust and scalable applications effortlessly. Its clean syntax and vast ecosystem of libraries enable me to tackle diverse challenges with ease, from building RESTful APIs to performing complex data manipulations.Furthermore, Python's cross-platform compatibility and seamless integration with other technologies make it the ideal choice for full-stack development.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative">
                <img
                  src={project.image}
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />

                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
