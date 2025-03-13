# Bookify

Bookify is an online platform where users can explore, read, and download a wide variety of books across different genres. The platform provides a seamless experience for book lovers to discover and engage with literature.

## Features

- **User Authentication**: Secure login and registration using JWT and cookies.
- **Browse Books**: Explore books by genre and category.
- **Book Details**: View book ratings, authors, and summaries.
- **Feedback System**: Users can submit feedback on books and platform experience.
- **Responsive Design**: Optimized for both mobile and desktop users.

## Tech Stack

- **Frontend**: Handlebars.js (templating), HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose for database management)
- **Authentication**: JWT & Cookies
- **Deployment**: Render

## Installation & Setup

To run this project locally, follow these steps:

### Prerequisites

Ensure you have the following:

- **Node.js** (v14 or later) installed
- **A MongoDB database**:
  - **For production**: A **MongoDB Atlas** cluster
  - **For development**: A local **MongoDB** instance

### Steps

1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-username/bookify.git
   cd bookify
   ```
2. **Install dependencies**:
   ```sh
   npm install
   ```
3. **Set up environment variables**:
   - Create a `config/dev.env` file (not included in the repository) and add the required environment variables:
     ```
     PORT=your_preferred_port_number
     MONGODB_URL=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```
4. **Run the project**:
   - For production mode:
     ```sh
     npm start
     ```
   - For development mode (loads env variables and restarts on changes):
     ```sh
     npm run dev
     ```
5. Open your browser and go to `http://localhost:3000` to access Bookify.

## Usage

- Register or log in to your account.
- Browse books by categories.
- View detailed book descriptions.
- Read books directly from the platform.
- Provide feedback to improve the platform.

## Author

Developed by **Aaditya Raikar**.
