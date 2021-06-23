import React, { useEffect, useState } from 'react'
import ListaFilmes from './componentes/ListaFilmes'
import Dados from './componentes/dados_api'

export default () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(()=>{
    const loadAll = async () => {
      let list = await Dados.getHomeList(); 

      setMovieList(list);
    }


    loadAll()
 
    }, [])
    
    
    return(

      <>

        <div className = "page">


              <section className="lists">


                  {movieList.map((item, key) => (
                    
                    
                      <ListaFilmes key={key} title={item.title} items={item.items}/>
                      
                    
                  )
                  
                    
                  
                  )}


              </section>
              

        </div>

      </>
    );
}