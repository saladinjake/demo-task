export const titleCase = (str) => {
  const splitStr = str.toLowerCase().split(" ");
  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }

  return splitStr.join(" ");
};

const sentenceCase = (str) => str.replace(/([a-zA-Z])(?=[A-Z])/g, "$1 ");
const errorDetail = (str) => titleCase(sentenceCase(str));
export const model =
  (key: string) =>
  (value: string | Date | Array<string> | number) =>
  (rules: string) => {
    let errors = {};

    for (const rule of rules.split("|")) {
      if (rule === "isRequired") {
        if (Array.isArray(value) && !value.length) {
          errors = { ...errors, [key]: `${errorDetail(key)} is required!` };
          return errors;
        }

        if (!value && value !== 0) {
          errors = { ...errors, [key]: `${errorDetail(key)}  is required!` };
          return errors;
        }
      }

      if (rule.split(":").length > 1) {
        const [limit, limitValue] = rule.split(":");

        if (limit === "max") {
          if (value?.toString().length > Number(limitValue)) {
            errors = {
              ...errors,
              [key]: `${errorDetail(key)} cannot be greater than ${limitValue} characters`,
            };
            return errors;
          }
        }

        if (limit === "min") {
          if (value?.toString().length < Number(limitValue)) {
            errors = {
              ...errors,
              [key]: `${errorDetail(key)} cannot be less than ${limitValue} characters`,
            };
            return errors;
          }
        }

        if (limit === "len") {
          if (value?.toString().length !== Number(limitValue)) {
            errors = {
              ...errors,
              [key]: `${errorDetail(key)} must have ${limitValue} characters`,
            };
            return errors;
          }
        }
      }
    }

    return errors;
  };
