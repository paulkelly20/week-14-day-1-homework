import React, {Component} from 'react';
import FilmList from '../components/FilmList'

class MovieTimeBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      films: [{id:1, title: "Avengers", times: "12:00, 14:00, 16:00, 20:00"},
            {id:2, title: "Oceans 8", times: "17:00, 19:00, 21:00"},
            {id:3, title: "Jurassic World", times: "14:30, 16:30, 20:00"}  ]
    };
  }
  render(){
    return(
    <div className='MovieTimeBox'>Movie Times
          <FilmList films= {this.state.films}/>
    </div>
  )
  }
}

export default MovieTimeBox;
