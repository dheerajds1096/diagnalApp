import './App.css';
import Body from './components/body';
import Header from './components/header';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { fetchData, searchList } from './action'

function App(props) {
  useEffect(() => {
    props.fetchData()
  },[props['page-num-requested']]);

  return (
    <div className="diagnal-app dark:bg-black">
      <Header search={props.searchList} keyword={props.search}/>
      <Body list={props['content-items'] || []} fetchMoreData={props.fetchData}/>
    </div>
    
  );
}

const mapStateToProps = state => {
  return {
    'content-items': state['content-items'],
    search: state['search']
  };
};

export default connect(mapStateToProps, { fetchData, searchList })(App);
