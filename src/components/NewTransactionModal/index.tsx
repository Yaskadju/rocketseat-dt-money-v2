import * as Dialog from "@radix-ui/react-dialog"
import { ArrowCircleUp, ArrowCircleDown, X } from "phosphor-react"
import * as RadioGroup from "@radix-ui/react-radio-group"
import * as C from "./styles"

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <C.Overlay />

      <C.Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <C.CloseButton>
          <X size={24} />
        </C.CloseButton>

        <form action="">
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <C.TransactionType>
            <C.TransactionTypeButton variant="income" value="income">
              <ArrowCircleUp size={24} /> Entrada
            </C.TransactionTypeButton>
            <C.TransactionTypeButton variant="outcome" value="outcome">
              <ArrowCircleDown size={24} /> Saída
            </C.TransactionTypeButton>
          </C.TransactionType>

          <button type="submit">Cadastrar</button>
        </form>
      </C.Content>
    </Dialog.Portal>
  )
}
