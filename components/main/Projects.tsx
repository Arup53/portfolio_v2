import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/project-1.png"
          title="Reconnect Hub"
          description="Reconnect Hub is a web application designed to help users reconnect with their lost or found belongings. This platform provides a convenient way for users to post items they have lost or found, and enables recovery tracking in a secure and user-friendly environment"
          id={1}
        />
        <ProjectCard
          src="/project-2.png"
          title="FundSpring"
          description="FundSpring is a dynamic crowdfunding web application designed to empower users to create, manage, and contribute to impactful campaigns. It simplifies the process of fundraising and donation, offering an intuitive platform for users to support meaningful causes."
          id={2}
        />
        <ProjectCard
          src="/project-3.png"
          title="Donate Bangladesh"
          description="Donate Bangladesh aims to bridge the gap between donors and volunteers.
It creates a seamless platform for contributing to a meaningful cause.
Focused on delivering winter clothes to those in need across the country,
we strive to bring warmth and hope to communities throughout Bangladesh."
          id={3}
        />
      </div>
    </div>
  );
};

export default Projects;
