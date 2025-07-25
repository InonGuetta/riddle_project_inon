import riddlesRouter from "./riddles.routes.js"

function configRoutes(app) {

    app.get("/riddles", riddlesRouter);


}

export default configRoutes