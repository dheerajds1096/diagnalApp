import Icon from '../icon'
import styles from './index.module.css'

const Search = (props) => {
  const {category, searchItem, keyword} = props
    return <div className={`flex items-center ${styles.searchBar}`}>
    <input
      type="search"
      autoComplete="off"
      className={`
        w-full
        text-base
        text-gray-700
        rounded
        transition
        ease-in-out
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
       ${styles.input}`}
      placeholder={`Search in ${category || 'collection'}`}
      onChange={(e) => searchItem(e.target.value)}
      value={keyword}
    />
    <Icon type='search' title='Search' />
  </div>
}

export default Search