import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker';

const trackReducer = (state, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

const fetchTrack = dispatch => (name) => {

};
const createTrack = dispatch => async (name, locations) => {
  await trackerApi.post('/tracks', {name, locations})
};

export const { Context, Provider } = createDataContext(
  trackReducer,
  {fetchTrack, createTrack},
  {}
);
