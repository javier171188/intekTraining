'use strict';
require('regenerator-runtime/runtime');

async function runBatches(tasks, pool_size) {
  if (tasks.length < 1) return [];
  let startingTasks = [...tasks]
  let results = await getBatches(startingTasks, pool_size);
  return results;
}

async function getBatches(tasks, pool_size) {
  let pendingTasks = tasks.length;
  let results = [];
  let outsideResolve;

  //This check could be in the runBatches function
  if (pool_size > tasks.length || pool_size < 1) {
    pool_size = tasks.length;
  }

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

  await new Promise((res, rej) => outsideResolve = res);

  return results;
}

module.exports = runBatches;