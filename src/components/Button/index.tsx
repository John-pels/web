'use client'
import { FC } from 'react'
import styles from './style.module.scss'
import classNames from 'classnames'
import { ChevronRight } from '../Icons'

type IButton = {
    text?: string
    variant?: 'gradient' | 'outline' | 'outline0'
    isFluid?: boolean
    showArrow?: boolean
} & React.ComponentPropsWithoutRef<'button'>

export const Button: FC<IButton> = ({ text = 'Enroll Now', variant = 'gradient', isFluid = false, showArrow = false }) => {
    const type = variant === 'gradient' ?
        styles.gradient :
        variant === 'outline' ?
            styles.outline : variant === 'outline0' ?
                styles.outline0 : styles.fluid
    return (
        <>
            <button
                className={
                    classNames(styles.button,
                        type,
                        { [styles.fluid]: isFluid }
                    )}>
                {text}{showArrow && <ChevronRight stroke='#FFF' />}
            </button>
        </>

    )
}
