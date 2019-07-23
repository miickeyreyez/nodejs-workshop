import winston from 'winston';

const {
  createLogger,
  format,
  transports,
} = winston;

const { combine, timestamp, printf } = format;

const customFormat = printf(({ level, message, timestamp: time }) => (
  `${time} - [${level.toUpperCase()}]: ${message}`));

const logLevel = 'info';

const logger = createLogger({
  level: logLevel,
  format: combine(
    timestamp(),
    customFormat,
  ),
  transports: [
    new transports.Console(),
  ],
});

const log = (message, level = logLevel) => logger.log({ level, message });

export default log;
