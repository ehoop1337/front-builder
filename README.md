
# front-builder

Сброщик frontend проекта на основе Gulp и Webpack



## Используемый стэк

Gulp, Webpack, Twig, Sass


## Установка

```bash
  mkdir [название проекта]
  cd [название проекта]
  git clone https://github.com/ehoop1337/front-builder .
  npm install
```
    
## Скрипты 

Поднятие сервера для разработки:

```bash
  npm run start
```

Сборка проекта:

```bash
  npm run build
```

Очищает и удаляет папку build:

```bash
  npm run clean
```


## Добавление внешних библиотек
Пример с Fancybox, установка:
```bash
npm install --save @fancyapps/ui
```
Подключние скриптов:
```javascript
// src/js/index.js

// Подключаем
import { Fancybox } from "@fancyapps/ui";
...
document.addEventListener('DOMContentLoaded', () => {
  // Инициализруем
  Fancybox.bind('[data-fancybox=""]');
  ...
});
```
Подключение стилей:
```scss
// src/styles/index.scss

...
// Загружаем файлы в папку libs и подключем от туда
@import "libs/fancybox";

// или из папки node_modules
@import "../../node_modules/@fancyapps/ui/dist/fancybox/fancybox";
...
```


## Автор

- [@ehoop1337](https://www.github.com/ehoop1337) Ruslan Sayfutdinov

