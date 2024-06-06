//author: Iris Lee purpose: to process a new article

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createArticle } from "../../services/articleService.jsx"

export const ArticleForm = ({ currentUser }) => {
    const [article, setArticle] = useState({title: "", synopsis: "", link:""})

    const navigate = useNavigate()

    const handleSave = (event) => {
        event.preventDefault()

        if (article.title && article.synopsis && article.link) {
            const newArticle = {
                userId: currentUser,
                title: article.title,
                synopsis: article.synopsis,
                timeStamp: new Date(),
                link: article.link,
            }

            createArticle(newArticle).then(() => {
                navigate("/articles")
            })
        } else {
            window.alert("Please fill out all sections")
        }
    }

    return (
        <form>
            <h2>New Interesting Article</h2>
            <fieldset>
                <div className="form-group">
                    <label>Title
                        <input
                            type="text"
                            className="form-control"
                            placeholder="article title"
                            onChange={(event) => {
                                const articleCopy = {...article }
                                articleCopy.title = event.target.value
                                setArticle(articleCopy)
                            }}
                        />
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>Synopsis
                        <input
                            type="text"
                            className="form-control"
                            placeholder="brief description of the article"
                            onChange={(event) => {
                                const articleCopy = {...article }
                                articleCopy.synopsis = event.target.value
                                setArticle(articleCopy)
                            }}
                        />
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>Link
                        <input
                            type="text"
                            className="form-control"
                            placeholder="link to article here"
                            onChange={(event) => {
                                const articleCopy = {...article }
                                articleCopy.link = event.target.value
                                setArticle(articleCopy)
                            }}
                        />
                    </label>
                </div>
            </fieldset> 
            <fieldset>
                <div className="form-group">
                    <button className="form-btn btn-info"
                        onClick={handleSave}
                    >
                        Submit Article
                    </button>
                </div>
            </fieldset>                     
        </form>
    )
}