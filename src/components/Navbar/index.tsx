'use client'
import * as React from 'react';
import styles from './style.module.scss';
import classNames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import { dropdownItems, navItems } from './_data';
import { MobileNavMenu } from './mobileMenu';
import { ChevronDown } from '../Icons/ChevronDown';
import { DropdownMenu } from './dropdown';
import { Button } from '@components/Button'

export const Navbar = () => {
    const [mobileNav, setMobileNav] = React.useState(false);
    const [openDropdown, setOpenDropdown] = React.useState(false);
    const [hasScrolled, setHasScrolled] = React.useState(false);
    const toggleDropdown = () => {
        setOpenDropdown(!openDropdown);
    };
    const handleScroll = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > 60) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        }
    };

    const toggleMobileNav = () => {
        setMobileNav(!mobileNav);
    };
    const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            setMobileNav(false);
        }
    };

    React.useEffect(() => {
        window.addEventListener('keyup', handleEsc);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('keyup', handleEsc);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <section className={classNames(styles.box, { [styles.boxShadow]: hasScrolled })}>
            <nav className={classNames(styles.nav, 'container-fluid')}>
                <section className={classNames(styles.flex, styles.fullWidth)}>
                    <section className={styles.nav__mobileFlex}>
                        <Link href="/">
                            <Image src='/images/hyperiondev.svg' width={200} height={50} alt='logo' />
                        </Link>
                        <div className={styles.nav__mobileMenuWrapper}>
                            <div aria-label="menu" className={styles.nav__toggle} onClick={toggleMobileNav}>
                                <div
                                    className={classNames(styles.nav__toggleContent,
                                        { [styles.nav__toggleContentOpen]: mobileNav })}
                                >
                                    <div />
                                    <div />
                                    <div />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={classNames(styles.hideOnMobile)}>
                        <ul className={styles.nav__list}>
                            {navItems.map(({ hasDropdown, name, path }, index) => {
                                return (
                                    <React.Fragment key={`${index}+${name}`}>
                                        {hasDropdown ? (
                                            <div onClick={toggleDropdown} className={classNames(styles.dropdown__toggle, styles.nav__listItem)}>
                                                {name}
                                                <ChevronDown />
                                                <DropdownMenu isOpen={openDropdown} items={dropdownItems} setOpenDropdwon={setOpenDropdown} />
                                            </div>

                                        ) : (
                                            <Link href={path}>
                                                <li className={classNames(styles.nav__listItem)} >
                                                    {name}
                                                </li>
                                            </Link>
                                        )}
                                    </React.Fragment>
                                );
                            })}

                        </ul>
                    </section>

                    <section className={classNames(styles.nav__btn, styles.nav__btnHideOnMobile)}>
                        <Button text='Login' variant='outline' />
                        <Button text='Enroll Now' />
                    </section>
                </section>
            </nav>
            <MobileNavMenu
                openDropdown={openDropdown}
                open={mobileNav}
                toggle={toggleMobileNav}
                toggleDropdown={toggleDropdown}
                setOpenDropdown={setOpenDropdown}
            />

        </section>
    )
}
