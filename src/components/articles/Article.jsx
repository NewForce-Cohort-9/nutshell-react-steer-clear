// author: Iris Lee purpose: to display an article

export const Article = ({ article }) => {
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
        </section>
    )
}