import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const handleLogin = async () => {
    const discord_auth = window.open(
      "https://discord.com/api/oauth2/authorize?client_id=591320769460436992&redirect_uri=http%3A%2F%2F127.0.0.1%3A5000%2Fdiscord-callback&response_type=code&scope=identify",
      "_self"
    );

    console.log(discord_auth);
  };

  return (
    <div className="flex flex-col h-screen w-screen font-sans">
      <Head>
        <title>Akashi web</title>
      </Head>
      <div className="flex flex-col h-full items-center justify-center">
        <h1 className="text-5xl">Welcome to Akashi Web</h1>
        <button
          className="py-4 px-20 mt-12 border-2 rounded-full text-xl hover:bg-gray-100"
          onClick={() => handleLogin()}
        >
          Login via discord
        </button>
      </div>
      <div className="flex items-center justify-between mx-6 my-6">
        <div className="flex items-center">
          <Image
            src="/akashiavatar.png"
            alt="Akashi"
            width={50}
            height={50}
            className="rounded-2xl"
          />
          <p className="text-2xl font-semibold mx-3">Akashi</p>
        </div>
        <div className="text-xl">Discord</div>
      </div>
    </div>
  );
}
