import FormularioPost from "@/components/Form-Post";
import HeaderForm from "@/components/Header-Form";
import BotonPublicar from "@/components/Publish-Botton";


const PaginaFormulario = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <HeaderForm />
      <div className="container mx-auto px-4 py-8">
        <FormularioPost />
        <BotonPublicar />
      </div>
    </div>
  );
}

export default PaginaFormulario;