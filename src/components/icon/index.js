import styles from './index.module.css'

const Icon = (props) => {
    const {type, onClick} = props  
    return <div onClick={onClick} className={styles[`icon-${type}`]} />
}
  
export default Icon