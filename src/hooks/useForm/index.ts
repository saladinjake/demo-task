import { useState, useEffect, useCallback } from "react";
export { model } from "./utilities/model";

function useForm(props) {
  const { initialValues = {}, validations, onSubmit, withFocus = true } = props;
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const stringifiedInitialvalues = JSON.stringify(initialValues);

  useEffect(() => {
    setValues(initialValues);
  }, [stringifiedInitialvalues]);

  useEffect(() => {
    setErrors(validations(values));
  }, [values, withFocus]);

  const isInvalidCallBack = (errors) => {
    if (Object.values(errors).length) {
      return true;
    }
    return false;
  };
  const isInvalid = useCallback((errors) => isInvalidCallBack(errors), []);
  const setFieldValue = (name: string, value: string) => {
    setTouched((touched) => {
      return { ...touched, [name]: true };
    });
    setValues((values) => {
      return {
        ...values,
        [name]: value || "",
      };
    });
  };

  const handleChange = ({ target }) => {
    setTouched((touched) => {
      return { ...touched, [target.name]: true };
    });
    setValues((values) => {
      return {
        ...values,
        [target.name]: target.value || "",
      };
    });
  };

  const handleSubmit = (event?: any) => {
    event && event?.preventDefault();
    onSubmit(values);
  };

  const resetForm = (initialValues = {}) => {
    setTouched({});
    setErrors({});
    setValues(initialValues);
  };

  return {
    values,
    handleChange,
    handleSubmit,
    errors,
    touched,
    invalid: isInvalid(errors),
    resetForm,
    setErrors,
    setFieldValue,
  };
}
export const hasError = (name, touched, errors, showByDefault = false) => {
  if (
    Object.prototype.hasOwnProperty.call(touched, name) &&
    Object.prototype.hasOwnProperty.call(errors, name)
  )
    return errors[name];

  if (Object.prototype.hasOwnProperty.call(errors, name) && showByDefault)
    return errors[name];
};

export default useForm;
