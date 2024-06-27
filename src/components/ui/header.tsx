"use client";

import React, { useEffect } from "react";
import { Link as Scroll } from "react-scroll";
import { IoMenu } from "react-icons/io5";

export default function Header() {
	return (
		<>
			{/* Mobile Sidebar */}
			<div className="drawer lg:hidden">
				<input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content flex flex-col">
					<div className="navbar bg-base-300 w-full">
						<div className="flex-none">
							<label
								htmlFor="my-drawer-3"
								aria-label="open sidebar"
								className="btn btn-square btn-ghost"
							>
								<IoMenu className="text-3xl" />
							</label>
						</div>
					</div>
				</div>
				<div className="drawer-side z-50">
					<label
						htmlFor="my-drawer-3"
						aria-label="close sidebar"
						className="drawer-overlay"
					/>
					<ul className="menu bg-base-200 min-h-full w-80 p-4">
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

			{/* Desktop Navigation */}
			<div className="hidden lg:flex items-center justify-center bg-gradient-to-r from-indigo-300 to-purple-300 fixed top-5 inset-x-0 max-w-2xl mx-auto z-50 py-2 rounded-full shadow-md">
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
		</>
	);
}
