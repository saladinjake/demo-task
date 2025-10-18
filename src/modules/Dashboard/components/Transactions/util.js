export const formatAccountBalance = (
  amount,
  decimalCount = 2,
  decimal = ".",
  thousands = ",",
) => {
  try {
    if (amount || amount === 0) {
      decimalCount = Math.abs(decimalCount);
      decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
      amount = isNaN(amount) ? 0 : amount;
      const negativeSign = amount < 0 ? "-" : "";
      const i = parseInt(
        (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)),
      ).toString();
      const j = i.length > 3 ? i.length % 3 : 0;
      return (
        negativeSign +
        (j ? i.substr(0, j) + thousands : "") +
        i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
        (decimalCount
          ? decimal +
            Math.abs(amount - i)
              .toFixed(decimalCount)
              .slice(2)
          : "")
      );
    }
    return "---";
  } catch (e) {
    console.log(e);
  }
};
