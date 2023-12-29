import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at Blazity - clone",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
