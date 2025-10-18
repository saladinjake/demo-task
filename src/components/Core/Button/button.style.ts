import styled, { css } from "styled-components";
type Size = "sm" | "md" | "lg";
type Variant = "primary" | "ghost" | "outline";
const sizeMap = {
  sm: css`
    padding: 6px 10px;
    font-size: 13px;
    border-radius: 8px;
  `,
  md: css`
    padding: 10px 14px;
    font-size: 14px;
    border-radius: 10px;
  `,
  lg: css`
    padding: 14px 18px;
    font-size: 16px;
    border-radius: 12px;
  `,
};

const variantMap = {
  primary: css`
    background: #000;
    color: white;
    border: 1px solid rgba(37, 99, 235, 0.95);
    &:hover:not(:disabled) {
      transform: translateY(-2px);
    }
  `,
  ghost: css`
    background: #fff;
    color: #000;
    border: none;
    border-radius: none;
    &:hover:not(:disabled) {
      background: rgba(255, 255, 255, 0.02);
    }
  `,
  outline: css`
    background: #eff1f6;
    color: #000;
    border: 1px solid rgba(255, 255, 255, 0.06);
    &:hover:not(:disabled) {
      background: rgba(255, 255, 255, 0.02);
    }
  `,
};

export const StyledButton = styled.button<{
  size: Size;
  variant: Variant;
  reverse?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition:
    transform 160ms ease,
    box-shadow 160ms ease,
    background 160ms ease;
  user-select: none;
  outline: none;
  border-radius: 10px;
  box-shadow: ${({ variant }) =>
    variant == "ghost" ? "none" : "0 1px 0 rgba(0, 0, 0, 0.25)"};
  border: 0;

  ${(p) => sizeMap[p.size]}
  ${(p) => variantMap[p.variant]}

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
    transform: none;
  }

  & > .content {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    white-space: nowrap;
  }

  & > .icons {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-left: ${(p) => (p.reverse ? "0" : "8px")};
    margin-right: ${(p) => (p.reverse ? "8px" : "0")};
  }

  &:hover {
    ${({ variant }) =>
      variant == "ghost"
        ? css`
            box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
            background: #eff1f6;
          `
        : css``};
  }
`;

export const IconWrap = styled.span<{ size: Size }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  svg,
  img {
    display: block;
    width: ${(p) =>
      p.size === "sm" ? "16px" : p.size === "md" ? "18px" : "20px"};
    height: ${(p) =>
      p.size === "sm" ? "16px" : p.size === "md" ? "18px" : "20px"};
  }
`;
