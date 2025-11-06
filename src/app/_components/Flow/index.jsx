import React from 'react'
import styles from './index.module.scss'

export const Flow = ({id}) => {
  return (
    <section id={id} className={styles['section']}>
      <div className={styles['section-inner']}>
        <div className={styles['section-title']}>
          <h1 className={styles['section-text']}>転職までの流れ</h1>
        </div>

        <div className={styles['section-container']}>
          <div className={styles['section-box']}>
            <div className={styles['section-subbox']}>
              <span className={styles['section-step']}>
                STEP <br /> 1
              </span>
            </div>
            <img
              src='/icon/flow1.png'
              alt='アイコン'
              width='102'
              height='100'
              className={styles['section-icon1']}
            />
            <h2 className={styles['section-subtitle']}>
              エントリーシートの
              <br className={styles['br-pc']} />
              作成
            </h2>
            <p className={styles['section-description']}>
              ここにはテキストが入ります。ここにはテキストが入ります。
              <br className={styles['br-sp']} />
              ここにはテキストが入ります。
              <br className={styles['br-sp']} />こ
            </p>
          </div>
          <div className={styles['section-arrow']}></div>

          <div className={styles['section-box']}>
            <div className={styles['section-subbox']}>
              <span className={styles['section-step']}>
                STEP <br /> 2
              </span>
            </div>
            <img
              src='/icon/flow2.png'
              alt='アイコン'
              width='80'
              height='80'
              className={styles['section-icon2']}
            />
            <h2 className={styles['section-subtitle']}>
              気になる企業の
              <br className={styles['br-pc']} />
              ピックアップ
            </h2>
            <p className={styles['section-description']}>
              ここにはテキストが入ります。ここにはテキストが入ります。
              <br className={styles['br-sp']} />
              ここにはテキストが入ります。
              <br className={styles['br-sp']} />
              ここにはテキストが
            </p>
          </div>
          <div className={styles['section-arrow']}></div>

          <div className={styles['section-box']}>
            <div className={styles['section-subbox']}>
              <span className={styles['section-step']}>
                STEP <br /> 3
              </span>
            </div>
            <img
              src='/icon/flow3.png'
              alt='アイコン'
              width='102'
              height='100'
              className={styles['section-icon3']}
            />
            <h2 className={styles['section-subtitle']}>複数企業に応募</h2>
            <p className={styles['section-description']}>
              ここにはテキストが入ります。ここにはテキストが入ります。
              <br className={styles['br-sp']} />
              ここにはテキストが入ります。
              <br className={styles['br-sp']} />
              ここにはテキストが
            </p>
          </div>
          <div className={styles['section-arrow']}></div>

          <div className={styles['section-box']}>
            <div className={styles['section-subbox']}>
              <span className={styles['section-step']}>
                STEP <br /> 4
              </span>
            </div>
            <img
              src='/icon/flow4.png'
              alt='アイコン'
              width='102'
              height='100'
              className={styles['section-icon4']}
            />
            <h2 className={styles['section-subtitle']}>内定・転職！</h2>
            <p className={styles['section-description']}>
              ここにはテキストが入ります。ここにはテキストが入ります。
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
