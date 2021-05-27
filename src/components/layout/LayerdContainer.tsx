/**
 * 子要素をレイヤリング(重ね合わせ)表示するComponent
 */
import { css } from "goober";
import React, { memo } from "react";
import c from "../../util/classNames";

const Styles = css`
  position: relative;

  & > * {
    position: absolute;
  }
`;

export default memo(function LayerdContainer(props: any) {
  const { className = "", children, ...rest } = props;
  return (
    <div className={c(Styles, className)} {...rest}>
      {children}
    </div>
  );
});
