'use strict';

/**
 * wreck service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wreck.wreck');
