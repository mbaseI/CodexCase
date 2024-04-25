import { GET_PLAYERS, SET_COUNT } from './constants';

export function setCount(values: number) {
  return {
    type: SET_COUNT,
    values,
  };
}

export function getPlayers() {
  return {
    type: GET_PLAYERS,
  };
}
