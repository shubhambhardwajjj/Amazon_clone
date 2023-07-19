export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  //console.log(action);
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };

    case "REMOVE_FROM_BASKET": {
      console.log(action.itemid);
      const newbasket = [];
      let flag = 0;
      for (let i = 0; i < state.basket.length; i++) {
        if (parseInt(state.basket[i].id) !== parseInt(action.itemid))
          newbasket.push(state.basket[i]);
        else if (flag === 1) {
          newbasket.push(state.basket[i]);
          console.log("me");
        } else flag = 1;
      }
      return { ...state, basket: newbasket };
    }

    case "SET_USER": {
      //action.authUser

      return { ...state, user: action.user };
    }

    default:
      return state;
  }
};

export default reducer;
