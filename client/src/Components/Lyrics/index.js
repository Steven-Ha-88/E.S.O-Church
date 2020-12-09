import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Wrapper } from "./style";

import { getSongs } from "./../../actions/index";

const SongList = ({
  match: {
    params: { id },
  },
}) => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs.list);
  const loading = useSelector((state) => state.songs.loading);
  const filterSong = songs && songs.filter((song) => song._id == id);

  useEffect(() => {
    dispatch(getSongs());
    console.log(id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log("eger", filterSong);

  return (
    <Wrapper>
      <div style={{ margin: "20px" }}>
        <h4>{filterSong[0] && filterSong[0].title} lyrics</h4>
      </div>
      {loading ? "Loading..." : filterSong[0] && filterSong[0].lyrics}
    </Wrapper>
  );
};

export default SongList;
