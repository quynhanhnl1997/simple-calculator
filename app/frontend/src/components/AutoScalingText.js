import React, { useRef } from 'react';
import styles from './css/autoScalingText.css';
import { getScale } from '../utils/getScale';

const AutoScalingText = ({ children }) => {
    const nodeRef = useRef();
    const scale = getScale(nodeRef.current);
    return (
        <div
            className={styles.autoScalingText}
            style={{ transform: `scale(${scale},${scale})` }}
            ref={nodeRef}
            data-testid="total"
        >
            {children}
        </div>
    );
};

export default AutoScalingText;
