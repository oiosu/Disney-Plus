import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

const Nav = () => {
    const [show, setShow] = useState(false);

    const handleScroll = useCallback(() => {
        if (window.scrollY > 50) {
            setShow(true);
        } else {
            setShow(false);
        }
    }, []); // 빈 의존성 배열로 변경

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <NavWrapper show={show.toString()}>
            <Logo>
                <img
                    alt="Disney Plus Logo"
                    src="/images/logo.svg"
                    onClick={() => (window.location.href = "/")}
                />
            </Logo>
        </NavWrapper>
    );
};

const NavWrapper = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
`;

const Logo = styled.a`
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;

    img {
        display: block;
        width: 100%;
    }
`;

export default Nav;
