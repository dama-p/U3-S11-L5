export const SET_SEARCH = 'SET_SEARCH'
export const SET_PLAYER = 'SET_PLAYER'
export const SET_ALBUM = 'SET_ALBUM'
export const SET_LIKED = 'SET_LIKED'

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

export const getAlbum = (artist) => {
  return async (dispatch) => {
    try {
      let res = await fetch(
        'https://striveschool-api.herokuapp.com/api/deezer/search?q=' + artist,
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
          type: SET_ALBUM,
          payload: result.data,
        })
      } else {
        throw new Error('error in album set')
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

export const setLiked = (likedSong) => {
  return {
    type: SET_LIKED,
    payload: likedSong,
  }
}

export default searching
