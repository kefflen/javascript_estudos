import { Request, Response } from "express";
import app from "./config/app";

app.get('/', (req: Request, res: Response) => {

    return res.send('Hello word\n')
})

app.listen(8080, () => console.log("Running at: http://localhost:8080"))