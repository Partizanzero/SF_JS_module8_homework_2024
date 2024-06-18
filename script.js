//1. Получаем нужные элементы
const URL = "https://api.thecatapi.com/v1/images/search?limit=10"; //адрес на сервере, к которому обращаемся
const loadBtn = document.querySelector(".main__load-btn"); //кнопка Загрузить картинки
const clearBtn = document.querySelector(".main__clear-btn"); //кнопка Удалить картинки
const postsContainer = document.querySelector(".main__posts-container"); //див, в который будем загружать все картинки

//1. Делаем запрос на сервер через fetch()
const fetchData = async () => {
  try {
    let data = await fetch(URL); //отправляем запрос на сервер
    let response = await data.json(); //говорим серверу, чтобы вернул ответ в json
    //если ответ от сервера пришел - обрабатываем его
    if (response) {
      //вызываем getImages и передаем ей массив json, полученный от сервера
      getImages(response);
    }
  } catch (error) {
    console.error(error.message);
  }
};

//2. получаем картинки из пришедшего с сервера json
function getImages(arrImages) {
  if (arrImages) {
    //проходим по массиву пришедших данных и для каждого элемента массива создаем див
    arrImages.forEach((post) => {
      //создаем див, куда будем выводить конкретный пост
      const postElement = document.createElement("div");
      //задаем созданному диву класс main__posts-container-img
      postElement.classList.add("main__posts-container-img");

      //выводим в див картинку + блок с лоадером
      postElement.innerHTML = `
<a href="${post.url}" target="_blank"><img src="${post.url}" alt="Картинка с котом ${post.id}" style="display:none;"/></a>
<div class="main__posts-container-loader" style="display:block;"></div>
`;
      //добавляем блок с текущим постом в конец дива со всеми постами
      postsContainer.appendChild(postElement);
    });

    //получаем все дивы с картинками
    const listImg = document.querySelectorAll(".main__posts-container-img");

    //обходим массив дивов с картинками
    listImg.forEach((img) => {
      const imgItem = img.querySelector("img"); //отдельная картинка
      const imgLoader = img.querySelector(".main__posts-container-loader"); //див с лоадером

      //когда картинка загрузилась скрываем лоадер
      imgItem.addEventListener("load", function () {
        imgLoader.style.display = "none";
        imgItem.style.display = "block";
      });

      img.addEventListener("error", () => {
        imgLoader.style.display = "none";
        imgItem.style.display = "none";
        console.error("Ошибка загрузки");
      });
    });
  }
}

//3. Логика для кнопки Удалить посты
const cleanData = () => {
  postsContainer.innerHTML = "";
};

//4. Вешаем Обработчики Событий на кнопки
loadBtn.addEventListener("click", fetchData);
clearBtn.addEventListener("click", cleanData);
