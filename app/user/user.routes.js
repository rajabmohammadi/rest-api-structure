import { body } from "express-validator";
import BodyValidationMiddleware from '../../utils/common.middleware.js';
import { CommonRoutesConfig } from "../../utils/common.routes.config.js";
import UserControllers from "./controllers/user.controllers.js";
import UserMiddleware from "./middleware/user.middleware.js";
export class UserRoutes extends CommonRoutesConfig {
   constructor(app) {
      super(app, "UserRoutes");
   }

   configureRoutes() {
      //============= USER CRUD ====================
      this.app.route('/user')
         .post(
            body("email").isEmail(),
            body("firstName").isString(),
            body("lastName").isString(),
            body("password").isLength({ min: 5 }).withMessage("Must include password (5+ characters)"),
            BodyValidationMiddleware.verifyBodyFieldsErrors,
            UserMiddleware.validateSameEmailDoesNotExist,
            UserControllers.register
         )
         .put(
            body("email").isEmail(),
            body("firstName").isString().optional(),
            body("lastName").isString().optional(),
            BodyValidationMiddleware.verifyBodyFieldsErrors,
            // it just an example
            // UserMiddleware.validateSameEmailDoesNotExist,
            // UserControllers.register
         )
      this.app.route('/user/:id')
         .get(
            UserMiddleware.checkUserExistById,
            UserControllers.viewProfile
         )
      return this.app;
   }
}
