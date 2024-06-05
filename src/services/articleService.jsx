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