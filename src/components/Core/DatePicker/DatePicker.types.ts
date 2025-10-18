export default interface IDatePickerProps {
  date: string | Date;
  setDate?: (value: Date | string) => void;
  label?: string;
  required?: boolean;
  error?: boolean;
  message?: string;
  disabled?: boolean;
  width?: string;
  name?: any;
  placeHolder?: string;
  withDisplayDate?: boolean;
}
