# Анекдоты localhost
Анекдоты localhost - страничка для чтения анекдотов со своего сервера
#### Структура проекта
Точка входа в приложение - index.js в корне проекта. Далее файлы проекта разделены на папки backend и frontend.
Во frontend лежат страницы сайта для отображения, стили, а также скрипты, выполняемые браузером при загрузке страницы.
В backend - функционал серверной части - доступ к бд, обработка запросов, которые может послать клиент. Функционал бекенда разделен на логические модули: anekdoty_parser (парсер для обновления локальной базы данных за счет получения анекдотов из сети интернет с сайта https://anekdoty.ru/), auth (функционал связанный с регистрацией пользователей и проверкой ролей перед выдачей доступа), db (вся логика обращения к базе данных сервера), jokes (логика обработки запросов браузера на получение списка анекдотов, категорий, изменения анекдотов для админа и т.п.).
#### Функционал проекта
Возможно существование трех видов пользователей: незарегистрированный пользователь, зарегистрированный пользователь и администратор. Незарегистрированный пользователь может просмотреть список категорий анекдотов, которые есть на сервере, а также загрузить новые анекдоты из интернета на сервер (чтобы увидеть всё многообразие возможных категорий анекдотов, которые он сможет прочитать, если зарегистрируется). Обычный пользователь может просматривать анекдоты по категориям. Админ может изменить любой анекдот через функционал сайта. На данный момент, чтобы стать админом, при регистрации нужно поставить галочку "я админ" в форме регистрации.