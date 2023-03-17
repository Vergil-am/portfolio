import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import WebIcon from "@mui/icons-material/Web";
import HomeIcon from "@mui/icons-material/Home";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav className="navigation">
        <Link className="navigationelement" href={"/"}>
          <HomeIcon /> <h2 className='navigationtitle'>Home</h2>
        </Link>
        <Link className="navigationelement" href={"/blog"}>
          <LibraryBooksIcon />
          <div className='navigationtitle'>Blog</div>
        </Link>
        <a className="navigationelement" href={"https://github.com/Vergil-am"}>
          <GitHubIcon className="socialicon" />
          <div className='navigationtitle'>Github</div>
        </a>
        <a
          className="navigationelement"
          href={"https://www.linkedin.com/in/amine-ouali-b05189223/"}
        >
          <div className='navigationtitle'>Linkedin</div>
          <LinkedInIcon className="socialicon" />
        </a>
        <a className="navigationelement" href={"https://twitter.com/Vergil_am"}>
          <TwitterIcon className="socialicon" />
          <div className='navigationtitle'>Twitter</div>
        </a>
      </nav>
    </div>
  );
}
