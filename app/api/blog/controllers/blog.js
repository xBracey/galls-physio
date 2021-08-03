"use strict";
const { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const paginationNumber = 9;

module.exports = {
  async findPage(ctx) {
    let entities;

    if (ctx.query._q) {
      entities = await strapi.services.blog.search(ctx.query);
    } else {
      entities = await strapi.services.blog.find(ctx.query);
    }

    let page = ctx.params.page;

    entities = entities.sort((entity, entity2) => {
      if (entity2.published_at < entity.published_at) {
        return -1;
      }
      if (entity2.published_at > entity.published_at) {
        return 1;
      }
      // names must be equal
      return 0;
    });

    entities = entities.slice(
      (page - 1) * paginationNumber,
      page * paginationNumber
    );

    return entities.map(entity =>
      sanitizeEntity(entity, { model: strapi.models.blog })
    );
  },
};
