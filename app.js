import express from 'express'
const app = express();
const PORT = 3000;
import RouteList from './routes.js';
import MongooseService from "./utils/mongoose.config.js"
// Middleware to parse JSON data
app.use(express.json());

// Define a route
app.get('/', (req, res) => {
   res.send('Hello, World!');
});
const routes = RouteList.getRoutes(app);
// Start the server
app.listen(PORT, () => {
   MongooseService;
   routes.forEach((route) => {
      console.log(`Routes configured for ${route.getName()}`);
   });
   console.log(`Server is running on http://localhost:${PORT}`);
});
