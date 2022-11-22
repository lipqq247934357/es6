// import formatDuration, { formatDuration4Min } from "../utils.js";

const formatDuration = function (duration) {
    let hours = parseInt((duration % (24 * 60 * 60)) / 3600) + '';
    let minutes = parseInt(((duration % (24 * 60 * 60)) % 3600) / 60) + '';
    let seconds = parseInt(((duration % (24 * 60 * 60)) % 3600) % 60) + '';
    return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')} `;
};
console.log(''+ new Date().getTime())

console.log('formatDuration(1000)', formatDuration(1000));
console.log('formatDuration(23)', formatDuration(23));
console.log('formatDuration(222)', formatDuration(222));
// console.log('formatDuration4Min(1200)', formatDuration4Min(1200));
// console.log('formatDuration4Min(100000)', formatDuration4Min(100000));
console.log(''+ new Date().getTime())


await service.savePrepareInfo({
    id: this.lessonInfo.id,
    coursewareFragments: this.list.coursewareFragments,
    coursewareVersion: this.list.coursewareVersion
  })
