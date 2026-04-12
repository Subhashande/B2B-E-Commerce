// common/middlewares/role.middleware.js

export const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(new Error("Access denied"));
    }
    next();
  };
};