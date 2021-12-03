'use strict';

/**
 * wreck router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::wreck.wreck');
