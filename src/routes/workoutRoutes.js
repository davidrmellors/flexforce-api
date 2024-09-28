const express = require('express');
const { getChestWorkout, getLegWorkout, getExercisesByMuscles } = require('../controllers/workoutController');
const router = express.Router();

router.post('/exercises', getExercisesByMuscles);
router.get('/legs', getLegWorkout);

module.exports = router;
