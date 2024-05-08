import { useState } from "react";
import cx from "clsx";
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { Confetti } from "@neoconfetti/react";
import { sverdle } from "~/utils/cookies.server";
import { Game } from "~/utils/game";

import styles from "./styles.module.css";

export const meta: MetaFunction = () => {
  return [
    { title: "Sverdle" },
    { name: "description", content: "A Wordle clone written in Remix" },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const cookieHeader = request.headers.get("sverdle");
  const cookie = (await sverdle.parse(cookieHeader)) || "";

  const game = new Game(cookie);

  return {
    /**
     * The player's guessed words so far
     */
    guesses: game.guesses,

    /**
     * An array of strings like '__x_c' corresponding to the guesses, where 'x' means
     * an exact match, and 'c' means a close match (right letter, wrong place)
     */
    answers: game.answers,

    /**
     * The correct answer, revealed if the game is over
     */
    answer: game.answers.length >= 6 ? game.answer : null,
  };
}

const Sverdle = () => {
  const [won] = useState(false);

  const data = useLoaderData<typeof loader>();

  const index = won ? -1 : data?.answers?.length;

  const currentGuess = data?.guesses?.[index] || "";

  // const isSubmittable = currentGuess.length === 5;

  /**
   * Modify the game state without making a trip to the server,
   * if client-side JavaScript is enabled
   */
  // function update(event: MouseEvent) {
  //   const key = (event.target as HTMLButtonElement).getAttribute("data-key");

  //   if (key === "backspace") {
  //     currentGuess = currentGuess.slice(0, -1);
  //     if (form?.badGuess) form.badGuess = false;
  //   } else if (currentGuess.length < 5) {
  //     currentGuess += key;
  //   }
  // }

  /**
   * Trigger form logic in response to a keydown event, so that
   * desktop users can use the keyboard to play the game
   */
  // function keydown(event: KeyboardEvent) {
  //   if (event.metaKey) return;

  //   if (event.key === "Enter" && !isSubmittable) return;

  //   document
  //     .querySelector(`[data-key="${event.key}" i]`)
  //     ?.dispatchEvent(new MouseEvent("click", { cancelable: true }));
  // }

  return (
    <>
      <h1 className="visually-hidden">Sverdle</h1>

      <Form className={styles.form}>
        <Link className={styles.howToPlay} to="/sverdle/how-to-play">
          How to play
        </Link>

        <div
          className={cx(styles.grid, {
            [styles.playing]: !won,
            // [styles.badGuess]: form?.badGuess,
          })}
        >
          {Array.from({ length: 6 }, (_, i) => i).map((row) => {
            const current = row === index;

            return (
              <>
                <h2 className="visually-hidden">Row {row + 1}</h2>

                <div
                  className={cx(styles.row, {
                    [styles.current]: current,
                  })}
                >
                  {Array.from(Array(5).keys()).map((column) => {
                    const guess = current ? currentGuess : data?.guesses?.[row];
                    const answer = data?.answers?.[row]?.[column];
                    const value = guess?.[column] ?? "";
                    const selected = current && column === guess.length;
                    const exact = answer === "x";
                    const close = answer === "c";
                    const missing = answer === "_";

                    return (
                      <div
                        key={`column-${column}`}
                        className={cx(styles.letter, {
                          [styles.exact]: exact,
                          [styles.close]: close,
                          [styles.missing]: missing,
                          [styles.selected]: selected,
                        })}
                      >
                        {value}
                        <span className="visually-hidden">
                          {/* {#if exact}
          (correct)
        {:else if close}
          (present)
        {:else if missing}
          (absent)
        {:else}
          empty
        {/if} */}
                        </span>
                        <input
                          name="guess"
                          disabled={!current}
                          type="hidden"
                          value={value}
                        />
                      </div>
                    );
                  })}
                </div>
              </>
            );
          })}
        </div>

        {won && (
          <Confetti
            // style="position: absolute; left: 50%; top: 30%"
            // particleCount: $reduced_motion ? 0 : undefined,
            force={0.7}
            stageWidth={window.innerWidth}
            stageHeight={window.innerHeight}
            colors={["#ff3e00", "#40b3ff", "#676778"]}
          />
        )}
      </Form>
    </>
  );
};

export default Sverdle;
