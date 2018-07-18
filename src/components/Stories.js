import React from "react";
import { connect } from "react-redux";

export const Stories = props => (
  <pre>
    <code>{JSON.stringify(props, null, 2)}</code>
  </pre>
);

const mapStateToProps = state => state;
export default connect(mapStateToProps)(Stories);
