"use client";

import AuthForm from "@/components/AuthForm";
import styles from "./page.module.scss";

export default function AuthPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ورود</h1>
      <AuthForm />
    </div>
  );
}
