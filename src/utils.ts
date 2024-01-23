export const API_URL = 'https://api.themoviedb.org/3/movie/'

export async function getMovies(type: string = 'popular') {
	const res = await fetch(`${API_URL}${type}?api_key=${process.env.API_KEY}&language=en-US`)
	return res.json()
}
