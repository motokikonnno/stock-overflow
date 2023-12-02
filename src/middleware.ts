import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const locale = request.headers.get('accept-language');

  if (!locale) return;

  const language = getLanguage(locale);
  const pathname = request.nextUrl.pathname;

  // 既に適切な言語コードで始まっている場合は、リダイレクトしない
  if (pathname.startsWith(`/${language}`)) {
    return;
  }

  request.nextUrl.pathname = `/${language}${pathname}`;

  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?![^/.]).*)'],
};

const getLanguage = (str: string) => {
  return str.startsWith('ja') ? 'ja' : 'en';
};
