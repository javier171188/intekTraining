'use strict'
const taskFactorySample = (delay, resolve, val) => {
  return () => {
    return new Promise((res, rej) => setTimeout(resolve ? res : rej, delay, val))
  }
};

const tasks = [
  taskFactorySample(5, true, 1),
  taskFactorySample(10, true, 2),
  taskFactorySample(50, false, 'error'),
  taskFactorySample(20, true, 4),
  taskFactorySample(10, false, 'error'),
  taskFactorySample(10, false, 'error')
];



// only run two promises at a time
const pool_size = 2;
/**
*  Expect to get an array equal to tasks.length
*  with the values or reasons for each of the promises.
*
*  [{value: 1}, {value:2}, {error: 'error'}, ...]
*/
runBatches(tasks, pool_size)
  .then(console.log)
  .catch(console.log)


async function runBatches(tasks, pool_size) {
  let results = [];
  let noStartedTasks = [...tasks]
  let numberRunning = 0;
  let numberTasks = tasks.length;
  let numberSend = 0;
  if (pool_size > numberTasks) {
    pool_size = numberTasks;
  }

  while (results.length < numberTasks) {
    while (numberRunning < pool_size) {
      let task = noStartedTasks.shift();
      task()
        .then((value) => {
          results.push({ value })
        })
        .catch((error) => {
          results.push({ error })
        })
      console.log('here');
      numberSend += 1;
      numberRunning += 1;
    }
    numberRunning -= 1;
  }


  return results;
}