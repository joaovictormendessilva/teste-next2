import { Typography } from "@mui/material";
import Link from "next/link";

export default function About() {
  return (
    <Typography color="yellow" fontSize="24px" fontWeight="bold">
      Conteúdo da About<br></br>
      <Link href="/dashboard">
        Ir para Dashboard
      </Link>
    </Typography>
  )
}