import { useState } from "react"
import { ThemeProvider } from "styled-components"
import { Transactions } from "./assets/pages/Transactions"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Transactions />
    </ThemeProvider>
  )
}
