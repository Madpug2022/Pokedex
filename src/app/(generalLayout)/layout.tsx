import background from '@/assets/images/background.jpg'
export default function GeneralLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main
            className="w-full h-full p-3 bg-blue-400">
            <div style={{ backgroundImage: `url(${background.src})`, backgroundSize: 'contain' }}
                className="w-full h-full">
                {children}
            </div>
        </main>
    );
}
