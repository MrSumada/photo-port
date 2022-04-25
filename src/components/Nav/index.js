import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";


function Nav() {

    const categories = [
        {
            name: "commercial",
            description: "Photos of grocery stores, food trucks, and other commercial projects",
        },
        { name: "portraits", description: "Portraits of people in my life" },
        { name: "food", description: "Delicious delicacies" },
        {
            name: "landscape",
            description: "Fields, farmhouses, waterfalls, and the beauty of nature",
        },
    ];

    function categorySelected(name) {
        console.log(`${name} is nice`);
    }

    return(
        <header className="my-5">
            <h2>
                <a href="/" data-testid="link"><span role="img" aria-label="camera"> 📸</span> Oh Snap!</a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about" data-testid="about">About Me</a>
                    </li>
                    <li className="mx-1">
                        <a href="#gallery">gallery</a>
                    </li>
                    <li className="mx-1">
                        <span>contact</span>
                        {/* <a href="#contact">Contact</a> */}
                    </li>
                    {categories.map((category) => (
                        <li className="mx-1" key={category.name}>
                            <span onClick={() => categorySelected(category.name)}>{capitalizeFirstLetter(category.name)}</span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;