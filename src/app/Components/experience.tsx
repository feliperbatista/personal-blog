import '../Styles/animation.css';
import Image from 'next/image';
import foto1 from '../../../public/foto-pet.png';
import foto2 from '../../../public/DWSIM.png';
import foto3 from '../../../public/be8.png';
import foto4 from '../../../public/Evaporatech.png';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';


export default function Experience() {
  return (
    <section id="experience" className='mb-20'>
      <div className="appear mt-8 ml-10 lg:mr-32 sm:mr-10">
      <h2 className="font-noto text-title text-lg lg:hidden sm:relative top-0 py-5">
          Experiência
        </h2>
        <ul className='sm:text-justify'>
          <li className="appear rounded-lg flex lg:flex-row sm:flex-col justify-center align-middle mb-5 py-5 transition-all hover:bg-white/10 hover:shadow">
            <Image src={foto1} alt='Foto dos membros do PET Engenharia Química' width={150} height={150} quality={100} className='rounded justify-self-center lg:ml-2 lg:w-1/4 lg:h-1/4 sm:w-4/5 sm:h-4/5 sm:mb-3 sm:mx-auto'/>
          <div className='mx-3'>
            <h3 className='text-text'>PET Engenharia Química</h3>
            <p className='text-title text-sm'>Na graduação, fui bolsista do Programa de Educação Tutorial, grupo fomentado pelo Governo Federal com o objetivo de desenvolver atividades relacionadas à tríade de ensino, pesquisa e extensão. Ministrei cursos de Excel e DWSIM, organizei eventos internos e externos, conheci muitas pessoas e desenvolvi minhas habilidades de trabalho em grupo, organização, proatividade e comprometimento.</p>
          </div>
          </li>
          <li className="appear rounded-lg flex lg:flex-row sm:flex-col mb-5 py-5 transition-all hover:bg-white/10 hover:shadow">
            <Image src={foto2} alt='Captura da tela do simulador DWSIM' width={150} height={150} quality={100} className='rounded justify-self-center lg:ml-2 lg:w-1/4 lg:h-1/4 sm:w-4/5 sm:h-4/5 sm:mb-3 sm:mx-auto'/>
          <div className='mx-3'>
            <h3 className='text-text'>Iniciação Científica</h3>
            <p className='text-title text-sm'>Desenvolvi uma iniciação científica, em que escrevi códigos de operações unitárias em Python para o DWSIM, simulador <i>open-source</i> de processos químicos.</p>
          </div>
          </li>
          <li className="appear rounded-lg flex lg:flex-row sm:flex-col mb-5 py-5 transition-all hover:bg-white/10 hover:shadow">
            <Image src={foto3} alt='Logo da empresa Be8' width={150} height={150} quality={100} className='rounded justify-self-center lg:ml-2 lg:w-1/4 lg:h-1/4 sm:w-4/5 sm:h-4/5 sm:mb-3 sm:mx-auto'/>
          <div className='mx-3'>
            <h3 className='text-text'>Estagiário de Meio Ambiente</h3>
            <p className='text-title text-sm'>Realizei meu estágio obrigatório na Be8, em Marialva/PR. Atuei no setor de Meio Ambiente, em específico na coleta e análise de águas e efluentes, além de atualização de documentos do setor, de acordo com as ISOs 14001 e 45001.</p>
          </div>
          </li>
          <li className="appear rounded-lg flex lg:flex-row sm:flex-col mb-5 py-5 transition-all hover:bg-white/10 hover:shadow">
            <Image src={foto4} alt='Captura de tela do software Evaporatech' width={150} height={150} quality={100} className='rounded justify-self-center lg:ml-2 lg:w-1/4 lg:h-1/4 sm:w-4/5 sm:h-4/5 sm:mb-3 sm:mx-auto'/>
          <div className='mx-3'>
            <h3 className='text-text'>Evaporatech</h3>
            <p className='text-title text-sm'>Como trabalho de conclusão de curso, desenvolvi, em dupla com um amigo, o <strong>Evaporatech</strong> - software capaz de simular e dimensionar processos de evaporação em múltiplos efeitos. O programa foi escrito em C# e utilizando Winforms.</p>
          </div>
          </li>
        </ul>
        <Link href='https://github.com/feliperbatista' target='blank' className='flex'>
          <p className='text-text inline-block border-b-2 border-b-background transition hover:border-b-2 hover:border-b-highlight [&:hover+div]:translate-x-1'>Veja meus demais projetos no Github</p>
          <div className='flex flex-col justify-center ml-2'>
            <FaArrowRight className='fill-text w-3 h-3'></FaArrowRight>
          </div>
        </Link>

      </div>
    </section>
  );
}
