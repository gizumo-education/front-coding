import styles from './index.module.scss'

const steps = [
  {
    id: 1,
    icon: '/icon/sheet.svg',
    width: 77,
    title: 'エントリーシートの作成',
    text: 'ここにはテキストが入ります。ここに\nはテキストが入ります。\nここにはテキストが入ります。\nここにはテキストが',
  },
  {
    id: 2,
    icon: '/icon/search-gray.svg',
    width: 75,
    title: '気になる企業のピックアップ',
    text: 'ここにはテキストが入ります。ここに\nはテキストが入ります。\nここにはテキストが入ります。\nここにはテキストが',
  },
  {
    id: 3,
    icon: '/icon/apply.svg',
    width: 81,
    title: '複数企業に応募',
    text: 'ここにはテキストが入ります。ここに\nはテキストが入ります。\nここにはテキストが入ります。\nここにはテキストが',
  },
  {
    id: 4,
    width: 74,
    icon: '/icon/twinkle.svg',
    title: '内定・転職！',
    text: 'ここにはテキストが入ります。ここに\nはテキストが入ります。\nここにはテキストが入ります。\nここにはテキストが',
  },
]

export const Flow = () => {
  return (
    <section id='flow' className={styles.flow}>
      <h2 className={styles.title}>転職までの流れ</h2>
      <ol className={styles.list}>
        {steps.map((step) => (
          <li key={step.id} className={styles.item}>
            <span className={styles.step}>
              STEP
              <br />
              {step.id}
            </span>
            <img
              className={styles.icon}
              src={step.icon}
              alt=''
              width={step.width}
              height={75}
            />
            <h3 className={styles['item-title']}>{step.title}</h3>
            <p className={styles['item-text']}>{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
