export type Role = "admin" | "secretaria";

export function getUserFromCookie(cookie?: string) {
  if (!cookie) return null;

  try {
    return JSON.parse(cookie);
  } catch {
    return null;
  }
}
