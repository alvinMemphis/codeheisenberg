import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      Alvin Nsongambi
      <Link className="link" to="/resume">
        Resume
      </Link>
      <Link className="link" to="/projects">
        Projects
      </Link>
      <Link className="link" to="/contact">
        Contact
      </Link>
    </div>
  );
};

export default Header;
