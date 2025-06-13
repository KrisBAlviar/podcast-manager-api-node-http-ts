# Podcast Manager API 🎙️

![GitHub release](https://img.shields.io/github/release/KrisBAlviar/podcast-manager-api-node-http-ts.svg) ![GitHub issues](https://img.shields.io/github/issues/KrisBAlviar/podcast-manager-api-node-http-ts.svg) ![GitHub stars](https://img.shields.io/github/stars/KrisBAlviar/podcast-manager-api-node-http-ts.svg)

Welcome to the **Podcast Manager API**! This project provides a REST API for managing podcast episodes using **Node.js**, **TypeScript**, and raw **HTTP**—without any frameworks. It aims to give developers a simple yet powerful way to create, update, and manage podcast episodes.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the API](#running-the-api)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Releases](#releases)

## Features

- **Manage Podcast Episodes**: Create, read, update, and delete episodes.
- **No Frameworks**: Built using raw HTTP for a lightweight solution.
- **TypeScript Support**: Strong typing to enhance development experience.
- **Clean Architecture**: Organized code structure for maintainability.
- **Environment Variables**: Use `.env` files for configuration.

## Technologies Used

This project leverages the following technologies:

- **Node.js**: JavaScript runtime for building scalable network applications.
- **TypeScript**: A superset of JavaScript that adds static types.
- **dotenv**: Loads environment variables from a `.env` file.
- **raw HTTP**: Directly uses HTTP for requests and responses.
- **Clean Architecture**: Promotes separation of concerns and testability.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** (Node Package Manager)
- **TypeScript** (optional, for development)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/KrisBAlviar/podcast-manager-api-node-http-ts.git
   ```

2. Navigate to the project directory:

   ```bash
   cd podcast-manager-api-node-http-ts
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and configure your environment variables. Here’s an example:

   ```plaintext
   PORT=3000
   DATABASE_URL=mongodb://localhost:27017/podcast
   ```

### Running the API

To start the API, run the following command:

```bash
npm start
```

The API will run on the port specified in your `.env` file (default is 3000).

## API Endpoints

Here are the available API endpoints:

### 1. Get All Episodes

- **Endpoint**: `GET /episodes`
- **Description**: Retrieve a list of all podcast episodes.
- **Response**: JSON array of episodes.

### 2. Get Episode by ID

- **Endpoint**: `GET /episodes/:id`
- **Description**: Retrieve a single episode by its ID.
- **Response**: JSON object of the episode.

### 3. Create Episode

- **Endpoint**: `POST /episodes`
- **Description**: Create a new podcast episode.
- **Request Body**: JSON object with episode details.
- **Response**: JSON object of the created episode.

### 4. Update Episode

- **Endpoint**: `PUT /episodes/:id`
- **Description**: Update an existing episode.
- **Request Body**: JSON object with updated episode details.
- **Response**: JSON object of the updated episode.

### 5. Delete Episode

- **Endpoint**: `DELETE /episodes/:id`
- **Description**: Delete an episode by its ID.
- **Response**: Success message.

## Contributing

We welcome contributions! If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Releases

For the latest releases, visit the [Releases](https://github.com/KrisBAlviar/podcast-manager-api-node-http-ts/releases) section. You can download the latest version and execute it to get started with the Podcast Manager API.