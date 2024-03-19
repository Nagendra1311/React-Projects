import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getCategoryNewsStart } from '../redux/action/news.action';
import NewsItem from '../components/NewsItem';


export default function Category() {
    const { slug } = useParams();
    const dispatch = useDispatch()
    const categoryNews = useSelector(state => state.categoryNews)
    const loading = useSelector(state => state.loading)


    useEffect(() => {
        dispatch(getCategoryNewsStart(slug))
    }, [slug, dispatch])

    if (loading) {
        return (
            <div className='spin-container'>
                <div className="spinner-border spin-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>

            </div>

        )

    }
    return (
        <div className='container'>
            <div className="row">
                {
                    categoryNews.length > 0 && categoryNews.map((item, index) =>
                        <NewsItem item={item} key={index} />
                    )
                }
            </div>

        </div>
    )
}
