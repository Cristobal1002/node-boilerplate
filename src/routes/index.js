
const CURRENT_VERSION = 'v1'
import {health} from "./health.route.js";
export const routes = (server) => {
server.use(`/api/${CURRENT_VERSION}/health`, health);
}