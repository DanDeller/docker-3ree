import path from 'path';
import Express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import RedisConn from 'connect-redis';
import http from 'http';
import SocketIO from 'socket.io';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './webpack.config';

import * as api from './server/api/http';
import * as eventService from './server/api/service/event';
import * as config from './config';
import * as uni from './server/app';

const RedisStore = RedisConn(session);
const app = Express();
const env = process.env.NODE_ENV || 'development';
const httpServer = http.Server(app);

var io = SocketIO(httpServer);

app.set('views', path.join(__dirname, 'server', 'views'));
app.set('view engine', 'ejs');

/**
 * Cookies and Session must use cookieParser before expressSession
 */
app.use(cookieParser());
app.use(session({
  secret: config.secrets.session,
  resave: true,
  saveUninitialized: true
}));

/**
 * Server middleware
 */
app.use(Express.static('dist'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

/**
 * Bundle and Serve Webpack
 */
const compiler = webpack(webpackConfig);
const middleware = webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
});

app.use(middleware);
app.use(webpackHotMiddleware(compiler));

/**
 * API Endpoints
 */
app.get('/api/0/events', api.getEvents);
app.post('/api/0/events', api.addEvent);
app.post('/api/0/events/:id', api.editEvent);
app.delete('/api/0/events/:id', api.deleteEvent);

/**
 * Universal Application endpoint
 */
app.get('*', uni.handleRender);

eventService.liveUpdates(io);

httpServer.listen(config.port);
