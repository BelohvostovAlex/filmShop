import React from 'react'

function Card(props) {
    const [activeInfo,setActiveInfo] = React.useState(true)
    const [activeReview,setActiveReview] = React.useState(false)
    const [activeAwards, setActiveAwards] = React.useState(false)

    const handleInfo = () => {
        setActiveInfo(true)
        setActiveReview(false)
        setActiveAwards(false)
    }
    const handleReview = () => {
        setActiveInfo(false)
        setActiveReview(true)
        setActiveAwards(false)
    }
    const handleAwards = () => {
        setActiveInfo(false)
        setActiveReview(false)
        setActiveAwards(true)
    }
    
    return (
        <div className="card">
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d8594e95479421.5e9859e8473f8.jpg" alt="joker" />
       
       <div className="card-inner">
       <div className="card-title">
          <h1>Joker</h1>
        </div>
        <div className="card-description">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, atque!</p>
        </div>

        <div className="card-bottom">
            <div className="rating">
              <span>5.0</span> 
              <img src="./img/star.png" alt="star" />
             </div>
            <div className="price">15 BYN</div>
          </div>
       
        <button>Order it</button>

        
        <div className="card-accor">
          <div className="card-accor_block">
            <div className={ `card-accor_title ${activeInfo ? 'card-accor_title-active' : ''}`}>
              <p onClick={handleInfo}>Info</p>
            </div>
            <div className={`card-accor_title ${activeReview ? "card-accor_title-active": ''}`}>
              <p onClick={handleReview}>Cast</p>
            </div>
            <div className={`card-accor_title ${activeAwards ? "card-accor_title-active": ''}`}>
              <p onClick={handleAwards}>Awards</p>
            </div>

          </div>

          <div className="card-text">
           {activeInfo ? <p>Lorem ipsum dolor sit amet consectetur.</p> :
           activeReview ?
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, mollitia?</p>
           : 
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta voluptatibus dolorem deleniti, impedit assumenda ratione sapiente quas iure fugit dignissimos molestias aut deserunt odio quod quaerat laboriosam eius nostrum. Nemo.lorem5 asdasldkasldkls</p>}
           </div>

        </div>
       </div>
      </div>
    )
}

export default Card
