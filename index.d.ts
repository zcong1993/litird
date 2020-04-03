import { Server } from 'http';
import ExportConfig = require('./config');
import { EggConsoleLogger } from 'egg-logger';
import IORedis = require('ioredis');
import mongoose = require('mongoose');
import ExportMotime = require('./mongoose/plugin/motime');
import ExportPaginate = require('./mongoose/plugin/paginate');
import Router = require('koa-router');
import Koa = require('koa');

declare namespace Litird {
  type Config = typeof ExportConfig;
  interface IConfig extends Config { };
  interface IMongoosePlugins {
    motime: typeof ExportMotime;
    paginate: typeof ExportPaginate;
  }

  interface IModel { }

  interface IService { }

  interface IController { }

  export class Service {
    app: Litird;

    config: Litird.IConfig;
    logger: EggConsoleLogger;
    redis: IORedis.Redis;
    model: Litird.IModel;
    service: Litird.IService;
  }

  export class Controller {
    app: Litird;

    config: Litird.IConfig;
    logger: EggConsoleLogger;
    redis: IORedis.Redis;
    model: Litird.IModel;
    entity: any;
    service: Litird.IService;
    server: Koa;
    validator: any;
    validate: any;
  }
}

declare class Litird {
  static app: Litird;

  config: Litird.IConfig;
  logger: EggConsoleLogger;
  Redis: typeof IORedis;
  redis: IORedis.Redis;
  mongoose: typeof mongoose;
  mongoosePlugins: Litird.IMongoosePlugins;
  model: Litird.IModel;
  entity: any;
  service: Litird.IService;
  server: Koa;
  validator: any;
  validate: any;
  controller: Litird.IController;
  router: Router;
  httpServer: Server;

  start(): void;
  beforeMountRouter(): void;
  onstart(): void;
  onready(): void;
}

export = Litird;
