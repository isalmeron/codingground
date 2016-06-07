function route(handler,pathname) {
  console.log("A punto de rutear una peticion para " + pathname);
  if (typeof handler[pathname] === 'function') {
    return handler[pathname]();
  } else {
    console.log("No se encontro manipulador para " + pathname);
    return "404 No Encontrado";
  }
}

exports.route = route;