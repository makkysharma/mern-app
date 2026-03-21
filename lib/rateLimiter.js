const rateLimitMap = new Map();

export function rateLimiter(ip, limit = 5, windowMs = 60000) {
  const now = Date.now();

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, {
      count: 1,
      startTime: now,
    });
    return true;
  }

  const data = rateLimitMap.get(ip);

  // Reset window here
  if (now - data.startTime > windowMs) {
    rateLimitMap.set(ip, {
      count: 1,
      startTime: now,
    });
    return true;
  }

  // Checking limit here
  if (data.count >= limit) {
    return false;
  }

  data.count++;
  return true;
}