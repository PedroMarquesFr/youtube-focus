import { getRecomendedVideosById } from "../../../services/api";
import TasksTypes from "./types";

const requestingData = () => {
  return { type: TasksTypes.REQUESTING_DATA };
};
const receivedPage = ({ items}, lastId) => {
  return { type: TasksTypes.RECEIVED_PAGE, resp: items, lastId};
};
const failedRequest = (error) => {
  return { type: TasksTypes.FAILED_REQUEST, resp: error };
};
export default function handleAsyncNewPage(id) {
  return async (dispatch) => {
    dispatch(requestingData());
    const resp = await getRecomendedVideosById(id);
    if (resp.code !== undefined) {
      console.log("ta errado");
      return dispatch(failedRequest(resp.message));
    }
    return dispatch(receivedPage(resp, id));
  };
}
