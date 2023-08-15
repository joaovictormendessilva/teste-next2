'use client';

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Tooltip from '@mui/material/Tooltip';

import { Card, Grid, useTheme } from "@mui/material";

import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/Inbox';
import CloseIcon from '@mui/icons-material/Close';

import { useState } from "react";

import { ProfileMenu } from "../ProfileMenu/ProfileMenu";

import { data } from "../../../../data";

interface ISideMenuProps {
  children: React.ReactNode
}

interface IDataMenusProps {
  cd_menu: string,
  ds_menu: string
}


export function SideMenu({ children }: ISideMenuProps) {
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openSubDrawer, setOpenSubDrawer] = useState(false);
  const [dataMenus, setDataMenus] = useState<IDataMenusProps[]>([]);

  function handleDrawerOpen() {
    setOpenDrawer(true)
  }
  function handleDrawerClose() {
    setOpenDrawer(false)
  }




  // function getMenus(menu: string) {
  //   let result = data.forEach((data) => {
  //     if (menu === "Consultas" && data.cd_menu === "pagina-inicial") {
  //       return data.ds_menu
  //     }
  //   })

  //   console.log(result)
  // }

  // function handleSubDrawerOpen(menu: string) {
  //   setOpenSubDrawer(true)
  //   getMenus(menu)
  // }

  // function getMenus(menu: string) {
  //   let results = data.filter((data) => {
  //     return (menu === "Consultas" && (data.cd_menu === "grupo" || data.cd_menu === "cota" || data.cd_menu === "extrato"));
  //   });

  //   return results.map((result) => result.ds_menu);
  // }

  // function handleSubDrawerOpen(menu: string) {
  //   setOpenSubDrawer(true);
  //   const menuDescriptions = getMenus(menu);
  //   console.log(menuDescriptions);
  // }



  // function getMenus(menu: string) {
  //   let results = data.filter((data) => {
  //     if (menu === "Consultas") {
  //       return data.cd_menu === "pagina-inicial" || data.cd_menu === "grupo" || data.cd_menu === "cota";
  //     } else if (menu === "Serviços") {
  //       return (
  //         data.cd_menu === "oferta-lance" ||
  //         data.cd_menu === "incluir-excluir-sorteio" ||
  //         data.cd_menu === "antecipar-prestacoes" ||
  //         data.cd_menu === "segunda-via-boleto" ||
  //         data.cd_menu === "boleto-quitacao" ||
  //         data.cd_menu === "alterar-senha"
  //       );
  //     }
  //     // Add more conditions if needed for other menus

  //     return false; // Default case, no matching condition
  //   });

  //   return results.map((result) => result.ds_menu);
  // }

  // function handleSubDrawerOpen(menu: string) {
  //   setOpenSubDrawer(true);
  //   const menuDescriptions = getMenus(menu);
  //   console.log(menuDescriptions);
  // }

  function getMenus(menu: string) {
    let results = data.filter((data) => {
      if (menu === "Consultas") {
        return (
          data.cd_menu === "grupo" ||
          data.cd_menu === "cota" ||
          data.cd_menu === "extrato" ||
          data.cd_menu === "assembleias" ||
          data.cd_menu === "calendario-assembleias" ||
          data.cd_menu === "ouvidoria"
        );
      } else if (menu === "Serviços") {
        return (
          data.cd_menu === "oferta-lance" ||
          data.cd_menu === "incluir-excluir-sorteio" ||
          data.cd_menu === "antecipar-prestacoes" ||
          data.cd_menu === "segunda-via-boleto" ||
          data.cd_menu === "boleto-quitacao" ||
          data.cd_menu === "alterar-senha"
        );
      } else if (menu === "Consorciado") {
        return (
          data.cd_menu === "alterar-endereco-cobranca" ||
          data.cd_menu === "alterar-endereco"
        )
      }

      return false;
    });

    return results.map((result) => ({
      cd_menu: result.cd_menu,
      ds_menu: result.ds_menu
    }));
  }

  function handleSubDrawerOpen(menu: string) {
    setOpenSubDrawer(true);
    const menuDescriptions = getMenus(menu);
    setDataMenus(menuDescriptions);
  }

  function handleSubDrawerClose() {
    setOpenSubDrawer(false)
  }

  return (
    <Box display="flex" width="100%" height="100vh" overflow="hidden" sx={{ bgcolor: "#eaf1f5" }}>

      {/* Appbar superior */}
      <AppBar sx={{ backgroundColor: "white", borderRadius: "0 0 0 20px", height: "50px", display: "flex", justifyContent: "center", zIndex: 9999 }} elevation={0}>
        <Toolbar>
          <Tooltip title="Newcon - Admnistração de Grupos" >
            <Typography variant="h6" noWrap component="div" fontSize={14} color="#000000de">
              Newcon - Admnistração de Grupos
            </Typography>
          </Tooltip >
          <Divider orientation="vertical" flexItem sx={{ borderRight: 1, height: "20px", margin: "auto 5px", color: "#bdbdbd" }} />
          <Tooltip title="Empresa: 0101 - SINQIA ADMINISTRADORA DE CONSORCIOS">
            <Typography variant="h6" noWrap component="div" fontSize={14} color="#000000de">
              Empresa: 0101 - SINQIA ADMINISTRADORA DE CONSORCIOS
            </Typography>
          </Tooltip>
          <Divider orientation="vertical" flexItem sx={{ borderRight: 1, height: "20px", margin: "auto 5px", color: "#bdbdbd" }} />
          <Tooltip title="Unidade: SINQIA MOTORS">
            <Typography variant="h6" noWrap component="div" fontSize={14} color="#000000de">
              Unidade: SINQIA MOTORS
            </Typography>
          </Tooltip>
          <Box flexGrow={1}>

          </Box>

          <Box component="div" overflow="visible">
            <ProfileMenu />
          </Box>
        </Toolbar>


      </AppBar>
      {/* End - Appbar superior */}

      <Drawer variant="permanent" PaperProps={{ sx: { position: "inherit", width: openDrawer ? "145px" : "65px", transition: "width 0.3s ease-in-out", backgroundColor: theme.palette.primary.main, overflow: "hidden" } }}>
        {/* Botão que alterna o tamanho do drawer */}
        <List >
          <ListItem disablePadding sx={{ display: 'block', marginTop: 8, position: "fixed" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={openDrawer ? handleDrawerClose : handleDrawerOpen}
              sx={{
                minHeight: 48,
                justifyContent: openDrawer ? 'initial' : 'center',
                px: 2.5,
                color: "white"
              }}
            >
              <MenuIcon />
            </IconButton>
          </ListItem>
        </List>
        {/* End - Botão que alterna o tamanho do drawer */}

        {/* Menus do Drawer */}
        <List sx={{ position: "fixed", top: "100px" }}>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              // href="https://google.com"
              onClick={() => openSubDrawer ? handleSubDrawerClose() : handleSubDrawerOpen("Consultas")}
              sx={{
                minHeight: 48,
                justifyContent: openDrawer ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: openDrawer ? 1 : 'auto',
                  justifyContent: 'center',
                  color: "white"
                }}
              >
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Home" sx={{ display: openDrawer ? "block" : "none", textWrap: 'nowrap', color: "white" }} primaryTypographyProps={{ fontSize: "14px" }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              // href="https://google.com"
              onClick={() => openSubDrawer ? handleSubDrawerClose() : handleSubDrawerOpen("Serviços")}
              sx={{
                minHeight: 48,
                justifyContent: openDrawer ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: openDrawer ? 1 : 'auto',
                  justifyContent: 'center',
                  color: "white"
                }}
              >
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Consultas" sx={{ display: openDrawer ? "block" : "none", textWrap: 'nowrap', color: "white" }} primaryTypographyProps={{ fontSize: "14px" }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              // href="https://google.com"
              onClick={() => openSubDrawer ? handleSubDrawerClose() : handleSubDrawerOpen("Consorciado")}
              sx={{
                minHeight: 48,
                justifyContent: openDrawer ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: openDrawer ? 1 : 'auto',
                  justifyContent: 'center',
                  color: "white"
                }}
              >
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Consorciado" sx={{ display: openDrawer ? "block" : "none", textWrap: 'nowrap', color: "white" }} primaryTypographyProps={{ fontSize: "14px" }} />
            </ListItemButton>
          </ListItem>
        </List>
        {/* End - Menus do Drawer */}
      </Drawer>



      {/* Conteúdo da página que vem como children */}
      <Box height="100%" flex={1} position="relative">
        {/* Drawer Teste */}
        <Drawer variant="permanent"
          PaperProps={{
            sx: {
              position: "absolute",
              width: openSubDrawer ? "220px" : "0px",
              transition: "width 0.3s ease-in-out",
              backgroundColor: "white",
              // marginTop: -30,
              zIndex: 1,
              height: "-webkit-fill-available",
              overflow: "hidden"
            }
          }}>
          {/* Botão que alterna o tamanho do drawer */}
          <List>
            <ListItem disablePadding sx={{ display: 'block', marginTop: 8, textAlign: "right" }}>
              <IconButton
                color="inherit"
                aria-label="close drawer"
                onClick={handleSubDrawerClose}
                sx={{
                  minHeight: 48,
                  justifyContent: openDrawer ? 'initial' : 'center',
                  px: 2.5,
                  color: theme.palette.primary.main,
                }}
              >
                <CloseIcon />
              </IconButton>
            </ListItem>
          </List>
          {/* End - Botão que alterna o tamanho do drawer */}

          {/* Menus do Drawer */}
          <List sx={{ marginTop: "-20px" }}>
            {/* <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                // href="https://google.com"
                sx={{
                  minHeight: 48,
                  justifyContent: openDrawer ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: openDrawer ? 1 : 'auto',
                    justifyContent: 'center',
                    color: theme.palette.primary.main
                  }}
                >
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Página Principal" sx={{ display: openSubDrawer ? "block" : "none", textWrap: 'nowrap', color: theme.palette.primary.main }} />
              </ListItemButton>
            </ListItem> */}

            {dataMenus.map((menu) => (
              <ListItem key={menu.cd_menu} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  href={`../dashboard/${menu.cd_menu}`}
                  sx={{
                    minHeight: 48,
                    justifyContent: openDrawer ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  {/* <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: openDrawer ? 1 : 'auto',
                      justifyContent: 'center',
                      color: theme.palette.primary.main
                    }}
                  >
                    <InboxIcon />
                  </ListItemIcon> */}
                  <ListItemText
                    primary={menu.ds_menu}
                    sx={{ display: openSubDrawer ? "block" : "none", textWrap: 'nowrap', color: theme.palette.primary.main }}
                    primaryTypographyProps={{ fontSize: "14px" }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          {/* End - Menus do Drawer */}
        </Drawer>
        {/* End - Drawer Teste */}

        {/* <Box height="100vh" display="flex" width="100%" overflow="auto" flex={1}> */}
        <Box overflow="auto" height="100%" flex={1} paddingX="24px">
          {children}
        </Box>

      </Box>
      {/* End - Conteúdo da página que vem como children */}
    </Box>
  )
}