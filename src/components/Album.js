import React, { useState, useEffect } from "react";
import { fetchPhotos, fetchAlbums } from "../API/data";
import { useParams } from "react-router-dom";

function Album() {
  const { id } = useParams();
  const [album, setAlbum] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch album from API
  useEffect(() => {
    fetchAlbums().then((albums) => {
      const album = albums.find((album) => album.id === parseInt(id));
      setAlbum(album);
      console.log(album);
      setLoading(false);
    });
  }, [id]);

  

  return <div>Album</div>;
}

export default Album;
