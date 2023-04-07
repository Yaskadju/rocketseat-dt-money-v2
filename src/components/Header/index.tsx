import * as C from "./styles"
import logoImg from "../../assets/logo.svg"
import * as Dialog from "@radix-ui/react-dialog"
import { NewTransactionModal } from "../NewTransactionModal"

export function Header() {
  return (
    <C.HeaderContainer>
      <C.HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <C.NewTransactionButton>Nova Transação</C.NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </C.HeaderContent>
    </C.HeaderContainer>
  )
}
