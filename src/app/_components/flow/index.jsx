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
            <h3 className={styles['flow-box-title']}>
              エントリーシートの
              <br className={styles['br-pc']} />
              作成
            </h3>
            <p className={styles['flow-box-description']}>
              ここにはテキストが入ります。ここに はテキストが入ります。
              <br className={styles['br-sp']} />
              ここにはテキストが入ります。
              <br className={styles['br-sp']} />
              ここにはテキストが
            </p>
          </div>
        </div>

        <picture className={styles['flow-triangle']}>
          <source media='(max-width: 767px)' srcSet='/flow/flow-triangle.svg' />
          <img src='/flow/flow-triangle-pc.svg' alt='' width='40' height='20' />
        </picture>

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
              気になる企業の
              <br className={styles['br-pc']} />
              ピックアップ
            </h3>
            <p className={styles['flow-box-description']}>
              ここにはテキストが入ります。ここに はテキストが入ります。
              <br className={styles['br-sp']} />
              ここにはテキストが入ります。
              <br className={styles['br-sp']} />
              ここにはテキストが
            </p>
          </div>
        </div>
        <picture className={styles['flow-triangle']}>
          <source media='(max-width: 767px)' srcSet='/flow/flow-triangle.svg' />
          <img src='/flow/flow-triangle-pc.svg' alt='' width='40' height='20' />
        </picture>

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
              <br className={styles['br-sp']} />
              ここにはテキストが入ります。
              <br className={styles['br-sp']} />
              ここにはテキストが
            </p>
          </div>
        </div>
        <picture className={styles['flow-triangle']}>
          <source media='(max-width: 767px)' srcSet='/flow/flow-triangle.svg' />
          <img src='/flow/flow-triangle-pc.svg' alt='' width='40' height='20' />
        </picture>

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
              <br className={styles['br-sp']} />
              ここにはテキストが入ります。
              <br className={styles['br-sp']} />
              ここにはテキストが
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
