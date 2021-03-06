import {NavLink} from "react-router-dom";
import React from "react";
import styled from "styled-components";
import Icon from 'components/Icon'


const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, .25);
  position: sticky;
  bottom: 0;
  background: white;

  > ul {
    display: flex;

    > li {
      > a {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 8px;
        color: #929292;
        
        .icon {
          width: 24px;
          height: 24px;
          fill: #929292;
        }

        &.selected {
          color: #476FF6;
          .icon {
            fill:#476FF6;
          }
        }
      }
      flex-grow: 1;
    }
  }
`
const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <NavLink  exact to="/tags" activeClassName="selected">
                        <Icon name='tag'/>
                        标签
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/money" activeClassName="selected">
                        <Icon name='money'/>
                        记一笔
                    </NavLink>
                </li>
                <li>

                    <NavLink to="/statistics" activeClassName="selected">
                        <Icon name="chart"/>
                        统计
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>
    )
}

export default Nav


