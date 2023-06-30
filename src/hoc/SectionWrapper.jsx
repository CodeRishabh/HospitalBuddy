import React from "react";

const SectionWrapper = (Component, idName) => 
function HOC(){
    return(
        <section>
            <span className="" id={idName}>
                &nbsp;
            </span>
            <Component />
        </section>
    )
}

export default SectionWrapper