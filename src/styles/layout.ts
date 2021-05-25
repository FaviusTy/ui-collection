import { css } from "goober";

// 親要素と等しい幅・高さにするための定義
export const FullSize = css`
  width: 100%;
  height: 100%;
`;

// 子要素を中央表示するための定義
export const Center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Flexboxの子要素のサイズを固定するための定義
export const StaticItem = css`
  flex: 0 0 auto;
`;
