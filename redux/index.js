import { store } from "./store";
import { decrementAction, incrementAction } from "./reductor";

export const withStoredCounterData = (fn) => () => {
  const counterData = store.getState().count;
  fn(counterData);
};

export const storeLisnter = (fn) => {
  store.subscribe(fn);
};

export const incrementStoreHandler = () => store.dispatch(incrementAction);
export const decrementStoreHandler = () => store.dispatch(decrementAction);
