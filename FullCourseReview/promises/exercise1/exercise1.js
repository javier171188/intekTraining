'use strict';
require('regenerator-runtime/runtime');

async function runBatches(tasks, pool_size) {
  if (tasks.length < 1) return [];
  let startingTasks = [...tasks]

  if (pool_size > tasks.length || pool_size < 1) {
    pool_size = tasks.length;
  }
  let results = await getBatches(startingTasks, pool_size);
  return results;
}

async function getBatches(tasks, pool_size) {
  const results = [];
  let pendingTasks = tasks.length;
  let outsideResolve;

  tasks = tasks.map((fn, position) => ({ fn, position }))

  async function startNewTask(r, position) {
    pendingTasks -= 1;
    if (r === 'error') {
      results[position] = { error: 'error' };
    } else {
      results[position] = { value: r };
    }
    let task = tasks.shift();
    if (task) {
      task.fn()
        .then((v) => startNewTask(v, task.position))
        .catch((v) => startNewTask(v, task.position))
    }
    if (pendingTasks === 0) {
      console.log('finished');
      outsideResolve();
    }
  }

  for (let i = 0; i < pool_size; i++) {
    let task = tasks.shift();
    task.fn()
      .then((v) => startNewTask(v, task.position))
      .catch((v) => startNewTask(v, task.position))
  }

  await new Promise((res, rej) => outsideResolve = res);

  return results;
}

module.exports = runBatches;
