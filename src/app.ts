import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import httpStatus from 'http-status'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Testing
app.get('/', (req: Request, res: Response) => {
  res.send('Working Successfully')
})

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  })
  next()
})

export default app
