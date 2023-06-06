import React from 'react'
import './index.css'

export const Post = () => {
  return (
    <>
    
   

<div class="post">
  <div class="post-votos">
    <button class="upvote"> <img src="/src/seta-para-cima.png" alt="dow-post"/></button>
    <span class="contagem-votos">42</span> 
    <button class="downvote">
       <img src="/src/seta-para-cima.png" alt="up-post"/> 
    </button>
  </div>
  <div class="post-conteudo">
    <h2 class="post-titulo">Fuuas titulo</h2> 
    <p class="post-descricao">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
       Recusandae, placeat, totam eaque voluptas exercitationem commodi ex mollitia, consequuntur numquam labore inventore. 
      Dolor, similique. Pariatur perferendis cumque labore in, excepturi optio.</p> 
      <span class="post-autor">Fuuas</span> 
      <span class="post-comentarios">10 comentários</span> 
  </div>
</div>
    
    </>
   
    
   
    
  )
}
