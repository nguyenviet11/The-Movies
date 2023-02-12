import moment from "moment";
import _ from 'lodash';


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


export const handleJob = (obj, keyword) => {
    const jobs = {};
    Object.entries(obj).forEach((item) => {
        jobs[item[0]] = Object.values(handleGroupByKeyWord(item[1], keyword));
    })
    return jobs;
}


export const handleFilm = (obj) => {
    const jobs = [];
    Object.entries(obj).forEach((item) => {
        item[1].forEach(child => {
            jobs.push({ [item[0]]: handleGroupByKeyWord(child, "media_type") });
        })
    })
    const result = _(jobs)
        .groupBy()
        .map((g) => _.mergeWith({}, ...g, (obj, src) =>
            _.isArray(obj) ? obj.concat(src) : undefined))
        .value();
    return result;
} // handle get list movies and tv

export const handleResultMoviesTv = (data, keyword) => {
    const result = [];
    data.forEach((value) => {
        Object.entries(value).forEach((item) => {
            Object.entries(item[1]).forEach((child) => {
                if (keyword === child[0]) {
                    result.push({ [item[0]]: [child[1]] })
                }
            })
        })
    })
    return result;
}


export const handleAll = (obj) => {
    const result = [];
    Object.entries(obj).forEach((value) => {
        result.push({ [value[0]]: value[1] })
    })
    return result;
}


export const handleNewListJobs = (obj) => {
    const result = {};
    Object.entries(obj).forEach((value) => {
        result[value[0]] = [{ [value[0]]: value[1] }]
    })
    return result
}

export const handleGetListKey = (list) => {
    const result = [];
    Object.entries(list).forEach((value) => {
        result.push(value[0])
    }
    )
    return result;
}

export const handleGetResultByKeyWord = (list, keyword) => {
    return list[keyword]
  }