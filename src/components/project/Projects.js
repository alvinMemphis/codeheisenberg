import React, { useState } from "react";

import react from "../../assets/img/react.png";
import html from "../../assets/img/html.png";
import node from "../../assets/img/node.png";

const Projects = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <h1>PROJECTS</h1>
    </div>
  );
};

export default Projects;
