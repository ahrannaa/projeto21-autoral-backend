export function NotFoundError() {
  return {
    name: "NotFoundError",
    message: "No result for this search!",
  };
}

export function Unauthorized() {
  return {
    name: "Unauthorized",
    message: "Not Authorized!",
  };
}