import { UserRoutes } from './app/user/user.routes.js';

class RouteList {
   routes = [];
   getRoutes(app) {
      // Add routes to the array after passing the Express app instance
      this.routes.push(new UserRoutes(app));
      return this.routes;
   }
}

export default new RouteList();
