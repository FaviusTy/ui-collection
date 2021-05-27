import { css } from "goober";
import React, { memo } from "react";
import c from "../util/classNames";

const Style = css`
  flex: 0 0 auto;
  background-color: #6b7280;
  min-width: 80px;
  width: 180px;
  height: 120px;
  margin: 8px;
`;

export default memo(function Card(props) {
  const { className = "", ...rest } = props;
  return <div className={c(Style, className)} {...rest}></div>;
});
