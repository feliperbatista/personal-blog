import '../Styles/animation.css';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import ExperienceCard from './experience-card';


export default function Experience() {
  return (
    <section id="experience" className='mb-20'>
      <div className="appear mt-8 ml-10 lg:mr-32 sm:mr-10">
      <h2 className="font-noto text-title text-lg lg:hidden sm:relative top-0 py-5">
          Experiência
        </h2>
        <ul className='sm:text-justify'>
          <ExperienceCard
            id={1}
            image='/images/foto-pet.png'
            alt='Foto dos membros do grupo PET Engenharia Química'
            title='PET Engenharia Química'
            description='Na graduação, fui bolsista do Programa de Educação Tutorial, grupo fomentado pelo Governo Federal com o objetivo de desenvolver atividades relacionadas à tríade de ensino, pesquisa e extensão. Ministrei cursos de Excel e DWSIM, organizei eventos internos e externos, conheci muitas pessoas e desenvolvi minhas habilidades de trabalho em grupo, organização, proatividade e comprometimento.'
          >
          </ExperienceCard>
          <ExperienceCard
            id={2}
            image='/images/DWSIM.png'
            alt='Captura da tela do simulador DWSIM'
            title='Iniciação Científica'
            description='Desenvolvi uma iniciação científica, em que escrevi códigos de operações unitárias em Python para o DWSIM, simulador open-source de processos químicos.'
          >
          </ExperienceCard>
          <ExperienceCard
            id={3}
            image='/images/be8.png'
            alt='Logo da empresa Be8'
            title='Estagiário de Meio Ambiente'
            description='Realizei meu estágio obrigatório na Be8, em Marialva/PR. Atuei no setor de Meio Ambiente, em específico na coleta e análise de águas e efluentes, além de atualização de documentos do setor, de acordo com as ISOs 14001 e 45001.'
          >
          </ExperienceCard>
          <ExperienceCard
            id={4}
            image='/images/Evaporatech.png'
            alt='Captura de tela do software Evaporatech'
            title='Evaporatech'
            description={'Como trabalho de conclusão de curso, desenvolvi, em dupla com um amigo, o Evaporatech - software capaz de simular e dimensionar processos de evaporação em múltiplos efeitos. O programa foi escrito em C# e utilizando Winforms.'}

          >
          </ExperienceCard>
        </ul>
        <Link href='https://github.com/feliperbatista' target='blank' className='flex group'>
          <p className='text-text lg:text-sm sm:text-xs inline-block border-b-2 border-b-background transition hover:border-b-2 hover:border-b-highlight'>Veja meus demais projetos no Github</p>
          <div className='flex flex-col justify-center ml-2'>
            <FaArrowRight className='fill-text w-3 h-3 transition-all group-hover:translate-x-2'></FaArrowRight>
          </div>
        </Link>
      </div>
    </section>
  );
}
