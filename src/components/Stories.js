import React from "react";
import { connect } from "react-redux";

import { loadStories, clearStories } from "../actions";

export const StoryList = ({ items }) => (
  <ul>
    {console.log(items) ||
      items.map(({ by, title, url, id }) => (
        <li key={`${id}`}>
          <a href={url}>{title}</a> - {by}
        </li>
      ))}
  </ul>
);
export const Stories = props => (
  <div>
    <button onClick={props.loadStories}>Load Stories</button>
    <button onClick={props.clearStories}>Clear Stories</button>
    <StoryList {...props} />
  </div>
);

const mapState = state => state;
const mapDispatch = dispatch => ({
  loadStories: () => dispatch(loadStories()),
  clearStories: () => dispatch(clearStories())
});
export default connect(
  mapState,
  mapDispatch
)(Stories);
