export const yearData = {
    "2024": require('./../assets/data/2024.json')
}

export function getYearData(date) {
    let yearKey = `${date.month() + 1}`
    return yearData["2024"][yearKey]
}
