import styled from "styled-components";
import { motion } from "framer-motion";

import libraryConfig from "../../libraryConfig";
import Base from "../Base/Base";
const { colors } = libraryConfig;

export const StyledHeader = styled(Base)`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 65px;
  padding: 10px 30px;
  background-color: ${colors.AppWhite};

  font-family: Mulish;
  color: ${colors.AppBlack};
`;

const bp = {
  md: "768px",
};

export const NavWrap = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;

  .hamburger {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    font-size: 30px;
    border-radius: 8px;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.06);
    cursor: pointer;
  }

  @media (min-width: ${bp.md}) {
    .hamburger {
      display: none;
    }
    flex: 0 0 auto;
  }
`;

export const Center = styled.nav`
  display: none;
  flex: 1;
  justify-content: center;
  align-items: center;

  @media (min-width: ${bp.md}) {
    display: flex;
    gap: 28px;
  }

  a {
    color: #000;
    text-decoration: none;
    opacity: 0.85;

    font-family: Degular;
    font-weight: 600;
    font-style: Semibold;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.4px;
    text-align: center;
    vertical-align: middle;

    transition:
      opacity 0.15s,
      transform 0.15s;
    &:hover {
      opacity: 1;
      transform: translateY(-2px);
    }
  }
`;

export const Right = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-end;

  .icon-btn {
    font-size: 30px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.04);
    cursor: pointer;
  }

  @media (max-width: 767px) {
    /* hide on mobile since inside drawer we'll show them */
    display: none;
  }
`;

export const IconMobile = styled.button`
  font-size: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.04);
  cursor: pointer;
`;

export const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 120;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
`;

export const DrawerPanel = styled(motion.aside)`
  width: 320px;
  max-width: 85%;
  background: #fff;
  padding: 28px 20px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const DrawerNavList = styled(motion.ul)`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: left;
  justify-content: center;
  flex: 1;

  li {
    width: 100%;
    a {
      display: block;
      width: 100%;
      padding: 10px 12px;
      border-radius: 8px;
      text-align: left;
      font-weight: 600;

      color: #000;
      text-decoration: none;
      background: transparent;
      &:hover {
        background: rgba(255, 255, 255, 0.03);
      }
    }
  }
`;

export const DrawerActions = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;

  .icon-btn {
    width: 44px;
    height: 44px;
    border-radius: 8px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.04);
  }
`;

export const LogoSpace = styled.div`
  font-weight: 700;
  letter-spacing: 0.6px;
  font-size: 18px;
`;

export const VisuallyHidden = styled.span`
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px);
  -webkit-clip-path: inset(50%);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;
