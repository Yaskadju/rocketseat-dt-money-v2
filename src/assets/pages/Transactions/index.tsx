import { Header } from "../../../components/Header"
import { Summary } from "../../../components/Summary"
import { SearchForm } from "./components/SearchForm"
import * as C from "./styles"

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <C.TransactionsContainer>
        <SearchForm />

        <C.TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de Site</td>
              <td>
                <C.PriceHighlight variant="income">R$ 12.000,00</C.PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">McDonalds</td>
              <td>
                <C.PriceHighlight variant="outcome">- R$ 42.00</C.PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>19/04/2022</td>
            </tr>
          </tbody>
        </C.TransactionsTable>
      </C.TransactionsContainer>
    </div>
  )
}
