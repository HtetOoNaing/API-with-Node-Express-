const fs = require('fs');
const Tour = require('./../models/tourModel');


exports.getAllTours = async (req,res) => {
    try {
        const tours = await Tour.find();
        res.status(200).json({
            status: 'success',
            data: { tours }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
    
}
exports.getTour = async (req,res) => {
    try {
        const tour = await Tour.findById(req.params.id);
        res.status(200).json({ 
            status: 'success', 
            data: { tour }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
    
}
exports.createTour = async (req,res) => {
    try {
        const newTour = await Tour.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                tour: newTour
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: "Invalid Data Sent!"
        });
    }
    
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