export const inputDigit = (digit, displayValue, waitingForOperand) => {
    if (waitingForOperand) {
        return {
            displayValue: String(digit),
            waitingForOperand: false
        };
    } else {
        return {
            displayValue:
                displayValue === '0' ? String(digit) : displayValue + digit
        };
    }
};
