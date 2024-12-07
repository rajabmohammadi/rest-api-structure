
export class CommonRoutesConfig {
   app;
   name;

   constructor(app, name) {
      this.app = app;
      this.name = name;
      this.configureRoutes();
   }

   getName() {
      return this.name;
   }

   // Abstract method, should be implemented in subclasses
   configureRoutes() {
      throw new Error('configureRoutes method must be implemented in subclass');
   }
}
