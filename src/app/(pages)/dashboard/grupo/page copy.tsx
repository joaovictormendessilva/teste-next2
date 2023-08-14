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

    <Box>
      <Box display="flex" alignItems="flex-start" gap={0.5}>
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
      <Box>
        <Grid container spacing={3}>
          {/* <Grid item xs={12} sm={4} md={4} lg={4}> */}
          <Grid item xs={12} sm={12} md={4}>
            <Card>
              <Box>
                <List>
                  <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
                    <ListItemText primaryTypographyProps={{ fontSize: "0.785rem" }}>
                      PLANO BÁSICO
                    </ListItemText>

                    <ListItemText primaryTypographyProps={{ fontWeight: "bold", textAlign: "end", fontSize: "0.785rem" }}>
                      240 meses
                    </ListItemText>
                  </ListItem>

                  <Divider />

                  <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
                    <ListItemText primaryTypographyProps={{ fontSize: "0.785rem" }}>
                      MAX DE COTAS
                    </ListItemText>

                    <ListItemText primaryTypographyProps={{ fontWeight: "bold", textAlign: "end", fontSize: "0.785rem" }}>
                      0990
                    </ListItemText>
                  </ListItem>

                  <Divider />

                  <ListItem sx={{ display: "flex", justifyContent: "space-between", gap: 1 }}>
                    <ListItemText primaryTypographyProps={{ fontSize: "0.785rem" }}>
                      SITUAÇÃO
                    </ListItemText>

                    <ListItemText primaryTypographyProps={{ fontWeight: "bold", textAlign: "end", fontSize: "0.785rem" }}>
                      ANDAMENTO - 26/12/2022
                    </ListItemText>
                  </ListItem>

                  <Divider />

                  <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
                    <ListItemText primaryTypographyProps={{ fontSize: "0.785rem" }}>
                      1ª ASSEMB
                    </ListItemText>

                    <ListItemText primaryTypographyProps={{ fontWeight: "bold", textAlign: "end", fontSize: "0.785rem" }}>
                      20/01/2023
                    </ListItemText>
                  </ListItem>

                  <Divider />

                  <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
                    <ListItemText primaryTypographyProps={{ fontSize: "0.785rem" }}>
                      ENCERRAMENTO PREV
                    </ListItemText>

                    <ListItemText primaryTypographyProps={{ fontWeight: "bold", textAlign: "end", fontSize: "0.785rem" }}>
                      19/12/2042
                    </ListItemText>
                  </ListItem>
                </List>
              </Box>
            </Card>
          </Grid>
          {/* <Grid item xs={12} sm={4} md={4} lg={4}> */}
          <Grid item xs={12} sm={12} md={4}>
            <Card>
              <Box>
                <List>
                  <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
                    <ListItemText primaryTypographyProps={{ fontSize: "0.785rem" }}>
                      TIPO DE GRUPO
                    </ListItemText>

                    <ListItemText primaryTypographyProps={{ fontWeight: "bold", textAlign: "end", fontSize: "0.785rem" }}>
                      Tipo Grupo IM
                    </ListItemText>
                  </ListItem>

                  <Divider />

                  <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
                    <ListItemText primaryTypographyProps={{ fontSize: "0.785rem" }}>
                      LEGISLAÇÃO
                    </ListItemText>

                    <ListItemText primaryTypographyProps={{ fontWeight: "bold", textAlign: "end", fontSize: "0.785rem" }}>
                      Circular 3432
                    </ListItemText>
                  </ListItem>

                  <Divider />

                  <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
                    <ListItemText primaryTypographyProps={{ fontSize: "0.785rem" }}>
                      FILIAL REUNIÕES
                    </ListItemText>

                    <ListItemText primaryTypographyProps={{ fontWeight: "bold", textAlign: "end", fontSize: "0.785rem" }}>
                      Local 1
                    </ListItemText>
                  </ListItem>

                  <Divider />

                  <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
                    <ListItemText primaryTypographyProps={{ fontSize: "0.785rem" }}>
                      TIPO DE SORTEIO
                    </ListItemText>

                    <ListItemText primaryTypographyProps={{ fontWeight: "bold", textAlign: "end", fontSize: "0.785rem" }}>
                      LOTERIA FEDERAL
                    </ListItemText>
                  </ListItem>

                </List>
              </Box>
            </Card>
          </Grid>
          {/* <Grid item xs={12} sm={4} md={4} lg={4}> */}
          <Grid item xs={12} sm={12} md={4}>
            <Card>
              <Box>
                <List>
                  <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
                    <ListItemText primaryTypographyProps={{ fontSize: "0.785rem" }}>
                      % MULTAS
                    </ListItemText>

                    <ListItemText primaryTypographyProps={{ fontWeight: "bold", textAlign: "end", fontSize: "0.785rem" }}>
                      2,0000%
                    </ListItemText>
                  </ListItem>

                  <Divider />

                  <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
                    <ListItemText primaryTypographyProps={{ fontSize: "0.785rem" }}>
                      % JUROS
                    </ListItemText>

                    <ListItemText primaryTypographyProps={{ fontWeight: "bold", textAlign: "end", fontSize: "0.785rem" }}>
                      1,0000%
                    </ListItemText>
                  </ListItem>

                  <Divider />

                  <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
                    <ListItemText primaryTypographyProps={{ fontSize: "0.785rem" }}>
                      PLANO DE SEGURO
                    </ListItemText>

                    <ListItemText primaryTypographyProps={{ fontWeight: "bold", textAlign: "end", fontSize: "0.785rem" }}>
                      -
                    </ListItemText>
                  </ListItem>

                  <Divider />

                  <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
                    <ListItemText primaryTypographyProps={{ fontSize: "0.785rem" }}>
                      SEG. GARANT. / FD RES
                    </ListItemText>

                    <ListItemText primaryTypographyProps={{ fontWeight: "bold", textAlign: "end", fontSize: "0.785rem" }}>
                      Não
                    </ListItemText>
                  </ListItem>

                  <Divider />

                  <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
                    <ListItemText primaryTypographyProps={{ fontSize: "0.785rem" }}>
                      CARACTERÍSTICAS
                    </ListItemText>

                    <ListItemText primaryTypographyProps={{ fontWeight: "bold", textAlign: "end", fontSize: "0.785rem" }}>
                      (demo)
                    </ListItemText>
                  </ListItem>
                </List>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>

    </Box>

    // -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  )
}