export const toggleSign = ({ displayValue }) => {
    const newValue = parseFloat(displayValue) * -1;

    return {
        displayValue: String(newValue)
    };
};
