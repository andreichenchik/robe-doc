import { useState } from "react";
import styles from "./sandbox.module.css";

const presetCards = [
  "Office Capsule",
  "Travel Layers",
  "Weekend Basics",
  "Event Outfit",
  "Rainy Day Combo",
];

function nextCardLabel(index: number): string {
  return `${presetCards[index % presetCards.length]} #${index + 1}`;
}

export function SandboxPrototype() {
  const [cards, setCards] = useState([0, 1, 2]);
  const [detailsVisible, setDetailsVisible] = useState(false);

  const addCard = () => {
    setCards((current) => [...current, current.length]);
  };

  const removeCard = () => {
    setCards((current) => current.slice(0, -1));
  };

  return (
    <div className={styles.root}>
      <section className={`ds-card ${styles.demoBlock}`}>
        <h3>Interaction Panel</h3>
        <p>
          This sample verifies component behavior in the shell and gives a base pattern for future
          prototype screens.
        </p>
        <div className={styles.demoActions}>
          <button className="ds-button" type="button" onClick={addCard}>
            Add card
          </button>
          <button className="ds-button" type="button" onClick={removeCard} disabled={!cards.length}>
            Remove card
          </button>
          <button
            className="ds-button"
            type="button"
            onClick={() => setDetailsVisible((value) => !value)}
          >
            Toggle details
          </button>
        </div>
      </section>

      <section className={styles.demoGrid}>
        {cards.map((cardIndex) => (
          <article className={`ds-card ${styles.demoBlock}`} key={cardIndex}>
            <h3>{nextCardLabel(cardIndex)}</h3>
            <p className="ds-pill">State: active</p>
            {detailsVisible ? (
              <p>
                Expanded details block. Replace this section with flow-specific content when
                creating new prototypes.
              </p>
            ) : (
              <p>Compact mode enabled. Use toggle to reveal extra details.</p>
            )}
          </article>
        ))}
      </section>
    </div>
  );
}
