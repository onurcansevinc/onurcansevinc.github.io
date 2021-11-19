import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

import { HeadlineH1 } from "../../components/headlines/headlines";

export default function Header(p) {
    return (
        <div className="h-96 sm:h-80 w-full bg-gray-100 flex justify-center">
            <div>
                <div className="w-full flex justify-center mb-3 mt-10 sm:-mt-10">
                    <Image className="rounded" src={p.image} alt={p.alt} width={p.width} height={p.height} />
                </div>
                <div>
                    <HeadlineH1 classes="text-center">{p.name} </HeadlineH1>
                    <p className="text-center text-gray-600">{p.location}</p>
                    <p className="max-w-lg text-xs sm:text-base text-center mt-2">{p.bio}</p>
                </div>
            </div>
        </div>
    );
}

Header.defaultProps = {
    image: "https://avatars.githubusercontent.com/u/53150440?v=4",
    alt: "Profile Image",
    width: 200,
    height: 200,
};

Header.propTypes = {
    image: PropTypes.string,
    alt: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
};
