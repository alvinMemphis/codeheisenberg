import React, { Component } from "react";

export class Experience extends Component {
  render() {
    return (
      <div>
        <p>
          {this.props.startYear} - {this.props.endYear}
        </p>

        <h4 mt="0">{this.props.jobName}</h4>
        <p>{this.props.jobDescription}</p>
      </div>
    );
  }
}

export default Experience;
