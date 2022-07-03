export const performOperation = (
    nextOperator,
    CalculatorOperations,
    displayValue,
    value,
    operator
) => {
    const inputValue = parseFloat(displayValue);
    if (value == null) {
        return {
            value: inputValue,
            waitingForOperand: true,
            operator: nextOperator
        };
    } else if (operator) {
        const currentValue = value || 0;
        const newValue = CalculatorOperations[operator](
            currentValue,
            inputValue
        );

        return {
            value: newValue,
            displayValue: String(newValue),
            waitingForOperand: true,
            operator: nextOperator
        };
    }
};
