import FooterRegister from '@/components/Footer-Register';
import HeaderRegister from '@/components/Header-Register';
import RegisterForm from '@/components/RegisterForm';

export default function RegisterPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
      <HeaderRegister />
      <main className="flex-grow flex justify-center items-center">
        <RegisterForm />
      </main>
      <FooterRegister className="py-4" />
    </div>
  );
}




