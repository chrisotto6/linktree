import styles from './links.module.css'

type Link = {
  label: string;
  url: string;
}

const LINKS: Link[] = [
  {
    label: 'Digital Garden',
    url: 'https://chrisotto.dev/'
  },
  {
    label: 'Github',
    url: 'https://github.com/chrisotto6'
  },
  {
    label: 'Twitter',
    url: 'https://twitter.com/chris_otto6'
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ottochristopher'
  },
]

export function Links() {
  return <nav className={styles.links}>
    {LINKS.map(link => (
      <a key={link.url} href={link.url} className={styles.link}>{link.label}</a>
    ))}
  </nav>
}