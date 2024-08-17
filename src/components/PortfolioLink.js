import React from "react";
import { ReactComponent as PortfolioIcon } from "../assets/portfolio.svg"; // Use an appropriate icon or image

const PortfolioLink = () => {
    return (
        <li onClick={() => window.open("https://yourportfolio.com", "_blank")}>
            <i>
                <PortfolioIcon />
            </i>
        </li>
    );
};

export default PortfolioLink;
