import { useEffect, useId, useRef } from 'react'

// <dialog> nativo en modo modal: bloquea el fondo, mueve el foco y se cierra con Escape.
export function Dialogo({ titulo, onCancelar, children }) {
  const referencia = useRef(null)
  const idTitulo = useId()

  useEffect(() => {
    const dialogo = referencia.current
    if (!dialogo.open) {
      dialogo.showModal()
    }
    return () => dialogo.close()
  }, [])

  const cancelar = (evento) => {
    evento.preventDefault()
    onCancelar()
  }

  return (
    <dialog ref={referencia} className="dialogo" aria-labelledby={idTitulo} onCancel={cancelar}>
      <h2 id={idTitulo}>{titulo}</h2>
      {children}
    </dialog>
  )
}
