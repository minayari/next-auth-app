"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const router = useRouter();
  const [userExist, setUserExist] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/auth");
    } else {
      setUserExist(true);
    }
  }, [router]);

  if (!userExist) return null;

  return (
    <div>
      <h1>Welcome to the dashboard</h1>
    </div>
  );
}
