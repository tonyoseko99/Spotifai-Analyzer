import React, { useState, useEffect } from "react";
import { fetchPhotos, fetchAlbums } from "../API/data";
import { useParams } from "react-router-dom";
import { Card, Layout, Typography, Spin, Table } from "antd";
import { Content } from "antd/es/layout/layout";

function Album() {
  const { id } = useParams();
  const [album, setAlbum] = useState({});
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

  // fetch album's photos from API
  useEffect(() => {
    fetchPhotos().then((photos) => {
      const albumPhotos = photos.filter(
        (photo) => photo.albumId === parseInt(id)
      );
      setPhotos(albumPhotos);
      console.log(albumPhotos);
      setLoading(false);
    });
  }, [id]);

  const gridStyle = {
    width: "25%",
    textAlign: "center",
  };

  return (
    <Layout className="album-layout">
      <Typography.Title level={2} style={{ textAlign: "center" }}>
        Album Photos
      </Typography.Title>
      <Content style={{ padding: "0 50px" }}>
        <Card
          title={album.title || "Loading..."}
          loading={loading}
          hoverable={false}
        >
          {loading ? (
            <Spin />
          ) : (
            <div className="album-photos">
              {photos.map((photo) => (
                <Card.Grid style={gridStyle} hoverable={false}>
                  <img
                    onClick={() => {
                      //   redirect to photo page
                      window.location.href = `/photos/${photo.id}`;
                    }}
                    src={photo.url}
                    alt={photo.title}
                    style={{ maxHeight: "100%", maxWidth: "100%" }}
                  />
                </Card.Grid>
              ))}
            </div>
          )}
        </Card>
      </Content>
    </Layout>
  );
}

export default Album;
