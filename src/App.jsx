import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookMarks, setBookMarks] = useState([])
  const [readTime, setReadTime] = useState(0)


  const handleAddBookmark = (blog) => {
    const newBookmarks = [...bookMarks, blog]
    // console.log(newBookmarks);
    setBookMarks(newBookmarks)
  }

  const handleMarkUsRead = (blog, id) => {
    // console.log(blog);
    const newReadTime = readTime + blog.reading_time
    setReadTime(newReadTime)
    // console.log(id);
    const remainingBookMarks = bookMarks.filter(bookmark => bookmark.id !== id)
    setBookMarks(remainingBookMarks)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex gap-3'>
        <Blogs
          handleAddBookmark={handleAddBookmark}
          handleMarkUsRead={handleMarkUsRead}
        ></Blogs>
        <Bookmarks
          bookMarks={bookMarks}
          readTime={readTime}
        ></Bookmarks>
      </div>
    </>
  )
}

export default App
