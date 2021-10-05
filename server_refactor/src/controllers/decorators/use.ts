import { RequestHandler } from "express";
import "reflect-metadata";
import { MetaDataKeys } from "./MetaDataKeys";

export function use(middleware: RequestHandler) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    const middlewares =
      Reflect.getMetadata(MetaDataKeys.MIDDLEWARE, target, key) || [];

    Reflect.defineMetadata(
      MetaDataKeys.MIDDLEWARE,
      [...middlewares, middleware],
      target,
      key
    );
  };
}
