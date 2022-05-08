import React from 'react';
import Dish from "../pages/Dish";


const Home = () => {
    return (
        <div>
            <nav >
                <div className="container home flex flex-wrap items-center justify-around mx-auto">

                    <ul className="flex  flex-col text-white mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li className="text">
                            <a href="/">Пицца</a>
                        </li>
                        <li className="text">
                            <a href="/">Комбо</a>
                        </li>
                        <li className="text">
                            <a href="/">Фирменные роллы</a>
                        </li>
                        <li className="text">
                            <a href="/">Запеченные роллы</a>
                        </li>
                        <li className="text">
                            <a href="/">Сеты</a>
                        </li>
                        <li className="text">
                            <a href="/">Напитки</a>
                        </li>
                        <li className="text">
                            <a href="/">Десерты</a>
                        </li>
                        <li className="text">
                            <a href="/">Горячее</a>
                        </li>
                    </ul>
                </div>
            </nav>



            <Dish/>


            </div>
    );
};

export default Home;