import { useState } from "react";
import Flex from "../Flex/Flex";

import {
  DatePickerLabel,
  RequiredAsterix,
  StyledDatePicker,
  InputWrapper,
} from "./DatePicker.styles";

import IDatePickerProps from "./DatePicker.types";
import { InputWrapper as WrappedInput } from "./InputWrapper.styles";

const CloseButton = ({ onClick, disabled }) => {
  if (disabled) {
    return <></>;
  }
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        right: "17px",
        cursor: "pointer",
        marginRight: "20px",
      }}
      onClick={onClick}
    >
      <path
        d="M12 2.25C6.624 2.25 2.25 6.624 2.25 12C2.25 17.376 6.624 21.75 12 21.75C17.376 21.75 21.75 17.376 21.75 12C21.75 6.624 17.376 2.25 12 2.25ZM12 3.75C16.5653 3.75 20.25 7.43475 20.25 12C20.25 16.5653 16.5653 20.25 12 20.25C7.43475 20.25 3.75 16.5653 3.75 12C3.75 7.43475 7.43475 3.75 12 3.75ZM9.165 8.085L8.085 9.165L10.923 12L8.0865 14.835L9.1665 15.915L12 13.0778L14.835 15.9127L15.915 14.835L13.0778 12L15.9127 9.165L14.835 8.085L12 10.923L9.165 8.0865V8.085Z"
        fill="#4D4D4D"
        fillOpacity="0.8"
      />
    </svg>
  );
};

const DatePicker = (props: IDatePickerProps) => {
  const {
    date,
    setDate,
    label,
    required,
    error,
    message,
    disabled,
    width = "314px",
    placeHolder = "Select Date",
    withDisplayDate = true,
  } = props;

  const [touched, setTouched] = useState(false);
  const handlReset = () => {
    setDate(new Date()?.toISOString());
    setTouched(false);
  };

  return (
    <Flex direction="column" style={{ opacity: disabled ? 0.7 : 1 }}>
      {label && (
        <DatePickerLabel>
          {label} {required && <RequiredAsterix>*</RequiredAsterix>}
        </DatePickerLabel>
      )}
      <InputWrapper width={width}>
        <StyledDatePicker
          selected={date}
          onChange={setDate}
          disabled={disabled}
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          dateFormat="dd-MM-yyyy"
        />
      </InputWrapper>
    </Flex>
  );
};

export default DatePicker;
