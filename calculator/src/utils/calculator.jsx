import { evaluate } from "mathjs";

export const calculateExpression = (expression) => {
  try {
    if (!expression) return "";

    const result = evaluate(expression);

    if (!isFinite(result)) return "Error";

    return result.toString();
  } catch {
    return "Error";
  }
};

export const isValidInput = (current, value) => {
  const operators = ["+", "-", "*", "/", "."];

  const lastChar = current.slice(-1);

  if (operators.includes(lastChar) && operators.includes(value)) {
    return false;
  }

  return true;
};
