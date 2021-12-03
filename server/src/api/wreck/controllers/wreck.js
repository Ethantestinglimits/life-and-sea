'use strict';

/**
 *  wreck controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::wreck.wreck');
