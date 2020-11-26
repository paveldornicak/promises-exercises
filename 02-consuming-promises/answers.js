/**
 * 
 * EXERCISE 1
 * 
 * @param {Promise} promise
 * @param {thunk} action
 * 
 */
function waitForPromise(promise, action) {
  /* IMPLEMENT ME */
  const result = promise.catch();
  result.then(action);
}
/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise} promise 
 * @param {consumer} consumer 
 * @param {handler} handler 
 */
function consumePromise(promise, consumer, handler) {
  /* IMPLEMENT ME! */
  promise.then(result => {
    consumer(result);
  }).catch(result => {
    handler(result);
  })
};


/**
 * @callback thunk
 * @returns {void}
 */
module.exports = {
  waitForPromise,
  consumePromise,
};