import Logo from "./Logo";
import RoundedButton from "./RoundedButton";

function PromoCard() {
  return (
    <div className="my-8 flex sm:h-[30rem] max-w-5xl transform flex-col items-center justify-center gap-6 rounded-xl bg-cyan-600 px-12 py-20 text-center text-white sm:p-16 md:h-[32rem] lg:p-56">
      <Logo />
      <p className="max-w-[1476px] text-2xl font-semibold sm:text-xl md:text-3xl">
        Want to learn more about Medwork?
      </p>
      <p className="text-md max-w-[1476px] font-normal sm:text-xl md:text-2xl">
        We are firm believers in leveraging scientific advancements for the betterment of mankind. Whether you&apos;re a healthcare provider, pharmaceutical innovator, medical institution, scientific investigator, or a patient, our commitment remains unshaken—we will persistently provide trustworthy information to help you make well-informed, confident choices for a healthier tomorrow.
      </p>
      <RoundedButton label="GET IN TOUCH" href="/contact-us" />
    </div>
  );
}

export default PromoCard;
