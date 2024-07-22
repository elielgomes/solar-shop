import React from "react";
import { LogIn, User } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export const UserAccountPopover: React.FC = () => {
  return (
    <Popover>
      <PopoverTrigger asChild className="cursor-pointer">
        <User size={24} />
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Entre em sua conta</h4>
            <p className="text-sm text-muted-foreground">
              Faça o login ou registre-se.
            </p>
          </div>
          <div>
            <Button className="w-full flex gap-2 items-center">
              Entrar <LogIn className="size-4" />
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
