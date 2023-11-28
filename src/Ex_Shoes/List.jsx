import React, { Component } from "react";
import Item from "./Item";

export default class List extends Component {
  render() {
    return (
      <div className="col-6">
        <h1 className="my-4">Shoes List</h1>
        <Item />
      </div>
    );
  }
}
