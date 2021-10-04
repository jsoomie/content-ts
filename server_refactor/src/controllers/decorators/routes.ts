import "reflect-metadata";
import { Methods } from "./Methods";
import { MetaDataKeys } from "./MetaDataKeys";

function routeBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata(MetaDataKeys.PATH, path, target, key);
      Reflect.defineMetadata(MetaDataKeys.METHOD, method, target, key);
    };
  };
}

export const get = routeBinder(Methods.GET);
export const put = routeBinder(Methods.PUT);
export const post = routeBinder(Methods.POST);
export const del = routeBinder(Methods.DEL);
export const patch = routeBinder(Methods.PATCH);
