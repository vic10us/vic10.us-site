import { css } from "lit";

export const typeWriterSyles = css`
  :host {
    --typewriter-text-secondary: var(--text-secondary, #3d4351);
    --typewriter-text-accent: var(--text-accent, #acb1b4);
    --typewriter-text-bold: 700;
    --typewriter-text-primary: var(--text-primary, rgba(28, 54, 83, 1));
    --typewriter-text-secondary-50: var(
      --text-secondary-50,
      rgba(61, 67, 81, 0.5)
    );
    --rainbow-gradient: linear-gradient(
      90deg,
      rgba(255, 0, 0, 1) 0%,
      rgba(255, 154, 0, 1) 10%,
      rgba(208, 222, 33, 1) 20%,
      rgba(79, 220, 74, 1) 30%,
      rgba(63, 218, 216, 1) 40%,
      rgba(47, 201, 226, 1) 50%,
      rgba(28, 127, 238, 1) 60%,
      rgba(95, 21, 242, 1) 70%,
      rgba(186, 12, 248, 1) 80%,
      rgba(251, 7, 217, 1) 90%,
      rgba(255, 0, 0, 1) 100%
    );
  }

  .typewriter__contianer {
    height: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--typewriter-text-secondary);
    position: relative;
    z-index: 0;
  }

  .typewriter__prompt {
    font-weight: var(--typewriter-text-bold);
    vertical-align: middle;
    line-height: 4rem;
    padding: 0.5rem;
    color: var(--typewriter-text-primary);
  }

  .typewriter__text {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    font-family: monospace;
    font-family: "Dot Digital-7", "LED Counter 7";
    align-self: center;
    width: 80%;
    color: var(--typewriter-text-secondary);
    letter-spacing: 0.1rem;
    position: relative;
    font-size: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 100vw;
    background-color: var(--typewriter-text-accent);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    text-shadow: 0 0 5px var(--typewriter-text-secondary-50),
      0 0 2px var(--typewriter-text-secondary-50);
  }

  .typewriter__text::before {
    content: "";
    top: -3px;
    left: -3px;
    height: calc(100% + 6px);
    width: calc(100% + 6px);
    z-index: -1;
    background: var(--rainbow-gradient);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    position: absolute;
    border-radius: 4rem;
  }

  @media only screen and (min-width: 1200px) {
    .typewriter__contianer {
      height: 20rem;
    }

    .typewriter__prompt {
      font-weight: var(--typewriter-text-bold);
      vertical-align: middle;
      line-height: 4rem;
      padding-left: 0.5rem;
      color: var(--typewriter-text-primary);
    }

    .typewriter__text {
      display: flex;
      flex-direction: row;
      justify-content: left;
      align-items: center;
      align-self: center;
      width: 60%;
      color: var(--typewriter-text-secondary);
      line-height: 4rem;
      min-width: max-content;
      letter-spacing: 0.1rem;
      position: relative;
      font-size: 3rem;
      padding: 1rem 2rem;
      border-radius: 4rem;
    }
  }

  .typewriter__cursor {
    animation: blinkCursor 700ms ease-in-out infinite;
  }

  @keyframes blinkCursor {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
