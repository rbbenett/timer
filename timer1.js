let soundTimes = process.argv.slice(2);
let sortedTimes = soundTimes.sort(function(a, b) {
  return a - b;
});
if (soundTimes === []) return;
for (let item of sortedTimes) {
  let itemTime = item * 1000;
  if (item >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, itemTime);
  } else if (item < 0) {
    continue;
  } else if (item === isNaN) {
    continue;
  }
}