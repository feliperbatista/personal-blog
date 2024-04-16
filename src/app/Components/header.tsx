import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaGithub, FaGoodreads } from 'react-icons/fa';

export default function Header() {

  return (
    <header className="lg:h-screen sm:h-50 flex justify-center items-center flex-col row-span-4 lg:sticky top-0">
      <div className="px-10">
        <div className="lg:flex md:hidden sm:hidden justify-center gap-3">
          <Link
            href="#about"
            className="text-title font-noto transition hover:text-highlight focus:text-highlight"
          >
            Sobre
          </Link>
          <span className="text-highlight">|</span>
          <Link
            href="#education"
            className="text-title font-noto transition hover:text-highlight focus:text-highlight"
          >
            Formação
          </Link>
          <span className="text-highlight">|</span>
          <Link
            href="#experience"
            className="text-title font-noto transition hover:text-highlight focus:text-highlight"
          >
            Experiência
          </Link>
        </div>
        <h2 className="font-noto text-highlight font-bold text-lg lg:mt-56 sm:mt-20">
          Olá! Eu sou o
        </h2>
        <h1 className="my-3 font-michroma text-title lg:text-3xl sm:text-2xl font-bold">
          <Link href="/">Felipe Rodrigues Batista</Link>
        </h1>
        <div className="font-montserrat text-text lg:mb-56 sm:mb-20 sm:w-44 lg:w-auto">
          <div className='container'>
            <h3>Engenheiro químico.</h3>
            <h3>Dev em construção.</h3>
            <h3>Curioso.</h3>
          </div>
        </div>
        <div className="flex justify-center flex-row gap-3">
          <Link href="https://www.linkedin.com/in/feliperodriguesbatista/" target='blank'>
            <FaLinkedin className="h-10 w-10 fill-highlight hover:fill-highlightdarker"></FaLinkedin>
          </Link>
          <Link href="https://www.instagram.com/feliperbatista/" target='blank'>
            <FaInstagram className="h-10 w-10 fill-highlight hover:fill-highlightdarker"></FaInstagram>
          </Link>
          <Link href="https://github.com/feliperbatista/" target='blank'>
            <FaGithub className="h-10 w-10 fill-highlight hover:fill-highlightdarker"></FaGithub>
          </Link>
          <Link href="https://www.goodreads.com/user/show/81480906-felipe-batista" target='blank'>
            <FaGoodreads className="h-10 w-10 fill-highlight hover:fill-highlightdarker"></FaGoodreads>
          </Link>
        </div>
      </div>
    </header>
  );
}
