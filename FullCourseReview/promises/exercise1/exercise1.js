'use strict'

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


module.exports = runBatches;