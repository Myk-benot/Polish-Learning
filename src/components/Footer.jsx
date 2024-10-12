import { FaGithub, FaLinkedin } from "react-icons/fa";
import "/home/myk/Desktop/Polish-Learning/src/CSS/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="social-icons">
        <p>Myk.benot @2024</p>
        <a
          href="https://github.com/Myk-benot"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={30} color="#007bff" />
        </a>
        <a
          href="https://www.linkedin.com/in/michael-reutzel-920758319/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={30} color="#007bff" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
