export type User = { _id: string; name: string; username: string; email?: string; avatar?: string; isAdmin?: boolean }
export type Movie = { Title: string; Year: string; imdbID: string; Poster: string; Type: string }
export type WatchlistItem = { _id: string; userId: string; imdbID: string; title: string; year?: string; poster?: string; createdAt: string; userRating?: number; reviewText?: string }
export type ReviewItem = Omit<WatchlistItem, 'userId'> & { user?: Pick<User, '_id'|'name'|'username'|'avatar'> | null }

export async function api<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(path, { ...init, credentials: 'same-origin', headers: { 'Content-Type': 'application/json', ...(init?.headers || {}) } })
  const data = await response.json().catch(() => ({}))
  if (!response.ok) throw new Error(data.message || 'Something went wrong')
  return data as T
}
export const sanitizeUser = (value: any): User => ({ _id: String(value._id), name: String(value.name || ''), username: String(value.username || ''), avatar: value.avatar, isAdmin: value.isAdmin === true })
export const poster = (src?: string) => src && src !== 'N/A' ? src : ''
export const initials = (name = '') => name.split(' ').map((part) => part[0]).join('').slice(0, 2).toUpperCase() || 'CF'
export const getError = (error: unknown) => error instanceof Error ? error.message : 'Something went wrong'
export const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
export const isValidUsername = (value: string) => /^[a-zA-Z0-9_]{3,15}$/.test(value)

export async function searchMovies(query = '') { return api<{ Search?: Movie[]; totalResults?: string; Response: string }>(`/api/movies/search?q=${encodeURIComponent(query.trim() || '__default__')}`) }
export async function getWatchlist(userId?: string) { return api<WatchlistItem[]>(`/api/watchlist${userId ? `?userId=${encodeURIComponent(userId)}` : ''}`) }
export async function addMovie(movie: Movie) { return api<WatchlistItem | { item: WatchlistItem }>('/api/watchlist', { method: 'POST', body: JSON.stringify({ imdbID: movie.imdbID, title: movie.Title, year: movie.Year, poster: movie.Poster }) }) }
export async function updateWatchlist(id: string, body: { userRating?: number | null; reviewText?: string }) { return api<WatchlistItem>(`/api/watchlist/${id}`, { method: 'PATCH', body: JSON.stringify(body) }) }
