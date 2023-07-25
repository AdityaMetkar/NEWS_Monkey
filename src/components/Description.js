import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Description(props) {

  let data=useLocation()
  data=data.state.element
  let date=new Date(data.publishedAt)
  console.log(data)
  return (
    <>
    <div className="des-container">
      <h2>{data.title}</h2>
      <hr />
      <div className="des-upper">
        <img className="des-image" src={data.urlToImage?data.urlToImage:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAY1BMVEX///9NTU3+/v7Ozs46OjpISEiAgIA9PT3t7e3CwsJBQUFSUlLz8/PS0tL5+fnIyMizs7Pa2to0NDRtbW25ubmIiIhycnKXl5cmJiZfX1/h4eEuLi56enpXV1ehoaGpqakeHh5BSnjtAAAEK0lEQVR4nO2abZ+iLBSHAQPREDVAkkz3+3/KBbVyzJktxe23983/xUypcS4OnMODABAUFBQUFBQUFBQUFBT0k5AXfboWq0Vl4kmSrgKIzrEnnaN1ADH0pHglwAHCowdBeFgLgBvmQQ1eD0BW/XAmsgXAQwyjABAA/msA7spbA5xfAPedv+cWzx7gXQ2v6p3RzS8Aqw4Y4hQb8LIb/ALoYYTENX+5GK8ADI8D7BtFegXI0hEg7T4DUN4A4uIzAPx4a4LyyQ4C0eIM2G8nLA5DCzwnCATMRS7FhlcABNpTivFJ8HldbeWPGNIFAt+puNSNSpYydBtDLBaK+VuDUd8/l4LDO8DyYovXfYqIzf4AC7JEKh1TJJt3g78CMMlQ+iMA/HjL0TDN5zf9ANhK5ssjoOsS+uYA2wh41gi+PGAOablIYO3n8d0BlqDaAcCmuSPG9eI8BAFaT+wP48QkUPx4oLeRNmjRByqFX+SmK54B2Bjl7RJAPrNvEyL3DMBunfwkAZi1MOBz+xZ0GoseAJi428Dl1zn5IwV90TQWtwPwZhJk9XzAS5b2UTB8zBm3AiDQTKuYToLMZQB6xQsAMFX3ptrsgSZ9KvpBAMhCA4y9xQsAQHru4sNjOoiA/Ma+1W1c3AgQnZ7dm90rR7+3j8U4bm8EyA/PRV/vGfG7Bug5W7ATgA2F0QPy2T0TnYexYwcA6PqGmwb/ZN55ioGdAFxHtATNDw3gNATMLgAwzuwa4Q/2LUGyG4Ad8eiPHWAkoPsB1M1iCpw9JXYDsFOvP9vvJyd7Abwou1D4LMAh/+cBLukmXbYC0Gyj6BYAWEXRVoAoqta/soF4m/8H4Q0AnrQW4IQ96bQOgFNven1fNShoKsQ6DvJhT9auQe2X5fMJ/HZOof+TmDK31+yazS0jczcxXf3iyfzqALHLEO6K4IS7T27hjdwFhwNGpv5f/xACbVko9yBopFtWDT9feYrCxJipAmihbMG8YlqLghCUCZGATrQadUJbINoITQmjFVVCgzYrFFdCIaVEi4hkSuTvveWaAFy1UjKpqdK2HhdWF8XRXKOklEcDTSsyyGs77TSJuXCYddpIeqFNUigq6ZkqxWCmEq3Zia0yb0vG/AqTtgW5ndrxExMmabiICkHqTIBMSGz5ACiFipkkNTWVwrTJC2WEPhgiQSVV0lSErDvB4TbGgDzL/BqJzgKcaV0mFa8zLDtIjwWpSlgq20c1yc6MwitoRXnuPVAIczbEeqgkSUsy8rS3/qKoBrzNgGzcKg8p1tKy463JG6lBoguBkqqzvYOqtjWgyO0H3ZqijGy7t10pZSVBkXFdRSvjAI2vScHCBjU9atvhhju3a98n/LVHiYbF7WAD9V8fZ5NoEvX3h/AbovB+bumWE4ar/Z11BEFBQUFBQUFBQUFBQUH/C/0GnodRwh6KLmYAAAAASUVORK5CYII="}  alt=""/>                
        <div className='des-upper-right'>
          <h2>Author</h2>
          <h4>{data.author?data.author:"None"}</h4>
          <hr />
          <h4>Published</h4>
          <p><i>{date.toGMTString()}</i></p> 
          <hr />
          <form action={data.url} target='blank'>
            <button className="btn btn-sm btn-dark">Website</button>
          </form> 
        </div>
      </div>

      <div>
            <hr />
            <h4 id="list-item-1">Description</h4>
            <p>{data.description}</p>
            <hr />
            <h4 id="list-item-2">Content</h4>
            <p>{data.content}</p>
       </div> 

    </div>
    </>
  ) 
}

