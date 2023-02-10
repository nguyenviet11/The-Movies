import moment from "moment";

export const handlePushYear = (array) => {
    const newData = [];
    array.forEach((value) => {
        const year = moment(value.release_date).year();
        newData.push({ ...value, year });
    })
    return newData;
} // Fn add year to array

export const groupBy = (objectArray, property) => {
    return objectArray.reduce((acc, obj) => {
        const key = obj[property];
        const curGroup = acc[key] ?? [];
        return { ...acc, [key]: [...curGroup, obj] };
    }, {});
} // group of identical elements

export const handleGroupByKeyWord = (data, keyword) => {
    const groupedCastByYear = groupBy(data, keyword);
    return groupedCastByYear;
} // group matching elements by keyword

export const handleObjectArray = (obj) => {
    const listData = []
    Object.entries(obj).forEach(([key, value]) => listData.push({ header: key, content: value }));
    return listData;
}
