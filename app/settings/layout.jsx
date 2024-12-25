import Container from '@/components/Container';

export default function SettingsLayout({ children }) {
    return (
        <Container className="py-8 max-w-[990px]">
            {children}
        </Container>
    );
}