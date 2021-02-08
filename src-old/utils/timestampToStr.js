export default function timestampToStr(timestamp) {

    const numberTimestamp = new Date(Number(timestamp));
    const day = numberTimestamp.getDay();
    const month = numberTimestamp.getMonth();
    const year = numberTimestamp.getFullYear();

    return {
        "full": `${day}_${month}_${year}`,
        "notDay": `${month}_${year}`
    };
}