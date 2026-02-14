export const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.send("Access Denied");
};

export const isAdmin = (req, res, next) => {
  if (req.user.role === "admin") return next();
  res.send("Access Denied");
};
