import type { Metadata } from 'next';
import { TerminalBar } from '@/components/ds/TerminalBar';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { navFor } from '@/components/site/nav';
import { principles } from '@/config/principles.config';

export const metadata: Metadata = {
  title: 'How I build software · niftymonkey.dev',
  description:
    'How can I build software that is transparent and trustworthy, while leaving monetization as an option?',
};

export default function Philosophy() {
  return (
    <>
      <TerminalBar path="~/philosophy" nav={navFor('philosophy')} right={<ThemeToggle />} />

      <main className="nb-shell">
        <p className="nb-prompt">cat README.md</p>
        <h1>How I build software</h1>

        <p className="nb-lede">
          I build software because I enjoy it and because it solves problems I personally have. Over
          time, some of those tools have become useful to other people too, which means I need to be
          more intentional about how I build things.
        </p>

        <div className="nb-question">
          <p className="nb-question__label">The core question</p>
          <p className="nb-question__text">
            How can I build software that is transparent and trustworthy, while leaving monetization
            as an option?
          </p>
        </div>

        <div className="nb-cards">
          {principles.map((principle) => (
            <article key={principle.id} className="nb-card">
              <h2 className="nb-card__title">{principle.title}</h2>
              <p className="nb-card__lead">{principle.summary}</p>
              <hr className="nb-card__rule" />
              <ul className="nb-card__list">
                {principle.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
