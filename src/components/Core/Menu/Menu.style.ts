import styled, { css, keyframes } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Svg } from "../../../assets/svg";

export const Container = styled.div`
  position: relative;
  display: inline-block;
`;

export const Menu = styled(motion.div)`
  position: absolute;
  top: 40px;
  left: -200px;
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 0.5rem 0;
  min-width: 270px;
  z-index: 10;
  overflow: hidden;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0.85rem 1rem;
  gap: 0.75rem;
  cursor: pointer;
  transition: background 0.25s;
  &:hover {
    background: #fafafa;

    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.05);
    border: 1px solid #fff;
  }

  .icon {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }

  .text {
    display: flex;
    flex-direction: column;
    h4 {
      font-size: 0.95rem;
      margin: 0;
      color: #222;
      font-weight: 600;
    }
    p {
      font-size: 0.8rem;
      color: #777;
      margin: 0.25rem 0 0;
    }
  }
`;
