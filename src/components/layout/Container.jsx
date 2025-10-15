import React from 'react';

/**
 * 컨테이너 컴포넌트
 * @param {Object} props - 컴포넌트 props
 * @param {React.ReactNode} props.children - 컨테이너 내용
 * @param {string} props.size - 컨테이너 크기 ('sm' | 'md' | 'lg' | 'xl' | 'full')
 * @param {string} props.className - 추가 CSS 클래스
 */
const Container = ({
    children,
    size = 'lg',
    className = '',
    ...props
}) => {
    const sizes = {
        sm: 'max-w-3xl',
        md: 'max-w-4xl',
        lg: 'max-w-7xl',
        xl: 'max-w-8xl',
        full: 'max-w-none',
    };

    const classes = `mx-auto px-4 sm:px-6 lg:px-8 ${sizes[size]} ${className}`;

    return (
        <div className={classes} {...props}>
            {children}
        </div>
    );
};

export default Container;


