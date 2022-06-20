import styled from "styled-components";

export const Content = styled.nav`
  width: 100%;
  padding: 0.25rem 0.75rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .menuMobileContainer {
    position: relative;

    .menuMobileContent {
      visibility: hidden;
      opacity: 0;
      position: absolute;
      right: -50px;
      top: 50px;
      transition: 0.3s;

      li {
        list-style: none;
        text-align: right;
      }
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
      align-items: center;
      justify-content: center;
      min-height: 1rem;
      margin-left: 0.375rem;

      > i {
        width: 1.25rem;
        height: 0.15rem;
        background: var(--primary);
        margin: 0.3rem 0;
        transition: 0.3s;
      }

      &::before,
      &::after {
        content: "";
        display: block;
        width: 1.25rem;
        height: 0.15rem;
        background: var(--primary);
        transition: 0.3s;
      }
    }

    &.isActive {
      .menuMobileButton__icon {
        > i {
          margin: 0;
          transform: rotate(-45deg);
          opacity: 0;
        }

        &::after {
          transform: rotate(45deg) translate(-0.125rem, 0px);
        }

        &::before {
          transform: rotate(-45deg) translate(-0.1875rem, 0.0625rem);
        }
      }

      .menuMobileContent {
        visibility: visible;
        opacity: 1;
        right: 0;
      }
    }
  }
`;
