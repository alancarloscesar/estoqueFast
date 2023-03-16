import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import { router } from './routes'
import cors from 'cors'

const app = express();
app.use(express.json())
app.use(cors())

app.use(router)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {//middleware de erro
    //se instanciar um error
    if (err instanceof Error) {

        return res.status(400).json({//erro 400 bad req
            errr: err.message
        })

    }
    return res.status(500).json({//server found
        status: 'error',
        message: "Internal server error"
    })
})

app.listen(3333, () => {
    console.log("Servidor estoqueFast rodando... ")
})

export default app