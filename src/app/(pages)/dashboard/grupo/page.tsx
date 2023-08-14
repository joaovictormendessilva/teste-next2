import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ConsultasTopBarInfo, ListItemCardConsulta } from "@/app/components";

export default function Grupo() {
  return (
    // <Box display="flex" justifyContent="center" >
    //   <Grid container spacing={3}>
    //     <Grid item xs={12} sm={4} md={4} lg={4}>
    //       {/* <Grid item xs={12}> */}
    //       <Card>
    //         <Box>
    //           <List>
    //             <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
    //               <ListItemText>
    //                 PLANO BÁSICO
    //               </ListItemText>

    //               <ListItemText primaryTypographyProps={{ fontWeight: "bold", textAlign: "end" }}>
    //                 240 meses
    //               </ListItemText>
    //             </ListItem>

    //             <Divider />

    //             <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
    //               <ListItemText>
    //                 MAX DE COTAS
    //               </ListItemText>

    //               <ListItemText primaryTypographyProps={{ fontWeight: "bold", textAlign: "end" }}>
    //                 0990
    //               </ListItemText>
    //             </ListItem>

    //             <Divider />

    //             <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
    //               <ListItemText>
    //                 SITUAÇÃO
    //               </ListItemText>

    //               <ListItemText primaryTypographyProps={{ fontWeight: "bold", textAlign: "end" }}>
    //                 ANDAMENTO - 26/12/2022
    //               </ListItemText>
    //             </ListItem>

    //             <Divider />

    //             <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
    //               <ListItemText>
    //                 1ª ASSEMB
    //               </ListItemText>

    //               <ListItemText primaryTypographyProps={{ fontWeight: "bold", textAlign: "end" }}>
    //                 20/01/2023
    //               </ListItemText>
    //             </ListItem>

    //             <Divider />

    //             <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
    //               <ListItemText>
    //                 ENCERRAMENTO PREV
    //               </ListItemText>

    //               <ListItemText primaryTypographyProps={{ fontWeight: "bold", textAlign: "end" }}>
    //                 19/12/2042
    //               </ListItemText>
    //             </ListItem>
    //           </List>
    //         </Box>
    //       </Card>
    //     </Grid>
    //     <Grid item xs={12} sm={4} md={4} lg={4}>
    //       {/* <Grid item xs={12}> */}
    //       <Card>
    //         <Box>
    //           <List>
    //             <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
    //               <ListItemText>
    //                 TIPO DE GRUPO
    //               </ListItemText>

    //               <ListItemText primaryTypographyProps={{ fontWeight: "bold", textAlign: "end" }}>
    //                 Tipo Grupo IM
    //               </ListItemText>
    //             </ListItem>

    //             <Divider />

    //             <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
    //               <ListItemText>
    //                 LEGISLAÇÃO
    //               </ListItemText>

    //               <ListItemText primaryTypographyProps={{ fontWeight: "bold", textAlign: "end" }}>
    //                 Circular 3432
    //               </ListItemText>
    //             </ListItem>

    //             <Divider />

    //             <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
    //               <ListItemText>
    //                 FILIAL REUNIÕES
    //               </ListItemText>

    //               <ListItemText primaryTypographyProps={{ fontWeight: "bold", textAlign: "end" }}>
    //                 Local 1
    //               </ListItemText>
    //             </ListItem>

    //             <Divider />

    //             <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
    //               <ListItemText>
    //                 TIPO DE SORTEIO
    //               </ListItemText>

    //               <ListItemText primaryTypographyProps={{ fontWeight: "bold", textAlign: "end" }}>
    //                 LOTERIA FEDERAL
    //               </ListItemText>
    //             </ListItem>

    //           </List>
    //         </Box>
    //       </Card>
    //     </Grid>
    //     <Grid item xs={12} sm={4} md={4} lg={4}>
    //       {/* <Grid item xs={12}> */}
    //       <Card>
    //         <Box>
    //           <List>
    //             <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
    //               <ListItemText>
    //                 % MULTAS
    //               </ListItemText>

    //               <ListItemText primaryTypographyProps={{ fontWeight: "bold", textAlign: "end" }}>
    //                 2,0000%s
    //               </ListItemText>
    //             </ListItem>

    //             <Divider />

    //             <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
    //               <ListItemText>
    //                 % JUROS
    //               </ListItemText>

    //               <ListItemText primaryTypographyProps={{ fontWeight: "bold", textAlign: "end" }}>
    //                 1,0000%
    //               </ListItemText>
    //             </ListItem>

    //             <Divider />

    //             <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
    //               <ListItemText>
    //                 PLANO DE SEGURO
    //               </ListItemText>

    //               <ListItemText primaryTypographyProps={{ fontWeight: "bold", textAlign: "end" }}>
    //                 -
    //               </ListItemText>
    //             </ListItem>

    //             <Divider />

    //             <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
    //               <ListItemText>
    //                 SEG. GARANT. / FD RES
    //               </ListItemText>

    //               <ListItemText primaryTypographyProps={{ fontWeight: "bold", textAlign: "end" }}>
    //                 Não
    //               </ListItemText>
    //             </ListItem>

    //             <Divider />

    //             <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
    //               <ListItemText>
    //                 CARACTERÍSTICAS
    //               </ListItemText>

    //               <ListItemText primaryTypographyProps={{ fontWeight: "bold", textAlign: "end" }}>
    //                 (demo)
    //               </ListItemText>
    //             </ListItem>

    //           </List>
    //         </Box>
    //       </Card>
    //     </Grid>
    //   </Grid>
    // </Box>

    // -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    // <Box>
    //   <Box display="flex" alignItems="flex-start" gap={0.5}>
    //     <IconButton
    //       href="./"
    //       sx={{ color: "#00000099" }}
    //     >
    //       <ArrowBackIcon />
    //     </IconButton>
    //     <Typography component="h1" fontSize="26px" color="#00000099" marginBottom="10px">
    //       Dados do Grupo
    //     </Typography>
    //   </Box>
    //   <Box>
    //     <Grid container spacing={3}>
    //       {/* <Grid item xs={12} sm={4} md={4} lg={4}> */}
    //       <Grid item xs={12} sm={12} md={4}>
    //         <Card>
    //           <Box>
    //             <List>
    //               <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
    //                 <ListItemText primaryTypographyProps={{ fontSize: "0.785rem" }}>
    //                   PLANO BÁSICO
    //                 </ListItemText>

    //                 <ListItemText primaryTypographyProps={{ fontWeight: "bold", textAlign: "end", fontSize: "0.785rem" }}>
    //                   240 meses
    //                 </ListItemText>
    //               </ListItem>

    //               <Divider />

    //               <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
    //                 <ListItemText primaryTypographyProps={{ fontSize: "0.785rem" }}>
    //                   MAX DE COTAS
    //                 </ListItemText>

    //                 <ListItemText primaryTypographyProps={{ fontWeight: "bold", textAlign: "end", fontSize: "0.785rem" }}>
    //                   0990
    //                 </ListItemText>
    //               </ListItem>

    //               <Divider />

    //               <ListItem sx={{ display: "flex", justifyContent: "space-between", gap: 1 }}>
    //                 <ListItemText primaryTypographyProps={{ fontSize: "0.785rem" }}>
    //                   SITUAÇÃO
    //                 </ListItemText>

    //                 <ListItemText primaryTypographyProps={{ fontWeight: "bold", textAlign: "end", fontSize: "0.785rem" }}>
    //                   ANDAMENTO - 26/12/2022
    //                 </ListItemText>
    //               </ListItem>

    //               <Divider />

    //               <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
    //                 <ListItemText primaryTypographyProps={{ fontSize: "0.785rem" }}>
    //                   1ª ASSEMB
    //                 </ListItemText>

    //                 <ListItemText primaryTypographyProps={{ fontWeight: "bold", textAlign: "end", fontSize: "0.785rem" }}>
    //                   20/01/2023
    //                 </ListItemText>
    //               </ListItem>

    //               <Divider />

    //               <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
    //                 <ListItemText primaryTypographyProps={{ fontSize: "0.785rem" }}>
    //                   ENCERRAMENTO PREV
    //                 </ListItemText>

    //                 <ListItemText primaryTypographyProps={{ fontWeight: "bold", textAlign: "end", fontSize: "0.785rem" }}>
    //                   19/12/2042
    //                 </ListItemText>
    //               </ListItem>
    //             </List>
    //           </Box>
    //         </Card>
    //       </Grid>
    //       {/* <Grid item xs={12} sm={4} md={4} lg={4}> */}
    //       <Grid item xs={12} sm={12} md={4}>
    //         <Card>
    //           <Box>
    //             <List>
    //               <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
    //                 <ListItemText primaryTypographyProps={{ fontSize: "0.785rem" }}>
    //                   TIPO DE GRUPO
    //                 </ListItemText>

    //                 <ListItemText primaryTypographyProps={{ fontWeight: "bold", textAlign: "end", fontSize: "0.785rem" }}>
    //                   Tipo Grupo IM
    //                 </ListItemText>
    //               </ListItem>

    //               <Divider />

    //               <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
    //                 <ListItemText primaryTypographyProps={{ fontSize: "0.785rem" }}>
    //                   LEGISLAÇÃO
    //                 </ListItemText>

    //                 <ListItemText primaryTypographyProps={{ fontWeight: "bold", textAlign: "end", fontSize: "0.785rem" }}>
    //                   Circular 3432
    //                 </ListItemText>
    //               </ListItem>

    //               <Divider />

    //               <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
    //                 <ListItemText primaryTypographyProps={{ fontSize: "0.785rem" }}>
    //                   FILIAL REUNIÕES
    //                 </ListItemText>

    //                 <ListItemText primaryTypographyProps={{ fontWeight: "bold", textAlign: "end", fontSize: "0.785rem" }}>
    //                   Local 1
    //                 </ListItemText>
    //               </ListItem>

    //               <Divider />

    //               <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
    //                 <ListItemText primaryTypographyProps={{ fontSize: "0.785rem" }}>
    //                   TIPO DE SORTEIO
    //                 </ListItemText>

    //                 <ListItemText primaryTypographyProps={{ fontWeight: "bold", textAlign: "end", fontSize: "0.785rem" }}>
    //                   LOTERIA FEDERAL
    //                 </ListItemText>
    //               </ListItem>

    //             </List>
    //           </Box>
    //         </Card>
    //       </Grid>
    //       {/* <Grid item xs={12} sm={4} md={4} lg={4}> */}
    //       <Grid item xs={12} sm={12} md={4}>
    //         <Card>
    //           <Box>
    //             <List>
    //               <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
    //                 <ListItemText primaryTypographyProps={{ fontSize: "0.785rem" }}>
    //                   % MULTAS
    //                 </ListItemText>

    //                 <ListItemText primaryTypographyProps={{ fontWeight: "bold", textAlign: "end", fontSize: "0.785rem" }}>
    //                   2,0000%
    //                 </ListItemText>
    //               </ListItem>

    //               <Divider />

    //               <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
    //                 <ListItemText primaryTypographyProps={{ fontSize: "0.785rem" }}>
    //                   % JUROS
    //                 </ListItemText>

    //                 <ListItemText primaryTypographyProps={{ fontWeight: "bold", textAlign: "end", fontSize: "0.785rem" }}>
    //                   1,0000%
    //                 </ListItemText>
    //               </ListItem>

    //               <Divider />

    //               <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
    //                 <ListItemText primaryTypographyProps={{ fontSize: "0.785rem" }}>
    //                   PLANO DE SEGURO
    //                 </ListItemText>

    //                 <ListItemText primaryTypographyProps={{ fontWeight: "bold", textAlign: "end", fontSize: "0.785rem" }}>
    //                   -
    //                 </ListItemText>
    //               </ListItem>

    //               <Divider />

    //               <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
    //                 <ListItemText primaryTypographyProps={{ fontSize: "0.785rem" }}>
    //                   SEG. GARANT. / FD RES
    //                 </ListItemText>

    //                 <ListItemText primaryTypographyProps={{ fontWeight: "bold", textAlign: "end", fontSize: "0.785rem" }}>
    //                   Não
    //                 </ListItemText>
    //               </ListItem>

    //               <Divider />

    //               <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
    //                 <ListItemText primaryTypographyProps={{ fontSize: "0.785rem" }}>
    //                   CARACTERÍSTICAS
    //                 </ListItemText>

    //                 <ListItemText primaryTypographyProps={{ fontWeight: "bold", textAlign: "end", fontSize: "0.785rem" }}>
    //                   (demo)
    //                 </ListItemText>
    //               </ListItem>
    //             </List>
    //           </Box>
    //         </Card>
    //       </Grid>
    //     </Grid>
    //   </Box>

    // </Box>

    // -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    // <Box display="flex" flexDirection="column" gap={2}>

    //   <Box display="flex" alignItems="flex-start" gap={0.5} marginBottom={-2}>
    //     <IconButton
    //       href="./"
    //       sx={{ color: "#00000099" }}
    //     >
    //       <ArrowBackIcon />
    //     </IconButton>
    //     <Typography component="h1" fontSize="26px" color="#00000099" marginBottom="10px">
    //       Dados do Grupo
    //     </Typography>
    //   </Box>

    //   <Card>
    //     <Grid container justifyContent="space-between" padding={3} gap={2}>

    //       <CardConsultasContent title="PLANO BÁSICO" content="240 Meses" />
    //       <CardConsultasContent title="MAX DE COTAS" content="0990" />
    //       <CardConsultasContent title="SITUAÇÃO" content="ANDAMENTO - 26/12/2022" />
    //       <CardConsultasContent title="1ª ASSEMBLEIA" content="20/01/2023" />
    //       <CardConsultasContent title="ENCERRAMENTO PREV" content="19/12/2042" />

    //     </Grid>

    //   </Card>

    //   {/*  */}

    //   <Card>
    //     <Grid container justifyContent="space-between" padding={3} gap={2}>

    //       <CardConsultasContent title="TIPO DE GRUPO" content="Tipo Grupo IM" />
    //       <CardConsultasContent title="LEGISLAÇÃO" content="Circular 3432" />
    //       <CardConsultasContent title="FILIAL REUNIÕES" content="Local 1" />
    //       <CardConsultasContent title="TIPO DE SORTEIO" content="LOTERIA FEDERAL" />

    //     </Grid>
    //   </Card>

    //   {/*  */}

    //   <Card>
    //     <Grid container justifyContent="space-between" padding={3} gap={2}>

    //       <CardConsultasContent title="% MULTAS" content="2,0000%" />
    //       <CardConsultasContent title="% JUROS" content="1,0000%" />
    //       <CardConsultasContent title="PLANO DE SEGURO" content="-" />
    //       <CardConsultasContent title="SEG. GARANT. / FD RES" content="Não" />
    //       <CardConsultasContent title="CARACTERÍSTICAS" content="(demo)" />

    //     </Grid>
    //   </Card>

    // </Box>

    // -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    <Box>
      <Box display="flex" alignItems="flex-start" gap={0.5} >
        <IconButton
          href="./"
          sx={{ color: "#00000099" }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography component="h1" fontSize="26px" color="#00000099" marginBottom="10px">
          Dados do Grupo
        </Typography>
      </Box>

      <Grid container component={Card} elevation={0} justifyContent="space-between" padding="16px" marginBottom="10px">
        <ConsultasTopBarInfo grupo="001096" planoBasico="220" maximoCota="880" situacao="ANDAMENTO - 26/12/2022" />
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Card elevation={0}>
            <Box paddingX="16px" paddingTop="16px">
              <Typography variant="h5">
                Assembleia
              </Typography>
            </Box>

            <List>
              <ListItemCardConsulta title="Data da 1ª Assembleia" content="23/02/2019" />
              <ListItemCardConsulta title="Encerramento Previsto" content="22/05/2037" />
              <ListItemCardConsulta title="Legislação do Grupo" content="Circular 3432" />
              <ListItemCardConsulta title="Tipo de sorteio" content="LOTERIA FEDERAL" />
              <ListItemCardConsulta title="Filial para as Reuniões" content="Local 1" />
            </List>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4} display="flex" flexDirection="column" gap={2}>
          <Card elevation={0} sx={{ flexGrow: 1 }}>
            <Box paddingX="16px" paddingTop="16px">
              <Typography variant="h5">
                Percentual de Multa
              </Typography>
            </Box>

            <List>
              <ListItemCardConsulta title="Percentual de Multa" content="2,0000%" />
            </List>
          </Card>

          <Card elevation={0} sx={{ flexGrow: 1 }}>
            <Box paddingX="16px" paddingTop="16px">
              <Typography variant="h5">
                Percentual de Juros
              </Typography>
            </Box>

            <List>
              <ListItemCardConsulta title="Percentual de Juros" content="1,0000%" />
            </List>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4} display="flex">
          <Card elevation={0} sx={{ flexGrow: 1 }}>
            <Box paddingX="16px">
              <Typography variant="h5">
                Seguros
              </Typography>
            </Box>

            <List>
              <ListItemCardConsulta title="Plano de Seguro" content="-" />
              <ListItemCardConsulta title="Seg. Garantia / FD RES" content="Não" />
              <ListItemCardConsulta title="Características" content="Imóveis" />
            </List>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}


