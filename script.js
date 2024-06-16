//1. Получаем нужные элементы

const loadBtn = document.querySelector(".main__load-btn"); //кнопка Загрузить картинки
const clearBtn = document.querySelector(".main__clear-btn"); //кнопка Удалить картинки
const postsContainer = document.querySelector(".main__posts-container"); //див, в который будем загружать все картинки
const loader = document.querySelector(".main__posts-container-loader"); //див с лоадером

loader.style.display = "none";

//2. Делаем запрос на сервер через fetch()
const fetchData = () => {
  fetch("https://api.thecatapi.com/v1/images/search?limit=10")
    .then((response) => response.json()) //говорим серверу, чтобы вернул ответ в json

    //если ответ от сервера пришел - обрабатываем его
    .then((data) => {
      //деалем лоадер видимым до того, как начнется отрисовка картинки в диве
      loader.style.display = "block";

      //интервал 5 сек до начала отрисовки картинок, чтобы прокрутился лоадер
      setTimeout(() => {
        //проходим по массиву пришедших данных и для каждого элемента массива создаем див
        data.forEach((post) => {
          //создаем див, куда будем выводить конкретный пост
          const postElement = document.createElement("div");
          //задаем созданному диву класс main__posts-container-img
          postElement.classList.add("main__posts-container-img");
          //заменяем содержимое созданного дива на пост
          postElement.innerHTML = `
<a href="${post.url}" target="_blank"><img src="${post.url}" alt="Картинка с котом ${post.id}" /></a>
`;
          //добавляем блок с текущим постом в конец дива со всеми постами
          postsContainer.appendChild(postElement);
          //скрываем лоадер после загрузки картинок
          loader.style.display = "none";
        });
      }, 5000);
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
