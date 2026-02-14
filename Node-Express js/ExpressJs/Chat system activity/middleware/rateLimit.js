const store = {}

module.exports = (key, limit = 5, windowMs = 5000) => {
  return (req, res, next) => {
    const now = Date.now()
    store[key] = store[key] || []
    store[key] = store[key].filter(t => now - t < windowMs)

    if (store[key].length >= limit)
      return res.status(429).json({ message: "Too many requests" })

    store[key].push(now)
    next()
  }
}
