import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      Construído com
      <FontAwesomeIcon
        icon={faHeart}
        className="footer-icon"
        aria-hidden="true"
      />
      by
      <a href="https://github.com/Likosz" target="_blank" rel="noreferrer">
        Wagner(Likosz)
      </a>
    </footer>
  );
}
