import React from "react";
import { useHistory } from "react-router-dom";

export default function NavLink(props) {
  let history = useHistory()
  return (
    <div
      onClick={() => history.push(props.to)}
      className={props.active ? "nav-link nav-link-active" : "nav-link"}
    >
      {props.icon}
    </div>
  );
}
