'use strict';

/**
 * library-user service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::library-user.library-user');
