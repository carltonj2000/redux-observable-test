import React from "react";
import { connect } from "react-redux";

import * as actions from "../actions";

export const StoryList = ({ stories }) => (
  <ul>
    {stories.map(({ by, title, url, id }) => (
      <li key={`${id}`}>
        <a href={url}>{title}</a> - {by}
      </li>
    ))}
  </ul>
);
export const Stories = props => {
  const { loadStories, stories } = props;
  if (props.loading) return <p>Please wait...</p>;
  return (
    <div>
      <button onClick={loadStories}>Load Stories</button>
      <StoryList stories={stories} />
    </div>
  );
};

const mapState = state => state;
export default connect(
  mapState,
  actions
)(Stories);
