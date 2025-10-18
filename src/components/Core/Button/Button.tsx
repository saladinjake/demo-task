import React, { ReactNode } from "react";
import { StyledButton, IconWrap } from "./button.style";

type Size = "sm" | "md" | "lg";
type Variant = "primary" | "ghost" | "outline";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  endIcon?: any;
  size?: Size;
  variant?: Variant;
  reverse?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      children,
      endIcon,
      size = "md",
      variant = "primary",
      disabled,
      reverse = false,
      ...rest
    },
    ref,
  ) => {
    let icons: ReactNode[] = [];
    if (!endIcon) icons = [];
    else if (Array.isArray(endIcon)) icons = endIcon.slice(0, 2);
    else icons = [endIcon];
    return (
      <StyledButton
        ref={ref}
        size={size}
        variant={variant}
        disabled={disabled}
        reverse={reverse}
        {...rest}
      >
        {reverse && icons.length > 0 && (
          <span className="icons" aria-hidden>
            {icons.map((ic, i) => (
              <IconWrap key={i} size={size}>
                {ic}
              </IconWrap>
            ))}
          </span>
        )}

        <span className="content">{children}</span>

        {!reverse && icons.length > 0 && (
          <span className="icons" aria-hidden>
            {icons.map((ic, i) => (
              <IconWrap key={i} size={size}>
                {ic}
              </IconWrap>
            ))}
          </span>
        )}
      </StyledButton>
    );
  },
);

export default Button;
