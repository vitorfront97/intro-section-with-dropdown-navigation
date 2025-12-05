import Image from "next/image";

export default function Main() {
  return (
    <div className="flex flex-col items-center gap-8 md:flex-row-reverse md:justify-center md:pt-8 md:px-12 xl:pt-0">
      <picture>
        <source media="(min-width: 768px)" srcSet="/images/image-hero-desktop.png" />
        <Image
          className="h-auto xl:w-[425px]"
          src="/images/image-hero-mobile.png"
          width={375}
          height={0}
          alt="Padrão de cores e um homem ao centro, com um notebook em mãos"
        />
      </picture>
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4 md:items-start md:gap-8">
          <h1 className="text-4xl font-bold md:text-5xl lg:max-w-[360px] lg:text-6xl xl:max-w-[500] xl:text-7xl xl:w-500">Make remote work</h1>
          <p className="px-4 text-this-gray-500 text-center md:px-0 md:w-[300px] md:text-start lg:w-[400px] xl:w-[550px]">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="py-4 px-8 bg-this-gray-950 text-this-gray-50 text-sm font-semibold rounded-2xl tracking-wider cursor-pointer hover:bg-this-gray-50 transition-all duration-200 hover:text-this-gray-950 border border-this-gray-950">
            Learn more
          </button>
        </div>
        <div className="flex items-center md:gap-5">
          <Image
            className="h-auto"
            src="/images/client-databiz.svg"
            width={75}
            height={0}
            alt="Databiz"
          />
          <Image
            className="h-auto"
            src="/images/client-audiophile.svg"
            width={75}
            height={0}
            alt="Audio Phile"
          />
          <Image
            className="h-auto"
            src="/images/client-meet.svg"
            width={75}
            height={0}
            alt="Meet"
          />
          <Image
            className="h-auto"
            src="/images/client-maker.svg"
            width={75}
            height={0}
            alt="Maker"
          />
        </div>
      </div>
    </div>
  );
}
