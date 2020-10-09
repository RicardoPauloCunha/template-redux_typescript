import { AddAnimeAction, AddListAnimeAction, ADD_ANIME, ADD_LIST_ANIME } from "../actions/animes";

export interface AnimeState {
    myList: string[]
}

const initialState: AnimeState = {
    myList: ["Fate", "Charllote", "Steins Gate"]
}

type Actions = AddAnimeAction | AddListAnimeAction;

export const animesReducer = (state = initialState, action: Actions): AnimeState => {
    switch (action.type) {
        case ADD_ANIME:
            return {
                ...state,
                myList: [...state.myList, action.payload]
            }

        case ADD_LIST_ANIME:
            return {
                ...state,
                myList: [...state.myList, ...action.list]
            }
        default:
            return state;
    }
}