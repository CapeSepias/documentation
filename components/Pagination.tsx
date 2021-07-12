import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

interface PaginationProps {
    baseUrl: string;
    page: number;
    search: string;
    totalCount: number;
    postPerPage: number;
}
export const Pagination = ({
    baseUrl,
    page,
    search,
    totalCount,
    postPerPage
}: PaginationProps): JSX.Element => {
    const buttonClasses = [
        'bg-gray-75',
        'flex',
        'no-underline',
        'px-2',
        'py-2',
        'rounded',
        'focus:outline-none'
    ];
    const arrowButtons = ['w-full', 'h-full', 'flex', 'items-center'];
    const leftArrowClasses = ['transform', 'rotate-180'];
    // Pagination
    const totalPages = Math.ceil(totalCount / postPerPage);
    const start = PagitnationStart(page, totalPages);
    const end = totalPages > 6 ? 6 : totalPages;
    const buttonCount = new Array(end);
    return (
        <>
            <ul className="list-none flex justify-center">
                <li className="mr-2">
                    <Link href={`${baseUrl}/${search}/${page - 1}`}>
                        <a className={classNames(buttonClasses, arrowButtons)}>
                            <ArrowSVG className={leftArrowClasses} />
                        </a>
                    </Link>
                </li>
                {buttonCount.map((item, index) => {
                    const pagNumber = start + index;
                    return (
                        <Link key={index} href={`${baseUrl}/${search}/${pagNumber}`}>
                            <a className={classNames(buttonClasses)}>{pagNumber}</a>
                        </Link>
                    );
                })}
                <li className="mr-2">
                    <Link href={`${baseUrl}/${search}/${page + 1}`}>
                        <a className={classNames(buttonClasses, arrowButtons)}>
                            <ArrowSVG />
                        </a>
                    </Link>
                </li>
            </ul>
        </>
    );
};

const PagitnationStart = (pag: number, totalPages: number): number => {
    if (totalPages < 6 || pag <= 3) {
        return 1;
    } else if (totalPages - 2 > pag) {
        return pag - 2;
    } else {
        return totalPages - 5;
    }
};

const ArrowSVG = ({ className }: { className?: string[] }) => {
    return (
        <svg
            className={classNames('flex', className)}
            height="8px"
            width="8px"
            viewBox="0 0 103.536 103.536"
            x="0px"
            y="0px"
        >
            <g>
                <path
                    d="M0.65,91.928c1.221,2.701,3.881,4.3,6.665,4.3c1.006,0,2.029-0.209,3.006-0.65l88.917-40.195
                    c2.688-1.216,4.381-3.925,4.295-6.873c-0.085-2.948-1.934-5.554-4.687-6.609L9.929,7.794C6.17,6.352,1.933,8.23,0.489,12.001
                    c-1.447,3.769,0.438,7.995,4.207,9.44l72.569,27.834L4.299,82.255C0.62,83.92-1.012,88.249,0.65,91.928z"
                />
            </g>
        </svg>
    );
};
