import express, { Application, NextFunction, Request, Response } from "express";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "./router";
import cors from "cors";
import multer from "multer";
import { join } from "path";

type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (error: Error | null, filename: string) => void;

const app: Application = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use(
  "/books",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
  })
);

const storage = multer.diskStorage({
  destination: function (
    request: Request,
    file: Express.Multer.File,
    callback: DestinationCallback
  ) {
    return callback(null, join(__dirname, "files"));
  },
  filename: function (
    req: Request,
    file: Express.Multer.File,
    callback: FileNameCallback
  ) {
    const uniqueFilename = `${Date.now()}-${file.originalname}`;
    return callback(null, uniqueFilename);
  },
});

const imageStorage = multer.diskStorage({
  destination: function (
    request: Request,
    file: Express.Multer.File,
    callback: DestinationCallback
  ) {
    return callback(null, join(__dirname, "images"));
  },
  filename: function (
    req: Request,
    file: Express.Multer.File,
    callback: FileNameCallback
  ) {
    const uniqueFilename = `${Date.now()}-${file.originalname}`;
    return callback(null, uniqueFilename);
  },
});

const upload = multer({ storage: storage });
const imageUpload = multer({ storage: imageStorage });

app.post("/uploadFile", upload.single("file"), (req: Request, res: Response) => {
  res.json({ message: "File uploaded successfully", name: req.file?.filename });
});

app.post("/uploadImage", imageUpload.single("image"), (req: Request, res: Response) => {
    res.json({ message: "Image uploaded successfully", name: req.file?.filename });
  })

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
