import react from "react";

const Footer = (props) => {
  return (
    <footer class="footer">
      <div>Connect me socially through</div>
      <ul class="social-links list-non-bullet">
        <li class="list-item-inline">
          <a
            class="link"
            href="https://www.linkedin.com/in/rishabh-jaiswal-78473421a/"
          >
            LinkedIn
          </a>
        </li>
        <li class="list-item-inline">
          <a class="link" href="https://github.com/rishabh486">
            GitHub
          </a>
        </li>
        <li class="list-item-inline">
          <a class="link" href="https://twitter.com/rishabh27101">
            Twitter
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
