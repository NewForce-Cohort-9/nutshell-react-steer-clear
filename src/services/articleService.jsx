//  author: Iris Lee purpose: functions to fetch data from api

export const getAllArticles = () => {
    return fetch('http://localhost:8088/articles')
    .then((res) => res.json())
}

export const createArticle = (article) => {
    return fetch('http://localhost:8088/articles', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(article),
    })
}

export const deleteArticle = (articleId) => {
    return fetch(`http://localhost:8088/articles/${articleId}`, {
        method: "DELETE",
    })
}

export const updateArticle = (article) => {
    return fetch(`http://localhost:8088/articles/${article.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(article)
    })
}

export const getArticleById = (articleId) => {
    return fetch(`http://localhost:8088/articles/${articleId}`)
    .then((res) => res.json())
}