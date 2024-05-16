export const fetchAlbums = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    if (!response.ok) {
        throw new Error('Ошибка при загрузке альбомов');
    }
    return response.json();
};

export const fetchPhotos = async (albumId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
    if (!response.ok) {
        throw new Error('Ошибка при загрузке фотографий');
    }
    return response.json();
};

