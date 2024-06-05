// author: Iris Lee purpose: to list all saved articles for user

import { useEffect, useState } from "react"
import { getAllArticles } from "../../services/articleService.jsx"
import { Article } from "./Article.jsx"
import { ArticleForm } from "./ArticleForm.jsx"

export const ArticleList = ({ currentUser } ) => {
    const [userArticles, setUserArticles] = useState([])

    //get articles for current user
    const getAndSetArticles = () => {
        getAllArticles().then((articlesArray) => {
            const userArticlesArray = articlesArray.filter(
                article => article.userId === currentUser.id
            )
            setUserArticles(userArticlesArray)
        })
    }

    useEffect(()=> {
        getAndSetArticles()
    }, [currentUser])

    return (
        <div className="articles-container">
            <h2>Articles</h2>
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
            <ArticleForm />
        </div>
    )
}