export const search_increment = () => {
  return {
    type: "SEARCH_INCREMENT",
  };
};

const searchPageNumberReducer = (state = 1, action) => {
  switch (action.type) {
    case "SEARCH_INCREMENT":
      return state + 1;
    default:
      return state;
  }
};
export default searchPageNumberReducer;
