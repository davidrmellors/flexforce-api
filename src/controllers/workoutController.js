// src/controllers/workoutsController.js
const { db } = require('../config/firebase');
//----------------------------------------------------------------------//

// src/controllers/workoutsController.js
const getExercisesByMuscles = async (req, res) => {
    const { muscles } = req.body; // Expect an array of muscle group names

    // A dictionary of muscle group to exercise mappings including muscle group and equipment
    const exercises = [
        {
            muscleGroup: "Forearms",
            exercises: [
                { name: "Wrist Curl", sets: 4, reps: 12, equipment: "Dumbbells" },
                { name: "Reverse Wrist Curl", sets: 3, reps: 15, equipment: "Dumbbells" },
                { name: "Farmer's Walk", sets: 3, reps: 30, equipment: "Dumbbells" }
            ]
        },
        {
            muscleGroup: "Biceps",
            exercises: [
                { name: "Bicep Curl", sets: 4, reps: 10, equipment: "Barbell" },
                { name: "Hammer Curl", sets: 3, reps: 12, equipment: "Dumbbells" },
                { name: "Preacher Curl", sets: 4, reps: 10, equipment: "Machine" }
            ]
        },
        {
            muscleGroup: "Triceps",
            exercises: [
                { name: "Tricep Extension", sets: 4, reps: 12, equipment: "Cable Machine" },
                { name: "Tricep Dip", sets: 4, reps: 15, equipment: "Body Weight" },
                { name: "Skull Crusher", sets: 3, reps: 10, equipment: "Barbell" }
            ]
        },
        {
            muscleGroup: "Deltoids",
            exercises: [
                { name: "Shoulder Press", sets: 4, reps: 10, equipment: "Dumbbells" },
                { name: "Lateral Raise", sets: 3, reps: 12, equipment: "Dumbbells" },
                { name: "Front Raise", sets: 3, reps: 12, equipment: "Dumbbells" }
            ]
        },
        {
            muscleGroup: "Pectorals",
            exercises: [
                { name: "Bench Press", sets: 4, reps: 8, equipment: "Barbell" },
                { name: "Chest Fly", sets: 4, reps: 10, equipment: "Dumbbells" },
                { name: "Incline Bench Press", sets: 4, reps: 8, equipment: "Barbell" }
            ]
        },
        {
            muscleGroup: "Upper Back",
            exercises: [
                { name: "Pull-Up", sets: 4, reps: 8, equipment: "Body Weight" },
                { name: "Bent-Over Row", sets: 4, reps: 10, equipment: "Barbell" },
                { name: "Lat Pulldown", sets: 4, reps: 12, equipment: "Machine" }
            ]
        },
        {
            muscleGroup: "Trapezius",
            exercises: [
                { name: "Shrugs", sets: 4, reps: 12, equipment: "Dumbbells" },
                { name: "Face Pull", sets: 4, reps: 12, equipment: "Cable Machine" }
            ]
        },
        {
            muscleGroup: "Paravertebrals",
            exercises: [
                { name: "Back Extension", sets: 3, reps: 12, equipment: "Body Weight" }
            ]
        },
        {
            muscleGroup: "Lower Back",
            exercises: [
                { name: "Deadlift", sets: 4, reps: 6, equipment: "Barbell" },
                { name: "Good Morning", sets: 3, reps: 10, equipment: "Barbell" }
            ]
        },
        {
            muscleGroup: "Gluteus",
            exercises: [
                { name: "Hip Thrust", sets: 4, reps: 10, equipment: "Barbell" },
                { name: "Glute Bridge", sets: 4, reps: 12, equipment: "Body Weight" }
            ]
        },
        {
            muscleGroup: "Hamstrings",
            exercises: [
                { name: "Leg Curl", sets: 4, reps: 12, equipment: "Machine" },
                { name: "Romanian Deadlift", sets: 4, reps: 8, equipment: "Barbell" }
            ]
        },
        {
            muscleGroup: "Calves",
            exercises: [
                { name: "Calf Raise", sets: 4, reps: 15, equipment: "Body Weight" },
                { name: "Seated Calf Raise", sets: 4, reps: 12, equipment: "Machine" }
            ]
        },
        {
            muscleGroup: "Abdominals",
            exercises: [
                { name: "Crunches", sets: 4, reps: 20, equipment: "Body Weight" },
                { name: "Leg Raise", sets: 3, reps: 15, equipment: "Body Weight" },
                { name: "Plank", sets: 3, reps: 60, equipment: "Body Weight (seconds)" }
            ]
        },
        {
            muscleGroup: "Obliques",
            exercises: [
                { name: "Side Plank", sets: 3, reps: 30, equipment: "Body Weight (seconds)" },
                { name: "Russian Twist", sets: 3, reps: 20, equipment: "Medicine Ball" }
            ]
        },
        {
            muscleGroup: "Adductors",
            exercises: [
                { name: "Adductor Machine", sets: 4, reps: 12, equipment: "Machine" }
            ]
        },
        {
            muscleGroup: "Quadriceps",
            exercises: [
                { name: "Leg Press", sets: 4, reps: 10, equipment: "Machine" },
                { name: "Squat", sets: 4, reps: 8, equipment: "Barbell" },
                { name: "Lunge", sets: 4, reps: 12, equipment: "Dumbbells" }
            ]
        },
        {
            muscleGroup: "Chest",
            exercises: [
                { name: "Bench Press", sets: 4, reps: 10, equipment: "Barbell" },
                { name: "Push-Up", sets: 4, reps: 15, equipment: "Body Weight" }
            ]
        }
    ];
    
    

    // If no muscles are provided, return all exercises
    if (!muscles || muscles.length === 0) {
        return res.json({ exercises });
    }

    // Filter exercises based on the provided muscle groups
    const selectedExercises = exercises
        .filter(group => muscles.includes(group.muscleGroup))
        .map(group => ({ muscleGroup: group.muscleGroup, exercises: group.exercises }));

    if (selectedExercises.length > 0) {
        res.json({ exercises: selectedExercises });
    } else {
        res.status(404).json({ message: "No exercises found for the selected muscle groups." });
    }
};

