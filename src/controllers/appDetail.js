const HttpError = require('@src/utils/httpError');
const express = require('express');
const router = express.Router();
const container = require('@src/container');

const { repositories, logger } = container.cradle;
module.exports = () => {
  /**
   * @author Rolwin Reevan <rolwin.reevan@techjini.com>
   * @params { object } req
   * @params { object } res
   * @description fetches all app configurations
   *
   * @swagger
   *
   * /app-configuration:
   *   get:
   *     tags:
   *       - App Configuration
   *     summary: Gets the app configuration set in the backend
   *     description: Returns user roles and permissions
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: Returns the list of all the configuration
   *       404:
   *         $ref: '#/responses/NotFound'
   *       401:
   *         $ref: '#/responses/Unauthorized'
   *
   *   security:
   *     - bearerAuth: []
   *
   */
  router.get('/', async (req, res, next) => {
    try {
      res.json({ test: 'working' });
    } catch (error) {
      logger.error(error.message);
      next(new HttpError(error));
    }
  });

  return router;
};
