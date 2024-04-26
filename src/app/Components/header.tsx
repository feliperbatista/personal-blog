import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaGithub, FaGoodreads } from 'react-icons/fa';

export default function Header() {

  return (
    <header className="md:h-screen md:mt-0 lg:mt-0 sm:mt-28 flex justify-center items-center flex-col row-span-4 lg:sticky md:sticky top-0">
      <div className="px-10">
        <div className="flex md:flex sm:hidden mb-36 justify-center gap-3">
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
        <div className='my-auto'>
          <h2 className="font-noto text-highlight font-bold text-lg">
            Olá! Eu sou o
          </h2>
          <h1 className="my-3 font-michroma text-title lg:text-3xl sm:text-2xl font-bold">
            <Link href="/" className='font-michroma'>Felipe Rodrigues Batista</Link>
          </h1>
          <div className="font-montserrat text-text sm:w-44 lg:w-auto">
            <h3>Engenheiro químico.</h3>
            <h3>Dev em construção.</h3>
            <h3>Curioso.</h3>
          </div>
        </div>
        <div className="flex justify-center flex-row gap-3 mt-36">
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
