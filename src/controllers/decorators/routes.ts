import "reflect-metadata";
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";

function routerBinder(method: string) {
  return function(path: string) {
    return function(target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata(MetadataKeys.PATH, path, target, key);
      Reflect.defineMetadata(MetadataKeys.METHOD, method, target, key);
    };
  };
}

export const get = routerBinder(Methods.GET);
export const post = routerBinder(Methods.POST);
export const put = routerBinder(Methods.PUT);
export const patch = routerBinder(Methods.PATCH);
export const del = routerBinder(Methods.DEL);
