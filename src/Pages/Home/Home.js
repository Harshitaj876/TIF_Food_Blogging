import React from 'react'
import '../Home/Home.css'
import {FaInstagram} from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebook} from 'react-icons/fa'
import SliderComponent from '../../SliderComponent';

import About_Image from '../../Assets/About_Image.png'
import HeroSectionImage from '../../Assets/HeroSectionImage.png'
import Food_Truck from '../../Assets/Food_Truck.png'

const Home = () => {

    const data = [
        { img: './Images/LA1.png', title: 'Grilled Tomatoes at Home', description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..." },
        { img: './Images/LA2.png', title: 'Snacks for Travel', description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..." },
        { img: './Images/LA3.png', title: 'Post-workout Recipes', description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..." },
        { img: './Images/LA4.png', title: 'How To Grill Corn', description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..." },
        { img: './Images/LA5.png', title: 'Crunchwrap Supreme', description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..." },
        { img: './Images/LA6.png', title: 'Broccoli Cheese Soup', description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..." },
      ];

  return (
    <div className='whole'>
        {/*-------------------Hero Section-----------------*/}
        <div className='top'>
            <div className='Hero'>
                <div className='HeroSection'>
                        <div className='left_section'>
                            <img src={Food_Truck} alt='' className='truck_img'></img>
                            <div className='text'>
                                <h className="text_h">Discover the <span>Best</span> Food and Drinks</h>
                                <p className='text_p'>Naturally made Healthcare Products for the better care & support of your body.</p>
                                <button className='explore_button'>Explore Now!</button>
                            </div>
                        </div>
                        <div>
                            <button className='GetTouchBtn'>Get In Touch</button>
                        </div>
                    </div>
                <div className='img_div'>
                    <img src={HeroSectionImage} alt='' className='heroImage'></img>
                </div>
            </div>
        </div>
            


        {/*------------About---------------- */}
        <div className='About'>
            <img src={About_Image} className='About_image' alt=''></img>
            <div className='about-text'>
                <h1 className='about_h'>About Us</h1>
                <p className='about_P'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
                <button className='About_button'>Read More</button>
            </div>
        </div>

        {/*------------Latest Articles---------------- */}
        <div className='LA'>
            <div className='Latest_article'>
                <h className="LA_H">Latest Articles</h>
                <div className='block'>
                    <SliderComponent data={data} />
                </div>
            </div>
        </div>


        {/*-------------Footer Section------------- */}
        <div className='Footer'>
            <img src={Food_Truck} alt=''></img>
            <div className='Contact_us'>
                <h className="C_H">Contact Us</h>
                <div className='content'>
                    <p className='C_P'>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
                    <p className='C_P'>example2020@gmail.com</p>
                    <p className='C_P'>(904) 443-0343</p>
                </div>
            </div>
            <div className='Contact_us'>
                <h className="C_H">More</h>
                <p className='C_P'>About Us</p>
                <p className='C_P'>Products</p>
                <p className='C_P'>Career</p>
                <p className='C_P'>Contact Us</p>
            </div>
            <div className='Contact_us_right'>
                <div className='gap'>
                    <h className="C_H">Social Links</h>
                    <div className='social'>
                        <div className='icon'><FaInstagram size={25}/></div>
                        <div className='icon'><FaTwitter size={25}/></div>
                        <div className='icon'><FaFacebook size={25}/></div>
                    </div>
                </div>
                <p>© 2022 Food Truck Example</p>
            </div>
        </div>
    </div>
  )
}

export default Home