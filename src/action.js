import * as types from './types';

export const fetchData = () =>
async (dispatch, getState) => {
  const state = getState()
  const currentPage = state['page-num-requested'] || 0
  fetch(`json/CONTENTLISTINGPAGE-PAGE${+currentPage + 1}.json`
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then(function(response){
      return response.json();
    })
    .then(function(data) {
      dispatch({
        type: types.DATA_RECEIVED,
        payload: data.page
      })
    });
}

export const searchList = (keyword) =>
async (dispatch, getState) => {
  const state = getState()
  const urls = ['json/CONTENTLISTINGPAGE-PAGE1.json', 'json/CONTENTLISTINGPAGE-PAGE2.json', 'json/CONTENTLISTINGPAGE-PAGE3.json'];
  Promise.all(urls.map((url) => fetch(url).then((e) => e.json()))).then(
    (data) => { 
        const list = data.flatMap(({page})=> page['content-items']['content']);
        const result = list.filter(data => data.name.toLowerCase().includes(keyword.toLowerCase()))
        dispatch({
          type: types.SEARCH,
          payload: {keyword, result}
        })
    });
}