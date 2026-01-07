"use client"
import styles from "./page.module.css"
import ResponsiveAppBar from "../_components/Topbar"

export default function Dashboard () {
    return (
        <div className={styles.page}>
            <div className={styles.topbar}>
                <ResponsiveAppBar />
            </div>
        </div>
    )
}