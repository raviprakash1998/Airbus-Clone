# Airbus-Clone

This is a React-based Airbus Clone App that allows users to search for flights, book flights, and use login features using Firebase Authentication.

# Table of Contents

1. Introduction
2. Features
3. Setup
4. Usage
5. Firebase Setup
6. Technologies Used
7. Contributing

# 1. Introduction

The Airbus Clone App is designed to mimic the functionality of a flight booking application. Users can search for available flights based on their preferred criteria and then proceed to book the desired flight. Additionally, users can create accounts and log in to access additional features such as goto payment details, viewing total price of booking, etc.

# 2. Features

# A. User Registration and Authentication:

- Users can sign up for new accounts and log in with their credentials.
- Firebase Authentication is used to manage user registration and login processes securely.

# B. Flight Search:

- Users can search for available flights based on various criteria such as origin, destination, departure date, etc.
- The search functionality is intuitive and provides relevant results to the user.

# C. Flight Booking:

- Only logged-in users can moved to the checkout page.

# 3. Setup

To set up the project locally, follow these steps:

1. Clone the repository:

   - git clone https://github.com/your-username/Airbus-Clone.git
   - cd Airbus-Clone

2. Install dependencies:
   - npm install or npm i

# 4. Usage

- To run the development server, execute the following command:
  npm run dev

- The app will be accessible at `http://127.0.0.1:5173/`.

# 5. Firebase Setup

To enable Firebase Authentication, you need to set up a Firebase project:

1. Go to Firebase Console and create a new project.

2. Obtain the Firebase configuration object containing your project credentials.

3. Create a file in the src directory of the project and add your Firebase configuration values like this:

const firebaseConfig = {
apiKey: "YOUR_API_KEY",
authDomain: "YOUR_AUTH_DOMAIN",
projectId: "YOUR_PROJECT_ID",
storageBucket: "YOUR_STORAGE_BUCKET",
messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
appId: "YOUR_APP_ID",
measurementId: "YOUR_MEASUREMENT_ID",
};

4. Enable Firebase Authentication methods (e.g., email/password, Google, etc.) that you want to use in your app.

# 6. Technologies Used

- React: Front-end JavaScript library for building user interfaces.
- Firebase: For user authentication and database management.
- HTML/CSS: For styling and structuring the app.
- Git: Version control system for tracking changes during development.

# 7. Contributing

- Contributions are welcome! If you find any issues or want to add new features, feel free to create a pull request.

# Project Links:

# Github Link : https://github.com/raviprakash1998/Airbus-Clone/

# Hosted Link : https://airbus-clone-app.netlify.app/
