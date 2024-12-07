import Users from "../../../models/user.model.js";
class UserDaos {
   async userRegister(body) {
      const user = new Users({
         ...body
      });
      let data = await user.save();
      return data;
   }
   async userViewProfile(userId) {
      const user = await Users.findById(userId);
      return user;
   }
}
export default new UserDaos();;