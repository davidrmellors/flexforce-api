const express = require('express');
const cors = require('cors');
const workoutRoutes = require('./src/routes/workoutRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/workouts', workoutRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
