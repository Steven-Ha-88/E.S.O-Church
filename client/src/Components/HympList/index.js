import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Song from "./Song/index";

import { getSongs, deleteSong } from "./../../actions/index";
import { Table, Header, GlobalStyle, Wrapper } from "./styled";

const SongList = (props) => {
  const dispatch = useDispatch();
  const [term, setTerm] = useState("");
  const value = term.charAt(0).toUpperCase() + term.slice(1);

  const songs = useSelector((state) => state.songs.list);
  const loading = useSelector((state) => state.songs.loading);

  songs.sort((a, b) => {
    return a.songId - b.songId;
  });

  const filter_list = songs.filter((song) => {
    const { title, songId, lyrics } = song;
    return (
      title.includes(value) ||
      String(songId).includes(value) ||
      lyrics.includes(value)
    );
  });

  useEffect(() => {
    dispatch(getSongs());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderList = (list) => {
    return list.map((item) => {
      return <Song track={item} deleteSong={deleteSong} key={item._id} />;
    });
  };

  return (
    <>
      {loading ? (
        <div className='loading-container'>
          <div className='spinner-border text-primary' role='status'>
            <span className='sr-only'>Loading...</span>
          </div>
        </div>
      ) : (
        <Wrapper>
          <GlobalStyle />
          <div style={{ marginBottom: "10px" }}>
            <label className='form-label'>
              Search by Number, Title or Lyric
            </label>
            <input
              placeholder='E.g. Amazing Grace'
              type='email'
              className='form-control'
              onChange={(event) => setTerm(event.target.value)}
            />
          </div>
          <h3>Hymp Songs</h3>
          <p>Results: {filter_list ? filter_list.length : songs.length}</p>
          <Table className='table table-borderless table-hover table-striped'>
            <thead className='thead-light'>
              <tr>
                <Header>#</Header>
                <Header>Title</Header>
                <Header>Actions</Header>
              </tr>
            </thead>
            <tbody>
              {renderList(filter_list.length > 0 ? filter_list : songs)}
            </tbody>
          </Table>
        </Wrapper>
      )}
    </>
  );
};

export default SongList;
