const express = require("express");
const router = express.Router();
const controllers = require('../controllers/marker.controller');

router.get("/get-all-markers", (req, res) => {
  controllers.findAllMarkers(req, res);
});
 
router.get("/get-marker/:id", (req, res) => {
  controllers.findOneMarker(req, res);
});

router.post('/add-marker', (req, res) => {
  controllers.addOneMarker(req, res);
});

router.post("/update-marker/:id", (req, res) => {
  controllers.updateOneMarker(req, res);
});

router.post("/delete-marker/:id", (req, res) => {
  controllers.deleteOneMarker(req, res);
});

// router.post("/delete-all-markers", (req, res) => {
//   controllers.deleteAllMarkers(req, res);
// });

module.exports = router; 