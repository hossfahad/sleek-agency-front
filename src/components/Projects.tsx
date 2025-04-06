
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "Sage Spaces",
    category: "Brand Identity",
    description: "A minimalist approach to interior design branding focused on sustainable materials.",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=800&auto=format&fit=crop"
  },
  {
    title: "Lumina Digital",
    category: "Web Design",
    description: "An immersive web experience for a cutting-edge tech startup.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&auto=format&fit=crop"
  },
  {
    title: "Elevate Studios",
    category: "Brand & Web",
    description: "A comprehensive rebrand and website for a creative production company.",
    image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=800&auto=format&fit=crop"
  }
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-10" ref={ref}>
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <span className="text-xs opacity-60 mb-6 block">[03]</span>
            <h2 className={`text-4xl md:text-5xl xl:text-6xl font-medium leading-[1.1] mb-6 transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              Bold Labs
            </h2>
            <p className={`max-w-lg text-lg transition-all duration-700 delay-100 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              Where we experiment, innovate, and showcase our latest projects and ideas.
            </p>
          </div>
          
          <a 
            href="#contact" 
            className={`mt-6 md:mt-0 inline-block underline font-medium hover:opacity-70 transition-all duration-700 delay-200 ${
              inView ? 'opacity-100' : 'opacity-0'
            }`}
          >
            View all projects →
          </a>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="group cursor-pointer">
                <div className="overflow-hidden rounded-md mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-[4/3] object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-medium">{project.title}</h3>
                    <span className="text-xs opacity-60">{project.category}</span>
                  </div>
                  <p className="text-gray-600">{project.description}</p>
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
