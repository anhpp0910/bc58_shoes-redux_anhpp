import React, { Component } from "react";
import { shoesArr } from "./data";
import List from "./List";
import Cart from "./Cart";

export default class Ex_Shoes extends Component {
  render() {
    return (
      <div className="row mx-2">
        <List />
        <Cart />
      </div>
    );
  }
}
