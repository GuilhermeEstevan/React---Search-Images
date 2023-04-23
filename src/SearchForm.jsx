import { useState } from "react"
import { useGlobalContext } from "./Context"


const SearchForm = () => {

  const { setSearchData } = useGlobalContext()
  const [searchValue, setSearchValue] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchData(searchValue)
  }

  return (
    <section>
      <h1 className="title">Search Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input type="text" className="form-input search-input"
          placeholder="Dog" value={searchValue}
          onChange={(e) => { setSearchValue(e.target.value) }} />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  )
}


export default SearchForm