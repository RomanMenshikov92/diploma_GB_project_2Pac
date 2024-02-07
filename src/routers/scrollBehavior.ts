import { RouteLocationNormalized, RouteLocationNormalizedLoaded } from "vue-router";

const scrollBehavior = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalizedLoaded,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  savedPosition: any
) => {
  if (savedPosition) {
    return savedPosition;
  } else {
    return { x: 0, y: 0 };
  }
};

export default scrollBehavior;
