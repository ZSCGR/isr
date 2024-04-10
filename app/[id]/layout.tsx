import styles from '../../styles/Home.module.scss';
import Link from 'next/link';
import { GitHubIcon, LinkIcon } from '../icons';
import Explanation from '../explanation';

export default function IssueLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  return (
    <main className={styles.main}>
      <Explanation />

      <div className={styles.repo}>
        <div className={styles.repo_title}>
          <GitHubIcon />{' '}
          <a
            href="https://github.com/ZSCGR/isr"
            target="_blank"
            rel="noreferrer"
          >
            ZSCGR
          </a>{' '}
          / <Link href="/">isr</Link> /{' '}
          <a
            href={`https://github.com/ZSCGR/isr/issues/${params.id}`}
            target="_blank"
            rel="noreferrer"
          >
            #{params.id}
          </a>
        </div>
        <div className={styles.issue_comments}>
          <a
            href={`https://github.com/ZSCGR/isr/issues/${params.id}`}
            target="_blank"
            rel="noreferrer"
          >
            <LinkIcon /> {'Open in GitHub'}
          </a>
        </div>
      </div>
      {children}
    </main>
  );
}
