import styles from './index.module.css'
import Icon from '../icon'
import Search from '../search'

const CATEGORY = 'Romantic Comedy'

const Header = (props) => {
    return <header className={`${styles.headerContainer} flex items-center justify-between`}>
    <div className="flex items-center">
      <Icon type='back' title='Go Back' />
      <h5>{CATEGORY}</h5>
    </div>
    <Search category={CATEGORY} searchItem={props.search} keyword={props.keyword}/>
    <span className={styles.overlay} />
  </header>  
  }
  
  export default Header