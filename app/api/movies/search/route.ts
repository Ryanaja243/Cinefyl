import { NextRequest, NextResponse } from "next/server";

// Curated list shown by default on the Explore page when there is no active search.
const DEFAULT_POPULAR_MOVIES = [
  "Inception",
  "The Dark Knight",
  "Interstellar",
  "Pulp Fiction",
  "The Godfather",
  "The Matrix",
  "Fight Club",
  "Forrest Gump",
];

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const q = searchParams.get("q");

    const apiKey = process.env.OMDB_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ message: "OMDB_API_KEY is not configured" }, { status: 500 });
    }

    // No query (or the explicit "__default__" placeholder) -> return a curated
    // list of popular movies so the Explore page isn't empty on first load.
    if (!q || q === "__default__") {
      const lookups = await Promise.all(
        DEFAULT_POPULAR_MOVIES.map(async (title) => {
          try {
            const url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(title)}`;
            const r = await fetch(url);
            if (!r.ok) return null;
            const d = await r.json();
            return d && d.Response !== "False" ? d : null;
          } catch {
            return null;
          }
        })
      );

      const Search = lookups
        .filter((m): m is any => m !== null)
        .map((m) => ({
          Title: m.Title,
          Year: m.Year,
          imdbID: m.imdbID,
          Poster: m.Poster,
          Type: m.Type,
        }));

      return NextResponse.json({
        Search,
        totalResults: String(Search.length),
        Response: Search.length > 0 ? "True" : "False",
      });
    }

    const omdbUrl = `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(q)}&type=movie`;
    const response = await fetch(omdbUrl);
    
    if (!response.ok) {
      throw new Error(`OMDb API responded with status ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json(
      { message: "Failed to search movies", error: error.message },
      { status: 500 }
    );
  }
}
