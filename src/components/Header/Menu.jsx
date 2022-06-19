import React, {useState} from "react";
import {AccountButton, AvatarImg, MenuButton, MenuWrapper,} from "./style";
import { NewPublishIcon, DirectIcon, FavoriteIcon, HomeIcon, NavigationIcon} from "../images/icons";
import avatar from '../images/daxa.jpg'

const menu = [{
    icon : <HomeIcon/>,
    link : '/'
},{
    icon : <DirectIcon/>,
    link : '/direct'
},{
    icon : <NewPublishIcon/>,
    link : '/new'
},{
    icon : <NavigationIcon/>,
    link : '/navigate'
},{
    icon : <FavoriteIcon/>,
    link : '/favorite'
}]

export const Menu = () =>{
    return <MenuWrapper>
        {menu.map((el) => <MenuButton key={el.link}>{el.icon}</MenuButton>)}
    <AccountButton><AvatarImg alt = 'Profile' src={avatar}/></AccountButton>
    </MenuWrapper>
}