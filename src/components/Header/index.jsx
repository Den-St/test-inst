import React from "react";
import Logo from "../images/ins-logo.png";
import {HeaderContainer, HeaderWrapper, InstLogo} from "./style";
import {Search} from "./Search";
import {Menu} from "./Menu";

export const Header = () =>{
    return <HeaderContainer>
        <HeaderWrapper>
       <InstLogo src={Logo}/>
        <Search/>
        <Menu/>
        </HeaderWrapper>
    </HeaderContainer>
}