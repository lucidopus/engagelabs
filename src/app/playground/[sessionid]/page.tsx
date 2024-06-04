export default function SessionDetail({
  params,
}: {
  params: { sessionid: string };
}) {
  return (
    <>
      <h1 className="text-2xl font-mono p-5">
        <span className="font-bold">Session</span>: {params.sessionid}
      </h1>
    </>
  );
}
