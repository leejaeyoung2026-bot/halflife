import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interactive Drug Half-Life Simulator",
  description:
    "Simulate drug concentration over time for 35+ medications. Visualize single doses, repeat dosing, and steady-state accumulation with a pharmacist-built tool.",
  openGraph: {
    title: "Interactive Drug Half-Life Simulator — HalfLife by Vibed Lab",
    description:
      "Simulate drug concentration over time for 35+ medications. Visualize single doses, repeat dosing, and steady-state accumulation. Free, pharmacist-built.",
    url: "https://halflife.vibed-lab.com/simulator",
    siteName: "HalfLife by Vibed Lab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interactive Drug Half-Life Simulator",
    description:
      "Simulate drug concentration over time for 35+ medications. Visualize single doses, repeat dosing, and steady-state accumulation.",
  },
};

export default function SimulatorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
