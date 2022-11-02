import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const getDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setDetail(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getDetail();
  }, []);
  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <img src={detail.large_cover_image} alt={detail.title} />
          <h2>{detail.title_long}</h2>
          <hr />
          <strong>Rating : {detail.rating}</strong>
          <p>{detail.description_full}</p>
          <ul>
            {detail.genres.map(genre => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Detail;
