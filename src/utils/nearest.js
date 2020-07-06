const getDistance = (point) => (value) =>
  Math.sqrt(Math.pow(point.x - value.x, 2) + Math.pow(point.y - value.y, 2));

const findNearestPoint = (list, point) => {
  if (!list.length) {
    return null
  }

  const curriedGetDistance = getDistance(point);
  return list.reduce((a, b) => curriedGetDistance(a) < curriedGetDistance(b) ? a: b, {});
};

export { findNearestPoint };
