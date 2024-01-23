export const API_URL = 'https://api.themoviedb.org/3/movie/'

export const IMAGE_URL = 'https://image.tmdb.org/t/p/original'

export const EMPTY_MOVIE_URL =
	'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'

export async function getMovies(type: string = 'popular') {
	const res = await fetch(`${API_URL}${type}?api_key=${process.env.API_KEY}&language=en-US`)
	return res.json()
}
