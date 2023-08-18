import { motion, Variants, useAnimation } from "framer-motion";
import styles from './style.module.scss'
import * as React from "react";
import classNames from "classnames";
import { dropdownItems, navItems } from "./_data";
import Link from "next/link";
import { ChevronDown } from "../Icons/ChevronDown";
import { DropdownMenu } from "./dropdown";
import { Button } from '@components/Button'

interface IMobileMenu {
    open: boolean;
    toggle: () => void;
    openDropdown: boolean;
    toggleDropdown: () => void;
    setOpenDropdown: (bol: boolean) => void;
}
export const MobileNavMenu: React.FC<IMobileMenu> = ({ open, toggle, setOpenDropdown, openDropdown, toggleDropdown }) => {
    const animation = useAnimation();

    const variants: Variants = {
        hidden: {
            transition: {
                staggerChildren: 0.3,
            },
        },
        visible: {
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const v: Variants = {
        hidden: {
            opacity: 0,
            x: -50,
            transition: {
                type: 'spring',
                stiffness: 40,
            },
        },
        visible: {
            opacity: 1,
            x: -0,
            transition: {
                type: 'spring',
                stiffness: 40,
            },
        },
    };

    React.useEffect(() => {
        if (open) {
            setTimeout(() => {
                animation.start('visible');
            }, 1000);
        } else {
            animation.start('hidden');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);
    return (
        <motion.div variants={variants} animate={animation} initial="hidden">
            <div
                className={classNames(styles.nav__menuContainer,
                    {
                        [styles.nav__menuContainerOpen]: !open
                    }
                )}
            >
                {navItems.map(({ hasDropdown, name, path }, index) => {
                    return (
                        <React.Fragment key={`${index}+${name}`}>
                            {hasDropdown ? (
                                <motion.div variants={v}>
                                    <div onClick={toggleDropdown} className={classNames(styles.dropdown__toggle, styles.nav__menuItem)}>
                                        {name}
                                        <ChevronDown />
                                        <DropdownMenu isOpen={openDropdown} items={dropdownItems} setOpenDropdwon={setOpenDropdown} />
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div variants={v}>
                                    <span className={styles.nav__menuItem} onClick={toggle}>
                                        <Link href={path}>{name}</Link>
                                    </span>
                                </motion.div>
                            )}
                        </React.Fragment>
                    );
                })}
                <motion.div variants={v}>
                    <section className={classNames(styles.nav__btn)}>
                        <Button text='Login' variant='outline' />
                        <Button text='Enroll Now' />
                    </section>
                </motion.div>
            </div>

        </motion.div>

    )
}
