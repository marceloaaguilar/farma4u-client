import { toast } from 'react-toastify';

const Alert = () => {
    const id = toast.loading("Por favor aguarde...");
    return (
        toast.update(id, { render: "O CPF deve possuir 11 caracteres", type: "error", isLoading: false })
    )

}

export default Alert