export const clearLastChar = ({ displayValue }) => {
    return {
        displayValue: displayValue.substring(0, displayValue.length - 1) || '0'
    };
};
