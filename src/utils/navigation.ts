import { IRoute } from "types/navigation";

// NextJS Requirement
export const isWindowAvailable = () => typeof window !== "undefined";

export const findCurrentRoute = (routes: IRoute[]): IRoute => {
  const foundRoute: IRoute = routes.find(
    (route) =>
      isWindowAvailable() &&
      window.location.href.indexOf(route.layout + route.path) !== -1 &&
      route
  );

  if (foundRoute) {
    return foundRoute;
  } else {
    const foundSubMenuRoute: IRoute = routes.find(
      (route) =>
        isWindowAvailable() &&
        ("parent" in route
          ? route.parent.find(
              (route: IRoute) =>
                window.location.href.indexOf(route.layout + route.path) !==
                  -1 && route
            )
          : "")
    );
    if (foundSubMenuRoute) {
      const SubMenuRoute: IRoute = foundSubMenuRoute.parent.find(
        (item: IRoute) =>
          window.location.href.indexOf(item.layout + item.path) !== -1 && item
      );
      return SubMenuRoute;
    }
    return foundSubMenuRoute;
  }
};

export const getActiveRoute = (routes: IRoute[]): string => {
  const route = findCurrentRoute(routes);
  return route?.name || "Default Brand Text";
};

export const getActiveNavbar = (routes: IRoute[]): boolean => {
  const route = findCurrentRoute(routes);
  return route?.secondary;
};

export const getActiveNavbarText = (routes: IRoute[]): string | boolean => {
  return getActiveRoute(routes) || false;
};
