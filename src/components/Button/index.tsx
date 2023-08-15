import { FC } from 'react'
import styles from './style.module.scss'
import classNames from 'classnames'
import { ChevronRight } from '../Icons'

type IButton = {
    text?: string
    variant?: 'gradient' | 'outline'
    isFluid?: boolean
    showArrow?: boolean
} & React.ComponentPropsWithoutRef<'button'>

export const Button: FC<IButton> = ({ text = 'Enroll Now', variant = 'gradient', isFluid, showArrow = false }) => {
    const type = variant === 'gradient' ?
        styles.gradient :
        variant === 'outline' ?
            styles.outline : styles.fluid
    return (
        <button
            className={
                classNames(styles.button,
                    type,
                    { [styles.fluid]: isFluid }
                )}>
            {text}{showArrow ? <ChevronRight /> : null}
        </button>
    )
}
