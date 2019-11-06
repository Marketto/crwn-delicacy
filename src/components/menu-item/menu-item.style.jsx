import styled, { css } from 'styled-components';

const itemBorder = '1px solid darkgrey';

const ItemTypeStyles = {
    'slow-food': css`
        height: 22em;
        .content {
            min-width: 22vw;
        }
    `
};

export const BackgroundImage = styled.div`
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
    filter: saturate(45%);
    background-image: ${ ({ imageUrl }) => `url(${imageUrl})` };
`;

export const MenuContent = styled.div`
    height: 4em;
    padding: 0.5em 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: ${itemBorder};
    background-color: wheat;
    opacity: 0.7;
    position: absolute;
    min-width: 15vw;
`;

const TitleSubtitleStyles = css`
    margin: 0.1em 0;
`;

export const Title = styled.div`
    ${TitleSubtitleStyles}
    font-family: 'Quicksand', sans-serif;
    font-weight: bold;
    font-size: 1.8em;
    color: darkolivegreen;
    text-transform: capitalize;
`;

export const Subtitle = styled.div`
    ${TitleSubtitleStyles}
    font-family: 'Sacramento', cursive;
    font-size: 1.5em;
`;

export const MenuItemContainer = styled.div`
    cursor: pointer;
    min-width: 30%;
    height: 18em;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: ${itemBorder};
    margin: 0 0.5em 1em;
    overflow: hidden;

    &:first-child, &:last-child {
        margin-right: 0.5em;
    }

    &:hover {
        ${MenuContent} {
            opacity: 0.8;
            .title {
                text-shadow: 1px 1px 2px lightslategray;
            }
            .subtitle {
                text-shadow: 2px 2px 2px lightyellow;
            }
        }
        ${BackgroundImage} {
            filter: saturate(115%);
            transform: scale(1.4);
            transition: all 5s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }
    }
    ${({ type }) => ItemTypeStyles[type] || ''}
`;