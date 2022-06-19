import styled from "styled-components";

export const Content = styled.nav`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .menuMobileContainer {
    position: relative;
  }

  .menuMobileContent {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

  .menuMobileButton {
    color: var(--primary);
    text-transform: uppercase;
    font-size: 1.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    line-height: 0.7;
  }

  .menuMobileButton__icon {
    display: flex;
    flex-direction: column;
    margin-left: 0.375rem;

    > i {
      width: 1.25rem;
      height: 0.15rem;
      background: var(--primary);
      margin: 0.3rem 0;
    }

    &::before,
    &::after {
      content: "";
      display: block;
      width: 1.25rem;
      height: 0.15rem;
      background: var(--primary);
    }

    &::before {
      top: 0;
    }

    &::after {
      bottom: 0;
    }
  }
`;
