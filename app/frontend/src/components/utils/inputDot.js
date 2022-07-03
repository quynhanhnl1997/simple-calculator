export const inputDot = ({ displayValue }) => {
    if (!/\./.test(displayValue)) {
        return {
            displayValue: `${displayValue}.`,
            waitingForOperand: false
        };
    }
    return {};
};
