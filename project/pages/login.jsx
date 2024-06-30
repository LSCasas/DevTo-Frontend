import HeaderLogin from "@/components/Header-Login";
import SocialLoginButtons from "@/components/SocialLoginButtons";
import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center bg-white min-h-screen">
      <HeaderLogin />
      <div className="w-full md:w-1/2 lg:w-1/3 px-4">
        <SocialLoginButtons />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 px-4">
        <LoginForm />
      </div>
    </div>
  );
}


