import { actions } from "./actionTypes";
import { sampleData, sampleDealerData } from "../sampleData";

export const initialState = {
    itemList: sampleData,
    dealerList: sampleDealerData,
  };
  
  //Reducer to Handle Actions
export const reducer = (state, action) => {
    switch (action.type) {
      case actions.GET_ITEMS:
        return {
            ...state,
            itemList: action.payload
        };
      case actions.GET_DEALERS: 
        return {
            ...state,
            dealerList: action.payload
        };
      default:
        return state;
    }
  };
