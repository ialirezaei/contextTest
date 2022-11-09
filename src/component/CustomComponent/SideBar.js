import React from 'react'
import { slide as Menu } from 'react-burger-menu';

export const SideBar = () => {
    console.log("SideBar Component");
    const getColor = () => (Math.floor(Math.random() * 255))
    return (
        <div className="sidenav" >
            <h1 style={{ color: `rgb(${getColor()}, ${getColor()}, ${getColor()})` }} >{getColor()}</h1>
            <a href="#" >یک</a>
            <a href="#">دو</a>
            <a href="#">سه</a>
            <a href="#">چهار</a>
        </div>

    )
}

export const SideBars = React.memo(SideBar);
