import { takeLatest, put } from 'redux-saga/effects'
import { GET_CATEGORY_NEWS_START, GET_NEWS_ERROR, GET_NEWS_START } from "../constant/news.constant";
import { getNewsFromApi } from '../service/news.service';
import { getCategoryNewsSuccess, getNewsSuccess } from '../action/news.action';

function* getNews() {
    try {
        let result = yield getNewsFromApi();
        yield put(getNewsSuccess(result))
    } catch (error) {
        yield put(GET_NEWS_ERROR(error.message))
    }
}

function* getCategoryNews({ payload }) {
    try {
        let result = yield getNewsFromApi(payload);
        yield put(getCategoryNewsSuccess(result))
    } catch (error) {
        yield put(GET_NEWS_ERROR(error.message))
    }
}
export default function* news() {
    yield takeLatest(GET_NEWS_START, getNews);
    yield takeLatest(GET_CATEGORY_NEWS_START, getCategoryNews)

}