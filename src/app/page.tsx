import { Typography } from "@mui/material";
import Link from "next/link";


export default function App() {
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