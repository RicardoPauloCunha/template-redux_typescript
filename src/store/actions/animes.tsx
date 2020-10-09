export const ADD_ANIME = 'ADD_ANIME';
export const ADD_LIST_ANIME = 'ADD_LIST_ANIME';

export type AddAnimeAction = {
    type: typeof ADD_ANIME,
    payload: string
}

export type AddListAnimeAction = {
    type: typeof ADD_LIST_ANIME,
    list: string[]
}

export const addAnime = (anime: string): AddAnimeAction => ({
    type: ADD_ANIME,
    payload: anime
});

export const addListAnime = (animes: string[]): AddListAnimeAction => ({
    type: ADD_LIST_ANIME,
    list: animes
});