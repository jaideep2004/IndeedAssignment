import React from "react";
import "./timeline.css";
import AutoScrollComponent from "./AutoScrollComponent";

const Timeline = () => {
	return (
		<div className='timelineWrapper'>
			<h1>Course Timeline</h1>
			
			
			<AutoScrollComponent >
				<div className='timelinebox'>
					<h3>dd/mm/yyyy</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
				</div>
				<div className='timelinebox'>
					<h3>dd/mm/yyyy</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
				</div>
				<div className='timelinebox'>
					<h3>dd/mm/yyyy</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
				</div>
				<div className='timelinebox'>
					<h3>dd/mm/yyyy</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
				</div>
				
			</AutoScrollComponent>
		 </div>
	);
};

export default Timeline;
