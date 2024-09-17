import {
  decrementStoreHandler,
  incrementStoreHandler,
  withStoredCounterData,
  storeLisnter,
} from "./redux";
import { renderCounterValue, setButtonClicks } from "./ui";

setButtonClicks({
  incrementClick: incrementStoreHandler,
  decrementClick: decrementStoreHandler,
});

const renderCounterWithStoredData = withStoredCounterData(renderCounterValue);

storeLisnter(renderCounterWithStoredData);

renderCounterWithStoredData();
