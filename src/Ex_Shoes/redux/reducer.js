import { shoesArr } from "../data";
import { ADD, DELETE, MINUS, PLUS } from "./constant";

const initialState = {
  shoesArr: shoesArr,
  cart: [],
};

export let shoesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD: {
      let cloneCart = [...state.cart];
      // nếu chưa có thì push vào card với soLuong: 1
      let index = cloneCart.findIndex((cartItem) => cartItem.id === payload.id);
      if (index === -1) {
        cloneCart.push({ ...payload, soLuong: 1 });
      } else {
        // nếu có rồi thì tăng soLuong ++
        cloneCart[index].soLuong++;
      }
      return { ...state, cart: cloneCart };
    }
    case DELETE: {
      let cloneCart = [...state.cart];
      cloneCart = cloneCart.filter((cartItem) => cartItem.id !== payload);
      return { ...state, cart: cloneCart };
    }
    case PLUS: {
      let cloneCart = [...state.cart];
      let index = cloneCart.findIndex((cartItem) => cartItem.id === payload);
      cloneCart[index].soLuong++;
      return { ...state, cart: cloneCart };
    }
    case MINUS: {
      let cloneCart = [...state.cart];
      let index = cloneCart.findIndex((cartItem) => cartItem.id === payload);
      if (cloneCart[index].soLuong > 1) {
        cloneCart[index].soLuong--;
      } else {
        cloneCart = cloneCart.filter((cartItem) => cartItem.id !== payload);
      }
      return { ...state, cart: cloneCart };
    }
    default:
      return state;
  }
};
