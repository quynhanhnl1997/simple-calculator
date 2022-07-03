export const getScale = (node) => {
    if (!node) return 1;
    const parentNode = node.parentNode;

    const availableWidth = parentNode.offsetWidth;
    const actualWidth = node.offsetWidth;
    const actualScale = availableWidth / actualWidth;

    if (actualScale < 1) {
        return actualScale * 0.9;
    }
    return 1;
};
