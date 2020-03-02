exports.isGoodFormatNumber = (nb) => {
    if (typeof nb === 'number') {
        return nb;
    }
    if (typeof nb !== 'string') {
        return false;
    }
    const withOutSpace = nb.split(' ').join('');
    const isStringNumber = /^\d+$/.test(withOutSpace);
    if (!isStringNumber) {
        return false;
    }
    return parseInt(withOutSpace);
};

exports.isGoodFormatBorders = (borders) => borders;