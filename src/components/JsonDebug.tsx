// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function JsonDebug({ json }: any) {
  return <pre>{JSON.stringify(json, null, 2)}</pre>;
}
