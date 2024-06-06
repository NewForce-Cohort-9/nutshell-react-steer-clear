// author: Iris Lee purpose: to display an article

import { deleteArticle } from "../../services/articleService.jsx"

export const Article = ({ article, getAndSetArticles}) => {

    const handleDelete = () => {
        deleteArticle(article.id).then(() => {
            getAndSetArticles()
        })
    }

    return (
        <section className="article" >
            <header className="article-info">
                {article.title}
            </header>
            <div>
                {article.synopsis}
            </div>
            <div>
                {article.link}
            </div>
            <div className="btn-container">
                <button className="btn btn-secondary" onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </section>
    )
}