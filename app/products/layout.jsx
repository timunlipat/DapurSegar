import Container from '@/components/Container';

export default function ProductsLayout({ children }) {
    return (
        <Container className="py-8">
            {children}
        </Container>
    );
}