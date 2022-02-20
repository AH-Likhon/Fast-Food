import React from 'react';
import img1 from '../images/food-1-300x235.png';
import img2 from '../images/food-10-300x236.png';
import img3 from '../images/food-11-300x234.png';
import img4 from '../images/food-12-300x247.png';
import img5 from '../images/food-13-300x273.png';
import img6 from '../images/food-14-300x246.png';
import img7 from '../images/food-15-300x262.png';
import img8 from '../images/food-2-1-300x245.png';
import img9 from '../images/pro_014-200x200.png';
import img10 from '../images/food-3-300x287.png';
import img11 from '../images/food-4-300x235.png';
import img12 from '../images/food-5-1-300x221.png';
import img14 from '../images/food-6-300x312.png';
import img15 from '../images/food-7-300x240.png';
import img16 from '../images/food-8-300x273.png';

const collectFastFood = [
    {
        img: img1,
        title: 'SALMON BURGER',
        prePrice: 80,
        price: 70,
        details: 'A great feature with amazing sound 100% new trend with much more color Unlimited guarantee'
    },
    {
        img: img2,
        title: 'QUATTRO FORMAGGI',
        prePrice: 62,
        price: 55,
        details: 'Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et doloreey'
    },
    {
        img: img3,
        title: 'PASTA DI MARE',
        prePrice: 68,
        price: 60,
        details: 'A great feature with amazing sound 100% new trend with much more color Unlimited guarantee'
    },
    {
        img: img4,
        title: 'EGG BURGER',
        prePrice: 85,
        price: 80,
        details: 'Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et doloreey'
    },
    {
        img: img5,
        title: 'CAULIFLOWER MASH',
        prePrice: 70,
        price: 65,
        details: 'A great feature with amazing sound 100% new trend with much more color Unlimited guarantee'
    },
    {
        img: img6,
        title: 'SMOKED SALMON',
        prePrice: 30,
        price: 20,
        details: 'Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et doloreey'
    },
    {
        img: img7,
        title: 'PASTA CARBONARA',
        prePrice: 70,
        price: 65,
        details: 'A great feature with amazing sound 100% new trend with much more color Unlimited guarantee'
    },
    {
        img: img8,
        title: 'DOUBLE STUCK BURGAR',
        prePrice: 60,
        price: 40,
        details: 'Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et doloreey'
    },
    {
        img: img10,
        title: 'BANGLADESHI SENDRUES',
        prePrice: 70,
        price: 60,
        details: 'A great feature with amazing sound 100% new trend with much more color Unlimited guarantee'
    },
    {
        img: img11,
        title: 'CHINIS POPULAR NOUDLUS',
        prePrice: 55,
        price: 50,
        details: 'Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et doloreey'
    },
    {
        img: img12,
        title: 'PANNA COTTA',
        prePrice: 55,
        price: 35,
        details: 'A great feature with amazing sound 100% new trend with much more color Unlimited guarantee'
    },
    {
        img: img14,
        title: 'VEGAN BURGER',
        prePrice: 50,
        price: 15,
        details: 'Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et doloreey'
    },
    {
        img: img15,
        title: 'ORIGINAL PROSCIUTTO',
        prePrice: 55,
        price: 28,
        details: 'A great feature with amazing sound 100% new trend with much more color Unlimited guarantee'
    },
    {
        img: img16,
        title: 'BLACK BURGER',
        prePrice: 90,
        price: 50,
        details: 'Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et doloreey'
    },
    {
        img: img9,
        title: 'Lemon Juice',
        prePrice: 40,
        price: 27,
        details: 'A great feature with amazing sound 100% new trend with much more color Unlimited guarantee'
    }
]

const Home = () => {
    return (
        <div className='my-5'>
            <span className='fs-6 fw-bold fst-italic text-capitalize text-danger'>Popular Dishes</span>
            <h2>POPULAR DISHES</h2>
            <hr className='w-25 mx-auto text-danger' />

            <div className="container row row-cols-1 row-cols-md-4 g-4 mx-auto my-3">
                {
                    collectFastFood.map(food =>
                        <div className="col">
                            <div className="card h-100">
                                <img src={food.img} className="card-img-top w-75 mx-auto" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{food.title}</h5>
                                    <p className="card-text">
                                        {food.details}
                                    </p>
                                    <p className='text-danger'>Price <span className='text-decoration-line-through'>${food.prePrice}</span> <span>${food.price}</span></p>

                                    <button type="button" className="btn btn-danger">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Home;