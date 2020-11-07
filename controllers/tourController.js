const fs = require('fs');
const Tour = require('./../models/tourModel');


exports.getAllTours = (req,res) => {
    res.status(200).json({ status: 'success', data: {  }});
}
exports.getTour = (req,res) => {
    const id = req.params.id * 1;
    res.status(200).json({ status: 'success', data: {  }});
}
exports.createTour = async (req,res) => {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            tour: newTour
        }
    });
}
exports.updateTour = (req,res) => {
    const id = req.params.id * 1;
    // update tour here
    res.status(200).json({ status: 'success', data: {  }});
}
exports.deleteTour = (req,res) => {
    const id = req.params.id * 1;
    // delete tour here
    res.status(200).json({ status: 'success', data: {  }});
}