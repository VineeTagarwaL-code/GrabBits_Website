import React from 'react';
// import logo from '../../assets/Logo.png';
// import right from '../../assets/Testimonials/right.png';
// import left from '../../assets/Testimonials/left.png';
// import classes from './Testimonial.module.css';
// import { Testimonials as testidata } from '../../assets/Data/Testimonials';

import TeamPostCard from "./TeamPostCard";
import { motion } from "framer-motion";
import { fadeIn } from "../../animation/motion";
import { imgAnim } from "../../animation/motion";
import classes from "./Testimonial.module.css";


const Testimonial = () => {
	return (
		<>
		 {/* <Slider /> */}
			<div className={classes.tsection}>
				<motion.h4
					variants={imgAnim}
					initial="hidden"
					viewport={{ once: true, amount: 0.25 }}
					whileInView={{
						scale: [0, 1],
						opacity: 1,
					}}
					transition={{ duration: 0.84, delay: 0.1 }}
					className={classes.tsectionh4}
				>
					TESTIMONIALS
				</motion.h4>
				<motion.h1
					variants={fadeIn}
					initial="hidden"
					whileInView="visible"
					viewport={{ amount: 0.25, once: true }}
					transition={{ delay: 0.1, duration: 0.4 }}
					className={classes.tsectionh1}
				>
					Go Through Reviews Of Previews Students To
				</motion.h1>
				<motion.h2
					variants={fadeIn}
					whileInView="visible"
					initial="hidden"
					transition={{ duration: 0.2, delay: 0.45 }}
					viewport={{ amount: 0.25, once: true }}
					className={classes.tsectionh2}
				>
					Make An Informed Decision
				</motion.h2>
			</div>
			<div>
				<TeamPostCard />
			</div>
		</>

	);
};

export default Testimonial;



{/* <div className={classes.testi_bg}>
			{testidata.map((item, i) => {
				return (
					<div key={i} className={classes.testi_wrapper}>
						<img className={classes.testi_img} src={item.img} alt={item.name} />
						<div className={classes.testi_content}>
							<div className={classes.testi_heading}>
								<h3>What our Customer Think of Us?</h3>
							</div>
							<div className={classes.testi_name}>
								<h4>{item.name}</h4>
							</div>
							<div className={classes.testi_para}>
								<p>{item.para}</p>
							</div>
						</div>
					</div>
				);
			})}
			<div className={classes.arrows}>
				<img className={classes.arrow_left} src={left} alt="left arrow" />
				<img className={classes.arrow_right} src={right} alt="right arrow" />
			</div>
		</div> */}