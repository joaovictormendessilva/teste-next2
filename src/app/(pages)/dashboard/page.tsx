import { Grid, Card, Typography, Box } from "@mui/material";


export default function Dashboard() {
  return (
    <Box>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={4} lg={4}>
          <Card sx={{ bgcolor: "gray" }}>
            <Typography variant="h6">
              Conteúdo 1
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} lg={12}>
          <Card sx={{ bgcolor: "gray" }}>
            <Typography variant="h6">
              Conteúdo
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Card sx={{ bgcolor: "gray" }}>
            <Typography variant="h6">
              Conteúdo
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Card sx={{ bgcolor: "gray" }}>
            <Typography variant="h6">
              Conteúdo
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Card sx={{ bgcolor: "gray" }}>
            <Typography variant="h6">
              Conteúdo
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Card sx={{ bgcolor: "gray" }}>
            <Typography variant="h6">
              Conteúdo
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Card sx={{ bgcolor: "gray" }}>
            <Typography variant="h6">
              Conteúdo
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Card sx={{ bgcolor: "gray" }}>
            <Typography variant="h6">
              Conteúdo
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Card sx={{ bgcolor: "gray" }}>
            <Typography variant="h6">
              Conteúdo
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Card sx={{ bgcolor: "gray" }}>
            <Typography variant="h6">
              Conteúdo
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ bgcolor: "gray" }}>
            <Typography variant="h6">
              Conteúdos
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Card sx={{ bgcolor: "gray" }}>
            <Typography variant="h6">
              Conteúdos x
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}