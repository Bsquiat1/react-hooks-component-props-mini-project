import React from "react";
import blogData from "../data/blog";
import Article from "./Article"

function ArticleList() {
    const articles = blogData.posts.map((post) => (
        <Article key={post.id} article={post} />
    ))

return <main>{articles}</main>


}



export default ArticleList;