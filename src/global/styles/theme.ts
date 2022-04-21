import { css, CSSObject } from "styled-components";

const theme = {
  colors: {
    green: "#21EB00",
    gray: "#191A18",
    background: "#000",
    text: "#fff",
  },
  medias: {
    sm: (params: any) => css`
      @media (max-width: 576px) {
        ${params}
      }
    `,
    md: (params: CSSObject) => css`
      @media (max-width: 768px) {
        ${params}
      }
    `,
    lg: (params: any) => css`
      @media (max-width: 992px) {
        ${params}
      }
    `,
    xl: (params: any) => css`
      @media (max-width: 1200px) {
        ${params}
      }
    `,
  },
};

export default theme;
