# 🎧 Podcast Manager API

A lightweight and framework-free REST API built with **Node.js** and **TypeScript** to manage and filter podcast episodes by name. Designed to demonstrate clean architecture, modular organization, and raw HTTP server handling without relying on Express or other frameworks.



## 🚀 Technologies & Tools

This project uses modern tools and minimalistic setup to keep the application fast and educational:

| Technology      | Description                                                                 |
|-----------------|-----------------------------------------------------------------------------|
| **Node.js**     | JavaScript runtime environment for building scalable server-side applications |
| **TypeScript**  | Strongly typed superset of JavaScript for better tooling and maintainability |
| **TSX**         | Node.js runtime to execute `.ts` files directly, useful for development     |
| **Tsup**        | Zero-config bundler for TypeScript, used to generate production builds      |
| **Dotenv**      | Loads environment variables from a `.env` file into `process.env`           |
| **Raw HTTP**    | Uses `http` module directly (no frameworks like Express)  

## 📁 Project Structure

```bash
src/
├── controllers/    # API route handlers
├── models/         # Types and interfaces
├── repositories/   # Simulated data access
├── routes/         # Enum to http methods
├── services/       # Business logic
├── utils/          # Utilities and enums
├── app.ts          # App logic
└── server.ts       # Create server
```

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Gustavo-Zamai/podcast-manager-api-node-http-ts.git

# Install dependencies
npm install
```
## 🧪 Running in Development
```bash
npm run start:dev
```

## 📌 API Endpoints
**GET** /api/episode?p={podcast_name}
- `Description`: Filters and returns a list of podcast episodes that match the specified podcast name.

- `Query Parameter`:

    - p (string): Podcast name to search for (case-insensitive).

- `Response`:

    - 200 OK with list of episodes

    - 204 No Content if no episodes found

- `Example Request`:

```bash
GET /api/episode?p=flow
```

## 🧪 Example Response
```json
    {
      "podcastName": "Flow",
      "episode": "PVC - Flow #453",
      "videoId": "8alvXuLKQzA",
      "categories": [
        "sports",
        "football"
      ]
    }
```
## 📄 License
This project is licensed under the ISC License.

## 🙋‍♂️ Author
**Gustavo Zamai**
