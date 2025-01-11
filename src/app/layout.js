import 'normalize.css';
import './styles/globals.css';
import ThemeProviders from '@/context/theme-providers';
import Header from '@/components/Header/Header';

export const metadata = {
    title: 'Tailwind Learning',
    description: 'Tailwind Learning Project',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body>
        <ThemeProviders>
            <Header />
            {children}
        </ThemeProviders>
        </body>
        </html>
    );
}