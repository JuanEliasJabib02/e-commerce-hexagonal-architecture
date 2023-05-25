import { Context, Next } from 'koa';

export class AuthController {

  constructor() {

  }

  async signup(ctx: Context, next: Next): Promise<void> {
    try {

      console.log("inside the controller")

      ctx.body = "nice"
      ctx.status = 200

      await next()

    } catch (error) {
      // Re-throw the error to propagate it to the middleware stack and reach the global error handler
      throw error;
    }
  }
}