import { useEffect, useMemo, useState } from "react";
import { prototypeList, prototypeMap } from "./prototypes/registry";
import styles from "./ShellApp.module.css";

function normalizeHash(hash: string): string {
  const value = hash.replace(/^#/, "").trim();
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function useHashSlug(): string {
  const [slug, setSlug] = useState(() => normalizeHash(window.location.hash));

  useEffect(() => {
    const onHashChange = () => setSlug(normalizeHash(window.location.hash));
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return slug;
}

function isTopLevelWindow(): boolean {
  try {
    return window.self === window.top;
  } catch {
    return false;
  }
}

function BackToHubLink() {
  return (
    <a className={`ds-button ${styles.backToHub}`} href="#">
      Back to Prototype Hub
    </a>
  );
}

function PrototypeHub() {
  return (
    <div className={styles.shellBg}>
      <main className={`${styles.container} ${styles.shellGrid}`}>
        <header className={`ds-card ${styles.heroCard}`}>
          <span className="ds-badge">ROBE prototype shell</span>
          <h1>Prototype Hub</h1>
          <p>Select a screen from the list below or open it directly using a hash URL.</p>
          <code className="ds-code">prototype.html#sandbox</code>
        </header>

        <section className={styles.cardsGrid}>
          {prototypeList.map((prototype) => (
            <a className={`ds-card ${styles.prototypeCard}`} key={prototype.slug} href={`#${prototype.slug}`}>
              <h2>{prototype.title}</h2>
              <p>{prototype.description}</p>
              <span className={`ds-pill ${styles.linkPill}`}>Open #{prototype.slug}</span>
            </a>
          ))}
        </section>
      </main>
    </div>
  );
}

function UnknownPrototype({
  slug,
}: {
  slug: string;
}) {
  return (
    <div className={styles.shellBg}>
      <main className={`${styles.container} ${styles.shellGrid}`}>
        <header className={`ds-card ${styles.screenHeader}`}>
          <div>
            <p className="ds-label">Prototype</p>
            <h1>Prototype Not Found</h1>
            <p>
              No prototype is registered for <code>#{slug}</code>.
            </p>
          </div>
        </header>
      </main>
    </div>
  );
}

export default function ShellApp() {
  const slug = useHashSlug();
  const showBackToHub = isTopLevelWindow();
  const selectedPrototype = useMemo(
    () => (slug ? prototypeMap.get(slug) : null),
    [slug],
  );

  if (!slug) {
    return <PrototypeHub />;
  }

  if (!selectedPrototype) {
    return <UnknownPrototype slug={slug} />;
  }

  const ScreenComponent = selectedPrototype.component;
  if (!showBackToHub) {
    return <ScreenComponent />;
  }

  return (
    <div className={styles.shellBg}>
      <main className={`${styles.container} ${styles.shellGrid}`}>
        <div className={styles.topActions}>
          <BackToHubLink />
        </div>
        <section className={`ds-card ${styles.screenOnlyCard}`}>
          <ScreenComponent />
        </section>
      </main>
    </div>
  );
}
