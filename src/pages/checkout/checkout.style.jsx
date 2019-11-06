import styled, { css } from 'styled-components';

import {
    ImageContent,
    SmallBlockContainer,
    CheckoutItemContainer
} from '../../components/checkout-item/checkout-item.style';

const sectionPadding = '1em';
const borderRadius = '1em';

export const CheckoutPageContainer = styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3em auto 0;
`;

const CheckoutSection = css`
    background-color: rgba(255,255,255,0.4);
    width: 100%;
    padding: ${sectionPadding};
`;

const CheckoutBlockStyles = css`
    text-align: center;
    flex-basis: 20%;
    flex-grow: 2;

    &.small-block, &${SmallBlockContainer} {
        flex-basis: 10%;
        flex-grow: 1;
    }

    &:first-of-type {
        text-align: left;
        padding-left: 1em;
    }
    &:last-of-type {
        padding-right: 1em;
    }
`;

export const CheckoutBlock = styled.div`
    ${CheckoutBlockStyles}
`;

export const CheckoutHeader = styled.div`
    ${CheckoutSection}
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    border-bottom: 1px solid white;
    text-transform: uppercase;
    border-radius: ${borderRadius} ${borderRadius} 0 0;
`;

const CheckoutItemStyles = css`
    ${CheckoutItemContainer} {

        &>* {
            padding: 0.6em 0 0.4em 0;
            ${CheckoutBlockStyles}
            &:first-child ${ImageContent} {
                text-align: left;
                padding-left: 0.1em;
            }
        }
        &:not(:last-child) {
            border-bottom: 1px solid darkgrey;
        }

        &>:first-child {
            padding-left: 0.5em;
        }
        &>:last-child {
            padding-right: 0.5em;
        }
    }
`;

export const CheckoutBody = styled.div`
    ${CheckoutSection}
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 0;
    padding-bottom: 0;

    ${CheckoutItemStyles}
`;

export const Total = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    label {
        font-size: 1.8em;
        text-transform: uppercase;
        margin: 0 0.4em;
    }
    span {
        font-size: 2.2em;
        font-weight: bold;
    }
`;

export const CheckoutFooter = styled.div`
    ${CheckoutSection}
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: ${sectionPadding};
    border-top: 1px solid white;
    border-radius: 0 0 ${borderRadius} ${borderRadius};
`;

export const TestWarningContainer = styled.div`
    background-color: rgba(0,0,0,0.9);
    border-radius: ${borderRadius};
    color: darkred;
    font-weight: bold;
    text-align: center;
    padding: 1em 2em;
    margin-top: 40vh;
    font-size: 2em;
    line-height: 1.6em;
`;

export const ExpCvcContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;