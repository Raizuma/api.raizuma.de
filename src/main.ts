import express from "express"
import type { Express, Request, Response, NextFunction } from "express"
import { json as jsonParser } from "body-parser"
import Cookies from "cookies"

const app: Express = express()
app.use(jsonParser())
app.use(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    next()
})

app.get("/", async (req: Request, res: Response): Promise<void> => {
    const cookies: Cookies = new Cookies(req, res)

    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify({ message: "Hello World!" }))
})

app.listen(2999, "0.0.0.0", (): void => {
    console.log("[server] running on http://0.0.0.0:2999")
})
