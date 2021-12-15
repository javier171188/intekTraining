'use strict';

const taskFactorySample = (delay, resolve, val) => {
  return () => {
    return new Promise((res, rej) => setTimeout(resolve ? res : rej, delay, val))
  }
};
const tasks = [
  taskFactorySample(50, true, 1),
  taskFactorySample(100, true, 2),
  taskFactorySample(500, false, 'error'),
  taskFactorySample(200, true, 4),
  taskFactorySample(100, false, 'error'),
  taskFactorySample(100, false, 'error')
];
let pool_size = 2;

runBatches(tasks, pool_size).then(console.log);


async function runBatches(tasks, pool_size) {
  let results = await getBatches(tasks, pool_size);
  return results;
}




async function getBatches(tasks, pool_size) {
  let pendingTasks = tasks.length;
  let results = [];
  let outsideResolve;
  async function startNewTask(r) {
    pendingTasks -= 1;
    if (r === 'error') {
      results.push({ error: 'error' });
    } else {
      results.push({ value: r })
    }
    let task = tasks.shift();
    if (task) {
      task()
        .then((v) => startNewTask(v))
        .catch((v) => startNewTask(v))
    }
    if (pendingTasks === 0) {
      console.log('finished');
      outsideResolve();
    }
  }

  for (let i = 0; i < pool_size; i++) {
    let task = tasks.shift();
    task()
      .then((v) => startNewTask(v))
      .catch((v) => startNewTask(v))
  }

  let waitToFinish = await new Promise((res, rej) => outsideResolve = res);

  return results;
}


/*
async function runBatches(tasks, pool_size) {
  let results = [];
  let noStartedTasks = [...tasks]
  let numberTasks = tasks.length;
  if (pool_size > numberTasks || pool_size < 1) {
    pool_size = numberTasks;
  }
  while (results.length < numberTasks) {
    let currentTasks = []
    for (let i = 0; i < pool_size; i++) {
      if (noStartedTasks.length > 0) {
        let task = noStartedTasks.shift();
        currentTasks.push(task())
      }
    }
    let currentResults = await Promise.allSettled(currentTasks);
    results = results.concat(currentResults);
  }
  results = results.map((result) => {
    if (result.status === 'fulfilled') {
      return { value: result.value }
    }
    else {
      return { error: result.reason }
    }
  });
  console.log('Process finished.');
  return results;
}

*/
//module.exports = runBatches;