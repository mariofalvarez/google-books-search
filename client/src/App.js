import axios from "axios"
import React, { useState } from "react"

function App() {
  const [apiResult, setApiResult] = useState([])
  const [book, setBook] = useState("")
  const [apiKey, setApiKey] = useState(
    "AIzaSyBc0Q5xwL0LBr0Twg7iAvz8EMgjootkqbg"
  )

  const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${book}&key=${apiKey}`

  const handleChange = e => {
    const book = e.target.value
    setBook(book)
  }

  const handleSubmit = e => {
    e.preventDefault()
    axios
      .get(apiUrl)
      .then(res => {
        console.log(res.data.items)
        setApiResult(res.data.items)
      })
      .catch(err => console.error(err))
  }

  const handlePostSubmit = e => {
    axios
      .post("/api/new", { bookId: "" })
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  const sayHi = e => {
    console.log(e.target.data)
  }

  return (
    <div className="App">
      <div className="container">
        <div className="jumbotron text-center">
          <h1 className="display-4 font-weight-bold text-info">
            REACT Google Books
          </h1>
        </div>
        <div className="input-group mb-3">
          <input
            onChange={handleChange}
            className="form-control"
            placeholder="Search for"
            type="text"
          />
          <div className="input-group-append">
            <button
              onClick={handleSubmit}
              className="btn btn-outline-secondary"
            >
              submit
            </button>
          </div>
        </div>
        <div className="row">
          {apiResult.map(book => (
            <div
              key={book.id}
              className="card col-xs-6 col-sm-4 col-md-3 col-lg-2 mt-5 mb-5"
              style={{ width: "18rem", margin: "0 10px" }}
            >
              <a href={book.volumeInfo.previewLink}>
                <img
                  className="card-img-top mb-3"
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt="Card image cap"
                />
              </a>
              <div className="card-body" style={{ position: "relative" }}>
                {/* <button
                                    data={book.id}
                                    onClick={sayHi}
                                    className="btn btn-outline-info"
                                    style={{
                                        position: "absolute",
                                        bottom: "10px"
                                    }}
                                >
                                    + Save
                                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
