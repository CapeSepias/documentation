import React from 'react';
import { useRouter } from 'next/dist/client/router';
import { GetServerSidePropsResult } from 'next';
import classNames from 'classnames';

// Components
import { CodeSharePost } from '@components/CodeSharePost';
import { CodeShareSide } from '@components/CodeShareSide';

// Graphql
import { CODE_SHARE_QUERY_LIST_ARTICULES, CODE_SHARE_QUERY_LIST_TAGS } from '@graphql/queries';

// Utils
import { client } from '@utils/graphql-client';

// Models
import { codesharePost } from '@models/CodeShare.model';

export default function Home({ data, page }: { data: codesharePost[]; page: number }): JSX.Element {
    return (
        <div className="container flex flex-grow mx-auto">
            <main className="px-5">
                <h1 className="mb-0">Code Share</h1>
                <h2 className="mb-10 mt-0">Recent Submissions</h2>
                {data.map((item) => (
                    <CodeSharePost key={item.urlTitle} data={item} />
                ))}
                <NextPrevButtons page={page} />
            </main>
            <CodeShareSide />
        </div>
    );
}

const NextPrevButtons = ({ page }: { page: number }): JSX.Element => {
    const router = useRouter();
    const buttonClasses = [
        'bg-white',
        'border-gray',
        'border',
        'mr-2',
        'px-2',
        'py',
        'rounded',
        'focus:outline-none'
    ];
    return (
        <>
            {page > 1 ? (
                <button
                    className={classNames(buttonClasses)}
                    onClick={() => router.push(`/codeshare?page=${page - 1}`)}
                >
                    Previous
                </button>
            ) : null}
            <button
                className={classNames(buttonClasses)}
                onClick={() => router.push(`/codeshare?page=${page + 1}`)}
            >
                Next
            </button>
        </>
    );
};

export async function getServerSideProps({
    query: { page = 1, tag = '' }
}: {
    query: { page: number; tag: string };
}): Promise<GetServerSidePropsResult<{ data: codesharePost[]; page: number; tag: string }>> {
    const startFrom = page <= 1 ? 0 : (page - 1) * 10;
    // Variables
    const variableTag = { tags: `+tags:${tag}` };
    const variablePag = { offset: startFrom };
    const { CodeshareCollection } = tag
        ? await client.request(CODE_SHARE_QUERY_LIST_TAGS, variableTag)
        : await client.request(CODE_SHARE_QUERY_LIST_ARTICULES, variablePag);
    return {
        props: {
            data: CodeshareCollection as codesharePost[],
            page: +page,
            tag: tag
        }
    };
}
