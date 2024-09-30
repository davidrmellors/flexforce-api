# FlexForce API

The FlexForce API serves as the backend for the FlexForce fitness application. It provides RESTful endpoints for managing user authentication, workouts, and fitness tracking data.

## Features
- User registration and login (Firebase Authentication)
- Workout creation and management
- Fitness tracker data submission
- Integration with OpenAI API for gym equipment identification

## Technologies
- Node.js with Express
- Firebase for authentication and data storage
- OpenAI API integration
- Deployed on Vercel

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/davidrmellors/flexforce-api.git
   ```
2. Navigate to the project directory:
   ```bash
   cd flexforce-api
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Environment Variables

Create a `.env` file in the root directory and add the following variables:

- `FIREBASE_API_KEY`
- `OPENAI_API_KEY`
- `VERCEL_URL`

## Usage

1. Run the API locally:
   ```bash
   npm start
   ```
2. Access the API at `http://localhost:3000`.

## API Endpoints

- **POST** `/register`: Register a new user
- **POST** `/login`: User login
- **POST** `/workouts`: Create a workout
- **GET** `/workouts/:userId`: Retrieve user workouts
- **POST** `/identify-equipment`: Identify gym equipment using OpenAI

## Deployment

This API is automatically deployed to [Vercel](https://flexforce-api.vercel.app).

## License

This project is licensed under the MIT License.
