export const main_increment = () => {
  return {
    type: "MAIN_INCREMENT",
  };
};

const mainPageNumberReducer = (state = 1, action) => {
  switch (action.type) {
    case "MAIN_INCREMENT":
      return state + 1;

    default:
      return state;
  }
};
export default mainPageNumberReducer;
