import React, { Component } from 'react';

import AlbumListPage from '../AlbumListPage';
import AlbumDetailPage from '../AlbumDetailPage';

import { fetchAlbums, fetchPhotos } from '../../services/api';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'albums',
            albums: [],
            photos: [],
            selectedAlbumId: null,
            loading: true,
            error: null,
        };
    }

    async componentDidMount() {
        try {
            const albums = await fetchAlbums();
            this.setState({ albums, loading: false });
        } catch (error) {
            console.error('Ошибка при загрузке альбомов:', error);
            this.setState({ error: 'Ошибка при загрузке альбомов', loading: false });
        }
    }

    handleAlbumClick = async (albumId) => {
        this.setState({ loading: true });
        try {
            const photos = await fetchPhotos(albumId);
            this.setState({
                photos,
                selectedAlbumId: albumId,
                currentPage: 'albumDetail',
                loading: false,
            });
        } catch (error) {
            console.error('Ошибка при загрузке фотографий:', error);
            this.setState({ error: 'Ошибка при загрузке фотографий', loading: false });
        }
    };

    handleBackClick = () => {
        this.setState({ currentPage: 'albums' });
    };

    render() {
        const { currentPage, albums, photos, selectedAlbumId, loading, error } = this.state;

        if (loading) {
            return <div className="text-center mt-5"><p>Загрузка...</p></div>;
        }

        if (error) {
            return <div className="text-center mt-5"><p>Ошибка: {error}</p></div>;
        }

        return (
            <div className="container mt-5">
                {currentPage === 'albums' && (
                    <AlbumListPage albums={albums} onAlbumClick={this.handleAlbumClick} />
                )}
                {currentPage === 'albumDetail' && (
                    <AlbumDetailPage
                        albumId={selectedAlbumId}
                        photos={photos}
                        onBackClick={this.handleBackClick}
                    />
                )}
            </div>
        );
    }
}

export default MainPage;
