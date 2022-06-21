import styled from "styled-components";

import React, {useState} from "react";
export const TextExpand = ({text, maxLetters = 120}) => {
    const [expanded, setExpanded] = useState(false);
    const expand = () => setExpanded(prevState => !prevState)
    const canExpand = text.length > maxLetters;
    const expandedText = canExpand ? expanded ? text : `${text.slice(0,maxLetters)}...` : text;

    return  <> {expandedText} <MoreButton onClick={expand}>{expanded ? 'скрыть' : 'еще'}</MoreButton></>
}

const MoreButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;