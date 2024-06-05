"use client";

import React, { useEffect } from "react";
import { Link as Scroll } from "react-scroll";

export default function Header() {
	return (
		<div className="navbar bg-blue-100 fixed z-50">
			<div className="flex-1">
				<a className="btn btn-ghost text-xl">daisyUI</a>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Scroll
							to="home"
							smooth={true}
							duration={600}
							className="capitalize"
						>
							home
						</Scroll>
					</li>
					<li>
						<Scroll
							to="about"
							smooth={true}
							duration={600}
							offset={-100}
							className="capitalize"
						>
							about
						</Scroll>
					</li>
					<li>
						<Scroll
							to="projects"
							smooth={true}
							duration={600}
							offset={-100}
							className="capitalize"
						>
							projects
						</Scroll>
					</li>
					<li>
						<Scroll
							to="contact"
							smooth={true}
							duration={600}
							className="capitalize"
						>
							contact
						</Scroll>
					</li>
				</ul>
			</div>
		</div>
	);
}
