import riddlesRouter from "./riddles.routes.js"

function configRoutes(app) {

    app.get("/riddles", riddlesRouter);
    app.post("/add-riddle", riddlesRouter);    


}

export default configRoutes