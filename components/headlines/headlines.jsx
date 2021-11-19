import PropTypes from "prop-types";
export function HeadlineH1({ children, classes }) {
    return <h1 className={"font-bold text-2xl sm:text-md " + classes}>{children}</h1>;
}

HeadlineH1.propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.string,
};
