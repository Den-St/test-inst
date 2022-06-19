
import React, {useState} from "react";
import {SearchContainer, SearchInput, SearchWrapper} from "./style";
import {SearchIcon} from "../images/icons";

export const Search = () =>{
    const [focus,setFocus] = useState(false)
    const onInputFocus = () => setFocus(true)
    const onInputBlur = () => setFocus(false)
    return <SearchWrapper>
                {!focus && <SearchIcon/>}
                <SearchInput onFocus={onInputFocus} onBlur={onInputBlur} placeholder = "Поиск"></SearchInput>
        </SearchWrapper>
}

export const FocusedInput = () =>{
    return <SearchIcon/>
}
