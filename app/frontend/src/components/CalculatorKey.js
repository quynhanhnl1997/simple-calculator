import styles from './css/calculatorModule.css';

export const CalculatorKey = ({ className = '', ...props }) => {
    return (
        <button className={`${styles.calculatorKey} ${className}`} {...props} />
    );
};
