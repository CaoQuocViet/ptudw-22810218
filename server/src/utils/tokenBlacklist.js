const tokenBlacklist = new Set();

const addToBlacklist = (token) => tokenBlacklist.add(token);

const isTokenBlacklisted = (token) => tokenBlacklist.has(token);

const removeFromBlacklist = (token) => tokenBlacklist.delete(token);

module.exports = { addToBlacklist, isTokenBlacklisted, removeFromBlacklist };