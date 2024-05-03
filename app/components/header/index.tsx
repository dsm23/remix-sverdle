import { Link, useLocation } from "@remix-run/react";
import github from "~/assets/github.svg";
import logo from "~/assets/svelte-logo.svg";

import styles from "./styles.module.css";

const Header = () => {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.corner}>
        <a href="https://kit.svelte.dev" className={styles.link}>
          <img src={logo} alt="SvelteKit" />
        </a>
      </div>

      <nav className={styles.nav}>
        <svg className={styles.svg} viewBox="0 0 2 3" aria-hidden="true">
          <path className={styles.path} d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
        </svg>
        <ul className={styles.list}>
          <li
            className={styles.listItem}
            aria-current={location.pathname === "/" ? "page" : undefined}
          >
            <Link to="/" className={styles.link}>
              Home
            </Link>
          </li>
          <li
            className={styles.listItem}
            aria-current={location.pathname === "/about" ? "page" : undefined}
          >
            <Link to="/about" className={styles.link}>
              About
            </Link>
          </li>
          <li
            className={styles.listItem}
            aria-current={
              location.pathname.startsWith("/sverdle") ? "page" : undefined
            }
          >
            <Link to="/sverdle" className={styles.link}>
              Sverdle
            </Link>
          </li>
        </ul>
        <svg className={styles.svg} viewBox="0 0 2 3" aria-hidden="true">
          <path className={styles.path} d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
        </svg>
      </nav>

      <div className={styles.corner}>
        <a href="https://github.com/sveltejs/kit" className={styles.link}>
          <img src={github} alt="GitHub" />
        </a>
      </div>
    </header>
  );
};

export default Header;

{
  /* <style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style> */
}
