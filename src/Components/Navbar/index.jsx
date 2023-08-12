"use client";

import FestiventLogoBlack from "./../../Assets/Logo/festivent-logo-black.png";
import PrimaryButton from "../PrimaryButton";
import DropdownNavbarMenu from "../DropdownNavbarMenu";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { onLogout } from "../../Redux/Features/Users";
import { Dropdown } from "flowbite-react";
import { HiCog, HiLogout, HiViewGrid } from "react-icons/hi";

export default function Navbar() {
    const email = useSelector((state) => state.users.email);
    const username = useSelector((state) => state.users.username);
    const dispatch = useDispatch();

    return (
        <>
            <section className="Navbar fixed w-full z-50">
                <nav>
                    <div className="navbar-container navbar-bg bg-white shadow-lg">
                        <div className="navbar-wrapper mycontainer flex justify-between items-center h-[82px] w-full">
                            <div className="navbar-left">
                                <div className="navbar-logo">
                                    <Link to={"/"}>
                                        <img
                                            src={FestiventLogoBlack}
                                            alt=""
                                            srcset=""
                                            className="md:max-w-[150px] md:min-w-[150px] w-[30px]"
                                        />
                                    </Link>
                                </div>
                            </div>

                            <div className="navbar-middle">
                                <ul className="navbar-menus flex gap-10">
                                    <li className="menu-item">
                                        <DropdownNavbarMenu menuTitle="Events" />
                                    </li>
                                    <li className="menu-item">
                                        <DropdownNavbarMenu menuTitle="Events" />
                                    </li>
                                    <li className="menu-item">
                                        <DropdownNavbarMenu menuTitle="Events" />
                                    </li>
                                    <li className="menu-item">
                                        <DropdownNavbarMenu menuTitle="Events" />
                                    </li>
                                    <li className="menu-item">
                                        <DropdownNavbarMenu menuTitle="Events" />
                                    </li>
                                </ul>
                            </div>

                            <div className="navbar-right">
                                <div className="navbar-actions flex gap-2">
                                    <div className="action-create-event">
                                        {email ? (
                                            <Link to={"/create"}>
                                                <PrimaryButton
                                                    buttonText="Create an Event"
                                                    bgColor="white"
                                                    textColor="black"
                                                />
                                            </Link>
                                        ) : (
                                            <>
                                                <Link
                                                    onClick={() =>
                                                        alert(
                                                            "Please login first"
                                                        )
                                                    }
                                                    to={"/login"}
                                                >
                                                    <PrimaryButton
                                                        buttonText="Create an Event"
                                                        bgColor="white"
                                                        textColor="black"
                                                    />
                                                </Link>
                                            </>
                                        )}
                                    </div>
                                    {email ? (
                                        <>
                                            <Dropdown label={`${username}`}>
                                                <Dropdown.Header>
                                                    {/* <span className="block text-sm">
                                                        Bonnie Green
                                                    </span> */}
                                                    <span className="block truncate text-sm font-medium">
                                                        {email}
                                                    </span>
                                                </Dropdown.Header>
                                                <Dropdown.Item
                                                    icon={HiViewGrid}
                                                >
                                                    <Link>Dashboard</Link>
                                                </Dropdown.Item>
                                                <Dropdown.Item icon={HiCog}>
                                                    Settings
                                                </Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item icon={HiLogout}>
                                                    <div
                                                        onClick={() =>
                                                            dispatch(onLogout())
                                                        }
                                                    >
                                                        Sign out
                                                    </div>
                                                </Dropdown.Item>
                                            </Dropdown>
                                            {/* <div
                                            className="cursor-pointer"
                                            onClick={() => dispatch(onLogout())}
                                            >
                                            {email}
                                        </div> */}
                                        </>
                                    ) : (
                                        <div className="action-login">
                                            <Link to={"/login"}>
                                                <PrimaryButton
                                                    buttonText="Log in"
                                                    bgColor="black"
                                                    textColor="white"
                                                />
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    );
}
