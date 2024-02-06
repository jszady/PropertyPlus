const express = require('express');
const { getTotalRevenue } = require('../db/queries/getTotalRevenue');
const { getAverageRent } = require('../db/queries/getAverageRent');
const { getOccupancyRate } = require('../db/queries/getOccupancyRate');

const router = express.Router();


router.get('/details/:id',(req, res) => { //when trying to grab json data make sure to put an /api fist. Ex: http://localhost:3000/api/landlords/<route name>
  const id = req.params.id;
  getTotalRevenue(id)
    .then((landlord) => {
      return res.json(landlord)
    })
    .catch((error) => {
      console.error('Error executing property query', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    })
});

router.get('/rent/:id',(req, res) => {
  const id = req.params.id;
  getAverageRent(id)
    .then((averageRent) => {
      return res.json(averageRent)
    })
    .catch((error) => {
      console.error('Error executing property query', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    })

});

router.get('/occupancy/:id',(req, res) => {
  const id = req.params.id;
  getOccupancyRate(id)
    .then((occupancyRate) => {
      return res.json(occupancyRate)
    })
    .catch((error) => {
      console.error('Error executing property query', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    })

});


module.exports = router;