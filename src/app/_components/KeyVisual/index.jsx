import Image from 'next/image'
import clsx from 'clsx'
import styles from './index.module.scss'

export const KeyVisual = () => {
  return (
    <section className={clsx(styles['sec-keyvisual'])}>
      <picture className={clsx(styles['keyvisual-bg'])}>
        <source
          srcSet='/image/keyVisual/keyvisual-bg-sp.png'
          media='(max-width: 768px)'
        />
        <source
          srcSet='/image/keyVisual/keyvisual-bg-pc.jpg'
          media='(min-width: 769px)'
        />
        <img
          src='/image/keyVisual/keyvisual-bg-sp.png'
          width='400'
          height='270'
          alt=''
        />
      </picture>
      <div className={clsx(styles['contents-keyvisual'])}>
        <div className={clsx(styles['keyvisual-inner'])}>
          <picture>
            <source
              srcSet='image/keyVisual/keyvisual.svg'
              media='(max-width: 768px)'
            />
            <source
              srcSet='image/keyVisual/keyvisual-pc.svg'
              media='(min-width: 769px)'
            />
            <img
              className={clsx(styles['keyvisual'])}
              src='/image/keyVisual/keyvisual.svg'
              width='150'
              height='73'
              alt='No.1'
            />
          </picture>
          <h1 className={clsx(styles['keyvisual-text'])}>
            <Image
              className={clsx(styles['keyvisual-text-img'])}
              src='/image/keyVisual/medical-office-work-job-offer-find-if-giz-job.svg'
              width='272'
              height='22'
              alt='医療事務求人を探すならギズジョブ'
            />
          </h1>
          <div className={clsx(styles['current-recruitment-count'])}>
            <p>
              現在の求人掲載数：
              <span className={clsx(styles['current-recruitment-count-num'])}>
                2,320
              </span>
              件
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
