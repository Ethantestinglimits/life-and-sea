'use strict';

/**
 * A set of functions called "actions" for `search`
 */

module.exports = {
  searchAll: async (ctx, next) => {

    if (Date.parse(ctx.request.query.query)) {
      console.log("not a date");
      var personSearch = {
        where: {
          DateOfBirth: {
            $containsi: Date.parse(ctx.request.query.query),
          },
        },
        populate: {
          category: true
        },
      }

      var shipSearch = {
        where: {
          Launch: {
            $containsi: Date.parse(ctx.request.query.query),
          },
        },
        populate: {
          category: true
        },
      }

    } else {
      personSearch = {
        where: {
          $or: [{
              FirstName: {
                $containsi: ctx.request.query.query,
              },
            },
            {
              LastName: {
                $containsi: ctx.request.query.query,
              }
            }
          ],
        },
        populate: true,
      }

      var shipSearch = {
        where: {
          Name: {
            $containsi: ctx.request.query.query,
          },
        },
        populate: true,
      }

      var wreckSearch = {
        where: {
          $or: [{
              Name: {
                $containsi: ctx.request.query.query,
              }
            },
            {
              Location: {
                $containsi: ctx.request.query.query,
              }
            }
          ],
        },
        populate: {
          Wrecked : {
              populate: true,
          },
          Rescuers : {
            populate: true,
        },
        ShipRescuers: true,
        shipWreckeds: true
        }
      }
    }

    const [person, personCount] = await strapi.db.query('api::person.person').findWithCount(personSearch);
    const [ship, shipCount] = await strapi.db.query('api::ship.ship').findWithCount(shipSearch);
    const [wreck, wreckCount] = await strapi.db.query('api::wreck.wreck').findWithCount(wreckSearch);
    console.log(person);

    
    ctx.body = {
      "search": ctx.request.query.query,
      "personCount": personCount,
      "person": person,
      "shipCount": shipCount,
      "ship": ship,
      "wreckCount": wreckCount,
      "wreck": wreck,
    };


  }
};
