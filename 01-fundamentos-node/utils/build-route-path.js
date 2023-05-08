export function buildRoutePath(path) {
  const routeParamsRegex = /:([a-zA-Z]+)/g
  const pathWithParams = path.replaceAll(routeParamsRegex, '([a-z0-9\-_]+)')

  const pathRegx = new RegExp(`^${pathWithParams}`)

  return pathRegx
}