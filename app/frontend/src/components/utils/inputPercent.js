export const inputPercent = ({ displayValue }) => {
    const currentValue = parseFloat(displayValue);

    if (currentValue === 0) return;

    const fixedDigits = displayValue.replace(/^-?\d*\.?/, '');
    const newValue = parseFloat(displayValue) / 100;

    return {
        displayValue: String(newValue.toFixed(fixedDigits.length + 2))
    };
};
