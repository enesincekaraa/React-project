import { combineReducers } from 'redux'
import { popularMovieReducer } from 'store/reducers/popular'
import { homeMovieReducer } from 'store/reducers/movies'
import { detailReducer } from 'store/reducers/detail'
import { discoverReducer } from 'store/reducers/discover'

const movieReducer = combineReducers({
  popularMovies: popularMovieReducer,
  homeMovies: homeMovieReducer,
  detailReducer: detailReducer,
  discoverReducer: discoverReducer,
})

export default movieReducer
