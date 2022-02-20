import React, { Component } from "react";
import "./itemAddForm.css";

export class ItemAddForm extends Component {
  state = {
    label: "",
  };
  onLabelChange = (e) => {
    this.setState({ label: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({ label: "" });
  };
  render() {
    return (
      <form
        className="item-add-form d-flex flex-row bd-highlight"
        onSubmit={this.onSubmit}
      >
        <input
          type="text"
          className="form-control "
          onChange={this.onLabelChange}
          placeholder="Whats needs to be done"
          value={this.state.label}
        />
        <button
          className="btn btn-outline-secondary item-add-form_button"
          type="submit"
        >
          Add Item
        </button>
      </form>
    );
  }
}
