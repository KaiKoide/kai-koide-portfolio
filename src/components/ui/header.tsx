"use client";

import React, { useEffect } from "react";
import { Link as Scroll } from "react-scroll";

export default function Header() {
	return (
		<div className="flex items-center justify-center bg-gradient-to-r from-indigo-300 to-purple-300 fixed top-5 inset-x-0 max-w-2xl mx-auto z-50 py-2 rounded-full shadow-md">
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Scroll
							to="home"
							smooth={true}
							duration={600}
							className="capitalize text-xl font-bold text-neutral-900"
						>
							home
						</Scroll>
					</li>
					<li>
						<Scroll
							to="about"
							smooth={true}
							duration={600}
							offset={-120}
							className="capitalize text-xl font-bold text-neutral-900"
						>
							about
						</Scroll>
					</li>
					<li>
						<Scroll
							to="projects"
							smooth={true}
							duration={600}
							offset={-120}
							className="capitalize text-xl font-bold text-neutral-900"
						>
							projects
						</Scroll>
					</li>
					<li>
						<Scroll
							to="contact"
							smooth={true}
							duration={600}
							className="capitalize text-xl font-bold text-neutral-900"
						>
							contact
						</Scroll>
					</li>
				</ul>
			</div>
		</div>
	);
}
