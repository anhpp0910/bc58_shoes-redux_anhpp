import React, { Component } from "react";
import { connect } from "react-redux";
import { DELETE, MINUS, PLUS } from "./redux/constant";

class Cart extends Component {
  render() {
    let { cart } = this.props;
    return (
      <div className="col-6">
        <h1 className="my-4">Cart</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              return (
                <tr style={{ verticalAlign: "middle" }}>
                  <td>
                    <img src={item.image} style={{ width: "50px" }} />
                  </td>
                  <td>{item.name}</td>
                  <td>
                    <button
                      className="btn"
                      onClick={() => {
                        this.props.handleMinus(item.id);
                      }}
                    >
                      <i class="fa fa-minus-circle"></i>
                    </button>
                    {item.soLuong}
                    <button
                      className="btn"
                      onClick={() => {
                        this.props.handlePlus(item.id);
                      }}
                    >
                      <i class="fa fa-plus-circle"></i>
                    </button>
                  </td>
                  <td>
                    <span>$</span>
                    {item.price * item.soLuong}
                  </td>
                  <td>
                    <button
                      className="btn text-danger"
                      onClick={() => {
                        this.props.handleDelete(item.id);
                      }}
                    >
                      <i class="fa fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    handleDelete: (id) => {
      let action = {
        type: DELETE,
        payload: id,
      };
      dispatch(action);
    },
    handlePlus: (id) => {
      let action = {
        type: PLUS,
        payload: id,
      };
      dispatch(action);
    },
    handleMinus: (id) => {
      let action = {
        type: MINUS,
        payload: id,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
