import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSong } from "./../../actions/index";

import { Wrapper } from "./styles";

const CreateSong = () => {
  const dispatch = useDispatch();
  const [song, setSong] = useState({
    songId: 0,
    title: "",
    lyrics: "",
  });

  const { songId, title, lyrics } = song;

  const onSubmit = (e) => {
    e.preventDefault();
    try {
      if (songId === 0 || title === "" || lyrics === "") {
        alert("Song must have a number!");
      } else {
        const song_record = {
          songId: Number(songId),
          title: title.charAt(0).toUpperCase() + title.slice(1),
          lyrics,
        };
        console.log("this", song_record.lyrics);
        dispatch(addSong(song_record));
        window.location = "/hympsongs";
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Wrapper>
      <h3>Create a New Hymp Song</h3>
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

export default CreateSong;
