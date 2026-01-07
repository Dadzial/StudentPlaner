"use client"
import styles from "./page.module.css"
import ResponsiveAppBar from "../_components/Topbar"

export default function NotesPage() {
    return (
        <div className={styles.page}>
            <ResponsiveAppBar />
        </div>
    )
}
