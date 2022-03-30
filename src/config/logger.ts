import { createLogger, format, transports, config, Logger } from 'winston';

const { combine, timestamp, json } = format;

const serverLogger: Logger = createLogger({
  levels: config.syslog.levels,
  defaultMeta: { component: 'server-service' },
  format: combine(
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    json()
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'logs/server-service.log' }),
  ],
});

export { serverLogger };
