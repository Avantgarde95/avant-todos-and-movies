import { css } from "@emotion/react";

export const inner = css`
  width: 100%;
  max-width: 1000px;
`;

export const shadowEffect = css`
  box-shadow: 2px 2px 2px 1px #e1e1e1, -1px -1px 2px 1px #e1e1e1;
`;

export const resetClickable = css`
  cursor: pointer;
  text-decoration: none;

  box-sizing: border-box;
  border: 0;
  background-color: transparent;
  font-family: inherit;
  font-size: inherit;
`;

export const resetForm = css`
  box-sizing: border-box;

  font-family: inherit;
  font-size: inherit;
`;
