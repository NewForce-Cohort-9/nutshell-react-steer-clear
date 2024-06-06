// author: Iris Lee purpose: to display an article

import { useNavigate } from "react-router-dom"
import { deleteArticle } from "../../services/articleService.jsx"

export const Article = ({ article, getAndSetArticles}) => {

    const navigate = useNavigate()

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
                 <button
                    className="filter-btn btn-primary"
                    onClick={() => {
                        navigate(`/articles/edit/${article.id}`)
                    }}
                  >
                    Edit
                </button>                
                <button className="btn btn-secondary" onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </section>
    )
}