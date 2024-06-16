//1. Получаем нужные элементы

const loadBtn = document.querySelector(".main__load-btn"); //кнопка Загрузить картинки
const clearBtn = document.querySelector(".main__clear-btn"); //кнопка Удалить картинки
const postsContainer = document.querySelector(".main__posts-container"); //див, в который будем загружать все картинки
const img = document.querySelector(".main__posts-container-img img"); //картинка
const loader = document.querySelector(".main__posts-container-loader"); //лоадер

//2. Делаем запрос на сервер через fetch()
const fetchData = () => {
  fetch("https://api.thecatapi.com/v1/images/search?limit=10")
    .then((response) => response.json()) //говорим серверу, чтобы вернул ответ в json

    //если ответ от сервера пришел - обрабатываем его
    .then((data) => {
      //проходим по массиву пришедших данных и для каждого элемента массива создаем див
      data.forEach((post) => {
        //создаем див, куда будем выводить конкретный пост
        const postElement = document.createElement("div");
        //задаем созданному диву класс main__posts-container-img
        postElement.classList.add("main__posts-container-img");

        //заменяем содержимое созданного дива на пост
        postElement.innerHTML = `
<a href="${post.url}" target="_blank"><img src="${post.url}" alt="Картинка с котом ${post.id}" style="display:none;" /></a>
<div class="main__posts-container-loader"></div>
`;

        //добавляем блок с текущим постом в конец дива со всеми постами
        postsContainer.appendChild(postElement);
      });
    })

    .catch((error) => {
      console.error("Error: ", error);
    });
};

//3. Логика для кнопки Удалить посты
const cleanData = () => {
  postsContainer.innerHTML = "";
};

//4. Вешаем Обработчики Событий на кнопки
loadBtn.addEventListener("click", fetchData);
clearBtn.addEventListener("click", cleanData);

//если картинка загрузилась - прячем лоадер и показываем картинку
img.addEventListener("load", function () {
  loader.style.display = "none";
  img.style.display = "block";
});

img.addEventListener('error', function() {
  loader.style.display = 'none';
  img.style.display = 'none';
  console.error('Ошибка загрузки изображения');
});
/*

не получается вставить данный код так, чтобы он менял стили у картинки и лоадера
        img.addEventListener("load", function () {
          loader.style.display = "none";
          img.style.display = "block";
        });
*/
