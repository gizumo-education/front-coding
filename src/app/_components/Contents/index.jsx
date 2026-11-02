import styles from './index.module.scss'

const contents = [
  {
    id: 1,
    image: '/contents-manual.jpg',
    title: '転職マニュアル',
    text: '転職活動の基礎知識、面接対策など\n転職のコツをお教えします',
  },
  {
    id: 2,
    image: '/contents-knowledge.jpg',
    title: '医療事務業界の豆知識',
    text: 'スキルアップ・労働環境、給与事情など\n知って得する業界の豆知識を公開',
  },
  {
    id: 3,
    image: '/contents-manual.jpg',
    title: '転職マニュアル',
    text: '転職活動の基礎知識、面接対策など\n転職のコツをお教えします',
  },
]

export const Contents = () => {
  return (
    <section id='contents' className={styles.contents}>
      <div className='inner'>
        <h2 className={styles.title}>転職お役立ちコンテンツ</h2>
        <ul className={styles.list}>
          {contents.map((content) => (
            <li key={content.id} className={styles.item}>
              <img
                className={styles.image}
                src={content.image}
                alt=''
                width={740}
                height={468}
              />
              <h3 className={styles['item-title']}>{content.title}</h3>
              <p className={styles['item-text']}>{content.text}</p>
            </li>
          ))}
        </ul>
        <a className={styles.more} href='/'>
          医療事務コラムをもっと見る
        </a>
      </div>
    </section>
  )
}
