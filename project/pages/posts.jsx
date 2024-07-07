import FormularioPost from "@/components/Form-Post";
import HeaderForm from "@/components/Header-Form";
import useAuth from "@/hook/useAuth";

const PaginaFormulario = () => {
useAuth()


  return (
    <div className="bg-gray-100 min-h-screen">
      <HeaderForm />
      <div className="container mx-auto px-4 py-8">
        <FormularioPost />
      
      </div>
    </div>
  );
}

export default PaginaFormulario;