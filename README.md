### Клиентская часть тестового задания
## ТЗ
1. Node.JS
2. TypeScript
3. Интерпретатор командной строки. В параметрах обязательно должны быть действие и аргументы этого действия в любом формате.
4. При запуске из командной строки с параметрами нужно выполнять подключение к Серверу и выполнять REST API операции.
5. Данные, полученные от Сервера выводить в консоль.

Примерная структура "Автомобиль":
- Бренд
- Название
- Год производства
- Цена
- любые дополнительные поля, которые нужны для решения задачи

## CLI команды 
```
# Список всех авто
$ yarn cli car:find

# Список с сортировкой 2 параметра -1|1
$ yarn cli car:find-sort 1 1

# Добавить авто в бд
$ yarn cli car:create '{"name": "rav4", "brand": "toyota", "production_year": 2010, "price": 20000}'
```


[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```
