import React, { Component } from "react";

export class Education extends Component {
  render() {
    return (
      <div>
        <p>
          {this.props.startYear} - {this.props.endYear}
        </p>

        <h4 mt="0">{this.props.schoolName}</h4>
        <p>{this.props.schoolDescription}</p>
      </div>
    );
  }
}

export default Education;
