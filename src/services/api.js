import API_KEY from "./api_key";

export const getRecomendedVideosById = async (id) => {
  try {
    const req = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=70&relatedToVideoId=${id}&type=video&key=${API_KEY}`
    );
    const json = await req.json();
    if (json.error) {
      throw json.error;
    }
    return json;
  } catch (error) {
    return error;
  }
};

export const getSearchByString = async (search, nextPage = false) => {
  try {
    const req = await fetch(
      nextPage
        ? `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${search}&type=video&key=${API_KEY}&pageToken=${nextPage}`
        : `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${search}&type=video&key=${API_KEY}`
    );
    const json = await req.json();
    if (json.error) {
      throw json.error;
    }
    return json;
  } catch (error) {
    console.log(error);
    return error;
  }
};
