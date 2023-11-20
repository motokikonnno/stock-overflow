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
  matcher: ['/((?!_next).*)'],
};

const getLanguage = (str: string) => {
  var elements = str.split(',');

  if (elements[0] === 'ja') {
    return 'ja';
  } else {
    return 'en';
  }
};
