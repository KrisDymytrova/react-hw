import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AlbumListPage extends Component {
    render() {
        const { albums, onAlbumClick } = this.props;

        return (
            <div>
                <h1 className="text-center mb-4">Альбомы</h1>
                <ul className="list-group">
                    {albums.map(album => (
                        <li
                            key={album.id}
                            className="list-group-item list-group-item-action"
                            onClick={() => onAlbumClick(album.id)}
                        >
                            {album.title}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

AlbumListPage.propTypes = {
    albums: PropTypes.array.isRequired,
    onAlbumClick: PropTypes.func.isRequired,
};

export default AlbumListPage;


