export const getRecomendedVideosById = async (id) => {
  try {
    const req = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&relatedToVideoId=${id}&type=video&key=AIzaSyAgWs_nQDFLyyVnRZUbbmBVb7lT_u8gyCw`
    );
    const json = await req.json();
    console.log(json);
    return json;
  } catch (error) {
    console.log(
      `(From async/await getRecomendedVideosById) Error: ${error.message}, ${error.code}`
    );
    return error;
  }
};

export const getSearchByString = async (search, nextPage = false) => {
  try {
    const req = await fetch(
      nextPage
        ? `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${search}&type=video&key=AIzaSyAgWs_nQDFLyyVnRZUbbmBVb7lT_u8gyCw&pageToken=${nextPage}`
        : `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${search}&type=video&key=AIzaSyAgWs_nQDFLyyVnRZUbbmBVb7lT_u8gyCw`
    );
    const json = await req.json();
    console.log(json);
    return json;
  } catch (error) {
    console.log(
      `(From async/await getSearchByString) Error: ${error.message}, ${error.code}`
    );
    return error;
  }
};
