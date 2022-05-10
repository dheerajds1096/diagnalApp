import * as types from '../types';

const initialState = {
  search: '',
  searchResult: [],
  'title': 'Romantic Comedy',
  'total-content-items' : 54,
  'page-num-requested' : 0,
  'page-size-requested' : 20,
  'page-size-returned' : 0,
  'content-items': {
    'content': []
  }
};
const reducer = (state=initialState, action) => {
  const { payload } = action
  switch(action.type) {
    case types.DATA_RECEIVED:
      const {content} = payload['content-items']
      const {content: currentContent} = state['content-items']
      return {
        ...state,
        ...payload,
        'content-items': {'content': [...currentContent, ...content]}
      };
    case types.SEARCH:
      return {
        ...state,
        search: payload.keyword,
        searchResult: payload.keyword ? payload.result : []
      };  
    default:
      return state;
  }
};
export default reducer;