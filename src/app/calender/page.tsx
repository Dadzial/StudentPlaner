"use client"
import styles from "./page.module.css"
import ResponsiveAppBar from "../_components/Topbar"

export default function CalenderPage() {
    return (
        <div className={styles.page}>
            <ResponsiveAppBar />
        </div>
    )
}
