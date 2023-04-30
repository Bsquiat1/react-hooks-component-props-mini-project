import React from "react";
import blogData from "../data/blog";
import About from "./About";
import ArticleList from "./ArticleList";


console.log(blogData);
function Header(props) {
  return (
    <header>
      <h1>{props.blogName}</h1>
    </header>
  )
}




function App() {
  
  return (
    <div className="App">
      <Header blogName={blogData.name}/>
      <About 
      image={blogData.image}
      alt="underratede blog logo"
      aboutText={blogData.about}

      />
      <ArticleList />
      
      
    </div>
  );
}

export default App;
