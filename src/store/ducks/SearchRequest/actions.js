import { getSearchByString } from "../../../services/api";
import TasksTypes from "./types";

const requestingData = () => {
  return { type: TasksTypes.REQUESTING_DATA };
};
const receivedData = ({items, nextPageToken}) => {
  return { type: TasksTypes.RECEIVED_DATA, resp: items, nextPageToken };
};
const receivedPage = ({items, nextPageToken}) => {
  return { type: TasksTypes.RECEIVED_PAGE, resp: items, nextPageToken };
};
const failedRequest = (error) => {
  return { type: TasksTypes.FAILED_REQUEST, resp: error };
};
export default function handleAsyncSearch(string, nextPage = false) {
  console.log(string)
  return async (dispatch) => {
    try {
      dispatch(requestingData());
      const resp = await getSearchByString(string, nextPage);

      return dispatch(nextPage?receivedPage(resp):receivedData(resp));
    } catch (error) {
      return dispatch(failedRequest(error));
    }
  };
}
