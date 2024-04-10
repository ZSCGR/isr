import styles from '../styles/Home.module.scss';

export default function Explanation() {
  return (
    <div className={styles.explanation}>
      <p>
        此项目使用了 Next.js，托管在Vercel上 (
        <a
          href="https://github.com/leerob/on-demand-isr"
          target="_blank"
          rel="noreferrer"
        >
          点击查看源代码
        </a>
        ).
      </p>

      <details className={styles.details}>
        <summary>
          <span>它的原理是什么？</span>
        </summary>
        <p>
          当 `
          <a
            href="https://github.com/ZSCGR/isr"
            target="_blank"
            rel="noreferrer"
          >
            isr
          </a>
          ` 这个仓库的问题（issues）发生变化 (包括创建、注释、删除等)时, GitHub 会触发
          一个 webhook，受影响的页面会按需重新渲染并推送到边缘。Next.js 应用程序端的
          webhook 会执行一个新的{' '}
          <a
            href="https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#revalidating-data"
            target="_blank"
            rel="noreferrer noopener"
          >
            <code>`revalidatePath()`</code>
          </a>{' '}
          API 调用。
        </p>
      </details>

      <details className={styles.details}>
        <summary>
          <span>这不是已经有了吗？</span>
        </summary>

        <p>
          不像 <code>`revalidate`</code>{' '}
          <a
            href="https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#time-based-revalidation"
            target="_blank"
            rel="noreferrer"
          >
            有时间间隔
          </a>
          ，无服务器函数只有在{' '}
          <em>内容发生变化时 </em>才会被调用，这对用户来说更快
          （他们能立即看到变化），对所有者来说也更具有成本效益。
        </p>
      </details>

      <p>
        <em>
          💡 你可以尝试{' '}
          <a
            href="https://github.com/ZSCGR/isr/issues/new"
            target="_blank"
            rel="noreferrer"
          >
            创建新问题（issues）
          </a>{' '}
           然后刷新此页面以查看重新生成的问题！
        </em>{' '}
      </p>
    </div>
  );
}
