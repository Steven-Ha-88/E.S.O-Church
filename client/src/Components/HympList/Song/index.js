import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const Song = ({ track: { songId, title, lyrics, _id }, deleteSong }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteSong(_id));
    window.location = "/hympsongs";
  };

  return (
    <tr>
      <td>{songId}</td>
      <td>
        <Link to={`/lyrics/${_id}`}>{title}</Link>
      </td>
      <td>
        <Link to={`/edit/${_id}`}>Edit</Link> |
        <span
          style={{
            cursor: "pointer",
            color: "#007BFF",
            display: "inline-block",
          }}
          onClick={handleClick}>
          Delete
        </span>
      </td>
    </tr>
  );
};

export default Song;
