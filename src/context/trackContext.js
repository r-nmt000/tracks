import createDataContext from "./createDataContext";

const trackReducer = (state, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

const fetchTrack = dispatch => (name) => {

};
const createTrack = dispatch => (name, locations) => {
  console.log(name);
};

export const { Context, Provider } = createDataContext(
  trackReducer,
  {fetchTrack, createTrack},
  {}
);
