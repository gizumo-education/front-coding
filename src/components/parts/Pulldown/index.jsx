import clsx from 'clsx'
import styles from './index.module.scss'

export const Pulldown = ({ name, id, data = [], defoultValue = '' }) => {
  return (
    <div className={clsx(styles['pulldown-wrap'])}>
      <select
        name={name}
        id={id}
        defaultValue={defoultValue}
        className={clsx(styles['pulldown'])}
      >
        {data?.map((items) => (
          <option key={items.id} value={items.value}>
            {items.name}
          </option>
        ))}
      </select>
      <span className={clsx(styles['pulldown-triangle'])}></span>
    </div>
  )
}
