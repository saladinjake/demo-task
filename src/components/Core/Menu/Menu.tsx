import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Svg } from "../../../assets/svg";
import Text from "../Text/Text";
import { Menu, Container, MenuItem } from "./Menu.style";
import Flex from "../Flex/Flex";
import { RightArrow } from "../Card/svg";

interface MenuItemProps {
  label: string;
  subItems?: { title: string; description: string; icon?: React.ReactNode }[];
}

export const MenuList: React.FC<MenuItemProps> = ({
  label,
  subItems = [],
  isOpen,
  setIsOpen,
}) => {
  return (
    <Container>
      <AnimatePresence>
        {isOpen && (
          <Menu
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.25 }}
          >
            {subItems.map((item, i) => (
              <MenuItem key={i} onClick={(prev) => setIsOpen(!prev)}>
                {item.icon && <span className="icon">{item.icon}</span>}

                <Flex justifyContent="between" width="100%" gap="22px">
                  <div className="text">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                  <RightArrow />
                </Flex>
              </MenuItem>
            ))}
          </Menu>
        )}
      </AnimatePresence>
    </Container>
  );
};
