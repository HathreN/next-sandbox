
export default function DashboardLayout({
                                            children,
                                        }: {
    children: React.ReactNode,
}) {
    return <section className="bg-red-200">{children}</section>;
}