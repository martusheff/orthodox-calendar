export function getSaintData(date) {
    const saintKey = `${date.month() + 1}/${date.date()}`
    let saintData = require('./../assets/data/saints.json')
    let saints = saintData[saintKey]
    return saints ? saints : []
}