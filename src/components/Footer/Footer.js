import "./Footer.css";
import {FaLinkedin} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://in.linkedin.com/in/adit19shah" target="_blank" rel="noreferrer"><FaLinkedin className="social-media-icon"/></a>
      <a href="https://github.com/adit19shah" target="_blank" rel="noreferrer"><FaGithub className="social-media-icon"/></a>
      <a href="https://www.instagram.com/adit9shah/" target="_blank" rel="noreferrer"><FaInstagram className="social-media-icon"/></a>
      <a href="https://twitter.com/AditSha16934402" target="_blank" rel="noreferrer"><FaTwitter className="social-media-icon"/></a>
    </div>
  );
}
