import Link from "next/link";

export type User = {
  id: number;
  name: string;
};

export default async function Home() {
  return (
    <main className="">
      <h2>レンダリングの種類を確認</h2>
      <div className="mt-20 flex flex-col gap-10">
        <p>クライアントサイドレンダリング(Client Side Rendering)</p>
        <p>スタティックサイトジェネレーション(Static Side Generation)</p>
        <p>サーバーサイドレンダリング(Server Side Rendering)</p>
        <p>
          インクリメンタルスタティックジェネレーション(incremental Static
          Regeneration)
        </p>
      </div>
    </main>
  );
}
