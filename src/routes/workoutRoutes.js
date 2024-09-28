const express = require('express');
const { getExercisesByMuscles } = require('../controllers/workoutController');
const router = express.Router();

// Change this to POST since you're expecting a body
router.post('/exercises', getExercisesByMuscles);

module.exports = router;
