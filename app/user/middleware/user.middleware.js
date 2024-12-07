import Users from "../../../models/user.model.js";
class UserMiddleware {
   //check duplicate user.
   async validateSameEmailDoesNotExist(req, res, next) {
      try {
         const user = await Users.findOne({ email: req.body.email });
         if (user) {
            res.status(400).json({
               errors: ["User with email address already exists"],
            })
         } else {
            next();
         }
      } catch (err) {
         res.status(400).send({ errors: [err.message] });
      }
   }
   async checkUserExistById(req, res, next) {
      try {
         const user = await Users.findById(req.params.id);
         if (!user) {
            res.status(400).json({
               errors: ["User not found!"],
            })
         } else {
            next();
         }
      } catch (err) {
         res.status(400).send({ errors: [err.message] });
      }
   }
}
export default new UserMiddleware();