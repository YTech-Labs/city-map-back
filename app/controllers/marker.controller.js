const db = require('../models');

// Create and Save a new marker
exports.addOneMarker = (req, res) => {
    const marker = new db.markers(req.body);
    try {
        marker.save()
        .then(result => {
            if (result.length != 0) {
                res.status(200).send(result);
            } else {
                res.status(400).send('❎ Could not add the marker');
            }
        });
    } catch (err) {
        res.status(400).send(err);
    }
};

// Retrieve all markers from the database
exports.findAllMarkers = (req, res) => {
    try {
        db.markers.find().then(result => {
            if (result.length != 0) {
                res.status(200).send(result);
            } else {
                res.status(400).send('❎ No markers to show');
            }
        });
    } catch (err) {
        res.status(400).send(err);
    }
};

// Find a single marker with an id
exports.findOneMarker = (req, res) => {
    try {
        db.markers.findById(req.params.id).then(result => {
            if (result.length != 0) {
                res.status(200).send(result);
            } else {
                res.status(400).send('❎ Could not find the marker');
            }
        });
    } catch (err) {
        res.status(400).send(err);
    }
};

// Update a marker by the id in the request
exports.updateOneMarker = (req, res) => {
    try {
        db.markers.findByIdAndUpdate(req.params.id, req.body).then(result => {
            if (result.length != 0) {
                res.status(200).send(result);
            } else {
                res.status(400).send('❎ Could not update the marker');
            }
        });
    } catch (err) {
        res.status(400).send(err);
    }
};

// Delete a marker with the specified id in the request
exports.deleteOneMarker = (req, res) => {
    try {
        db.markers.findByIdAndDelete(req.params.id).then(result => {
            if (result.length != 0) {
                res.status(200).send(result);
            } else {
                res.status(400).send('❎ Could not delete the marker');
            }
        });
    } catch (err) {
        res.status(400).send(err);
    }
};

// Delete all markers from the database
exports.deleteAllMarkers = (req, res) => {
    try {
        db.markers.deleteMany().then(result => {
            if (result.length != 0) {
                if (result.acknowledged === true) {
                    res.status(200).send(result);
                }
            } else {
                res.status(400).send('❎ Could not delete the marker');
            }
        });
    } catch (err) {
        res.status(400).send(err);
    }
};