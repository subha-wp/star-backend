'use strict';

/**
 * job-sheet service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::job-sheet.job-sheet');
