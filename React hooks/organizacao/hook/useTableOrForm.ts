import { useState } from "react";

export default function useTableOrForm() {
    const [visible, setVisible] = useState<'tabela' | 'form'>("tabela")

    return {
         visibleTable: visible === "tabela",
         visibleForm: visible == 'form',
         exibirTable: () => setVisible('tabela'),
         exibirForm: () => setVisible("form"),
         alternar: () => visible == "tabela"? setVisible("form") : setVisible("tabela")
    }
}