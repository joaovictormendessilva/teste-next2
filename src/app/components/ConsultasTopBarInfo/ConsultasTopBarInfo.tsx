import { Grid, Box, Typography } from "@mui/material";

interface IConsultasTopBarInfoProps {
  grupo: string
  planoBasico: string
  maximoCota: string
  situacao: string
}

export function ConsultasTopBarInfo({ grupo, maximoCota, planoBasico, situacao }: IConsultasTopBarInfoProps) {
  return (
    <>
      <Grid item xs={12} sm={6} md={3}>
        <Box>
          <Typography fontSize="11px">
            Grupo
          </Typography>
          <Typography fontSize="14px" fontWeight="bold">
            {grupo}
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Box>
          <Typography fontSize="11px">
            Pláno Básico
          </Typography>
          <Typography fontSize="14px" fontWeight="bold">
            {maximoCota}
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Box>
          <Typography fontSize="11px">
            Número Máximo Cota
          </Typography>
          <Typography fontSize="14px" fontWeight="bold">
            {planoBasico}
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Box>
          <Typography fontSize="11px">
            Situação
          </Typography>
          <Typography fontSize="14px" fontWeight="bold">
            {situacao}
          </Typography>
        </Box>
      </Grid>
    </>
  )
}