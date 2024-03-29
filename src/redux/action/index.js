export const SET_SEARCH = 'SET_SEARCH'
export const SET_PLAYER = 'SET_PLAYER'
export const SET_ALBUM = 'SET_ALBUM'
export const ADD_FAVE = 'ADD_FAVE'
export const REMOVE_FAVE ='REMOVE_FAVE'

const searching = (searchValue) => {
  return async (dispatch) => {
    try {
      let res = await fetch(
        'https://striveschool-api.herokuapp.com/api/deezer/search?q=' +
          searchValue,
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
            'X-RapidAPI-Key':
              '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
          },
        }
      )
      if (res.ok) {
        let result = await res.json()
        console.log(result.data)
        dispatch({
          type: SET_SEARCH,
          payload: result.data,
        })
      } else {
        throw new Error('error in search')
      }
    } catch (err) {
      console.log('error', err)
    }
  }
}


export const setPlayer = (selectedAlbum) => {
  return {
    type: SET_PLAYER,
    payload: selectedAlbum,
  }
}

export const addFave = (favedSong) => {
  return {
    type: ADD_FAVE,
    payload: favedSong,
  }
}

export const removeFave = (removedSong) => {
  return {
    type: REMOVE_FAVE,
    payload: removedSong,
  }
}

export default searching
