// src/controllers/workoutsController.js
const { db } = require('../config/firebase');
//----------------------------------------------------------------------//

// src/controllers/workoutsController.js
const getExercisesByMuscles = async (req, res) => {
    const { muscles } = req.body; // Expect an array of muscle group names

    // A dictionary of muscle group to exercise mappings
    const exerciseDictionary = {
        "Forearms": { name: "Wrist Curl", sets: 4, reps: 12 },
        "Biceps": { name: "Bicep Curl", sets: 4, reps: 10 },
        "Triceps": { name: "Tricep Extension", sets: 4, reps: 12 },
        "Deltoids": { name: "Shoulder Press", sets: 4, reps: 10 },
        "Pectorals": { name: "Bench Press", sets: 4, reps: 8 },
        "Upper Back": { name: "Pull-Up", sets: 4, reps: 8 },
        "Trapezius": { name: "Shrugs", sets: 4, reps: 12 },
        "Paravertebrals": { name: "Back Extension", sets: 3, reps: 12 },
        "Lower Back": { name: "Deadlift", sets: 4, reps: 6 },
        "Gluteus": { name: "Hip Thrust", sets: 4, reps: 10 },
        "Hamstrings": { name: "Leg Curl", sets: 4, reps: 12 },
        "Calves": { name: "Calf Raise", sets: 4, reps: 15 },
        "Abdominals": { name: "Crunches", sets: 4, reps: 20 },
        "Obliques": { name: "Side Plank", sets: 3, reps: 30 },
        "Adductors": { name: "Adductor Machine", sets: 4, reps: 12 },
        "Quadriceps": { name: "Leg Press", sets: 4, reps: 10 },
        "Chest": { name: "Bench Press", sets: 4, reps: 10 }
    };

    // If no muscles are provided, return all exercises
    if (!muscles || muscles.length === 0) {
        const allExercises = Object.values(exerciseDictionary);
        return res.json({ exercises: allExercises });
    }

    // Filter exercises based on the provided muscle groups
    const selectedExercises = muscles.map(muscle => exerciseDictionary[muscle]).filter(Boolean);

    if (selectedExercises.length > 0) {
        res.json({ exercises: selectedExercises });
    } else {
        res.status(404).json({ message: "No exercises found for the selected muscle groups." });
    }
};




