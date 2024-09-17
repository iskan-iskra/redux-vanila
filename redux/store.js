import { createStore } from "redux";
import { counterReducer } from "./reductor";

export const store = createStore(counterReducer);
