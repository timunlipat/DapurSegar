const Container = ({ children, className = "" }) => {
    return (
        <div className={`mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 ${className}`}>
            {children}
        </div>
    );
};

export default Container;