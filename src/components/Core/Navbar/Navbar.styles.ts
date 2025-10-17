import styled from "styled-components";
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
  margin-top: 20px;
  border-radius: 50px;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.05);

  font-family: Mulish;
  color: ${colors.AppBlack};
`;
