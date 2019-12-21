import React from 'react';
import {NavLink} from "react-router-dom";

const Category = props => {
    return (
        <li>
            {props.title === 'All'? <NavLink to={"/quotes"} >{props.title}</NavLink>:<NavLink to={"/quotes/category/"+props.title} >{props.title}</NavLink>}
        </li>
    );
};

export default Category;