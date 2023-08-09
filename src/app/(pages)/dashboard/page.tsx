'use client'
import { Button, Typography } from "@mui/material";
import Link from "next/link";

import { useRouter } from "next/navigation";

export default function Dashboard() {

  const router = useRouter();

  function Navegar() {
    router.push("/about")
  }

  return (
    <Typography>
      Conteúdo da Dashboard<br></br>
      <Link href="/about">
        Ir para About
      </Link> <br></br>

      <Button onClick={Navegar}>
        Navegar por aqui
      </Button>
    </Typography>
  )
}