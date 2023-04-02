import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Header from "./Header";
import MainPage from "./MainPage";
import LocationCityIcon from "@mui/icons-material/LocationCity";

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function Sidebar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [city, setCity] = React.useState<string>("Toshkent");
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const cities = [
    [
      "Toshkent",
      "Tashkent",
      {
        city: "Tashkent",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Humo_Arena.jpg/290px-Humo_Arena.jpg",
      },
    ],
    [
      "Sirdaryo",
      "Urgench",
      {
        city: "Urgench",
        url: "https://uzbek-travel.com/images/uz/Cities/Urgench/13319676444_b0f57bd296_o.jpg",
      },
    ],
    [
      "Jizzax",
      "Jizzakh",
      {
        city: "Jizzakh",
        url: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Jizzaxfountain.jpg",
      },
    ],
    [
      "Samarqand",
      "Samarkand",
      {
        city: "Samarkand",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/RegistanSquare_Samarkand.jpg/280px-RegistanSquare_Samarkand.jpg",
      },
    ],
    [
      "Qashkadaryo",
      "Qarshi",
      {
        city: "Qarshi",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kok-Gumbaz_mosque_in_Qarshi%2C_front_view.jpg/1024px-Kok-Gumbaz_mosque_in_Qarshi%2C_front_view.jpg",
      },
    ],
    [
      "Surxandaryo",
      "Termez",
      {
        city: "Termez",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Termiz_ArchaeNuseum_20141023.jpg/800px-Termiz_ArchaeNuseum_20141023.jpg",
      },
    ],
    [
      "Farg'ona",
      "Fergana",
      {
        city: "Fergana",
        url: "https://upload.wikimedia.org/wikipedia/commons/2/2b/%D0%A4%D0%B5%D1%80%D0%B3%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B5_%D0%92%D0%BE%D1%80%D0%BE%D1%82%D0%B0.jpg",
      },
    ],
    [
      "Namangan",
      "Namangan",
      {
        city: "Namangan",
        url: "data:image/jpeg;base64,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",
      },
    ],
    [
      "Andijon",
      "Andijan",
      {
        city: "Andijan",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Navoi_Square_%28Formerly_Bobur_Square%29_-_Where_2005_Massacre_Took_Place_-_Andijon_-_Uzbekistan_%287544000842%29.jpg/800px-Navoi_Square_%28Formerly_Bobur_Square%29_-_Where_2005_Massacre_Took_Place_-_Andijon_-_Uzbekistan_%287544000842%29.jpg",
      },
    ],
    [
      "Navoiy",
      "Navoi",
      {
        city: "Navoi",
        url: "https://upload.wikimedia.org/wikipedia/commons/9/93/Photo_2022-03-07_16-41-17NGGI4.jpg",
      },
    ],
    [
      "Xorazm",
      "Urgench",
      {
        city: "Urgench",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Shavat_kanal.jpg/800px-Shavat_kanal.jpg",
      },
    ],
    [
      "Buxoro",
      "Bukhara",
      {
        city: "Bukhara",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/2012_Bukhara_7515821196.jpg/800px-2012_Bukhara_7515821196.jpg",
      },
    ],
    [
      "Qoraqalpog'iston",
      "Karakalpakstan",
      {
        city: "Karakalpakstan",
        url: "https://advice.uz/uploads/news/289529858c42c56e255a31cd0c52a458.jpg",
      },
    ],
  ];

  const drawer = (
    <div>
      <Divider />
      {/* This array need for get Region names for Sidebar and for api */}
      <List>
        {cities.map((text: any) => (
          <ListItem key={text[0]} disablePadding>
            {/* Change city */}
            <ListItemButton onClick={() => setCity((prew) => (prew = text[1]))}>
              <ListItemIcon>
                {/* City icons */}
                <LocationCityIcon />
              </ListItemIcon>
              {/* City names Sidebar */}
              <ListItemText primary={text[0]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const citiesSearch = cities.map((city: any) => city[1])

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{ display: "flex" }}
      className="mainImage bg-no-repeat bg-cover bg-center bg-fixed h-[100%] lg:h-[90vh]"
    >
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        {/* Header Appbar import from Header component */}
        <Header handleClick={handleDrawerToggle} cities={citiesSearch} setCity={setCity} />
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {/* Main Page imported from MainPage component*/}
        <MainPage city={city} cities={cities}  />
      </Box>
    </Box>
  );
}
