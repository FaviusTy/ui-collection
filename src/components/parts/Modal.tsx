import { css } from "goober";
import React, { memo, useCallback } from "react";
import { createPortal } from "react-dom";
import { Center } from "../../styles/layout";
import c from "../../util/classNames";
import noop from "../../util/noop";

const BackScreen = css`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export default memo(function Modal(props: any) {
  const {
    visible = false,
    className = "",
    children,
    onClick = noop,
    ...rest
  } = props;
  const clickHandler = useCallback(
    (e) => {
      console.log("backscreen");
      console.log(e);
      e.stopPropagation();
      onClick(e);
    },
    [onClick]
  );
  if (!visible) return <></>;
  const attachEl = document.getElementById("overlay");
  if (!attachEl)
    throw new Error("Portalのレンダリング対象となる親要素が存在していません");
  return createPortal(
    <div
      className={c(BackScreen, Center, className)}
      onClick={clickHandler}
      {...rest}
    >
      {children}
    </div>,
    attachEl
  );
});
