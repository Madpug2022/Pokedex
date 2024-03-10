import background from '@/assets/images/background.webp'
export default function GeneralLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main
            className="w-full h-full p-10 bg-primary">
            <div style={{ backgroundImage: `url(${background.src})`, backgroundSize: 'cover' }}
                className="w-full h-full">
                {children}
            </div>
        </main>
    );
}
