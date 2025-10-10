import styles from './index.module.scss'
import clsx from 'clsx'

export const Flow = ({ className = '' }) => {
  return (
    <section className={clsx('inner', styles['flow'], className)}>
      <h2 className={styles['flow-title']}>転職までの流れ</h2>
      <div className={styles['flow-wrapper']}>
        <div className={styles['flow-box']}>
          <div className={styles['circle']}>
            <span className={styles['circle-text']}>
              STEP
              <br />1
            </span>
          </div>
          <div>
            <img
              className={styles['flow-box-image']}
              src='/flow/flow-icon1.png'
              alt=''
              width={155}
              height={150}
            />
            <h3 className={styles['flow-box-title']}>エントリーシートの作成</h3>
            <p className={styles['flow-box-description']}>
              ここにはテキストが入ります。ここに はテキストが入ります。
              <br />
              ここにはテキストが入ります。
              <br />
              ここにはテキストが
            </p>
          </div>
        </div>
        <svg
          className={styles['flow-triangle']}
          width='40'
          height='20'
          viewBox='0 0 40 20'
          fill='none'
        >
          <path d='M20 20L0 0L40 0L20 20Z' fill='#DE5579' />
        </svg>

        <div className={styles['flow-box']}>
          <div className={styles['circle']}>
            <span className={styles['circle-text']}>
              STEP
              <br />2
            </span>
          </div>
          <div>
            <img
              className={styles['flow-box-image']}
              src='/flow/flow-icon2.png'
              alt=''
              width={155}
              height={150}
            />
            <h3 className={styles['flow-box-title']}>
              気になる企業のピックアップ
            </h3>
            <p className={styles['flow-box-description']}>
              ここにはテキストが入ります。ここに はテキストが入ります。
              <br />
              ここにはテキストが入ります。
              <br />
              ここにはテキストが
            </p>
          </div>
        </div>
        <svg
          className={styles['flow-triangle']}
          width='40'
          height='20'
          viewBox='0 0 40 20'
          fill='none'
        >
          <path d='M20 20L0 0L40 0L20 20Z' fill='#DE5579' />
        </svg>

        <div className={styles['flow-box']}>
          <div className={styles['circle']}>
            <span className={styles['circle-text']}>
              STEP
              <br />3
            </span>
          </div>
          <div>
            <img
              className={styles['flow-box-image']}
              src='/flow/flow-icon3.png'
              alt=''
              width={155}
              height={150}
            />
            <h3 className={styles['flow-box-title']}>複数企業に応募</h3>
            <p className={styles['flow-box-description']}>
              ここにはテキストが入ります。ここに はテキストが入ります。
              <br />
              ここにはテキストが入ります。
              <br />
              ここにはテキストが
            </p>
          </div>
        </div>
        <svg
          className={styles['flow-triangle']}
          width='40'
          height='20'
          viewBox='0 0 40 20'
          fill='none'
        >
          <path d='M20 20L0 0L40 0L20 20Z' fill='#DE5579' />
        </svg>

        <div className={styles['flow-box']}>
          <div className={styles['circle']}>
            <span className={styles['circle-text']}>
              STEP
              <br />4
            </span>
          </div>
          <div>
            <img
              className={styles['flow-box-image']}
              src='/flow/flow-icon4.png'
              alt=''
              width={155}
              height={150}
            />
            <h3 className={styles['flow-box-title']}>内定・転職！</h3>
            <p className={styles['flow-box-description']}>
              ここにはテキストが入ります。ここに はテキストが入ります。
              <br />
              ここにはテキストが入ります。
              <br />
              ここにはテキストが
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
