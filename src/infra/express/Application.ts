import express from 'express'

export class Application {
    private app: express.Application
    constructor() {
        this.app = express()
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.app.use(express.json())
    }
    routes() {
    
    }

    getInstance() {
        return this.app;
    }
}