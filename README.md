# Book-Mangment-API

A simple API built with Node.js, Express, and MongoDB to manage Books. This API facilitates operations such as creating and retrieving book, as well as add books in various courses.

## Installation

1. Clone the repository: https://github.com/mauryarajeev/Book-Mangment-API.git
2. Install the dependencies: npm install
3.  Run the development server: npm start
      
## API Endpoints

### Add new book

- **Endpoint:** `POST /api/books`
- **Request Body:**
```json

{ 
	"title": "five step ton heven",
 "author": "Rajeev Maurya", 
 "summary": "this book is says how to enjoy life ilike heven "
}
```
- **Responce Body:**
```json
{
	"_id": "653fc193cce9e15e4e8fccf8",
	"title": "angular concept book",
	"author": "Micky Mini",
	"summary": "In this book we learn the concept of angular with es 6 javascript ",
	"__v": 0
}
```

### Get books of list

- **Endpoint:** `GET /api/books`
- **Responce Body:**
```json
[
	{
		"_id": "653fc10dcce9e15e4e8fccf4",
		"title": "mathmatics and statics",
		"author": "naveen chadra",
		"summary": "In thisa we connect all logic of computational ",
		"__v": 0
	},
	{
		"_id": "653fc16bcce9e15e4e8fccf6",
		"title": "react concept with es6",
		"author": "Ashay Saini",
		"summary": "In this book we learn the concept of react with es 6 javascript ",
		"__v": 0
	},
	{
		"_id": "653fc193cce9e15e4e8fccf8",
		"title": "angular concept book",
		"author": "Micky Mini",
		"summary": "In this book we learn the concept of angular with es 6 javascript ",
		"__v": 0
	},
	{
		"_id": "653fc1e9cce9e15e4e8fccfa",
		"title": "five step ton heven",
		"author": "Rajeev Maurya",
		"summary": "this book is says how to enjoy life ilike heven ",
		"__v": 0
	}
]
```


### Get a Specific  book details

- **Endpoint:** `GET /api/books/id`
- **Responce Body:**
```json
{
	"_id": "653fc1e9cce9e15e4e8fccfa",
	"title": "five step ton heven",
	"author": "Rajeev Maurya",
	"summary": "this book is says how to enjoy life ilike heven ",
	"__v": 0
}
```

### Update a book details

- **Endpoint:** `PUT /api/books/id`
- **Request Body:**
```json
{
	"title": "angular concept book",
	"author": "Micky Mini",
	"summary": "In this book we learn the concept of angular with es 6 javascript "
}
```
- **Responce Body:**
```json
{
	"_id": "653fc193cce9e15e4e8fccf8",
	"title": "angular concept book",
	"author": "Micky Mini",
	"summary": "In this book we learn the concept of angular with es 6 javascript ",
	"__v": 0
}
```



### Delete a book

- **Endpoint:** `DELETE /api/books/id`
- **Responce Body:**
```json
{
	"message": "Book deleted successfully"
}
```








