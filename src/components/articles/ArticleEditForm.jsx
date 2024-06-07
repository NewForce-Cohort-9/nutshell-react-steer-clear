//author: Iris Lee purpose: to edit an existing article form

import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getArticleById, updateArticle } from "../../services/articleService.jsx"

export const ArticleEditForm = ({ currentUser }) => {

    const [currentArticle, setCurrentArticle] = useState({})

    const navigate = useNavigate()

    const {articleId} = useParams()

    useEffect (() => {
        getArticleById(articleId).then((article) => {
            setCurrentArticle(article)
        })
    }, [])

    const handleSave = (event) => {
        event.preventDefault()

        if (currentArticle.title && currentArticle.synopsis && currentArticle.link) {
            const editedArticle = {
                userId: currentUser,
                id: currentArticle.id,
                title: currentArticle.title,
                synopsis: currentArticle.synopsis,
                timeStamp: currentArticle.timeStamp,
                link: currentArticle.link,
            }
            updateArticle(editedArticle).then(() => {
                navigate("/articles")
            })
        } else {
            window.alert("Please fill out all sections")
        }
    }

    const handleInputChange = (event) => {
        const stateCopy = { ...currentArticle }
        stateCopy[event.target.name] = event.target.value
        setCurrentArticle(stateCopy)
    }

    return (
        <form>
            <h2>Edit Article</h2>
            <fieldset>
                <div className="form-group">
                    <label>Title
                        <input
                            type="text"
                            className="form-control"
                            name="title"
                            value={currentArticle.title}
                            onChange={handleInputChange}
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
                            name="synopsis"
                            value={currentArticle.synopsis}
                            onChange={handleInputChange}
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
                            name="link"
                            value={currentArticle.link}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
            </fieldset> 
            <fieldset>
                <div className="form-group">
                    <button className="form-btn btn-info"
                        onClick={(e) => {handleSave(e)}}
                    >
                        Save Changes
                    </button>
                </div>
            </fieldset>                     
        </form>
    )
}