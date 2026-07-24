# lapochka — mobile app prototype

Интерактивный прототип мобильного приложения lapochka, собранный в формате Cursor Design Canvas.

## Структура

- `index.html` — точка входа (бывший `Мобильная версия.dc.html`), содержит разметку экрана и его логику (`<script data-dc-script>`).
- `support.js`, `image-slot.js` — рантайм Design Canvas: подгружает React/ReactDOM/Babel с CDN и рендерит шаблон из `index.html` прямо в браузере, без сборки.
- `assets/` — иконки, картинки и видео интерфейса.
- `uploads/` — загруженные в макет изображения.
- `components/` — сгенерированные Figma Code Connect компоненты (справочно, не используются в `index.html`).
- `screenshots/` — референсные скриншоты.

## Локальный просмотр

Файл самодостаточен — открывать через любой статический сервер (например `npx serve .`), либо напрямую `index.html` в браузере.

## Деплой

Сайт публикуется через GitHub Pages из ветки `main` (папка `/`): https://aytalina17.github.io/mini-app/
