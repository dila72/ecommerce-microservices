import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { clerkMiddleware, getAuth } from '@clerk/express';
import { shouldBeUser } from './middleware/authMiddleware.js';
import productRouter from './routes/product.route.js';
import categoryRouter from './routes/category.route.js';


const app = express();

app.use(express.json());
app.use(clerkMiddleware());

app.use(cors({
    origin: ['http://localhost:3002', 'http://localhost:4003'],
    credentials: true,
}));

app.get("/health", (req: Request, res: Response) => {
   return res.status(200).json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: Date.now(),
  });
});

app.get("/test", shouldBeUser, (req: Request, res: Response) => {
     
    res.json({message: "Product service authenticated", userId: req.userId });
});

app.use("/products", productRouter);

app.use("/categories", categoryRouter);

app.use((err: Error & { status?: number }, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    return res
        .status(err.status || 500)
        .json({ error: err.message || "Internal Server Error" });
});

app.listen(8000, () => {
    console.log('Product service is running on http://localhost:8000');
});