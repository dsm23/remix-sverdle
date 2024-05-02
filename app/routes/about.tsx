import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "About" },
    { name: "description", content: "About this app" },
  ];
};

const About = () => (
  <div className="text-column">
    <h1>About this app</h1>

    <p>
      This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make
      your own by typing the following into your command line and following the
      prompts:
    </p>

    <pre>npm create svelte@latest</pre>

    <p>
      The page you{"'"}re looking at is purely static HTML, with no client-side
      interactivity needed. Because of that, we don{"'"}t need to load any
      JavaScript. Try viewing the page{"'"}s source, or opening the devtools
      network panel and reloading.
    </p>

    <p>
      The <Link to="/sverdle">Sverdle</Link> page illustrates SvelteKit{"'"}s
      data loading and form handling. Try using it with JavaScript disabled!
    </p>
  </div>
);

export default About;
