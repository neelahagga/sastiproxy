const proxy = require("node-tcp-proxy");
const newProxy = proxy.createProxy(process.env.PORT ?? 8080, process.env.HOSTHEHE ?? "127.0.0.1", 6969);
