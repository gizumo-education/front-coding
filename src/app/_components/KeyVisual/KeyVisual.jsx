import Image from 'next/image'
import clsx from 'clsx'
import styles from './index.module.scss'

export const KeyVisual = () => {
  return (
    <section className={clsx(styles['sec-keyvisual'])}>
      <picture className='keyvisual-bg-sp'>
        <source
          srcSet='/image/keyVisual/keyvisual-bg-sp.png'
          media='(max-width: 400px)'
        />
        <img
          src='/image/keyVisual/keyvisual-bg-sp.png'
          width='400'
          height='270'
          alt='keyvisual'
        />
      </picture>
      <div className={clsx(styles['contents-keyvisual'])}>
        <div className={clsx(styles['keyvisual-inner'])}>
          <Image
            className={clsx(styles['keyvisual'])}
            src='/image/keyVisual/keyvisual.svg'
            width='150'
            height='73'
            alt='No.1'
          />
          <Image
            className={clsx(styles['keyvisual-text'])}
            src='/image/keyVisual/医療事務求人を探すならギズジョブ.svg'
            width='272'
            height='22'
            alt='医療事務求人を探すならギズジョブ'
          />
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
