const roleMiddleware = require("../middleware/roleMiddleware");

test("role middleware denies unauthorized role", () => {
  const req = { user: { role: "customer" } };
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
  };
  const next = jest.fn();

  roleMiddleware("admin")(req, res, next);

  expect(res.status).toHaveBeenCalledWith(403);
});
