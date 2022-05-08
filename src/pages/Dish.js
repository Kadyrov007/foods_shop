import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
 import {api} from "../https/api"
import Reduser from "../redux/Reduser"
import {useDispatch, useSelector} from "react-redux";


 const Dish = () => {

const dispatch = useDispatch()
      useEffect(() => {
api("/pizza-list/")
            .then(({data}) => {
                dispatch({type: "UPLOAD_CATALOG",payload:data})
            })
    }, [])
     console.log(dispatch,"rolan")

     return (
        <div>
            <div className="text-white flex justify-around">
                <div>
                    <h1>Выбрать блюда</h1>
                </div>
                <div className="justify-between">
                    <li>
                        <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                                className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Dropdown <svg
                            className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                  clipRule="evenodd"></path>
                        </svg></button>
                        <div id="dropdownNavbar"
                             className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                            <ul className="py-1 text-sm text-gray-700 dark:text-gray-400"
                                aria-labelledby="dropdownLargeButton">
                                <li>
                                    <Link to="/"
                                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                                </li>
                            </ul>
                            <div className="py-1">
                                <Link to="/"
                                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign
                                    out</Link>
                            </div>
                        </div>
                    </li>
                </div>

            </div>

            <div className="text-white dish">
                {/*{*/}
                {/*    mainPizza.map(el=>(*/}

                {/*        <PizzaCards el={el}/>*/}
                {/*    ))*/}
                {/*}*/}

            </div>
        </div>
    );
};

export default Dish;
