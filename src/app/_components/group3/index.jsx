import styles from './index.module.scss'
import clsx from 'clsx'
import React from 'react'

const steps = [
  {
    id: 1,
    stepNumber: 1,
    icon: '/group3/group3-icon1.png',
    title: {
      text: 'エントリーシートの作成',
      breakAfter: 'エントリーシートの',
    },
    description:
      'ここにはテキストが入ります。ここに はテキストが入ります。\nここにはテキストが入ります。\nここにはテキストが',
  },
  {
    id: 2,
    stepNumber: 2,
    icon: '/group3/group3-icon2.png',
    title: {
      text: '気になる企業のピックアップ',
      breakAfter: '気になる企業の',
    },
    description:
      'ここにはテキストが入ります。ここに はテキストが入ります。\nここにはテキストが入ります。\nここにはテキストが',
  },
  {
    id: 3,
    stepNumber: 3,
    icon: '/group3/group3-icon3.png',
    title: {
      text: '複数企業に応募',
      breakAfter: null,
    },
    description:
      'ここにはテキストが入ります。ここに はテキストが入ります。\nここにはテキストが入ります。\nここにはテキストが',
  },
  {
    id: 4,
    stepNumber: 4,
    icon: '/group3/group3-icon4.png',
    title: {
      text: '内定・転職！',
      breakAfter: null,
    },
    description:
      'ここにはテキストが入ります。ここに はテキストが入ります。\nここにはテキストが入ります。\nここにはテキストが',
  },
]

export const Group3 = ({ id, className = '' }) => {
  return (
    <section id={id} className={clsx('inner', styles['group3'], className)}>
      <h2 className={styles['group3-title']}>転職までの流れ</h2>
      <div className={styles['group3-wrapper']}>
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className={styles['group3-box']}>
              <div className={styles['circle']}>
                <span className={styles['circle-text']}>
                  STEP
                  <br />
                  {step.stepNumber}
                </span>
              </div>
              <div>
                <img
                  className={styles['group3-box-image']}
                  src={step.icon}
                  alt=''
                  width={155}
                  height={150}
                />
                <h3 className={styles['group3-box-title']}>
                  {step.title.breakAfter ? (
                    <>
                      {step.title.breakAfter}
                      <br className={styles['br-pc']} />
                      {step.title.text.replace(step.title.breakAfter, '')}
                    </>
                  ) : (
                    step.title.text
                  )}
                </h3>
                <p className={styles['group3-box-description']}>
                  {step.description.split('\n').map((line, lineIndex) => (
                    <span key={lineIndex}>
                      {line}
                      {lineIndex < step.description.split('\n').length - 1 && (
                        <br className={styles['br-sp']} />
                      )}
                    </span>
                  ))}
                </p>
              </div>
            </div>

            {index < steps.length - 1 && (
              <picture
                key={`triangle-${step.id}`}
                className={styles['group3-triangle']}
              >
                <source
                  media='(max-width: 767px)'
                  srcSet='/group3/group3-triangle-sp.svg'
                />
                <img
                  src='/group3/group3-triangle-pc.svg'
                  alt=''
                  width='40'
                  height='20'
                />
              </picture>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
