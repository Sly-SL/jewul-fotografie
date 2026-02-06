'use client';

import dynamic from 'next/dynamic';

const CookieBanner = dynamic(
    () => import('@/shared/components/lib/basic/cookie.component'),
    { ssr: false }
);

export default function CookieBannerClient() {
    return <CookieBanner />;
}