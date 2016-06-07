var url = require("url");
var router = require("./router");
var requestHandler = require("./requestHandler");

var handle = {}
handle["/"] = requestHandler.iniciar;
handle["/iniciar"] = requestHandler.iniciar;
handle["/subir"] = requestHandler.subir;

var pathname = url.parse("http://www.irvingsite.com/holabebe").pathname;

router.route(handle,pathname);