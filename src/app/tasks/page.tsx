"use client"
import styles from "./page.module.css"
import ResponsiveAppBar from "../_components/Topbar"

export default function TasksPage() {
    return (
        <div className={styles.page}>
            <ResponsiveAppBar />
        </div>
    )
}
