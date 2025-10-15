import React from 'react';

/**
 * 재사용 가능한 카드 컴포넌트
 * @param {Object} props - 컴포넌트 props
 * @param {React.ReactNode} props.children - 카드 내용
 * @param {string} props.className - 추가 CSS 클래스
 * @param {boolean} props.hover - 호버 효과 활성화
 * @param {boolean} props.shadow - 그림자 효과
 */
const Card = ({
    children,
    className = '',
    hover = false,
    shadow = true,
    ...props
}) => {
    const baseClasses = 'bg-white rounded-lg border border-gray-200 p-6';
    const hoverClasses = hover ? 'hover:shadow-lg transition-shadow duration-200 cursor-pointer' : '';
    const shadowClasses = shadow ? 'shadow-md' : '';

    const classes = `${baseClasses} ${shadowClasses} ${hoverClasses} ${className}`;

    return (
        <div className={classes} {...props}>
            {children}
        </div>
    );
};

export default Card;


