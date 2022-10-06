import styles from './links.module.css'

type Link = {
  label: string;
  slug: string;
  url: string;
}

const LINKS: Link[] = [
  {
    label: 'Digital Garden',
    slug: 'personal',
    url: 'https://chrisotto.dev/'
  },
  {
    label: 'Github',
    slug: 'github',
    url: 'https://github.com/chrisotto6'
  },
  {
    label: 'Twitter',
    slug: 'twitter',
    url: 'https://twitter.com/chris_otto6'
  },
  {
    label: 'LinkedIn',
    slug: 'linkedin',
    url: 'https://www.linkedin.com/in/ottochristopher'
  },
  {
    label: 'Twitch',
    slug: 'twitch',
    url: 'https://www.twitch.tv/chris_otto6'
  }
]

export function Links() {
  return (
    <nav className={styles.links}>
      {LINKS.map((link) => (
        <a
          key={link.url}
          href={link.url}
          className={styles.link}
          data-site={link.slug}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}