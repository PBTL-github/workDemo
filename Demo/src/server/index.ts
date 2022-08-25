import * as Koa from "koa";
import * as koaBody from "koa-body";
import router from "./components/router";

const app: Koa = new Koa();

app.use(koaBody()).use(router.routes()).use(router.allowedMethods());

export default app;
