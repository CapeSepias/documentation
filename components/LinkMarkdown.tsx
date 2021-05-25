import React from 'react';
import Link from 'next/link';

const LinkMarkdown = (props: { href: string; children: string }): JSX.Element => {
    return !props.href ? (
        <a>{props.children}</a>
    ) : props.href.startsWith('#') || props.href.startsWith('http') ? (
        <a href={props.href}>{props.children}</a>
    ) : (
        <Link href={props.href}>
            <a>{props.children}</a>
        </Link>
    );
};

export default LinkMarkdown;
