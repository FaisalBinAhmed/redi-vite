import styles from './Button.module.css'

type ButtonProps = {
  specialComp: React.ReactNode
  children: React.ReactNode
}

export const Button= ({ specialComp , children }: ButtonProps) => {
  return (
    <button className={styles.button}>
      {specialComp}
      {children}
    </button>
  )
}