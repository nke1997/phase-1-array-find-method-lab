// code your solution here
function superbowlWin(record) {
    function isWin(element, index, array) {
        return (element.result === "W");
    };
    const dbWin = record.find(isWin);
    if (dbWin === undefined) {
        return undefined;
    } else {
        return dbWin.year;
    };
};
