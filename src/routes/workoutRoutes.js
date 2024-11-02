const express = require('express');
const { 
    getExercisesByMuscles,
    getChestDayWorkout, 
    getLegDayWorkout, 
    getBackDayWorkout, 
    getArmDayWorkout, 
    getForearmsWorkout,
    getBicepsWorkout,
    getTricepsWorkout,
    getDeltoidsWorkout,
    getPectoralsWorkout,
    getRotatorCuffWorkout,
    getUpperBackWorkout,
    getTrapeziusWorkout,
    getParavertebralsWorkout,
    getLowerBackWorkout,
    getGluteusWorkout,
    getHamstringsWorkout,
    getCalvesWorkout,
    getAbdominalsWorkout,
    getObliqueWorkout,
    getAdductorsWorkout,
    getQuadricepsWorkout,
    getUserWorkout,
    getUserWorkouts,
    addUserWorkout,
    deleteUserWorkout,
    getChallengeData,
    getWeeklyWorkoutPlan,
    initializeChallenges,
    getUserChallenges,
    updateUserChallengeStatus   
} = require('../controllers/workoutController');
const router = express.Router();

// Change this to POST since you're expecting a body
router.post('/exercises', getExercisesByMuscles);

// Routes for exercise routines
router.get('/chest-day', getChestDayWorkout);
router.get('/leg-day', getLegDayWorkout);
router.get('/back-day', getBackDayWorkout);
router.get('/arm-day', getArmDayWorkout);


// Routes for each muscle group
router.get('/forearms', getForearmsWorkout);
router.get('/biceps', getBicepsWorkout);
router.get('/triceps', getTricepsWorkout);
router.get('/deltoids', getDeltoidsWorkout);
router.get('/pectorals', getPectoralsWorkout);
router.get('/rotator-cuff', getRotatorCuffWorkout);
router.get('/upper-back', getUpperBackWorkout);
router.get('/trapezius', getTrapeziusWorkout);
router.get('/paravertebrals', getParavertebralsWorkout);
router.get('/lower-back', getLowerBackWorkout);
router.get('/gluteus', getGluteusWorkout);
router.get('/hamstrings', getHamstringsWorkout);
router.get('/calves', getCalvesWorkout);
router.get('/abdominals', getAbdominalsWorkout);
router.get('/oblique', getObliqueWorkout);
router.get('/adductors', getAdductorsWorkout);
router.get('/quadriceps', getQuadricepsWorkout);
//----------------------------------------------------------------------//

// DELETE route: Delete a specific user workout by workoutId
router.post('/saveWorkout/:userId', addUserWorkout);
router.get('/getUserWorkouts/:userId', getUserWorkouts);
router.delete('/user/:userId/workouts/:workoutId', deleteUserWorkout);
router.get('/user/:userId/workouts/:workoutId', getUserWorkout);
router.get('/user/:userId/workouts', getUserWorkouts);

//Challenge routes
router.get('/challenges/:challengeId', getChallengeData);
router.get('/challengesWorkouts', getWeeklyWorkoutPlan);

// New routes for challenge initialization and user-specific challenges
router.post('/initialize-challenges', initializeChallenges); // No authentication required
router.get('/user/:userId/challenges', getUserChallenges);
router.post('/user/:userId/challenges/update', updateUserChallengeStatus);



module.exports = router;
