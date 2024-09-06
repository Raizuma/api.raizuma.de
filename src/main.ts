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
    res.end(JSON.stringify({test: "Moew"}))
})

app.get("/projects/:slug", async (req: Request, res: Response): Promise<void> => {
    const cookies: Cookies = new Cookies(req, res)

    const slug: string = req.params.slug ?? ""
    console.log(slug)

    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify({     title: "Test",
        downloadlink: "string",
        developer: "string",
        publisher: "string",
        date: "string",
        orglanguage: "string",
        usk: "string",
        pimage: "https://http.cat/images/200.jpg",
        description: "string",
    }))
})

app.listen(3000, "api.raizuma.local", (): void => {
    console.log("[server] running on http://api.raizuma.local:3000")
})
