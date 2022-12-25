import { timeDay } from 'd3-time';

const start = new Date(2021, 0, 1);
const end = new Date(2021, 0, 18);

const miliseconds = 24 * 60 * 60 * 1000;
var result = (end - start) / miliseconds;

console.log(result);

result = timeDay.count(start, end);

console.log(result);