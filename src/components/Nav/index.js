import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";


function Nav(props) {

    const handleClick = (item) => {
        console.log(item);
        return item;
    };

    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory])

    return(
        <header className="flex-row px-1">
            <h2>
                <a href="/" data-testid="link"> 
                    <span role="img" aria-label="camera">
                        📸 
                    </span> {" "}
                    Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about" data-testid="about" onClick={() => handleClick("About")}>About Me</a>
                    </li>
                    <li className="mx-1">
                        <span onClick={() => handleClick('Contact')}>Contact
                        </span>
                    </li>
                    {categories.map((category) => (
                        // If currentCategory.name === category.name, THEN set class as navActive
                        <li className={`mx-1 ${
                            currentCategory.name === category.name && 'navActive'
                        }`} key={category.name}>
                            <span 
                            onClick={() => {
                                setCurrentCategory(category)
                            }}
                        >
                            {capitalizeFirstLetter(category.name)}
                        </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;