# Блог-платформа 
##### Deploy https://blog-platform-n1982.vercel.app/articles
Задача в этом курсе - реализовать блог-платформу. 

Проект реализуем целиком с использованием react hooks.



#### Корневой URL для API: http://kata.academy:8022/

### Страницы

- / и /articles - список всех статей. При клике на заголовок - переход на страницу статьи. Кнопка лайка не активна, т.к. мы не авторизованы.
- /articles/{slug} - Просмотр статьи с полным текстом.
- /sign-in - Страница входа.
- /sign-up - Страница регистрации.
- /profile - Страница редактирования информации пользователя (см. метод Update User). Переход на эту страницу происходит по клике на имени-аватарке в шапке.
- /new-article - Страница создания статьи. При переходе по этой ссылке без аутентификации - перебрасывает на страницу логина (см. паттерн Private Route)
- /articles/{slug}/edit - Страница редактирования статьи.

### Задание

- Реализуйте страницу со списком статей
- Сделайте пагинацию. Пагинация статей должна быть на стороне сервера - при смене страницы отправляем новый запрос. 
- Не забываем индикаторы загрузки и обработку ошибок.
- Реализуйте страницу одной статьи. Обратите внимание, что полный текст статьи - это Markdown разметка, найдите подходящий модуль для вывода содержимого на экран.
- Используйте react-router для навигации по страницам.
- Добавим механизм аутентификации, регистрации и редактирования профиля.
    - Создайте страницы входа и регистрации и настройте роутинг
    - Сделайте форму регистрации
    - Сделайте форму логина
    - Сделайте отображение данных пользователя в шапке
    - Настройте клиентскую валидацию и обработку ошибок сервера (см ниже подробности)
    - Настройте, чтобы при перезагрузке страницы залогиненный пользователь сохранялся, сделайте функционал Log Out
    - Реализуйте страницу редактирования профиля (переход на эту страницу - по клику на имени/аватаре пользователя в шапке.
- Добавьте страницу создания статьи. Правила валидации - title, short description и text обязательны для заполнения.
- Добавьте страницу редактирования статьи. Реиспользуйте форму, использующуюся при создании.
- Добавьте кнопки редактирования/удаления на странице статьи. Сделайте подтверждение на действие удаления.
-  На странице отображения статьи добавляем кнопки Edit и Delete. По нажатию на Edit происходит переход на страницу редактирования, по Delete - открытие модалки подтверждения и запрос на удаление статьи.

#### Валидация

Для клиентской валидации форм воспользуемся библиотекой React Hook Form.

#### Регистрация (все поля обязательны):

 - email должен быть корректным почтовым адресом
 - username должен быть от 3 до 20 символов (включительно)
 - password должен быть от 6 до 40 символов (включительно)
 - password и repeat password должны совпадать
 - галочка согласия с обработкой персональных данных должна быть отмечена
 
##### Логин:

 - email должен быть не пустой, должен быть корректным почтовым адресом
 - password должен быть не пустой

##### Редактирование профиля:

 - username не должен быть пустым
 - email должен быть корректным почтовым адресом, не должен быть пустым
 - new password должен быть от 6 до 40 символом
 - avatar image должен быть корректным url
 - Серверные ошибки должны нормально подсвечивать соответствующие поля.

