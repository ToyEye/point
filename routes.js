export const routes = [
  { id: "1", name: "Home", path: "/" },
  { id: "2", name: "Portfolio", path: "/portfolio" },
  { id: "3", name: "Contacts us", path: "/contact" },
];

const result = routes.reduce((obj, route) => {
  obj[route.name.toUpperCase()] = route.path;
  return obj;
}, {});
