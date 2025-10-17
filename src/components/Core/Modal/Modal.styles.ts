import styled, { keyframes } from "styled-components";
import {
  ModalMainPropsType,
  ModalHeaderPropsType,
  ModalProps,
} from "./Modal.types";
import Flex from "../Flex/Flex";
import libraryConfig from "../../libraryConfig";
import Base from "../Base/Base";
import "../../main.css";
const { colors } = libraryConfig;
const fadeInAnimation = keyframes`
from {
  transform: translateY(-100px);
  opacity: 0;
}
to {
  transform: translateY(0);
  opacity: 1;
}
`;
export const StyledModalBackground = styled(Base)`
  position: fixed;
  overflow: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(64, 25, 109, 0.2);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5000;
  box-sizing: border-box;
`;
export const StyledModalMain = styled(Base)<ModalMainPropsType>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Mulish;
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid rgba(219, 220, 224, 0.5);
  position: relative;
  margin: 0 auto;
  border-radius: 6px;
  border: 1px solid rgba(219, 220, 224, 0.5);
  box-shadow: 15px 30px 40px 0px rgba(64, 25, 109, 0.07);
  animation: ${fadeInAnimation} 0.5s ease-in-out;
  overflow-y: ${({ maxHeight }) => (maxHeight ? "auto" : "initial")};
  max-height: ${({ maxHeight }) => maxHeight || "90vh"};
  min-height: ${({ minHeight }) => minHeight || ""};
  .modal-hr {
    margin: 0 !important;
    opacity: 0.6;
    border: 1px solid #dbdce0;
    width: 100%;
  }

  width: ${(props) => (props.width ? props.width : "416px")};

  @media only screen and (max-width: 768px) {
    width: 100%;
  }

  * {
    box-sizing: border-box;
  }

  .animation {
    height: 100px;
  }

  .alert-animation {
    height: 80px;
  }
`;

export const StyledScrollModalMain = styled.div<ModalMainPropsType>`
  background: #ffffff;
  border: 1px solid rgba(219, 220, 224, 0.5);
  box-shadow: 15px 30px 40px rgba(64, 25, 109, 0.07);
  border-radius: 5px;
  position: relative;
  margin: 0 auto;
  max-height: ${(props) => props.maxHeight && props.maxHeight};

  .modal-hr {
    margin: 0 !important;
    opacity: 0.6;
    border: 1px solid #dbdce0;
    width: 100%;
  }

  width: ${(props) => (props.width ? props.width : "300px")};

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledModalFooter = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 20px 0 40px 0;

  .secondaryBtn {
    margin-right: 25px;
  }
`;

export const StyledModalHeader = styled.header<ModalHeaderPropsType>`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  padding: 10px;
  line-height: 22px;

  h2 {
    font-weight: 800;
    margin-bottom: ${(props) => (props.subtitle ? "16px" : 0)};
    font-size: 20px;
  }

  text-align: center;
`;

export const StyledScrollModalHeader = styled.header<ModalHeaderPropsType>`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;

  h2 {
    font-weight: 800;
    margin-bottom: ${(props) => (props.subtitle ? "16px" : 0)};
  }

  margin-bottom: 20px;
  text-align: center;
`;

export const StyledModalContent = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.8;
  color: #141414;
  text-align: center;
`;

export const StyledSuccessModal = styled.div<ModalProps>`
  .content {
    margin: 20px 15px;
  }
  .text-info {
    font-weight: 500;
    align-items: center;
    color: #40196d;
    cursor: pointer;
  }
`;

export const StyledErrorModal = styled.div<ModalProps>`
  .content {
    margin: 20px 15px;
    text-align: center;
    padding: 0 20px;
  }
  .error-footer {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 20px;
  }
`;

export const ModalFooter = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 2rem;
`;

export const StyledCsvModal = styled(Flex)`
  padding-bottom: 10px;
  color: ${colors.AppDarkGrey};
  font-size: 12px;
`;

export const StyledUploadCsvModal = styled.div`
  .file-input {
    width: 100%;
    position: relative;
    visibility: hidden;
  }

  .file-input::before {
    content: "+  Or select a file from your computer";
    display: flex;
    width: 100%;
    height: auto;
    position: absolute;
    visibility: visible;
    justify-content: center;
    top: 0;
    right: 0;
    font-style: normal;
    font-weight: 800;
    font-size: 13px;
    color: #40196d;
    font-family: inherit;
    cursor: pointer;
  }

  .description-text {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export const StyledHr = styled.hr`
  border: 1px solid ${colors.Black200};
  margin: 15px auto;
  opacity: 0.6;
`;
