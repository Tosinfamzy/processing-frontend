# Borderless Frontend

Frontend application for processing passport data. It allows users to upload an image of a passport, extracts relevant data such as the date of birth and expiry date, and displays the extracted information.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)

## Installation

1. Clone the repository:

```bash
git clone <repo_url>
cd processing-frontend
```

2. Install dependencies:

```bash
npm install
```

## Usage

1. Start the development server:

```bash
npm run dev
```

2. Open your browser and navigate to `http://localhost:3000`.

3. Upload a passport image to see the extracted data.

## Development

### Project Structure

- `src/components`: Contains components `UploadForm` and `DisplayData`.
- `src/contexts`: Contains the context for managing global state.
- `src/hooks`: Contains custom hooks mainly `useUpload`.
- `src/services`: Contains API service functions.

### Scripts

- `npm run dev`: Starts the development server.
