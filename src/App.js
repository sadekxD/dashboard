import React from "react";
import { motion } from "framer-motion";

const parentAnim = {
	initial: {},
	animate: {
		transition: {
			duration: 1,
			delayChildren: 1.2,
			staggerChildren: 0.3,
		},
	},
};

const childAnim = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: {
		opacity: 1,
		y: 0,
	},
};

const lineAnim = {
	initial: {
		width: 0,
	},
	animate: {
		width: "100%",
		transition: {
			duration: 0.5,
		},
	},
};

const overlayAnim = {
	initial: {
		x: 0,
	},
	animate: {
		x: "120%",
		transition: {
			duration: 0.5,
		},
	},
};

function App() {
	return (
		<div className="App flex items-center justify-center min-h-screen">
			<div className="container flex items-center justify-center">
				<motion.div
					variants={parentAnim}
					initial="initial"
					animate="animate"
					className="flex relative"
				>
					<motion.div
						variants={overlayAnim}
						className="fixed top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-green-400 to-blue-500 z-50 flex items-center justify-center"
					>
						<h1 className="text-9xl font-extrabold text-white tracking-wider uppercase">
							Hello
						</h1>
					</motion.div>
					<motion.div variants={childAnim} className="px-4 py-4">
						<span className="font-extrabold text-9xl">E</span>
					</motion.div>
					<motion.div variants={childAnim} className="px-4 py-4">
						<span className="font-extrabold text-9xl">I</span>
					</motion.div>
					<motion.div variants={childAnim} className="px-4 py-4">
						<span className="font-extrabold text-9xl">D</span>
					</motion.div>
					<motion.div className="px-4 py-4">
						<span className="font-extrabold text-9xl"></span>
					</motion.div>
					<motion.div variants={childAnim} className="px-4 py-4">
						<span className="font-extrabold text-9xl">M</span>
					</motion.div>
					<motion.div variants={childAnim} className="px-4 py-4">
						<span className="font-extrabold text-9xl">U</span>
					</motion.div>
					<motion.div variants={childAnim} className="px-4 py-4">
						<span className="font-extrabold text-9xl">B</span>
					</motion.div>
					<motion.div variants={childAnim} className="px-4 py-4">
						<span className="font-extrabold text-9xl">A</span>
					</motion.div>
					<motion.div variants={childAnim} className="px-4 py-4">
						<span className="font-extrabold text-9xl">R</span>
					</motion.div>
					<motion.div variants={childAnim} className="px-4 py-4">
						<span className="font-extrabold text-9xl">A</span>
					</motion.div>
					<motion.div variants={childAnim} className="px-4 py-4">
						<span className="font-extrabold text-9xl">K</span>
					</motion.div>
					<motion.div
						variants={lineAnim}
						className="absolute h-1.5 left-0 bottom-0 bg-black"
					></motion.div>
					<motion.div
						variants={childAnim}
						className="uppercase absolute right-0 top-full mt-2 font-bold text-4xl"
					>
						May Allah bless us all
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}

export default App;
