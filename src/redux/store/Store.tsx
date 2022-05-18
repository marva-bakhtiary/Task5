import { createStore } from "redux";
const Store = () => {
  const store = createStore((state) => {
    return state;
  });
  console.log(store.getState());
  return store;
};
export default Store;
