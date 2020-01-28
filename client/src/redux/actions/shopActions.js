import {
  convertCollectionsSnapshotToMap,
  firestore,
} from '../../firebase/firebase.utils';
import { TYPES } from '../shop-types';

export const shopLoading = () => {
  return {
    type: TYPES.SHOP_LOADING,
  };
};
export const shopDataSuccess = (shopData) => {
  return {
    type: TYPES.GET_SHOP,
    payload: { shopData },
  };
};
export const getDataFromShop = () => (dispatch) => {
  try {
    const collectionRef = firestore.collection('collections');
    dispatch(shopLoading());
    collectionRef.onSnapshot(async (snapShot) => {
      const shop = await convertCollectionsSnapshotToMap(snapShot);
      dispatch(shopDataSuccess(shop));
    });
  } catch (err) {
    dispatch({
      type: TYPES.ERRORS,
      payload: err,
    });
  }
};
