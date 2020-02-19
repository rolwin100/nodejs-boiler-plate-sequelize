const path = require('path');
/**
 *
 * @author Rolwin Reevan <rolwin.reevan@techjini.com>
 * @param  { string } controllerUri
 * @returns { function } returns the controller
 *
 */
module.exports = function createControllerRoutes(controllerUri) {
  const controllerPath = path.resolve(
    __dirname,
    '../controllers',
    controllerUri,
  );
  const Controller = require(controllerPath);

  return Controller();
};
