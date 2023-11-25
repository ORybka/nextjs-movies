import {apiKey, baseApiUrl} from "@/utils";

export async function getGenres() {
    const res = await fetch(`${baseApiUrl}/3/genre/movie/list?api_key=${apiKey}`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}