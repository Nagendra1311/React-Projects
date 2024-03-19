import { GET_CATEGORY_NEWS_START, GET_CATEGORY_NEWS_SUCCESS, GET_NEWS_ERROR, GET_NEWS_START, GET_NEWS_SUCCESS } from "../constant/news.constant";

const initialState = {
    news: [],
    categories: [
        "war",
        "government",
        "politics",
        "education",
        "health",
        "environment",
        'economy',
        'business',
        "fashion",
        "entertainment",
        "sport"
    ],
    categoryNews: [],
    loading: true
}

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NEWS_START:
            return {
                ...state,
                loading: true
            }
        case GET_NEWS_SUCCESS:
            return {
                ...state,
                news: [...action.payload],
                loading: false
            }

        case GET_CATEGORY_NEWS_START:
            return {
                ...state,
                loading: true
            }

        case GET_CATEGORY_NEWS_SUCCESS:
            return {
                ...state,
                categoryNews: [...action.payload],
                loading: false
            }

        case GET_NEWS_ERROR:
            return {
                ...state,
                news: [action.payload]
            }

        default:
            return state;
    }
}