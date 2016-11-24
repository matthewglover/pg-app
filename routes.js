const getPups = require('./get_pups');


module.exports = [
  {
    method: 'GET',
    path: '/api/static-pups',
    handler: (req, reply) => reply([
      { name: 'Rocky', speciality: 'Recycling' },
      { name: 'Chase', speciality: 'Policing' },
    ]),
  },

  {
    method: 'GET',
    path: '/api/dynamic-pups',
    handler: (req, reply) => {
      getPups((error, pups) => {
        if (error) console.log('oops', error);
        reply(pups);
      });
    },
  },
];
