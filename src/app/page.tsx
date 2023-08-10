'use client';
import { Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

import { useRouter } from 'next/navigation'

export default function App() {
  const [auth, setAuth] = useState(true);

  const router = useRouter()

  useEffect(() => {
    if (auth) {
      router.push("./dashboard")
    }
  }, [])


  return (
    <>
      <Typography>
        Página Inicial
      </Typography>

      <Link href="/dashboard">
        Ir para Dashboard
      </Link>
    </>
  )
}