import { Children } from "react";



const Section = ({ title, children }) => {
    return (
        <section className="Section__container">
            <h1 className="Section__title">{title}</h1>
            {children}
        </section>
    )
};

export default Section;