export default class UserRouter {
  constructor(app: any) {}

  
  app.get('/user/:uuid', userRequest);
  app.get('/user', userRequest);
}