import Link from "next/link";
import PropTypes from "prop-types";

import { HeadlineH1 } from "../../components/headlines/headlines";
import Navigation from "../../components/navigation/navigation";

export default function Navbar(p) {
    console.log("#Navbar", p);

    const navigationItems = {
        github: p.github,
        twitter: p.twitter,
    };

    return (
        <div className="px-5 h-20 flex items-center border-b-2 justify-between">
            <Link passHref href="/">
                <HeadlineH1>{p.name}</HeadlineH1>
            </Link>
            <Navigation items={Object.entries(navigationItems)} />
        </div>
    );
}

Navbar.defaultProps = {
    name: "",
    github: "",
    twitter: "",
};

Navbar.propTypes = {
    name: PropTypes.string,
    github: PropTypes.string,
    twitter: PropTypes.string,
};
