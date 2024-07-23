import React from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <hr />
        <div className="flex flex-col gap-y-2 sm:flex-row justify-between py-6 text-muted-foreground">
          <p className="text-sm">© 2024 - Todos os direitos reservados</p>
          <p className="text-sm">
            by{" "}
            <Link
              href="https://github.com/elielgomes"
              target="_blank"
              className="underline underline-offset-1"
            >
              Eliel Gomes
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
