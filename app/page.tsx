'use client'
import { FormEvent, useEffect, useState } from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'
import { MovieCard } from '@/components/movie-card'
import { EmptyState, ErrorState, LoadingGrid, PageIntro, useAuth } from '@/components/cinefyl-shell'
import { getError, getWatchlist, searchMovies, type Movie, type WatchlistItem } from '@/lib/cinefyl'
export default function Page() {
  const { user } = useAuth(); const [movies, setMovies] = useState<Movie[]>([]); const [items, setItems] = useState<WatchlistItem[]>([]); const [query, setQuery] = useState(''); const [loading, setLoading] = useState(true); const [error, setError] = useState('')
  async function load(value = '') { setLoading(true); setError(''); try { const result = await searchMovies(value); setMovies(result.Search || []) } catch (e) { setError(getError(e)) } finally { setLoading(false) } }
  useEffect(() => { load() }, []); useEffect(() => { if (user) getWatchlist(user._id).then(setItems).catch(() => {}) }, [user])
  function submit(event: FormEvent) { event.preventDefault(); load(query) }
  function saved(item: WatchlistItem) { setItems((current) => [...current.filter((entry) => entry.imdbID !== item.imdbID), item]) }
  return <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-12 pt-14 md:px-8 md:pt-20"><PageIntro eyebrow="The movie shelf" title="Explore Movies">Discover critically acclaimed masterpieces, trending blockbusters, and hidden gems curated for the true cinephile.</PageIntro><form onSubmit={submit} className="mx-auto flex w-full max-w-4xl flex-col gap-3 sm:flex-row"><label className="flex min-h-12 flex-1 items-center gap-2 rounded-md border-[3px] border-ink bg-surface px-4 shadow-[3px_3px_0_#222]"><Search className="size-4" /><span className="sr-only">Search movies</span><input value={query} onChange={(e) => setQuery(e.target.value)} className="w-full border-0 bg-transparent font-mono text-base outline-none placeholder:text-ink/50 focus:ring-0" placeholder="Search movies..." /></label><button type="submit" className="flex min-h-12 items-center justify-center gap-2 rounded-md border-[3px] border-ink bg-surface px-6 font-mono text-sm font-bold shadow-[3px_3px_0_#222] hover:bg-ink hover:text-surface"><SlidersHorizontal className="size-4" /> Search</button></form>{loading ? <LoadingGrid /> : error ? <ErrorState message={error} retry={() => load(query)} /> : movies.length === 0 ? <EmptyState title="No movies found" detail="Try another title or search phrase." /> : <section className="grid grid-cols-2 gap-x-4 gap-y-9 sm:grid-cols-3 md:grid-cols-4 md:gap-x-7">{movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} item={items.find((item) => item.imdbID === movie.imdbID)} onSaved={saved} />)}</section>}</div>
}
