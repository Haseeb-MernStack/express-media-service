# Express Media Service

## Purpose

A small Express-based media upload service demonstrating how to accept and store file uploads with `multer`. It provides a single, minimal API endpoint to upload one file and save it to the project `src/uploads` folder.

## Why this exists

- Learn how to configure `multer` for disk storage and filename handling.
- Provide a simple example controller, route, and optional file-filter middleware for image-only uploads.

## Key features

- Single-file upload endpoint: `POST /api/media/upload` (field name: `file`).
- Files are saved under `src/uploads` with a generated UUID filename and original extension.
- File size limit: 2 MB (configured in `multer.config.js`).

## Project structure

- `server.js`: Starts the app on port 3000.
- `src/app.js`: Express app and route mounting (`/api/media`).
- `src/routes/media.routes.js`: Route for the upload endpoint.
- `src/controllers/media.controller.js`: Handler that returns upload result.
- `src/config/multer.config.js`: `multer` disk storage config (destination, filename, limits).
- `src/middlewares/fileFilter.middleware.js`: `imageOnly` helper to allow only image MIME types.
- `src/uploads/`: Directory where uploaded files are stored.

## Installation

Ensure you have Node.js installed (v14+ recommended). From the project root run:

```bash
npm install
```

## Running

Start the server:

```bash
node server.js
```

For development with automatic reload (if `nodemon` is installed):

```bash
npm run dev
```

## API

Upload a single file (multipart/form-data):

- URL: `POST http://localhost:3000/api/media/upload`
- Form field name: `file`

Example using `curl`:

```bash
curl -X POST http://localhost:3000/api/media/upload \
	-F "file=@/full/path/to/your/image.jpg"
```

Response (success):

```json
{
  "success": true,
  "message": "File uploaded successfully",
  "file": {
    "fieldname": "file",
    "originalname": "image.jpg",
    "encoding": "7bit",
    "mimetype": "image/jpeg",
    "destination": "src/uploads",
    "filename": "<generated-uuid>.jpg",
    "path": "src/uploads/<generated-uuid>.jpg",
    "size": 12345
  }
}
```

## Notes

- `multer.config.js` currently sets `destination` to `src/uploads` and a 2 MB file-size limit.
- An `imageOnly` helper exists in `src/middlewares/fileFilter.middleware.js`. To enforce image-only uploads, add a `fileFilter` option to the `multer` configuration or explicitly check `file.mimetype` in the route.
- Make sure the `src/uploads` directory exists and the Node process has write permissions.

## Next steps / suggestions

- Add server-side validation (MIME type, dimensions, file extension) if needed.
- Add authentication and authorization around the upload route for production.
- Consider adding cleanup logic or cloud storage (S3) for production workloads.

## License

This repository is provided as an example; add a license file if you plan to reuse it.
