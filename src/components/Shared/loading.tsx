import styled, { keyframes } from "styled-components";

import libraryConfig from "../libraryConfig";

import Base from "../Core/Base/Base";
const { colors } = libraryConfig;

interface LoaderProps {
  color?: string;
  size?: any;
}

type ISpinnerProps = {
  color?: string;
  size?: any;
};

const Loader: React.FC<LoaderProps> = ({ color, size = "md" }) => {
  return (
    <StyledLoader color={color} size={size}>
      <div className="spinner-wrapper">
        <div className="spinner"></div>
      </div>
    </StyledLoader>
  );
};

export default Loader;

const sizes = { sm: "45px", md: "55px", lg: "65px" };

const spinAnimation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
`;

const StyledLoader = styled(Base)<LoaderProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  .spinner-wrapper {
    width: ${({ size = "md" }) => `50px`};
    height: ${({ size = "md" }) => `50px`};
    border-radius: 50%;
    border: 1px solid ${colors.Black400};
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 5px 15px 0px rgba(64, 25, 109, 0.2);
  }

  .spinner {
    border-radius: 50%;
    width: ${({ size = "md" }) => "50px"};
    height: ${({ size = "md" }) => "50px"};
    border: 3px solid ${({ color }) => color || "#fafafa"};
    border-bottom-color: transparent;
    animation: ${spinAnimation} 0.7s linear infinite;
    pointer-events: none;
  }

  .logo-animation {
    width: 400px;
    height: 180px;
  }
`;

const SpinnerWrapper = styled.div<{ color: string; size: any }>`
  .spinner-wrap {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.8;
    pointer-events: none;
  }

  .spinner {
    border-radius: 50%;
    width: ${({ size = "md" }) => "50px"};
    height: ${({ size = "md" }) => "50px"};
    border: 3px solid ${({ color }) => color || "#fafafa"};
    border-bottom-color: transparent;
    border-top-color: transparent;
    animation: ${spinAnimation} 0.7s linear infinite;
    pointer-events: none;
  }
`;
