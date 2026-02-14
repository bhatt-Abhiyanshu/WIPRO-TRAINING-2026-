const users = [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "user", password: "user123", role: "user" }
]

module.exports = (req, res, next) => {
  const username = req.body?.username || req.headers.username
  const password = req.body?.password || req.headers.password

  if (!username || !password) return res.sendStatus(401)

  const user = users.find(
    u => u.username === username && u.password === password
  )

  if (!user) return res.sendStatus(401)

  req.user = user
  next()
}
