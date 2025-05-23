
import React from 'react';
import RegistrationFlow from '@/components/registration/RegistrationFlow';
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8 bg-cyber-background">
      <div className="w-full max-w-3xl mx-auto">
        <RegistrationFlow />
      </div>
      
      <footer className="mt-8 text-center text-xs text-muted-foreground">
        <p className="mb-1 text-sm">No passwords are stored. Personal info is used only to prevent weak passwords and improve feedback.</p>
        <p>Password Strength Analyzer with AI © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Index;
