import React, { Component } from "react";

export class Demoform extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comment: "",
      language: "react",
      code: {
        C: false,
        Java: false,
        Python: false,
      },
      gender: "",
    };
  }

  handlechange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  handleComment = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };

  handlelanguage = (e) => {
    this.setState({
      language: e.target.value,
    });
  };

  handleCheckbox = (e) => {
    let state = this.state;
    state.code[e.target.value] = e.target.checked;
    this.setState(state);
  };

  handleRadio = (e) => {
    this.setState({
      gender: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={this.state.username}
              onChange={this.handlechange}
            />
          </div>
          <br />
          <div>
            <label htmlFor="comment">comment</label>
            <textarea
              id="comment"
              value={this.state.comment}
              onChange={this.handleComment}
            />
          </div>
          <br />
          <div>
            <label htmlFor="language">Language</label>
            <select
              id="language"
              value={this.state.language}
              onChange={this.handlelanguage}
            >
              <option value="react">React</option>
              <option value="angukar">Angular</option>
              <option value="reactnative">React Native</option>
            </select>
          </div>
          <br />
          <div>
            C++
            <input
              onChange={this.handleCheckbox}
              type="checkbox"
              name="code"
              value="C"
              checked={this.state.code.C}
            />
            Java
            <input
              onChange={this.handleCheckbox}
              type="checkbox"
              name="code"
              value="Java"
              checked={this.state.code.Java}
            />
            Python
            <input
              onChange={this.handleCheckbox}
              type="checkbox"
              name="code"
              value="Python"
              checked={this.state.code.Python}
            />
          </div>
          <br />
          <div>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={this.handleRadio}
            ></input>
            Male
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={this.handleRadio}
            ></input>
            Female
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Demoform;
