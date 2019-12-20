import exporess from "express";

// singleton app router
export class AppRouter {
  private static instance: exporess.Router;

  static getInstance(): exporess.Router {
    if (!AppRouter.instance) {
      AppRouter.instance = exporess.Router();
    }
    return AppRouter.instance;
  }
}
