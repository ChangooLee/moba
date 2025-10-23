import React from 'react';
import { Link } from 'react-router-dom';

/**
 * 다국어 지원 버튼 컴포넌트
 * @param {Object} props - 컴포넌트 props
 * @param {string} props.variant - 버튼 스타일 ('primary' | 'secondary' | 'danger' | 'outline')
 * @param {string} props.size - 버튼 크기 ('sm' | 'md' | 'lg')
 * @param {Function} props.onClick - 클릭 이벤트 핸들러
 * @param {React.ReactNode} props.children - 버튼 내용
 * @param {boolean} props.disabled - 비활성화 상태
 * @param {string} props.className - 추가 CSS 클래스
 * @param {string} props.type - 버튼 타입 ('button' | 'submit' | 'reset')
 * @param {string} props.to - Link 경로 (Link로 사용할 때)
 * @param {string} props.href - 외부 링크 (a 태그로 사용할 때)
 */
const Button = ({
    variant = 'primary',
    size = 'md',
    children,
    disabled = false,
    className = '',
    type = 'button',
    onClick,
    to,
    href,
    ...props
}) => {
    const baseClasses = 'font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-padi-blue text-white hover:bg-padi-dark-blue focus:ring-padi-blue',
        secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
        danger: 'bg-padi-red text-white hover:bg-red-700 focus:ring-padi-red',
        outline: 'border-2 border-padi-blue text-padi-blue hover:bg-padi-blue hover:text-white focus:ring-padi-blue',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
    };

    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

    // Link로 사용할 때
    if (to) {
        return (
            <Link
                to={to}
                className={`${classes} inline-block text-center no-underline`}
                onClick={onClick}
                {...props}
            >
                {children}
            </Link>
        );
    }

    // 외부 링크로 사용할 때
    if (href) {
        return (
            <a
                href={href}
                className={`${classes} inline-block text-center no-underline`}
                onClick={onClick}
                {...props}
            >
                {children}
            </a>
        );
    }

    // 일반 버튼으로 사용할 때
    return (
        <button
            type={type}
            className={classes}
            disabled={disabled}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;


