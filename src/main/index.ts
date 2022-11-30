import { Application } from "@infra/express/Application";

const expressApplication = new Application().getInstance();

expressApplication.listen(3000, () => {
    console.log("Server is running on port 3000");
})