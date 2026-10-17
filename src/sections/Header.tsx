import { Link } from "react-scroll";

export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="nav-item px-2.5 md:px-4"
        >
          Home
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="nav-item px-2.5 md:px-4"
        >
          Projects
        </Link>
        <Link
          to="experience"
          smooth={true}
          duration={500}
          className="nav-item px-2.5 md:px-4"
        >
          Experience
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="nav-item px-2.5 md:px-4"
        >
          About
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="nav-item px-2.5 md:px-4 bg-white text-gray-900 hover:bg-white/70  hover:text-gray-900"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};
