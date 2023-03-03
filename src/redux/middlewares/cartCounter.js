const cartCounter = (state) => (next) => (action) => {
  console.log("Current State", state.getState());
  console.log("Action", action);

  return;
};

export default cartCounter;
