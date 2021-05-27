import { css } from "goober";
import React, { memo } from "react";
import c from "../../util/classNames";

const Style = css`
  display: flex;
  flex-wrap: wrap;
`;

export default memo(function CardLayout(props) {
  const { className = "", children, ...rest } = props;
  return (
    <div className={c(Style, className)} {...rest}>
      {children}
    </div>
  );
});
