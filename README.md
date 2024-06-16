# SF_JS_module8_homework_2024
 8.8. Практическое задание. Галерея с картинками

## ТЗ
Для этого вам могут понадобиться следующие инструменты:  

Метод fetch для запроса данных со стороннего API;  
Цепочки вызовов .then().catch().finally();  
async/await;  
try…catch…finally;  
document.querySelector(), document.getElementById;  
addEventListener(), preventDefault().  
Дизайн полностью зависит от вас. Можете использовать что хотите. Единственное правило: сдавать вообще без стилей нельзя. И ещё: при загрузке данных должен появляться лоадер.  

Кнопки должны быть стилизованы. Размеры для картинок установлены. Отступы между картинками заданы. Адаптивность учтена.  

Соблюдайте кодстайл. Используйте один вариант табуляции и один формат кавычек.  
Для классов используйте БЭМ.  
Потренируйтесь задавать переменным осмысленные названия. По ним должно быть ясно, что в них хранится.  

### API
Варианты, откуда можно брать картинки:  

https://dog.ceo/api/breeds/image/random/20 — JSON с 20 картинками собачек. Вы можете поменять число 20 в конце адреса на другое. Максимум — 50 картинок. Минимум — 5.  
https://api.thecatapi.com/v1/images/search?limit=10 — 10 рандомных фотографий с котами.  
https://jsonplaceholder.typicode.com/photos?_start=0&_limit=60 — фейковые картинки. Можете выставить другие числа после limit.  
https://picsum.photos/v2/list?page=1&limit=50 — лист рандомных картинок. Используйте его, если у вас есть доступ к этому сервису. Работает не во всех странах.  