//---------------------------------------------------------------------------------------------------//

const getChallengeData = async (req, res) => {
    const challengeId = req.params.challengeId;

    const challengeData = {
        "Challenge 1": {
            challengeId: "Challenge 1",
            timePeriod: "30 Days",
            challengeType: "Beginner",
            tracking: "Daily Progress",
            description: "A 30-day challenge designed for beginners to build foundational strength and endurance."
        },
        "Challenge 2": {
            challengeId: "Challenge 2",
            timePeriod: "45 Days",
            challengeType: "Intermediate",
            tracking: "Weekly Check-ins",
            description: "A 45-day challenge aimed at intermediate fitness enthusiasts to enhance their performance."
        },
        "Challenge 3": {
            challengeId: "Challenge 3",
            timePeriod: "60 Days",
            challengeType: "Advanced",
            tracking: "Monthly Review",
            description: "A 60-day advanced challenge for seasoned athletes to push their limits and achieve peak fitness."
        }
    };

    const selectedChallenge = challengeData[challengeId];

    if (selectedChallenge) {
        res.status(200).json(selectedChallenge);
    } else {
        res.status(404).json({ message: "Challenge not found" });
    }
};
//-------------------------------------------------------------------------------------//




//----------------------------------------------------------------------//
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

// Add custom workout to Firestore
const addUserWorkout = async (req, res) => {
    const { userId } = req.params;
    const { workoutName, workoutDay, exercises } = req.body;

    // Validate the input data
    if (!userId || !workoutName || !workoutDay || !Array.isArray(exercises)) {
        return res.status(400).json({ message: 'Invalid input data.' });
    }

    try {
        // Store the workout with exercises, muscle group, and equipment info
        await db.collection('users').doc(userId).collection('workouts').add({
            workoutName,
            workoutDay,
            exercises: exercises.map(exercise => ({
                name: exercise.name,
                sets: exercise.sets,
                reps: exercise.reps,
                muscleGroup: exercise.muscleGroup,
                equipment: exercise.equipment,
            })),
            createdAt: new Date(),
        });
        res.status(200).json({ message: 'Workout saved successfully!' });
    } catch (error) {
        console.error('Error saving workout:', error);
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
// get user workouts
const getUserWorkouts = async (req, res) => {
    const { userId } = req.params;

    try {
        const workoutsRef = db.collection('users').doc(userId).collection('workouts');
        const snapshot = await workoutsRef.get();
        
        if (snapshot.empty) {
            return res.status(404).json({ message: 'No workouts found for this user' });
        }

        const workouts = snapshot.docs.map(doc => ({
            id: doc.id,
            workoutName: doc.data().workoutName,
            workoutDay: doc.data().workoutDay,
            exercises: doc.data().exercises
        }));

        res.status(200).json(workouts);
    } catch (error) {
        console.error('Error retrieving workouts:', error);
        res.status(500).json({ message: 'Error retrieving workouts', error });
    }
};

//----------------------------------------------------------------------//
// get user workouts
const getUserWorkout = async (req, res) => {
    const {userId, workoutId} = req.params;

    try {
        const workouts = await db.collection('users').doc(userId).collection('workouts').doc(workoutId).get();

        if (!workouts.exists) {
            res.status(500).json({ message: 'Workout does not exist' });
            return;
        }
        res.status(200).json(workouts.data());
    } catch (error) {
        res.status(500).json({ message: 'Error saving workout', error });
    }
};

const initializeChallenges = async (req, res) => {
    const challengeData = {
        "Challenge 1": {
            challengeId: "Challenge 1",
            timePeriod: "30 Days",
            challengeType: "Beginner",
            tracking: "Daily Progress",
            description: "A 30-day challenge designed for beginners to build foundational strength and endurance.",
            userId: null,
            status: null
        },
        "Challenge 2": {
            challengeId: "Challenge 2",
            timePeriod: "45 Days",
            challengeType: "Intermediate",
            tracking: "Weekly Check-ins",
            description: "A 45-day challenge aimed at intermediate fitness enthusiasts to enhance their performance.",
            userId: null,
            status: null
        },
        "Challenge 3": {
            challengeId: "Challenge 3",
            timePeriod: "60 Days",
            challengeType: "Advanced",
            tracking: "Monthly Review",
            description: "A 60-day advanced challenge for seasoned athletes to push their limits and achieve peak fitness.",
            userId: null,
            status: null
        }
    };

    try {
        const batch = db.batch();

        // Add each challenge to Firestore
        Object.keys(challengeData).forEach(challengeId => {
            const challengeRef = db.collection('challenges').doc(challengeId);
            batch.set(challengeRef, challengeData[challengeId], { merge: true });
        });

        await batch.commit();

        res.status(200).json({ message: "Challenges initialized successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error initializing challenges", error: error.message });
    }
};

// Update or create a user challenge status in Firestore
const updateUserChallengeStatus = async (req, res) => {
    const { userId } = req.params;  // Get userId from URL parameters
    const { challengeId, status } = req.body;  // Get challengeId and status from request body

    // Validate the input data
    if (!userId || !challengeId || !status) {
        return res.status(400).json({ message: "Invalid input data. userId, challengeId, and status are required." });
    }

    try {
        // Reference to the user's challenges subcollection and specific challenge document
        const userChallengeRef = db.collection('users').doc(userId).collection('challenges').doc(challengeId);

        // Set only userId, challengeId, and status in the challenge document
        await userChallengeRef.set({
            userId,
            challengeId,
            status
        });

        res.status(200).json({ message: "User challenge status created or updated successfully!" });
    } catch (error) {
        console.error('Error updating challenge status:', error);
        res.status(500).json({ message: "Error updating challenge status", error });
    }
};

// Get the status of a specific challenge for a user
const getUserChallengeStatus = async (req, res) => {
    const { userId, challengeId } = req.params;  // Get userId and challengeId from URL parameters

    // Validate the input data
    if (!userId || !challengeId) {
        return res.status(400).json({ message: "Invalid input data. userId and challengeId are required." });
    }

    try {
        // Reference to the specific challenge document in the user's challenges subcollection
        const userChallengeRef = db.collection('users').doc(userId).collection('challenges').doc(challengeId);
        const doc = await userChallengeRef.get();

        if (!doc.exists) {
            return res.status(404).json({ message: "Challenge not found for this user." });
        }

        // Extract the status field from the document data
        const { status } = doc.data();
        res.status(200).json({ status });
    } catch (error) {
        console.error('Error retrieving challenge status:', error);
        res.status(500).json({ message: "Error retrieving challenge status", error });
    }
};




// Get User-Specific Challenges from Firestore
const getUserChallenges = async (req, res) => {
    const { userId } = req.params;  // Get userId from URL parameters

    // Validate the input data
    if (!userId) {
        return res.status(400).json({ message: "Invalid input data. userId is required." });
    }

    try {
        // Reference to the user's challenges collection in Firestore
        const userChallengesRef = db.collection('users').doc(userId).collection('challenges');
        const snapshot = await userChallengesRef.get();

        if (snapshot.empty) {
            return res.status(404).json({ message: "No challenges found for this user." });
        }

        const userChallenges = [];
        snapshot.forEach(doc => {
            userChallenges.push(doc.data());
        });

        res.status(200).json(userChallenges);
    } catch (error) {
        console.error('Error retrieving user challenges:', error);
        res.status(500).json({ message: "Error retrieving user challenges", error });
    }
};


//----------------------------------------------------------------------//

const getWeeklyWorkoutPlan = async (req, res) => {
    const weeklyPlan = {
        "Monday": ["Back", "Biceps"],
        "Tuesday": ["Chest", "Legs"],
        "Wednesday": ["Shoulders", "Abs"],
        "Thursday": ["Legs", "Triceps"],
        "Friday": ["Back", "Chest"],
        "Saturday": ["Arms", "Abs"],
        "Sunday": ["Rest"]
    };

    const exerciseDictionary = {
        "Back": [
            { name: "Deadlift", sets: 4, reps: 6 },
            { name: "Pull-ups", sets: 4, reps: 8 },
            { name: "Barbell Rows", sets: 4, reps: 10 },
            { name: "Lat Pulldowns", sets: 4, reps: 12 },
            { name: "T-Bar Rows", sets: 4, reps: 10 },
            { name: "Face Pulls", sets: 3, reps: 15 },
            { name: "Seated Cable Rows", sets: 4, reps: 12 },
            { name: "Single-Arm Dumbbell Rows", sets: 3, reps: 12 }
        ],
        "Biceps": [
            { name: "Barbell Bicep Curl", sets: 4, reps: 10 },
            { name: "Hammer Curls", sets: 4, reps: 12 },
            { name: "Preacher Curls", sets: 3, reps: 12 },
            { name: "Concentration Curls", sets: 3, reps: 12 },
            { name: "Cable Bicep Curls", sets: 3, reps: 15 },
            { name: "Incline Dumbbell Curls", sets: 3, reps: 12 }
        ],
        "Chest": [
            { name: "Flat Bench Press", sets: 4, reps: 8 },
            { name: "Incline Bench Press", sets: 4, reps: 8 },
            { name: "Decline Bench Press", sets: 4, reps: 10 },
            { name: "Dumbbell Flyes", sets: 4, reps: 10 },
            { name: "Cable Flyes", sets: 3, reps: 12 },
            { name: "Push-Ups", sets: 4, reps: 15 },
            { name: "Dips", sets: 3, reps: 12 }
        ],
        "Legs": [
            { name: "Back Squats", sets: 4, reps: 10 },
            { name: "Front Squats", sets: 4, reps: 8 },
            { name: "Romanian Deadlifts", sets: 4, reps: 10 },
            { name: "Walking Lunges", sets: 3, reps: 12 },
            { name: "Leg Press", sets: 4, reps: 12 },
            { name: "Leg Extensions", sets: 3, reps: 15 },
            { name: "Leg Curls", sets: 3, reps: 12 },
            { name: "Calf Raises", sets: 4, reps: 20 }
        ],
        "Shoulders": [
            { name: "Military Press", sets: 4, reps: 10 },
            { name: "Lateral Raises", sets: 4, reps: 12 },
            { name: "Front Raises", sets: 3, reps: 12 },
            { name: "Rear Delt Flyes", sets: 3, reps: 15 },
            { name: "Upright Rows", sets: 3, reps: 12 },
            { name: "Arnold Press", sets: 3, reps: 10 },
            { name: "Shrugs", sets: 4, reps: 15 }
        ],
        "Abs": [
            { name: "Crunches", sets: 4, reps: 20 },
            { name: "Leg Raises", sets: 3, reps: 15 },
            { name: "Plank", sets: 3, reps: 60 }, // seconds
            { name: "Russian Twists", sets: 3, reps: 20 },
            { name: "Cable Woodchops", sets: 3, reps: 15 },
            { name: "Ab Wheel Rollouts", sets: 3, reps: 12 },
            { name: "Mountain Climbers", sets: 3, reps: 30 }
        ],
        "Triceps": [
            { name: "Tricep Pushdowns", sets: 4, reps: 12 },
            { name: "Overhead Tricep Extensions", sets: 4, reps: 12 },
            { name: "Close-Grip Bench Press", sets: 4, reps: 10 },
            { name: "Diamond Push-Ups", sets: 3, reps: 15 },
            { name: "Tricep Dips", sets: 4, reps: 12 },
            { name: "Skull Crushers", sets: 3, reps: 12 }
        ],
        "Arms": [
            { name: "EZ Bar Curls", sets: 4, reps: 10 },
            { name: "Tricep Pushdowns", sets: 4, reps: 12 },
            { name: "Hammer Curls", sets: 3, reps: 12 },
            { name: "Overhead Extensions", sets: 3, reps: 12 },
            { name: "Reverse Curls", sets: 3, reps: 15 },
            { name: "Close-Grip Pushups", sets: 3, reps: 15 },
            { name: "Cable Curls", sets: 3, reps: 12 },
            { name: "Rope Pushdowns", sets: 3, reps: 15 }
        ]
    };

    const weeklyWorkoutPlan = {};

    for (const [day, muscleGroups] of Object.entries(weeklyPlan)) {
        if (day === "Sunday") {
            weeklyWorkoutPlan[day] = { message: "Rest Day" };
        } else {
            weeklyWorkoutPlan[day] = muscleGroups.flatMap(muscleGroup => exerciseDictionary[muscleGroup]);
        }
    }

    res.status(200).json(weeklyWorkoutPlan);
};

module.exports = { 
    getExercisesByMuscles,
    getUserWorkout,
    getUserWorkouts,
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
    addUserWorkout,
    getWeeklyWorkoutPlan,
    deleteUserWorkout,
    getChallengeData,
    initializeChallenges,
    updateUserChallengeStatus,
    getUserChallenges,
    getUserChallengeStatus
    
};
//----------------------------------------------------------------------//
