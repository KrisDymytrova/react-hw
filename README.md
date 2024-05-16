Вам необходимо:

Создать страницу на которой будет выведен список альбомов (Дизайн на ваше усмотрение)
При нажатии на элемент из списка пользователя должно перевести на другую страницу на которой будут отрисованы все изображения с этого альбома
Для получения данных о всех альбомах вам нужно отправить GET запрос по ссылке

[https://jsonplaceholder.typicode.com/albums
]()


После получения данных вы рисуете список элементов на странице

Для получения фоток вы можете отправить запрос GET запрос сюда

[https://jsonplaceholder.typicode.com/photos
]()


Таким образом вы получите все фотки со всех альбомов

Для того чтобы получить фотки с определенного альбома вам нужно отправить GET запрос на ту же ссылку но добавить к нему query параметр ?albumID= и id альбома на который нажал юзер, id всех альбомов у вас будут получены в рамках первого запроса

Например чтобы получить все фото из альбома номер 3 мне нужно отправить запрос по такому адресу

[https://jsonplaceholder.typicode.com/photos?albumId=3
]()