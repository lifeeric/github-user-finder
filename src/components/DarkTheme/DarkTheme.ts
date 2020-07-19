interface Theme {
  body: string
  surface: string
  font: string
  topbar: string
  boxShadow: string
  hoverEffect: string
  card: string
  border: string
}

export const darkTheme: Theme = {
  body: "#121212",
  surface: "#1D1D1D",
  font: "#D1D1D1",
  topbar: "#1F1F1F",
  boxShadow: "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.4), 0px 1px 5px 0px rgba(0,0,0,0.8)",
  hoverEffect: "#363636",
  card: "#FFFFFF",
  border: "#363636",
}

export const lightTheme: Theme = {
  body: "#FFFFFF",
  surface: "#EEF2F5",
  font: "#2A292E",
  topbar: "#EEF2F5",
  card: "#FFFFFF",
  boxShadow: "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
  hoverEffect: "#FADB22",
  border: "#ababab",
}
