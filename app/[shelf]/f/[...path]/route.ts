import { type NextRequest, NextResponse } from 'next/server';
import { get } from '@vercel/blob';
import { isShelfSegment } from '../../shelfPath';

/**
 * Serves a file off the shelf. The store is private, so the blob's own URL is
 * unreachable without a token: this route is the only door, which is what lets
 * the files sit under niftymonkey.dev instead of a storage hostname.
 */
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ shelf: string; path: string[] }> },
) {
  const { shelf, path } = await context.params;
  if (!isShelfSegment(shelf)) {
    return new NextResponse('Not found', { status: 404 });
  }

  const pathname = path.map(decodeURIComponent).join('/');

  const result = await get(pathname, {
    access: 'private',
    ifNoneMatch: request.headers.get('if-none-match') ?? undefined,
  });

  if (!result) {
    return new NextResponse('Not found', { status: 404 });
  }

  const headers = new Headers({
    'X-Content-Type-Options': 'nosniff',
    'X-Robots-Tag': 'noindex, nofollow',
    ETag: result.blob.etag,
    // Browser-only caching with revalidation. Never a shared cache: the CDN
    // must not hold a copy of a private blob.
    'Cache-Control': 'private, no-cache',
  });

  if (result.statusCode === 304) {
    return new NextResponse(null, { status: 304, headers });
  }

  headers.set('Content-Type', result.blob.contentType);

  const filename = pathname.split('/').pop() ?? 'file';
  if (request.nextUrl.searchParams.get('dl') === '1') {
    headers.set(
      'Content-Disposition',
      `attachment; filename*=UTF-8''${encodeURIComponent(filename)}`,
    );
  }

  return new NextResponse(result.stream, { headers });
}
