import React, { FC, MouseEvent, useRef } from "react";
import styles from './style.module.scss'
import classNames from "classnames";

interface IDropdown {
    isOpen: boolean;
    setOpenDropdwon: (bol: boolean) => void
    items: Array<{
        label: string;
        path: string
        bold: boolean
    }>

}
export const DropdownMenu: FC<IDropdown> = ({ isOpen, items, setOpenDropdwon }) => {
    const ref = useRef<HTMLDivElement | null>(null);


    const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
        if (e.target === ref?.current) {
            setOpenDropdwon(false);
        }
    };
    return (
        <div className={classNames(styles.dropdown, { [styles.openDrodown]: isOpen })} ref={ref} onClick={handleOverlayClick}>
            <ul className={classNames(styles.dropdown__list, { [styles.dropdown__listVisible]: isOpen })}>
                {
                    React.Children.toArray(items.map(({ label, path, bold }) => (
                        <a
                            href={path}
                            className={
                                classNames(styles.dropdown__item,
                                    { [styles.dropdown__itemBold]: bold })}>
                            <li>
                                {label}
                            </li></a>
                    )))
                }
            </ul>
        </div>
    )
} 
