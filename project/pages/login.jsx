import Header from "@/components/Header-Login";
import SocialLoginButtons from "@/components/SocialLoginButtons";
import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center bg-white min-h-screen">
      <Header />
      <SocialLoginButtons />
      <LoginForm />
    </div>
  );
}


