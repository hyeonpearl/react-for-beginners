import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './Detail.module.css';

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
    console.log(json);
  };
  useEffect(() => {
    getDetail();
  }, []);
  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className={styles.detail}>
          <img
            src={detail.large_cover_image}
            alt={detail.title}
            className={styles.detail__img}
          />
          <div>
            <h2 className={styles.detail__title}>{detail.title_long}</h2>
          </div>
          <span>Rating : {detail.rating}</span>
          <p>{detail.description_full}</p>
          <ul className={styles.detail__genres}>
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
