import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongs, updateSong } from "./../../actions/index";

import { Wrapper } from "./styles";

const EditSong = ({
  match: {
    params: { id },
  },
}) => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs.list);
  const [song, setSong] = useState({
    songId: 0,
    title: "",
    lyrics: "",
  });

  useEffect(() => {
    dispatch(getSongs());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const filterSong = songs && songs.filter((song) => song._id == id);

    setSong({
      songId: filterSong[0] && filterSong[0].songId,
      title: filterSong[0] && filterSong[0].title,
      lyrics: filterSong[0] && filterSong[0].lyrics,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [songs]);

  const { songId, title, lyrics } = song;

  const onSubmit = (e) => {
    e.preventDefault();
    try {
      if (songId === 0 || title === "" || lyrics === "") {
        alert("Song must have a number!");
      } else {
        const song_record = {
          songId: Number(songId),
          title,
          lyrics,
        };
        console.log("this", song_record);
        dispatch(updateSong(id, song_record));
        window.location = "/hympsongs";
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Wrapper>
      <h3>Update a New Hymp Song</h3>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label>Hymp Number</label>
          <input
            type='text'
            required
            className='form-control'
            value={songId}
            onChange={(e) => setSong({ ...song, songId: e.target.value })}
          />
        </div>
        <div className='form-group'>
          <label>Song Title</label>
          <input
            type='text'
            required
            className='form-control'
            value={title}
            onChange={(e) => setSong({ ...song, title: e.target.value })}
          />
        </div>
        <div className='form-group'>
          <label>Lyrics</label>

          <textarea
            type='text'
            required
            aria-multiline
            className='form-control'
            value={lyrics}
            onChange={(e) => setSong({ ...song, lyrics: e.target.value })}
          />
        </div>
        <div className='form-group'>
          <input
            type='submit'
            value='Create Song'
            className='btn btn-primary'
          />
        </div>
      </form>
    </Wrapper>
  );
};

export default EditSong;
