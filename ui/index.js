import { APP_ID } from "./const";
import { AppCounter, AppRoot } from "./elements";

export const renderCounterValue = (value) => {
  AppCounter.innerText = `Counter: ${value}`;
};

export const setButtonClicks = ({ incrementClick, decrementClick }) => {
  AppRoot.addEventListener("click", (event) => {
    switch (event.target?.id) {
      case APP_ID.APP_INCERMENT:
        incrementClick();
        break;
      case APP_ID.APP_DECREMENT:
        decrementClick();
        break;
      default:
        break;
    }
  });
};
