'use strict';

const { sanitizeEntity } = require('strapi-utils');

module.exports = {

  async findGasoilsByStation(ctx) {
    let response;
    let values;
    let dates;
    const {id} = ctx.params;
    const entitie = await strapi.services.station.findOne({id});
    values = entitie.gasoils.map(obj => obj.price);
    dates = entitie.gasoils.map(obj => obj.updatedAt);
    response = {
      values,
      dates
    }
    return  response;
  }
};
