import React from 'react'

const View = ({books,deleteBook}) => {
  return books.map(book=>(
      <tr key={book.isbn}>
   <td>{book.isbn}</td>
   <td>{book.title}</td>
   <td>{book.author}</td>
   <td><button onClick={()=>deleteBook(book.isbn)}>delete</button></td>
      </tr>
  ))
  
  
  }

export default View