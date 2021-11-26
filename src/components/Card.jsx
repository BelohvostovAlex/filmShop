import React from 'react';

function Card( {id,title,descr,genre,stars,year,country,director,time,awards,image,price,rating} ) {
  const [activeInfo, setActiveInfo] = React.useState(true);
  const [activeActor, setActiveActor] = React.useState(false);
  const [activeAwards, setActiveAwards] = React.useState(false);

  const handleInfo = () => {
    setActiveInfo(true);
    setActiveActor(false);
    setActiveAwards(false);
  };
  const handleActors = () => {
    setActiveInfo(false);
    setActiveActor(true);
    setActiveAwards(false);
  };
  const handleAwards = () => {
    setActiveInfo(false);
    setActiveActor(false);
    setActiveAwards(true);
  };

  return (
    <div className="card">
      <div className="card-img">
      <div className="rating">
            <span>{rating}</span>
            <img src="./img/star.png" alt="star" />
      </div>
      <img
        className="cardImage"
        src={image}
        alt={title}
      />
      </div>
      <div className="cardwrapper">
      <div className="card-inner">
        <div className="card-top">
        <div className="card-title">
          <h1>{title}</h1>
        </div>
        <div className="card-genre">
          {genre.map((item,index) => <span key={index}>{item}</span>)}
        </div>
        <div className="card-description">
          <p>{descr}</p>
        </div>
        </div>



       

        <div className="card-accor">
          <div className="card-accor_block">
            <div className={`card-accor_title ${activeInfo ? 'card-accor_title-active' : ''}`}>
              <p onClick={handleInfo}>Info</p>
            </div>
            <div className={`card-accor_title ${activeActor ? 'card-accor_title-active' : ''}`}>
              <p onClick={handleActors}>Actors</p>
            </div>
            <div className={`card-accor_title ${activeAwards ? 'card-accor_title-active' : ''}`}>
              <p onClick={handleAwards}>Awards</p>
            </div>
          </div>

          <div className="card-text">
            {activeInfo ? (
              <p>{`The film was directed by ${director}, in ${year}. The country of production is ${country.split(',')}, the duration of the film is ${time} min`}</p>
            ) : activeActor ? (
              <p>{stars.map((item,index) => <span key={index}>[{item}] </span>)}</p>
            ) : (
              <p>
               {awards}
              </p>
            )}
          </div>
        </div>

      </div>

      <div className="card-bottom">
          <div className="card-bottom_block">
          <div className="price">{price} BYN</div>
          </div>
        <button>Order it</button>
        </div>
      </div>
 
    </div>
  );
}

export default Card;
