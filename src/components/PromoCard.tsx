import Logo from "./Logo";
import RoundedButton from "./RoundedButton";

function PromoCard() {
  return (
    <div className="mx-8 my-8 flex h-[34rem] sm:h-[26rem] max-w-5xl transform flex-col items-center justify-center gap-6 rounded-xl bg-[#1a2188] p-6 text-center text-white sm:p-16 md:h-[32rem] lg:p-56">
      <Logo colour="text-cyan-500" />
      <p className="max-w-[86em] text-2xl font-semibold sm:text-xl md:text-3xl">
        Want to learn more about Medwork?
      </p>
      <p className="text-md max-w-[86em] font-normal sm:text-xl md:text-2xl">
        We believe in harnessing science for human good. So whether you are a
        provider, drug developer, hospital, medical researcher or patient—we
        promise to work tirelessly to bring you trusted information to make
        clear, confident decisions for a healthier future.
      </p>
      <RoundedButton label="GET IN TOUCH" href="/contact-us" color="gray" />
    </div>
  );
}

export default PromoCard;
