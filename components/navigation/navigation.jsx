import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function Navigation(p) {
    console.log("#Navigation", p.items);

    const [menu, setMenu] = useState(false);
    const isMobile = useMediaQuery("(max-width: 768px)");
    const direction = p.rowDirection || false;

    return (
        <nav>
            {isMobile ? (
                <a target="_blank" className="cursor-pointer" rel="noreferrer" onClick={() => setMenu(true)}>
                    <svg viewBox="0 0 100 80" width="25" height="25">
                        <rect x="10" width="100" height="10"></rect>
                        <rect x="30" y="30" width="100" height="10"></rect>
                        <rect x="50" y="65" width="100" height="10"></rect>
                    </svg>
                </a>
            ) : (
                <ul className={`flex my-2 ${direction ? "flex-row" : "flex-col"}`}>
                    {p.items.map(
                        (item, index) =>
                            item[1] && (
                                <a target="_blank" rel="noreferrer" href={item[1]} key={index}>
                                    <li className="cursor-pointer text-base font-semibold duration-150 mx-1 hover:text-blue-600 uppercase">
                                        {item[0]}
                                    </li>
                                </a>
                            )
                    )}
                </ul>
            )}

            {menu && (
                <div className="fixed inset-0 z-10 bg-white transition-shadow duration-300">
                    <div className="px-5 h-20 flex items-center right-0 absolute">
                        <a href="#" onClick={() => setMenu(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
                            </svg>
                        </a>
                    </div>
                    <div className="h-full flex items-center text-center">
                        <ul className="w-full">
                            {p.items.map(
                                (item, index) =>
                                    item[1] && (
                                        <a target="_blank" rel="noreferrer" href={item[1]} key={index}>
                                            <li className="cursor-pointer my-4 text-4xl font-semibold duration-150 mx-1 uppercase hover:text-blue-600">
                                                {item[0]}
                                            </li>
                                        </a>
                                    )
                            )}
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
}

Navigation.propTypes = {
    items: PropTypes.arrayOf(PropTypes.array).isRequired,
    rowDirection: PropTypes.bool,
};

Navigation.defaultProps = {
    items: [],
    rowDirection: true,
};
