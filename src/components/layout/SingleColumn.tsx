import React, { memo } from "react";
import { css } from "goober";
import c from "../../util/classNames";

const Style = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  & > * {
    flex: 0 0 auto;
  }
`;

export default memo(function SingleColumn(props) {
  const { className = "", children, ...rest } = props;
  return (
    <div className={c(Style, className)} {...rest}>
      {children}
    </div>
  );
});
