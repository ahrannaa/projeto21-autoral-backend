import httpStatus from "http-status"

const ERROR_STATUS = {
  "Unauthorized": httpStatus.UNAUTHORIZED,
  "NotFoundError": httpStatus.NOT_FOUND,
}

export function NotFoundError() {
  return {
    name: "NotFoundError",
    message: "No result for this search!",
  }
}

export function Unauthorized() {
  return {
    name: "Unauthorized",
    message: "Not Authorized!",
  }
}

export function getErrorStatus(error) {
  const status = ERROR_STATUS[error.name]
  return status || httpStatus.INTERNAL_SERVER_ERROR
}