import styles from './index.module.css'
import InfiniteScroll from 'react-infinite-scroll-component';
import { connect } from 'react-redux';

const Body = (props) => {
  const {list: {content}, fetchMoreData, page} = props
  const {search, searchResult} = page
  const hasMore = (content.length < page['total-content-items']) && page['page-num-requested'] < 4
  return <InfiniteScroll
    dataLength={content.length}
    next={fetchMoreData}
    hasMore={!search && hasMore}
    scrollThreshold={0.9}
  >
    {((search && !searchResult.length) || !content.length) && <div className={styles.empty}>Not Found!</div>}
    <div className={styles.listContainer} >
      {((search && searchResult) || content).map((item, index) => {
        return (          
          <div key={`item-${index}`}>
              <div><img alt='' src={process.env.PUBLIC_URL + `/images/${item['poster-image']}`} onError={(e)=>{e.target.onerror = null; e.target.src = process.env.PUBLIC_URL + '/images/placeholder_for_missing_posters.png'}} /></div>
              <label className={styles.titleText}>{item.name}</label>
          </div>
        )
      })}
    </div>
  </InfiniteScroll>
}

const mapStateToProps = state => {
  return {
    page: state
  };
};

export default connect(mapStateToProps)(Body)