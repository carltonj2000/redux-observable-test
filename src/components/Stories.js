import React from "react";
import { connect } from "react-redux";

import * as actions from "../actions";

export const StoryList = ({ items }) => (
  <ul>
    {items.map(({ by, title, url, id }) => (
      <li key={`${id}`}>
        <a href={url}>{title}</a> - {by}
      </li>
    ))}
  </ul>
);
export const Stories = ({ loadStories, clearStories, items }) => (
  <div>
    <button onClick={loadStories}>Load Stories</button>
    <button onClick={clearStories}>Clear Stories</button>
    <StoryList items={items} />
  </div>
);

const mapState = state => state;
export default connect(
  mapState,
  actions
)(Stories);
