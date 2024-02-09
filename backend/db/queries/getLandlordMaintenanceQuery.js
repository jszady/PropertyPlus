
const db = require('../connection');

const getLandlordsMaintenanceRequests =  (id) => {
 
  return db
  .query(`SELECT maintenance.*, units.address as address, landlords.name as name
  FROM maintenance 
  JOIN units ON units.id = maintenance.unit_id 
  JOIN landlords ON units.landlord_id = landlords.id
  WHERE units.landlord_id = $1`, [id])
  .then((res) => {
    return res.rows;
  })
  .catch((err) => {
    console.log(err.message);
    throw err;
  });
};


module.exports = {
  getLandlordsMaintenanceRequests
};