// Chest workout
const getChestDayWorkout = async (req, res) => {
    const chestWorkout = {
        exercise1: { name: "Bench Press", sets: 4, reps: 8 },
        exercise2: { name: "Incline Bench Press", sets: 4, reps: 8 },
        exercise3: { name: "Dumbbell Flyes", sets: 4, reps: 10 },
    };
    res.json(chestWorkout);
};
//----------------------------------------------------------------------//
// Leg Day Workout
const getLegDayWorkout = async (req, res) => {
    const legWorkout = {
        exercise1: { name: "Squat", sets: 4, reps: 10 },
        exercise2: { name: "Lunges", sets: 3, reps: 12 },
        exercise3: { name: "Leg Press", sets: 4, reps: 10 },
    };
    res.json(legWorkout);
};
//----------------------------------------------------------------------//
// Back Day Workout
const getBackDayWorkout = async (req, res) => {
    const backWorkout = {
        exercise1: { name: "Deadlift", sets: 4, reps: 6 },
        exercise2: { name: "Pull-ups", sets: 4, reps: 8 },
        exercise3: { name: "Barbell Rows", sets: 4, reps: 10 },
    };
    res.json(backWorkout);
};
//----------------------------------------------------------------------//
// Arm Day Workout
const getArmDayWorkout = async (req, res) => {
    const armWorkout = {
        exercise1: { name: "Bicep Curls", sets: 4, reps: 12 },
        exercise2: { name: "Tricep Dips", sets: 4, reps: 10 },
        exercise3: { name: "Hammer Curls", sets: 4, reps: 12 },
    };
    res.json(armWorkout);
};
//----------------------------------------------------------------------//
//----------------------------------------------------------------------//
//----------------------Muscle Group Workouts---------------------------/
// Forearms Workout
const getForearmsWorkout = async (req, res) => {
    const workout = {
        exercise: { name: "Wrist Curl", sets: 4, reps: 12 }
    };
    res.json(workout);
};
//----------------------------------------------------------------------//
// Biceps Workout
const getBicepsWorkout = async (req, res) => {
    const workout = {
        exercise: { name: "Bicep Curl", sets: 4, reps: 10 }
    };
    res.json(workout);
};
//----------------------------------------------------------------------//
// Triceps Workout
const getTricepsWorkout = async (req, res) => {
    const workout = {
        exercise: { name: "Tricep Extension", sets: 4, reps: 12 }
    };
    res.json(workout);
};
//----------------------------------------------------------------------//
// Deltoids Workout
const getDeltoidsWorkout = async (req, res) => {
    const workout = {
        exercise: { name: "Shoulder Press", sets: 4, reps: 10 }
    };
    res.json(workout);
};
//----------------------------------------------------------------------//
// Pectorals Workout
const getPectoralsWorkout = async (req, res) => {
    const workout = {
        exercise: { name: "Bench Press", sets: 4, reps: 8 }
    };
    res.json(workout);
};
//----------------------------------------------------------------------//
// Rotator Cuff Workout
const getRotatorCuffWorkout = async (req, res) => {
    const workout = {
        exercise: { name: "Internal Rotation", sets: 3, reps: 15 }
    };
    res.json(workout);
};
//----------------------------------------------------------------------//
// Upper Back Workout
const getUpperBackWorkout = async (req, res) => {
    const workout = {
        exercise: { name: "Pull-Up", sets: 4, reps: 8 }
    };
    res.json(workout);
};
//----------------------------------------------------------------------//
// Trapezius Workout
const getTrapeziusWorkout = async (req, res) => {
    const workout = {
        exercise: { name: "Shrugs", sets: 4, reps: 12 }
    };
    res.json(workout);
};
//----------------------------------------------------------------------//
// Paravertebrals Workout
const getParavertebralsWorkout = async (req, res) => {
    const workout = {
        exercise: { name: "Back Extension", sets: 3, reps: 12 }
    };
    res.json(workout);
};
//----------------------------------------------------------------------//
// Lower Back Workout
const getLowerBackWorkout = async (req, res) => {
    const workout = {
        exercise: { name: "Deadlift", sets: 4, reps: 6 }
    };
    res.json(workout);
};
//----------------------------------------------------------------------//
// Gluteus Workout
const getGluteusWorkout = async (req, res) => {
    const workout = {
        exercise: { name: "Hip Thrust", sets: 4, reps: 10 }
    };
    res.json(workout);
};
//----------------------------------------------------------------------//
// Hamstrings Workout
const getHamstringsWorkout = async (req, res) => {
    const workout = {
        exercise: { name: "Leg Curl", sets: 4, reps: 12 }
    };
    res.json(workout);
};
//----------------------------------------------------------------------//
// Calves Workout
const getCalvesWorkout = async (req, res) => {
    const workout = {
        exercise: { name: "Calf Raise", sets: 4, reps: 15 }
    };
    res.json(workout);
};
//----------------------------------------------------------------------//
// Abdominals Workout
const getAbdominalsWorkout = async (req, res) => {
    const workout = {
        exercise: { name: "Crunches", sets: 4, reps: 20 }
    };
    res.json(workout);
};
//----------------------------------------------------------------------//
// Oblique Workout
const getObliqueWorkout = async (req, res) => {
    const workout = {
        exercise: { name: "Side Plank", sets: 3, reps: 30 } // seconds
    };
    res.json(workout);
};
//----------------------------------------------------------------------//
// Adductors Workout
const getAdductorsWorkout = async (req, res) => {
    const workout = {
        exercise: { name: "Adductor Machine", sets: 4, reps: 12 }
    };
    res.json(workout);
};

// Quadriceps Workout
const getQuadricepsWorkout = async (req, res) => {
    const workout = {
        exercise: { name: "Leg Press", sets: 4, reps: 10 }
    };
    res.json(workout);
};
//----------------------------------------------------------------------//
//----------------------------------------------------------------------//
// Save custom workout to Firestore
const saveUserWorkout = async (req, res) => {
    const { userId, workoutName, exercises } = req.body;

    try {
        await db.collection('users').doc(userId).collection('workouts').add({
            workoutName,
            exercises,
        });
        res.status(200).json({ message: 'Workout saved successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error saving workout', error });
    }
};
//----------------------------------------------------------------------//
// DELETE a user workout by workout ID
const deleteUserWorkout = async (req, res) => {
    const { userId, workoutId } = req.params;

    try {
        // Reference to the user's specific workout
        const workoutRef = db.collection('users').doc(userId).collection('workouts').doc(workoutId);
        
        // Check if the workout exists before deleting
        const workoutDoc = await workoutRef.get();
        if (!workoutDoc.exists) {
            return res.status(404).json({ message: 'Workout not found' });
        }

        // Delete the workout
        await workoutRef.delete();
        res.status(200).json({ message: 'Workout deleted successfully' });
    } catch (error) {
        console.error("Error deleting workout:", error);
        res.status(500).json({ message: 'Error deleting workout', error });
    }
};
//----------------------------------------------------------------------//
module.exports = { 
    getExercisesByMuscles
};
//----------------------------------------------------------------------//