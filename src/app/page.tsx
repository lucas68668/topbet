import HomeV1 from "./_components/HomeV1";
import HomeV2 from "./_components/HomeV2";

export const runtime = "edge";

export default function Home() {
  return <HomeV2 />;
}
