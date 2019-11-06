import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { textStroke } from '../../mixins/text-stroke.mixin';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';

const logoSize = '4em';

const HeaderChild = css`
    flex-grow: 1;
    flex-basis: 33.33%;
`;

export const HeaderContainer = styled.div`
    height: 4em;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin: 0.4em 0 2em 0;
    padding: 0 1em;
`;

export const LogoImage = styled(Logo)`
    background-color: antiquewhite;
    border-radius: ${logoSize};
    height: ${logoSize};
    width: ${logoSize};
    padding: calc(${logoSize} * 0.1);
    margin-bottom: calc(-${logoSize}/6);
    border: 1px solid gold;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    margin-right: calc(33.33% - 4em);
`;

export const CartIconStyled = styled(CartIcon)`
    background-color: rgba(245, 222, 179, 0.2);
    border: 1px solid rgba(255, 215, 0, 0.3);
    border-radius: 100%;
    &:hover {
        background-color: rgba(245, 222, 179, 0.6);
    }
`;

export const OptionsContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    ${HeaderChild}
`;
const OptionStyles = css`
    font-size: 1.4em;
    padding: 1em 1.2em;
    cursor: pointer;
    ${textStroke('1px', '#555', 'black')}
    text-shadow: -2px -2px 2px white;

    &:hover {
        ${textStroke('1px', 'orange', 'gold')}
        text-shadow: -1px -1px 2px brown;
    }
`;

export const OptionContainer = styled.div`
    ${OptionStyles}
`;
export const OptionLink = styled(Link)`
    ${OptionStyles}
`;

export const Title = styled.h1`
    font-family: 'Sacramento', cursive;
    font-weight: bold;
    font-size: 3.4em;
    margin: 0.3em 0 0.4em 0;
    line-height: 0.8em;
    color: goldenrod;
    text-shadow: 3px 3px 4px brown;
    text-align: center;
    ${HeaderChild}
`;