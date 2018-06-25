import React, {Component} from 'react';
import Film from './Film';

class FilmList extends Component{
  render(){
    const filmNodes = this.props.films.map(film =>
      {
        return   <Film title={film.title} key={film.id}>
          {film.times}
        </Film>
      })

      return(

        <div className='film-list'>{filmNodes}</div>
      )
    }
  }


  export default FilmList;
