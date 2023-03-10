// Получить значение параметра 'name' из URL-адреса
var queryParams = new URLSearchParams(window.location.search);
var scriptName = queryParams.get('name');

// Загрузить скрипт с именем из параметра запроса
var script = document.createElement('script');
script.src = scriptName + '.js';
document.body.appendChild(script);
