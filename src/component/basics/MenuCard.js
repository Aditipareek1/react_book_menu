import React from 'react'

const MenuCard = ({menuData}) => {
    // console.log(menuData);
  return (
    <>
        <section className='main-card--container'>
        {
            menuData.map((curElem)=>{
const { id, name, category, image, description,price} = curElem;

                return(
                    <>
                        <div className="card-container" key={id}>
            <div className="card">
                <div className="card-body">
                    {/* <span className='card-number'>{id}</span> */}
                    <span className='card-author subtle'>{category}</span>
                    <h3 className='card-title'>{name}</h3>
                    <span className='card-description subtle'>
                    {description}
                    </span>
                    <div className="card-read">Read</div>
                </div>
                <img src={image} alt="images" className = "card-media" /><br/><br/>
                <div className='card-title'>
                    <span className='card-price-symbol'>₹</span>
                    {price}
                </div>
                <button className='card-button'>ADD TO CART</button>
            </div>
        </div>
                    </>
                )
            })
        }
        </section>
    </>
  )
}

export default MenuCard