// author: Iris Lee purpose: to list all saved articles for user

import { useEffect, useState } from "react"
import { getAllArticles } from "../../services/articleService.jsx"
import { Article } from "./Article.jsx"
import { useNavigate } from "react-router-dom"

export const ArticleList = ({ currentUser } ) => {
    const [userArticles, setUserArticles] = useState([])

    const navigate = useNavigate()

    //get articles for current user
    const getAndSetArticles = () => {
        getAllArticles().then((articlesArray) => {
            const userArticlesArray = articlesArray.filter(
                article => article.userId === currentUser
            ).sort((a,b) => a.timeStamp > b.timeStamp ? -1 : 1)
            setUserArticles(userArticlesArray)
        })
    }

    useEffect(()=> {
        getAndSetArticles()
    }, [currentUser])

    return (
        <div className="articles-container">
            <h2>News</h2>
            <article className="articles">
                {userArticles.map(articleObj => {
                    return <Article
                    article={articleObj}
                    currentUser={currentUser}
                    getAndSetArticles={getAndSetArticles}
                    key={articleObj.id}
                    />
                })}
            </article>
            <button
                    className="filter-btn btn-primary"
                    onClick={() => {
                        navigate("/articles/create")
                    }}
                >
                    New Article
                </button>
        </div>
    )
}