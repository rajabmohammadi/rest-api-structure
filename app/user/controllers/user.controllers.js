import UserDaos from "../daos/user.daos.js";
class UserControllers {
   async register(req, res) {
      try {
         let user = await UserDaos.userRegister(req.body);
         res.status(200).json({
            message: "User added successfully",
            user
         })
      } catch (error) {
         res.status(400).json({
            error: [error.message],
         })
      }
   }
   async viewProfile(req, res) {
      try {
         let user = await UserDaos.userViewProfile(req.params.id);
         res.status(200).json(user);
      } catch (error) {
         res.status(400).json({
            error: [error.message],
         })
      }
   }
}
export default new UserControllers();