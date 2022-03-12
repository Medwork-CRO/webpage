import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

const Layout = props => {
  let selected = -1;
  const { title, icon, children } = props;
  const [toggleNav, setToggleNav] = React.useState(false);

  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href={`#`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>

          <nav id="swup" className="site-head-left">
            <ul className="nav" role="menu">
              <li
                onSelect={() => (selected = 0)}
                className={selected === 0 ? "nav-current" : ""}
                role="menuitem"
              >
                <Link to={`/`}>Home</Link>
              </li>
              <li
                onSelect={() => (selected = 1)}
                className={selected === 1 ? "nav-current" : ""}
                role="menuitem"
              >
                <Link to={`/about-us`}>About Us</Link>
              </li>
              <li
                onSelect={() => (selected = 2)}
                className={selected === 2 ? "nav-current" : ""}
                role="menuitem"
              >
                <Link to={`/services`}>Services</Link>
              </li>
              <li
                onSelect={() => (selected = 3)}
                className={selected === 3 ? "nav-current" : ""}
                role="menuitem"
              >
                <Link to={`/careers`}>Careers</Link>
              </li>
              <li
                onSelect={() => (selected = 4)}
                className={selected === 4 ? "nav-current" : ""}
                role="menuitem"
              >
                <Link to={`/contact-us`}>Contact Us</Link>
              </li>
              {/* <li className="nav-current" role="menuitem">
                <Link to={`/elements`}>Elements</Link>
              </li> */}
            </ul>
          </nav>

          <div className="site-head-center">
            <Link className="site-head-name" to={`/`}>
              <img
                className="site-head-logo-img"
                src={require("./../../content/assets/medwork-logo.png")}
                alt="Medwork Logo"
              ></img>
              {/* <span className="site-head-logo">{title}</span> */}
              {/* /{icon}/ */}
            </Link>
          </div>

          <div className="site-head-right">
            <div className="social-links">
              <a
                href="https://www.linkedin.com/company/medwork/"
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              {/* <Link
                to={`/rss.xml`}
                title="RSS"
                target="_blank"
                rel="noopener noreferrer"
              >
                RSS
              </Link> */}
            </div>
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link>. All
        Rights Reserved. &mdash; Made by{" "}
        <a
          href="https://github.com/keybraker"
          target="_blank"
          rel="noopener noreferrer"
        >
          Keybraker
        </a>
      </footer>
    </div>
  );
};

export default Layout;
