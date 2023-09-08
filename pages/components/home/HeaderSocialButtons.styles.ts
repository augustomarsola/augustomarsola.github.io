import styled from "styled-components";

export const Content = styled.div`
  display: inline;
  overflow: hidden;

  .homeButtons {
    display: flex;
    justify-content: center;
    gap: 1rem;

    a {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;

      border: 0.1rem solid var(--primary);
      border-radius: 2rem;
      padding: 0.5rem;
      color: var(--primary);
      transition: color 0.3s;

      &::before {
        content: "";
        position: absolute;
        z-index: -1;
        width: 110%;
        height: 110%;
        top: -120%;
        background: var(--primary);
        transition: top 0.4s ease-in-out;
      }

      &:focus {
        outline: none;
      }

      &:hover,
      &:focus,
      &.linkHover {
        color: var(--secondary);
        &::before {
          top: 0;
        }
      }
    }
  }

  @media (min-width: 768px) {
    .homeButtons {
      a {
        padding: 0.75rem;
      }
    }
  }
`;
