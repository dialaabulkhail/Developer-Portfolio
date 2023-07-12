import Socials from '@/components/Socials'
import Image from "next/image"

const IntroSection = ({ heading, subHeading, avatar, socials }) => {
  return (
    <section className="w-full flex flex-col-reverse md:flex-row justify-start">
      <div className="flex-1 flex flex-col gap-y-4">
        <h1 className="text-3xl md:text-5xl font-bold max-w-2xl text-fore-primary">
          {heading || 'Developer Portfolio'}
        </h1>
        <h2 className="mb-4 max-w-lg">
          {subHeading || 'This portfolio template is powered by Cosmic.'}
        </h2>
        <Socials
          resume={socials?.metadata.resume.url}
          email={socials?.metadata.email}
          github={socials?.metadata.github}
          linkedin={socials?.metadata.linkedin}
        />
      </div>
      <div className="w-[100px] sm:w-[200px] rounded-full bg-[#F1C376]/50">
      <div className="w-[110px] sm:w-[210px] rounded-full bg-white/10">
      <div className="w-[90px] sm:w-[190px] relative mr-10  sm:mb-0 rounded-full">
        <Image
          src={avatar}
          alt="Developer Avatar"
          height={190}
          width={190}
          quality={60}
          className="rounded-full"
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
      </div>
      </div>
      </div>
    </section>
  );
}

export default IntroSection
