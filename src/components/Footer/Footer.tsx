import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer(onClick:any) {
    const current_year = new Date().getFullYear();
	return (
		<footer>
			<div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start  p-6 md:p-16">
				<div className="p-5 md:mt-0 mt-8 ">
					<ul>
						<p className="text-[rgb(19,23,39)] font-bold text-3xl pb-6">
							Bunny<span className="text-[#B0926A]">shop</span>
						</p>
						<div className="flex gap-6 pb-5">
							<FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
							<FaTwitter className="text-2xl cursor-pointer hover:text-[#B0926A]" />
							<FaLinkedin className="text-2xl cursor-pointer hover:text-[#B0926A]" />
							<FaYoutube className="text-2xl cursor-pointer hover:text-[#B0926A]" />
						</div>
					</ul>
				</div>
				<div className="grid footeritems:grid-cols-3 grid-cols-2">
                    <div className="p-5">
                        <ul>
                            <p className="text-[rgb(19,23,39)] font-bold text-2xl pb-4">Product</p>
                            <li className="text-gray-500 text-md pb-2 font-medium hover:text-[#B0926A] cursor-pointer">
                                Stocks
                            </li>
                            <li className="text-gray-500 text-md pb-2 font-normal hover:text-[#B0926A] cursor-pointer">
                                Futures & Options
                            </li>
                            <li className="text-gray-500 text-md pb-2 font-normal hover:text-[#B0926A] cursor-pointer">
                                Mutual Funds
                            </li>
                            <li className="text-gray-500 text-md pb-2 font-normal hover:text-[#B0926A] cursor-pointer">
                                Fixed deposits
                            </li>
                        </ul>
                    </div>
                    <div className="p-5">
                        <ul>
                            <p className="text-[rgb(19,23,39)] font-bold text-2xl pb-4">Company</p>
                            <li className="text-gray-500 text-md pb-2 font-normal hover:text-[#B0926A] cursor-pointer">
                                About
                            </li>
                            <li className="text-gray-500 text-md pb-2 font-normal hover:text-[#B0926A] cursor-pointer">
                                Products
                            </li>
                            <li className="text-gray-500 text-md pb-2 font-normal hover:text-[#B0926A] cursor-pointer">
                                Pricing
                            </li>
                            <li className="text-gray-500 text-md pb-2 font-normal hover:text-[#B0926A] cursor-pointer">
                                Careers
                            </li>
                            <li className="text-gray-500 text-md pb-2 font-normal hover:text-[#B0926A] cursor-pointer">
                                Press & Media
                            </li>
                        </ul>
                    </div>
                    <div className="p-5">
                    <ul>
                            <p className="text-[rgb(19,23,39)] font-bold text-2xl pb-4">Support</p>
                            <li className="text-gray-500 text-md pb-2 font-normal hover:text-[#B0926A] cursor-pointer">
                                Contact
                            </li>
                            <li className="text-gray-500 text-md pb-2 font-normal hover:text-[#B0926A] cursor-pointer">
                                Support Portals
                            </li>
                            <li className="text-gray-500 text-md pb-2 font-normal hover:text-[#B0926A] cursor-pointer">
                                List Of Charges
                            </li>
                            <li className="text-gray-500 text-md pb-2 font-normal hover:text-[#B0926A] cursor-pointer">
                                Downloads & Resources
                            </li>
                            <li className="text-gray-500 text-md pb-2 font-normal hover:text-[#B0926A] cursor-pointer">
                                Videos
                            </li>
                        </ul>
                    </div>
                </div>
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
				<h1 className=" text-[rgb(19,23,39)] font-normal">
					© {current_year} All rights reserved | Build with 🐰 by{" "}
					<Link href={"/"} ><span className="hover:text-[#B0926A] font-normal cursor-pointer">
						BunnyShop{" "}
					</span></Link>
				</h1>
			</div>
		</footer>
	);
}

export default Footer;
