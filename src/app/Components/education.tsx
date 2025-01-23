import Link from 'next/link';
import '../Styles/animation.css';
import { FaLink } from 'react-icons/fa';
import EducationCard from './education-card';


export default function Education() {
  return (
    <section id="education">
      <div className="appear mt-10 ml-10 lg:mr-32 sm:mr-10">
      <h2 className="font-noto text-title text-lg lg:hidden sm:relative top-0 py-5">
          Formação
        </h2>
        <ul>
        <EducationCard
              id={'1'}
              date='2019 - hoje'
              title='Bacharelado em Engenharia Química'
              subtitle='Universidade Estadual de Maringá'
            >
        </EducationCard>
        <EducationCard
              id={'2'}
              date='2023'
              title='Curso de Programação em C#'
              link='https://www.udemy.com/certificate/UC-bed73e22-a2a7-4b72-9f82-894fe9d148cb/'
              subtitle='Udemy'
              skills={['C#', 'Winforms', 'POO']}
            >
        </EducationCard>
        <EducationCard
              id={'2'}
              date='2023'
              title='Curso de Controle de Processos com Python'
              link='https://www.udemy.com/certificate/UC-280ea3e7-f57e-4ef3-aa85-964c097b7823/'
              subtitle='Udemy'
              skills={['Python', 'Sintonia', 'PID']}
            >
        </EducationCard>
        <EducationCard
              id={'3'}
              date='2024'
              title='Curso de JavaScript e TypeScript'
              link='https://www.udemy.com/certificate/UC-3f9d454f-206d-49e8-a54b-c8f437f1244e/'
              subtitle='Udemy'
              skills={['JS', 'TS', 'HTML', 'CSS', 'SQL', 'React', 'Node', 'Next', 'Strapi']}
            >
        </EducationCard>
        <EducationCard
              id={'4'}
              date='hoje'
              title='Node.js, Express, MongoDB & More: The Complete Bootcamp'
              subtitle='Udemy'
              skills={['Node', 'Express', 'MongoDB', 'Mongoose', 'API', 'REST']}
            >
        </EducationCard>
        <EducationCard
              id={'5'}
              date='hoje'
              title='React - The Complete Guide 2025 '
              subtitle='Udemy'
              skills={['React', 'Hooks', 'Styled Components', 'Redux']}
            >
        </EducationCard>
          </ul>
      </div>
    </section>
  );
}
