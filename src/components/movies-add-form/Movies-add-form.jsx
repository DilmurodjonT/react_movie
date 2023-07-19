import React, { Component } from "react";
import "./Movies-add-form.css";

class MoviesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "+998(90)-",
      views: "12",
    };
  }

  changeHandlerInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, views } = this.state;

    return (
      <div className="movies-add-form">
        <h3>Yangi kino qo'shish</h3>
        <form className="add-form d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Qanday kino?"
            onChange={this.changeHandlerInput}
            name="name"
            value={name}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Necha marotaba ko'rilgan?"
            onChange={this.changeHandlerInput}
            name="views"
            value={views}
          />
          <button type="submit" className="btn btn-outline-dark">
            Qo'shish
          </button>
        </form>
      </div>
    );
  }
}

export default MoviesAddForm;
