# Node.js Learning Project 🚀

Hey! This is a simple Node.js project I built while learning how to work with Node.js. Nothing fancy, just a fun way to explore the basics!

## What's This About?

This is a tiny API server that serves up some data about countries and continents. It listens on your local machine and responds to a few simple GET requests. Think of it as a practice run for building APIs! 

## Getting Started

### Prerequisites
- Node.js installed on your machine

### Installation

1. Clone or download this project

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Server

Start the server with:
```bash
node index.js
```

The server will run at `http://127.0.0.1:8000/`

## API Endpoints

Here are the endpoints you can hit:

- **GET `/api`** - Get all the data
- **GET `/api/continents/{continentName}`** - Get data for a specific continent
- **GET `/api/country/{countryName}`** - Get data for a specific country

## Project Structure

```
├── index.js              # Main server file
├── database/
│   └── db.js            # Database functions
├── data/
│   └── data.js          # Data storage
├── utils/
│   └── utiliy.js        # Helper functions
└── package.json         # Project config
```

## Learning Goals

This project helped me learn:
- How to create a basic HTTP server with Node.js
- Handling different API routes
- Working with modules and imports
- Parsing URL parameters
- Sending JSON responses
- Basic file structure organization

## Notes

This is just a learning project, so it's kept simple and straightforward. No fancy frameworks here – just pure Node.js! 

---

Happy coding! 📝
