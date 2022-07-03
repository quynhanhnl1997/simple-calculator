import React, { useEffect, useReducer, Suspense } from 'react';
import { CalculatorKey } from './CalculatorKey';
import CalculatorDisplay from './CalculatorDisplay';
import styles from './css/calculatorModule.css';
import { clearAll } from './utils/clearAll';
import { clearDisplay } from './utils/clearDisplay';
import { clearLastChar } from './utils/clearLastChar';
import { inputDigit } from './utils/inputDigit';
import { inputDot } from './utils/inputDot';
import { inputPercent } from './utils/inputPercent';
import { performOperation } from './utils/performOperation';
import { toggleSign } from './utils/toggleSign';

const CalculatorOperations = {
    '/': (prevValue, nextValue) => prevValue / nextValue,
    '*': (prevValue, nextValue) => prevValue * nextValue,
    '+': (prevValue, nextValue) => prevValue + nextValue,
    '-': (prevValue, nextValue) => prevValue - nextValue,
    '=': (prevValue, nextValue) => nextValue
};

const calcReducer = (currentState, newState) => {
    return { ...currentState, ...newState };
};

export const Calculator = () => {
    const [state, setState] = useReducer(calcReducer, {
        value: null,
        displayValue: '0',
        operator: null,
        waitingForOperand: false
    });
    const { value, displayValue, operator, waitingForOperand } = state;

    const handleKeyDown = (event) => {
        let { key } = event;

        if (key === 'Enter') key = '=';

        if (/\d/.test(key)) {
            event.preventDefault();
            setState(inputDigit(parseInt(key, 10)));
        } else if (key in CalculatorOperations) {
            event.preventDefault();
            setState(performOperation(key));
        } else if (key === '.') {
            event.preventDefault();
            setState(inputDot(displayValue));
        } else if (key === '%') {
            event.preventDefault();
            setState(inputPercent(displayValue));
        } else if (key === 'Backspace') {
            event.preventDefault();
            setState(clearLastChar(displayValue));
        } else if (key === 'Clear') {
            event.preventDefault();

            if (state.displayValue === '0') {
                setState(clearAll());
            } else {
                setState(clearDisplay());
            }
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    });

    const displayIsNonZero = displayValue !== '0';
    const clearText = displayIsNonZero ? 'C' : 'AC';

    return (
        <div className={styles.calculator}>
            <Suspense
                fallback={<div style={{ height: 120 }}>Loading display...</div>}
            >
                <CalculatorDisplay value={displayValue} />
            </Suspense>
            <div className={styles.calculatorKeypad}>
                <div className={styles.inputKeys}>
                    <div className={styles.functionKeys}>
                        <CalculatorKey
                            className={styles.keyClear}
                            onClick={() =>
                                displayIsNonZero
                                    ? setState(clearDisplay())
                                    : setState(clearAll())
                            }
                        >
                            {clearText}
                        </CalculatorKey>
                        <CalculatorKey
                            className={styles.keySign}
                            onClick={() => setState(toggleSign(displayValue))}
                        >
                            ±
                        </CalculatorKey>
                        <CalculatorKey
                            className={styles.keyPercent}
                            onClick={() => setState(inputPercent(displayValue))}
                        >
                            %
                        </CalculatorKey>
                    </div>
                    <div className={styles.digitKeys}>
                        <CalculatorKey
                            className={styles.key0}
                            onClick={() => setState(inputDigit(0))}
                        >
                            0
                        </CalculatorKey>
                        <CalculatorKey
                            className={styles.keyDot}
                            onClick={() => inputDot(displayValue)}
                        >
                            ●
                        </CalculatorKey>
                        <CalculatorKey
                            className={styles.key1}
                            onClick={() =>
                                setState(
                                    inputDigit(
                                        1,
                                        displayValue,
                                        waitingForOperand
                                    )
                                )
                            }
                        >
                            1
                        </CalculatorKey>
                        <CalculatorKey
                            className={styles.key2}
                            onClick={() =>
                                setState(
                                    inputDigit(
                                        2,
                                        displayValue,
                                        waitingForOperand
                                    )
                                )
                            }
                        >
                            2
                        </CalculatorKey>
                        <CalculatorKey
                            className={styles.key3}
                            onClick={() =>
                                setState(
                                    inputDigit(
                                        3,
                                        displayValue,
                                        waitingForOperand
                                    )
                                )
                            }
                        >
                            3
                        </CalculatorKey>
                        <CalculatorKey
                            className={styles.key4}
                            onClick={() =>
                                setState(
                                    inputDigit(
                                        4,
                                        displayValue,
                                        waitingForOperand
                                    )
                                )
                            }
                        >
                            4
                        </CalculatorKey>
                        <CalculatorKey
                            className={styles.key5}
                            onClick={() =>
                                setState(
                                    inputDigit(
                                        5,
                                        displayValue,
                                        waitingForOperand
                                    )
                                )
                            }
                        >
                            5
                        </CalculatorKey>
                        <CalculatorKey
                            className={styles.key6}
                            onClick={() =>
                                setState(
                                    inputDigit(
                                        6,
                                        displayValue,
                                        waitingForOperand
                                    )
                                )
                            }
                        >
                            6
                        </CalculatorKey>
                        <CalculatorKey
                            className={styles.key7}
                            onClick={() =>
                                setState(
                                    inputDigit(
                                        7,
                                        displayValue,
                                        waitingForOperand
                                    )
                                )
                            }
                        >
                            7
                        </CalculatorKey>
                        <CalculatorKey
                            className={styles.key8}
                            onClick={() =>
                                setState(
                                    inputDigit(
                                        8,
                                        displayValue,
                                        waitingForOperand
                                    )
                                )
                            }
                        >
                            8
                        </CalculatorKey>
                        <CalculatorKey
                            className={styles.key9}
                            onClick={() =>
                                setState(
                                    inputDigit(
                                        9,
                                        displayValue,
                                        waitingForOperand
                                    )
                                )
                            }
                        >
                            9
                        </CalculatorKey>
                    </div>
                </div>
                <div className={styles.operatorKeys}>
                    <CalculatorKey
                        className={styles.keyDivide}
                        onClick={() =>
                            setState(
                                performOperation(
                                    '/',
                                    CalculatorOperations,
                                    displayValue,
                                    value,
                                    operator
                                )
                            )
                        }
                    >
                        ÷
                    </CalculatorKey>
                    <CalculatorKey
                        className={styles.keyMultiply}
                        onClick={() =>
                            setState(
                                performOperation(
                                    '*',
                                    CalculatorOperations,
                                    displayValue,
                                    value,
                                    operator
                                )
                            )
                        }
                    >
                        ×
                    </CalculatorKey>
                    <CalculatorKey
                        className={styles.keySubtract}
                        onClick={() =>
                            setState(
                                performOperation(
                                    '-',
                                    CalculatorOperations,
                                    displayValue,
                                    value,
                                    operator
                                )
                            )
                        }
                    >
                        −
                    </CalculatorKey>
                    <CalculatorKey
                        className={styles.keyAdd}
                        onClick={() =>
                            setState(
                                performOperation(
                                    '+',
                                    CalculatorOperations,
                                    displayValue,
                                    value,
                                    operator
                                )
                            )
                        }
                    >
                        +
                    </CalculatorKey>
                    <CalculatorKey
                        className={styles.keyEquals}
                        onClick={() =>
                            setState(
                                performOperation(
                                    '=',
                                    CalculatorOperations,
                                    displayValue,
                                    value,
                                    operator
                                )
                            )
                        }
                    >
                        =
                    </CalculatorKey>
                </div>
            </div>
        </div>
    );
};
