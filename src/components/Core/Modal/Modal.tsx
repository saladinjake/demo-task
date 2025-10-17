import React from "react";
import { createPortal } from "react-dom";
import {
  StyledModalBackground,
  StyledModalMain,
  StyledModalContent,
  StyledScrollModalMain,
  StyledScrollModalHeader,
} from "./Modal.styles";
import ModalHeader from "./ModalHeader";
import Box from "../Box";
import ModalFooter from "./ModalFooter";
import { useEffect } from "react";
import styled from "styled-components";
export type ModalProps = {
  showModal?: boolean;
  width?: string;
  children?: React.ReactNode;
  secondaryBtn?: React.ReactNode;
  primaryBtn?: React.ReactNode;
  title?: string;
  subtitle?: string;
  minHeight?: string;
  maxHeight?: string;
  scrollable?: boolean;
};
function Modal({
  showModal,
  width,
  children,
  secondaryBtn,
  primaryBtn,
  title,
  subtitle,
  minHeight,
  maxHeight,
  scrollable,
}: ModalProps): React.ReactPortal {
  useEffect(() => {
    // Prevent body scroll on modal render
    if (!showModal) {
      document.body.style.overflow = "unset";
      document.getElementById("root").style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
      document.getElementById("root").style.overflow = "hidden";
    }
  }, [showModal]);
  if (!showModal) return null;
  return createPortal(
    <>
      <StyledModalBackground>
        {scrollable ? (
          <StyledScrollModalMain
            width={width}
            minHeight={minHeight}
            maxHeight={maxHeight}
          >
            {title ? (
              <StyledScrollModalHeader title={title} subtitle={subtitle} />
            ) : (
              ""
            )}
            <StyledModalContent>
              <Box style={{ maxHeight: "90vh", overflowY: "auto" }}>
                {children}
              </Box>
            </StyledModalContent>
            {primaryBtn || secondaryBtn ? (
              <ModalFooter
                secondaryBtn={secondaryBtn}
                primaryBtn={primaryBtn}
              />
            ) : (
              ""
            )}
          </StyledScrollModalMain>
        ) : (
          <StyledModalMain
            width={width}
            minHeight={minHeight}
            maxHeight={maxHeight}
          >
            {title ? <ModalHeader title={title} subtitle={subtitle} /> : ""}
            <StyledModalContent>{children}</StyledModalContent>
            {primaryBtn || secondaryBtn ? (
              <ModalFooter
                secondaryBtn={secondaryBtn}
                primaryBtn={primaryBtn}
              />
            ) : (
              ""
            )}
          </StyledModalMain>
        )}
      </StyledModalBackground>
    </>,
    document.body,
  );
}
export default Modal;
export const InformationModal = styled(Modal)`
  max-height: 90vh;
  overflow-y: auto;
`;
