import Link from "next/link";
import { FaLink } from "react-icons/fa";

interface EducationCardProps {
  date: string,
  title: string,
  link?: string,
  subtitle: string,
  skills?: string[]
}

export default function EducationCard(props: EducationCardProps) {
  return(
    <li className="appear rounded-lg flex lg:flex-row sm:flex-col align-middle mb-5 py-5 transition-all group hover:bg-white/10 hover:shadow">
      <h4 className="text-title w-32 lg:text-m sm:text-sm font-noto ml-2 row-span-3 text-left">
        {props.date}
      </h4>
      <div className="ml-2 flex flex-col w-full">
        <div className="flex">
        <h3 className="text-text flex font-montserrat text-m group-hover:text-highlight">
          {props.title} {(props.link) ? (
          <Link href={props.link} target='blank' className='flex ml-2'>
            <FaLink className='fill-text w-3 h-3 m-auto hover:fill-highlight'></FaLink>
          </Link>
        ) : ''}
        </h3>

        </div>
        <p className="mt-2 mb-5 col-span-2 font-montserrat text-title">{props.subtitle}</p>
        <div className="flex flex-row gap-3 mb-2 flex-wrap">
          {(props.skills) ? (
            props.skills.map((skill) => (
              <div className="bg-highlight bg-opacity-10 rounded-full">
                <p className="text-highlight text-sm px-2 py-1">{skill}</p>
              </div>
            ))
          ) : ''}
        </div>
      </div>
    </li>
  )
}
