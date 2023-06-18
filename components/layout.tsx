import { Inter } from "next/font/google";

interface LayoutProps {
    children?: React.ReactNode;
}

const inter = Inter({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Layout({ children }: LayoutProps) {
    return (
        <div
            className="min-h-screen flex flex-col"
            style={{ background: "transparent" }}
        >
            <div className="sticky top-0 w-full"></div>

            <div>
                <main
                    className={`${inter.className} min-h-screen flex flex-col`}
                >
                    {children}
                </main>
            </div>
        </div>
    );
}
