import { css } from "goober";
import React, { memo } from "react";
import c from "../../util/classNames";

const Style = ({ baseSize = "auto", rowNum = "auto-fit" }) => css`
  display: grid;
  grid-template-columns: repeat(${rowNum}, minmax(${baseSize}, 1fr));
`;

export default memo(function FlexibleGridLayout(props: any) {
  const { className = "", children, ...rest } = props;
  return (
    <div className={c(Style(rest), className)} {...rest}>
      {children}
    </div>
  );
});
