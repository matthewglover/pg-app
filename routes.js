

module.exports = [
  {
    method: 'GET',
    path: '/api/pups',
    handler: (req, reply) => reply([
      { name: 'Rocky', speciality: 'Recycling' },
      { name: 'Chase', speciality: 'Policing' },
    ]),
  },
];
