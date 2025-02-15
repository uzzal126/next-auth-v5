import SignUpForm from "@/src/components/form/SignUpForm";
import LayoutStyleOne from "@/src/components/layouts/LayoutStyleOne";

export const metadata = {
  title: "Sign Up",
  description: "Generated by create next app",
};

const PrivacyPolicyView = () => {
  return (
    <LayoutStyleOne>
      <main>
        <div className="py-15">
          <div className="container">
            <SignUpForm />
          </div>
        </div>
      </main>
    </LayoutStyleOne>
  );
};

export default PrivacyPolicyView;
