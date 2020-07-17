import "./index.scss";
import store, { increment, decrement, reset } from "./store";

const resultElement = document.querySelector(".counter__result");
const incrementBtn = document.querySelector('[data-action="increment"]');
const resetBtn = document.querySelector('[data-action="reset"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

const onIncrement = () => {
  store.dispatch(increment());
};

const onDecrement = () => {
  store.dispatch(decrement());
};

const onReset = () => {
  store.dispatch(reset());
};

incrementBtn.addEventListener("click", onIncrement);
decrementBtn.addEventListener("click", onDecrement);
resetBtn.addEventListener("click", onReset);

store.subscribe(() => {
  const value = store.getState().history.reduce((acc, value) => acc + value, 0);

  const history = store
    .getState()
    .history.map((value) => (value > 0 ? (value = `+${value}`) : `${value}`))
    .join("")

  resultElement.textContent =
    history.length === 0 ? null : `${history} = ${value}`;
});
