export function navParams(
  searchParams: URLSearchParams,
  key: string,
  value: string
) {
  searchParams.set(key, value);
  return `?${searchParams.toString()}`;
}
