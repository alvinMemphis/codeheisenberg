import React, { Component } from "react";

export class Skills extends Component {
  render() {
    return (
      <div className="mt-3">
        <i
          className={`${this.props.icon} mr-3`}
          style={{ color: `${this.props.iconColor}` }}
          aria-hidden="true"
        />
        {this.props.skill}
      </div>
    );
  }
}

export default Skills;
