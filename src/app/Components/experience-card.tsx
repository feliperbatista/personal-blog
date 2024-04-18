import Image from "next/image";

interface ExperienceCardPorps {
  image: string,
  alt: string,
  title: string,
  description: string,
}

export default function ExperienceCard(props: ExperienceCardPorps) {
  return(
    <li className="appear rounded-lg flex lg:flex-row sm:flex-col justify-center align-middle mb-5 py-5 transition-all group hover:bg-white/10 hover:shadow">
            <Image src={props.image} alt={props.alt} width={1500} height={1500} quality={100} className='rounded justify-self-center lg:ml-2 lg:w-1/4 lg:h-1/4 sm:w-4/5 sm:h-4/5 sm:mb-3 sm:mx-auto'/>
          <div className='mx-3'>
            <h3 className='text-text group-hover:text-highlight'>{props.title}</h3>
            <p className='text-title text-sm'>{props.description}</p>
          </div>
          </li>
  );
}
