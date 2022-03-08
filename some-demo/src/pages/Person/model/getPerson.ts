import type { Dispatch } from 'redux';
import actionTypes from './constants';

// action creator
export const getPersonAction = () => (dispatch: Dispatch) => {
  // 请求开始
  dispatch({
    type: actionTypes.PERSON_REQUST_BEGIN,
  });

  const params = {
    keywords: '海阔天空',
    limit: 3,
    offset: 1,
  };

  const promise = fetch(
    `/netease-music/search?keywords=${params.keywords}&limit=${params.limit}&offset=${params.offset}`,
  )
    .then((res) => res.json())
    .then((response) => {
      if (response && response.code === 200) {
        const datas = response.result.songs.map((item) => ({
          img1v1Url: item.album?.artist?.img1v1Url,
          id: `${item.id}`,
          name: `${item.album?.name}-${item.name}`,
        }));

        // 请求成功
        dispatch({
          type: actionTypes.PERSON_REQUEST_SUCCESS,
          payload: datas,
        });
      } else {
        // 请求失败
        dispatch({
          type: actionTypes.PERSON_REQUEST_ERROR,
          payload: '请求错误',
        });
      }
    });
  return promise;
};

// reducer
export function getPersonReducer(state, action) {
  switch (action.type) {
    // 请求开始
    case actionTypes.PERSON_REQUST_BEGIN:
      return {
        ...state,
        loading: true,
      };
    // 请求成功 把实际数据放到store中
    case actionTypes.PERSON_REQUEST_SUCCESS:
      return {
        ...state,
        personList: action.payload,
        loading: false,
      };
    // 请求失败  把错误信息保存-error
    case actionTypes.PERSON_REQUEST_ERROR:
      return {
        ...state,
        personList: [],
        errorMsg: action.payload,
        loading: false,
      };
    default:
      break;
  }
  return state;
}
