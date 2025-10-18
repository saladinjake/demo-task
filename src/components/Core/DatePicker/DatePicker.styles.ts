import styled from "styled-components";
import ReactDatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./DatePickerOverrides.css";

export const DatePickerLabel = styled.label`
  font-size: 13.5px;
  line-height: 18px;
  margin-bottom: 10px;
  text-align: left;

  font-family: Degular;
  font-weight: 600;
  font-style: Semibold;
  font-size: 16px;
  leading-trim: NONE;
  line-height: 24px;
  letter-spacing: -0.4px;
  vertical-align: middle;
`;

export const RequiredAsterix = styled.span`
  color: ${({ theme }) => "#000"};
`;

export const StyledDatePicker = styled(ReactDatePicker)`
  background: #ffffff;
  border: 1px solid #f4f4f4;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  height: 26px;
  width: 100%;
  text-align: left;
  padding: 10px 12px;

  .react-datepicker__month-select {
    border: 1px solid red;
  }
`;

export const InputWrapper = styled.div<{ width?: string }>`
  border-radius: 15px;
  background-color: #eff1f6;
  width: ${(props) => (props.width ? props.width : "314px")};
  height: 46px;
  position: relative;
`;
