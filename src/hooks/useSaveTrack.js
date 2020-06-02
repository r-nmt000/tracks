import {useState, useEffect, useContext} from 'react';
import { Context as TrackContext } from '../context/trackContext';
import { Context as LocationContext } from '../context/locationContext';


export default (shouldTrack, callback) => {
  const { createTrack } = useContext(TrackContext);
  const { state: { locations, name }, reset} = useContext(LocationContext);

  const saveTrack = () => {
    createTrack(name, locations);
    reset();
  };

  return [saveTrack];
}
