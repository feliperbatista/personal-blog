import Link from 'next/link';
import '../Styles/animation.css';
import { FaLink } from 'react-icons/fa';


export default function Education() {
  return (
    <section id="education">
      <div className="appear mt-10 ml-10 lg:mr-32 sm:mr-10">
      <h2 className="font-noto text-title text-lg lg:hidden sm:relative top-0 py-5">
          Formação
        </h2>
        <ul>
        <li className="appear rounded-lg flex lg:flex-row sm:flex-col align-middle mb-5 py-5 transition-all hover:bg-white/10 hover:shadow">
              <h4 className="text-title w-auto lg:text-m sm:text-sm font-noto ml-2 mr-5 row-span-3 text-left">
                2019 - hoje
              </h4>
              <div className="ml-2 grid grid-cols-[1fr-2fr]">
                <h3 className="text-text font-montserrat text-m">
                  Bacharelado em Engenharia Química
                </h3>
                <Link href='/' className='hidden items-center ml-3'>
                  <FaLink className='fill-text w-3 h-3 hover:fill-highlight'></FaLink>
                </Link>
                <p className="mt-2 mb-5 col-span-2 font-montserrat text-title">Universidade Estadual de Maringá</p>
              </div>
            </li>
            <li className="appear rounded-lg flex lg:flex-row sm:flex-col align-middle mb-5 py-5 transition-all hover:bg-white/10 hover:shadow">
              <h4 className="text-title w-auto lg:text-m sm:text-sm font-noto ml-2 mr-20 row-span-3 text-left">
                2023
              </h4>
              <div className="ml-2 grid grid-cols-[1fr-2fr]">
                <h3 className="text-text font-montserrat text-m">
                  Curso de Programação em C#
                </h3>
                <Link href='https://www.udemy.com/certificate/UC-bed73e22-a2a7-4b72-9f82-894fe9d148cb/' target='blank' className='flex items-center ml-3'>
                  <FaLink className='fill-text w-3 h-3 hover:fill-highlight'></FaLink>
                </Link>
                <p className="mt-2 mb-5 col-span-2 font-montserrat text-title">Udemy</p>
                <div className="flex flex-row gap-3 mb-2">
                  <div className="bg-highlight bg-opacity-10 rounded-full">
                    <p className="text-highlight text-sm px-2 py-1">C#</p>
                  </div>
                  <div className="bg-highlight bg-opacity-10 rounded-full">
                    <p className="text-highlight text-sm px-2 py-1">Winforms</p>
                  </div>
                  <div className="bg-highlight bg-opacity-10 rounded-full">
                    <p className="text-highlight text-sm px-2 py-1">POO</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="appear rounded-lg flex lg:flex-row sm:flex-col align-middle mb-5 py-5 transition-all hover:bg-white/10 hover:shadow">
              <h4 className="text-title w-auto lg:text-m sm:text-sm font-noto ml-2 mr-20 row-span-3 text-left">
                2023
              </h4>
              <div className="ml-2 grid grid-cols-[1fr-2fr]">
                <h3 className="text-text font-montserrat text-m">
                  Curso de Controle de Processos com Python
                </h3>
                <Link href='https://www.udemy.com/certificate/UC-280ea3e7-f57e-4ef3-aa85-964c097b7823/' target='blank' className='flex items-center ml-3'>
                  <FaLink className='fill-text w-3 h-3 hover:fill-highlight'></FaLink>
                </Link>
                <p className="mt-2 mb-5 col-span-2 font-montserrat text-title">Udemy</p>
                <div className="flex flex-row gap-3 mb-2">
                  <div className="bg-highlight bg-opacity-10 rounded-full">
                    <p className="text-highlight text-sm px-2 py-1">Python</p>
                  </div>
                  <div className="bg-highlight bg-opacity-10 rounded-full">
                    <p className="text-highlight text-sm px-2 py-1">Sintonia</p>
                  </div>
                  <div className="bg-highlight bg-opacity-10 rounded-full">
                    <p className="text-highlight text-sm px-2 py-1">PID</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="appear rounded-lg flex lg:flex-row sm:flex-col align-middle mb-5 py-5 transition-all hover:bg-white/10 hover:shadow">
              <h4 className="text-title w-auto lg:text-m sm:text-sm font-noto ml-2 mr-20 row-span-3 text-left">
                hoje
              </h4>
              <div className="ml-2 grid grid-cols-[1fr-2fr]">
                <h3 className="text-text font-montserrat text-m">
                  Curso de JavaScript e TypeScript
                </h3>
                <Link href='/' className='hidden items-center ml-3'>
                  <FaLink className='fill-text w-3 h-3 hover:fill-highlight'></FaLink>
                </Link>
                <p className="mt-2 mb-5 col-span-2 font-montserrat text-title">Udemy</p>
                <div className="flex flex-row flex-wrap mr-5 gap-3 mb-2">
                  <div className="bg-highlight bg-opacity-10 rounded-full">
                    <p className="text-highlight text-sm px-2 py-1">JS</p>
                  </div>
                  <div className="bg-highlight bg-opacity-10 rounded-full">
                    <p className="text-highlight text-sm px-2 py-1">TS</p>
                  </div>
                  <div className="bg-highlight bg-opacity-10 rounded-full">
                    <p className="text-highlight text-sm px-2 py-1">HTML</p>
                  </div>
                  <div className="bg-highlight bg-opacity-10 rounded-full">
                    <p className="text-highlight text-sm px-2 py-1">CSS</p>
                  </div>
                  <div className="bg-highlight bg-opacity-10 rounded-full">
                    <p className="text-highlight text-sm px-2 py-1">SQL</p>
                  </div>
                  <div className="bg-highlight bg-opacity-10 rounded-full">
                    <p className="text-highlight text-sm px-2 py-1">React</p>
                  </div>
                  <div className="bg-highlight bg-opacity-10 rounded-full">
                    <p className="text-highlight text-sm px-2 py-1">Node</p>
                  </div>
                  <div className="bg-highlight bg-opacity-10 rounded-full">
                    <p className="text-highlight text-sm px-2 py-1">Next</p>
                  </div>
                  <div className="bg-highlight bg-opacity-10 rounded-full">
                    <p className="text-highlight text-sm px-2 py-1">Strapi</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="appear rounded-lg flex lg:flex-row sm:flex-col align-middle mb-5 py-5 transition-all hover:bg-white/10 hover:shadow">
              <h4 className="text-title w-auto lg:text-m sm:text-sm font-noto ml-2 mr-20 row-span-3 text-left">
                hoje
              </h4>
              <div className="ml-2 grid grid-cols-[1fr-2fr]">
                <h3 className="text-text font-montserrat text-m">
                  Aspen Plus V11 Masterclass
                </h3>
                <Link href='/' className='hidden items-center ml-3'>
                  <FaLink className='fill-text w-3 h-3 hover:fill-highlight'></FaLink>
                </Link>
                <p className="mt-2 mb-5 col-span-2 font-montserrat text-title">Udemy</p>
                <div className="flex flex-row gap-3 mb-2">
                  <div className="bg-highlight bg-opacity-10 rounded-full">
                    <p className="text-highlight text-sm px-2 py-1">Aspen</p>
                  </div>
                  <div className="bg-highlight bg-opacity-10 rounded-full">
                    <p className="text-highlight text-sm px-2 py-1">Simulação</p>
                  </div>
                  <div className="bg-highlight bg-opacity-10 rounded-full">
                    <p className="text-highlight text-sm px-2 py-1">Processos</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
      </div>
    </section>
  );
}
