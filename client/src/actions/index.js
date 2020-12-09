import { FETCH_SONGS, FETCH_SONGS_ERROR, LOADING } from "./types";

import api from "./api/index";

const fetchSongs = (data) => ({
  type: FETCH_SONGS,
  payload: data,
});

const fetchSongsError = (err) => ({
  type: FETCH_SONGS_ERROR,
  payload: err,
});

const loading = () => ({
  type: LOADING,
});

//<---------Songs actions----------->

export const getSongs = () => async (dispatch) => {
  dispatch(loading());
  try {
    const response = await api.get("songs/");
    console.log("Songs:", response.data);
    dispatch(fetchSongs(response.data));
  } catch (e) {
    dispatch(fetchSongsError("not found"));
  }
};

export const updateSong = (id, exercise) => async (dispatch) => {
  try {
    const response = await api.post(`songs/update/${id}`, exercise);
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};

export const addSong = (song) => async (dispatch) => {
  try {
    const response = await api.post("http://localhost:5000/songs/add", song);
    console.log(response);
  } catch (e) {
    console.log("ERTGER", e);
  }
};

export const deleteSong = (id) => async (dispatch) => {
  try {
    const response = await api.delete("songs/" + id);
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};
