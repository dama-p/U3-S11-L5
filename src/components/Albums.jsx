import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setPlayer } from "../redux/action";

const Albums = ({ artist }) => {
  const dispatch = useDispatch();

  const [albumResults, setAlbumResults] = useState([]);

  const fetchAlbums = () => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist, {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error while fetching data");
        }
      })

      .then((albums) => {
        console.log("ALBUMS", albums);
        setAlbumResults(albums.data);
      })

      .catch((error) => {
        console.log("ERRORE", error);
      });
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  console.log("RISULTATI", albumResults);

  return (
    <>
       { albumResults
        .filter((album, index) => index < 4)
        .map((album) => (
          <Col
            className="col text-center mt-3"
            key={album.id}
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(setPlayer(album))}
          >
            <img className="img-fluid" src={album.album.cover_medium} alt="track" />
            <p>
              Track: {album.title.length < 16 ? album.title : album.title.substring(0, 16) + "..."}
              <br />
              Artist: {album.artist.name}
            </p>
          </Col>
        ))}  
    </>
  );
};

export default Albums;
