import { getSearchByString } from "../../../services/api";
import TasksTypes from "./types";

const requestingData = () => {
  return { type: TasksTypes.REQUESTING_DATA };
};
const receivedData = ({ items, nextPageToken }, term) => {
  return { type: TasksTypes.RECEIVED_DATA, resp: items, nextPageToken, term };
};
const receivedPage = ({ items, nextPageToken }) => {
  return { type: TasksTypes.RECEIVED_PAGE, resp: items, nextPageToken };
};
const failedRequest = (error) => {
  return { type: TasksTypes.FAILED_REQUEST, resp: error };
};
export default function handleAsyncSearch(term, nextPage = false) {
  console.log(term);
  return async (dispatch) => {
    dispatch(requestingData());
    const resp = await getSearchByString(term, nextPage);
    if (resp.code !== undefined) {
      console.log("ta errado");
      return dispatch(failedRequest(resp.message));
    }
    return dispatch(nextPage ? receivedPage(resp) : receivedData(resp, term));
  };
}
