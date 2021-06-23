import React from 'react'
import './ListaFilmes.css'



export default ({title, items}) => {


    return(

        <div>

            <h1>{title}</h1>

            <div className='listas'>

                {items.results.lenght > 0 && items.results.map((item, key) =>(

                    <img  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />

                ))}


            </div>

        </div>

    )



}