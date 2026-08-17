import heroImage from "../../assets/images/hero.png";
import FadeInSection from "../FadeInSection/FadeInSection";
import ReserveButton from "../ReserveButton";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative mx-auto max-w-[1512px] px-[20px] md:px-[40px] md:py-[80px] lg:pt-[16px] lg:pr-[61px] lg:pb-[30px] lg:pl-[60px]">
        <div className="relative flex min-h-[480px] w-full items-center justify-center overflow-hidden rounded-[6px] md:min-h-[600px] md:items-start md:rounded-[12px] lg:h-[774px] lg:rounded-[16px]">
          <img
            src={heroImage}
            alt="Women gathered around a formal dinner table, celebrating together"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

          <FadeInSection className="relative z-10 flex flex-col items-center gap-[20px] p-[24px] text-center md:gap-[36px] md:p-0">
            <div className="flex w-full flex-col items-center gap-[20px] bg-[rgba(154,100,22,0.2)] backdrop-blur-[0.5px] md:gap-[36px] md:rounded-[4px] md:bg-[rgba(154,100,22,0.14)] md:p-[16px] md:backdrop-blur-[2px] lg:mx-auto lg:max-w-[854px] lg:bg-[rgba(154,100,22,0.1)] lg:pt-[38px] lg:pr-[24px] lg:pb-[24px] lg:pl-[24px]">
              <div className="flex flex-col items-center gap-[12px] md:gap-[18px]">
                <h1 className="font-helvetica font-normal tracking-[0em] leading-normal text-white text-[32px] md:whitespace-nowrap md:text-[35px] lg:text-[60px] lg:text-left">
                  THE ROYAL TABLE IS SET
                </h1>
                <p className="font-lora text-[18px] font-medium italic capitalize leading-normal text-subtext-yellow md:text-2xl md:font-normal md:text-left">
                  Your Seat Is Waiting
                </p>
                <p className="font-open-sans max-w-[264px] text-sm font-semibold leading-[1.4] text-white text-center md:w-[374px] md:max-w-none md:font-helvetica md:text-lg md:font-normal md:leading-normal md:text-[rgba(255,248,235,0.85)] md:[-webkit-text-stroke:0.2px_rgba(255,248,235,0.85)]">
                  Step into a permanent home where you are seen, known, and
                  empowered to thrive in every sphere.
                </p>
              </div>

              <div className="pt-[12px] md:pt-0">
                <ReserveButton className="px-5 py-2 text-xl md:px-4 md:py-2 lg:px-9 lg:py-3 lg:w-[141px] lg:h-[49px]" />
              </div>
            </div>
          </FadeInSection>

          <div
            className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_50px_70px_0px_rgba(0,0,0,0.5)]"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
