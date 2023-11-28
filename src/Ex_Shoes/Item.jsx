import React, { Component } from "react";
import { connect } from "react-redux";
import { ADD } from "./redux/constant";

class Item extends Component {
  render() {
    let { data } = this.props;
    return (
      <div className="row justify-content-evenly">
        {data.map((item) => {
          return (
            <div className="card col-6 mb-5 p-0" style={{ width: "19rem" }}>
              <img
                src={item.image}
                className="card-img-top m-auto"
                style={{ width: "15rem" }}
              />
              <div className="card-body pt-0">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
              </div>
              <div class="card-footer p-3">
                <p className="card-subtitle mb-2 text-body-secondary">
                  <span>$</span>
                  {item.price}
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    this.props.handleAddToCart(item);
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    data: state.shoesArr,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    handleAddToCart: (item) => {
      let action = {
        type: ADD,
        payload: item,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
