import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AlbumDetailPage extends Component {
    render() {
        const { photos, albumId, onBackClick } = this.props;

        return (
            <div>
                <h1 className="text-center mb-4">Альбом {albumId}</h1>
                <button className="btn btn-secondary mb-3" onClick={onBackClick}>
                    Назад
                </button>
                <div className="row">
                    {photos.length === 0 ? (
                        <p>Нет фотографий для отображения</p>
                    ) : (
                        photos.map(photo => (
                            <div key={photo.id} className="col-md-3 mb-4">
                                <div className="card">
                                    <img className="card-img-top" src={photo.url} alt={photo.title} />
                                    <div className="card-body">
                                        <p className="card-text">{photo.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        );
    }
}

AlbumDetailPage.propTypes = {
    photos: PropTypes.array.isRequired,
    albumId: PropTypes.number.isRequired,
    onBackClick: PropTypes.func.isRequired,
};

export default AlbumDetailPage;

