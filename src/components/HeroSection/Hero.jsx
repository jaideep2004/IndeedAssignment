import React from "react";
import "./hero.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Hero = () => {
	return (
		<div className='heroWrapper'>
			<div className='firstColumn'>
				<Carousel
					className='slider'
					autoPlay={true}
					showThumbs={false}
					stopOnHover={true}
					infiniteLoop={true}
					showIndicators={true}
					showArrows={false}
					showStatus={false}>
					<div>
						<img src='./images/slide1.png' alt='' />
					</div>
					<div>
						<img src='./images/slide2.png' alt='' />
					</div>
				
					<div>
						<img src='./images/slide3.jpg' alt='' />
					</div>
				</Carousel>
			</div>
			<div className='secondColumn'>
        <h1>OET Preparation for Healthcare Professionals</h1>
        <div className="registerBtn">Register Now</div>
			</div>
			<div className='whatsappConatin'>
				<i class='fa-brands fa-square-whatsapp fa-2xl'></i>
			</div>
		</div>
	);
};

export default Hero;
