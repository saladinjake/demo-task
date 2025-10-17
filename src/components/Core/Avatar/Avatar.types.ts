export interface AvatarProps extends IStyledAvatarProps {
  src?: any;
  name?: string;
  text?: string;
  type: "image" | "text";
}

export interface IStyledAvatarProps {
  shape?: Shape;
  size?: Size;
  backgroundColor?: string;
  color?: string;
}

export type Size = "sm" | "md" | "lg";
export type Shape = "square" | "rounded";
