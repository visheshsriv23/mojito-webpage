import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { navLinks} from "../../constants/index.js";

const Navbar = () => {
	useGSAP(() => {
		const navTween = gsap.timeline({
			scroolTrigger: {
				trigger: 'nav',
				start: 'bottom top'
			}
		});
		navTween.fromTo('nav', { backgroundColor: 'transparent'}, {
			backgroundColor: '#00000050',
			backgroundFilter: 'blur(10px)',
			duration: 1,
			ease: 'power1.inOut'
		});
	})
	return (
		<nav className="flex items-center justify-between p-4">
			<div className="w-full flex items-center justify-between p-4">
				<a href="#home" className="flex items-center gap-2">
					<img src="/images/logo.png" alt="logo" className="w-8 h-8"/>
					<p>Mocktail Matrix</p>
				</a>
				<ul className="flex items-center gap-6">
					{navLinks.map((link) => (
						<li key={link.id}>
							<a href={`#${link.id}`}>{link.title}</a>
							
						</li>
					))}
				</ul>
			</div>
		</nav>
	)
}

export default Navbar