import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <main className="flex-grow pt-16 md:pt-20">
                {children}
            </main>
            <Footer />
        </div>
    );
};
