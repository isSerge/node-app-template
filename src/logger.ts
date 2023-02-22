import { pino } from "pino";

export const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: 'yyyy-mm-dd HH:MM:ss',
      ignore: 'hostname,pid',
    }
  },
})

logger.level = process.env.DEBUG ? 'debug' : 'info';
