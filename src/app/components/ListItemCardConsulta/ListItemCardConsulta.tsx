import { ListItem, Typography } from "@mui/material";

interface IListItemCardConsultaProps {
  title: string
  content: string
}

export function ListItemCardConsulta({ title, content }: IListItemCardConsultaProps) {
  return (
    <ListItem sx={{ display: "flex", justifyContent: "space-between", gap: 3 }}>
      <Typography fontSize="14px">
        {title}
      </Typography>
      <Typography fontSize="14px" fontWeight="bold" textAlign="right">
        {content}
      </Typography>
    </ListItem>
  )
}