import Image from "next/image";
import About1 from "../public/about.svg";
import About2 from "../public/about2.svg";

const AboutPage = () => {
  return (
    <div className="max-w-[80vw] xl:max-w-[50vw] mt-0 flex flex-col gap-8">
      <div className="mb-4 flex min-w-full">
        <div className="">
          <Image
            width={400}
            height={400}
            src={About1}
            alt="about 1"
            className="hidden md:block"
          />
        </div>
        <h1 className="mt-4 text-5xl font-black md:ml-8">
          Over 6 million ratings recorded
        </h1>
      </div>
      <div className="text-lg mb-4 xl:w-[60%]">
        <p>
          Tens of thousands already use Musicboard to share their thoughts and
          opinions within music. We provide a platform that allows our community
          to share and grow their passion for music together. With a combination
          of ratings, reviews, and lists, their profile quickly becomes a
          central hub for their life in music.
        </p>
      </div>
      <div className="mb-4 flex min-w-full">
        <h1 className="mr-8 my-auto text-5xl font-black">Our vision </h1>
        <div className="">
          <Image
            width={400}
            height={400}
            src={About2}
            alt="about 1"
            className="hidden md:block"
          />
        </div>
      </div>
      <div className="text-lg mb-4 xl:w-[60%] lg:ml-auto">
        <p>
          Founded just recently in 2077, our vision is to build a thriving and
          positive community of music-lovers, where people from all around the
          world can connect through their shared love for music. It is based on
          the belief that music is something very personal, but very social, as
          the founders couldn't help but discuss the details that make Johnny
          Silverhand's Chippin' In so perfect.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
