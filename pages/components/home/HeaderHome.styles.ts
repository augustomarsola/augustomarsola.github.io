import styled from "styled-components";

export const Content = styled.div`
  min-height: 100vh;
  overflow-x: hidden;

  h1 {
    text-align: center;
  }

  .logoAugusto {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;

    span {
      text-transform: uppercase;
      font-weight: 300;
      letter-spacing: 0.35rem;
    }
  }

  .homeDescription {
    text-align: center;

    .typingStyle {
      font-weight: 600;
    }
  }

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

      border: 2px solid var(--primary);
      border-radius: 2rem;
      padding: 0.5rem;
      color: var(--primary);
      transition: color 0.3s;

      &::after {
        content: "";
        position: absolute;
        z-index: -1;
        width: 110%;
        height: 110%;
        top: -120%;
        background: var(--primary);
        transition: top 0.4s ease-in-out;
      }

      &:hover {
        color: var(--secondary);
        &::after {
          top: 0;
        }
      }
    }
  }

  @media (min-width: 720px) {
    gap: 0.75rem;
    .homeButtons {
      a {
        padding: 0.75rem;
      }
    }
  }
`;
