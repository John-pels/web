import classNames from "classnames"
import styles from './style.module.scss'
import React from "react"
import { studentData } from "./_data"
import { Button } from ".."
import Image from "next/image"


export const GreatStudent = () => {
    return (
        <section className={classNames(styles.greatstudent, "container-fluid")}>
            <h2 className={styles.greatstudent__heading}>Meet Our Great Students</h2>
            <p className={styles.greatstudent__subHeading}>Our online coding bootcamps will take you from absolute beginner to job-ready in just 3 <br /> to 6 months.</p>
            <section className={styles.greatstudent__grid}>

                {
                    React.Children.toArray(studentData.map(({ name, imageUrl, role }) => (

                        <div className={styles.greatstudent__card}>
                            <div className={styles.greatstudent__cardImage}>
                                <Image
                                    src={imageUrl}
                                    alt="student image"
                                    width={200}
                                    height={200}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                    }} />
                            </div>
                            <div>
                                <p className={styles.greatstudent__studentName}>{name}</p>
                                <p className={styles.greatstudent__studentRole}>{role}</p>
                                <Button text="Watch Video" />
                            </div>
                        </div>
                    )))
                }
            </section>
        </section>
    )
}
