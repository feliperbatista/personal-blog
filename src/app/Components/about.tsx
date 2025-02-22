import '../Styles/animation.css';

export default function About() {
  return (
    <section id="about">
      <div className="lg:mt-20 sm:mt-20 lg:ml-10 sm:ml-10 lg:mr-32 sm:mr-10">
        <h2 className="font-noto text-title text-lg lg:hidden sm:relative top-0 py-5">
          Sobre
        </h2>
        <p className="appear text-title mb-3 lg:text-start sm:text-justify font-montserrat">
          Nasci em Paranavaí, no interior do Paraná, no dia 26 de março de 2001.
          Quando tinha dois anos, minha família e eu nos mudamos para
          Bridgeport/Connecticut nos Estados Unidos, para meus pais buscarem{' '}
          <span className="text-highlight">melhores oportunidades</span>.
        </p>
        <p className="appear text-title mb-3 lg:text-start sm:text-justify font-montserrat">
          Desde criança, sempre gostei de mergulhar em livros, aprender sobre
          coisas novas e, no futuro, me tornar um{' '}
          <span className="text-highlight">cientista</span> - trabalhando em
          laboratório, mexendo com reagentes químicos, vestindo jaleco e tudo
          mais. Por causa disso, durante o ensino médio, resolvi fazer graduação
          em <span className="text-highlight">Engenharia Química</span>.
        </p>
        <p className="appear text-title mb-3 lg:text-start sm:text-justify font-montserrat">
          Na universidade, descobri a infinidade de áreas que poderia seguir
          como engenheiro químico, mas me apaixonei por uma em específico: a{' '}
          <span className="text-highlight"> simulação de processos</span> e,
          assim, aquele meu sonho de criança de trabalhar em laboratório mudou.
          Como trabalho de conclusão de curso, desenvolvi em dupla com um amigo
          o <span className="text-highlight">Evaporatech</span>, um software
          capaz de simular e dimensionar processos de evaporação em múltiplos
          efeitos.
        </p>
        <p className="appear text-title lg:text-start sm:text-justify font-montserrat">
          Hoje, busco me capacitar melhor na área de{' '}
          <span className="text-highlight">programação</span>. Gosto de
          programar em C# e desenvolver aplicações para web utilizando HTML, CSS
          e JavaScript. Meu próximo passo é iniciar minha pós-graduação em desenvolvimento <span className="text-highlight">fullstack</span>.
        </p>
      </div>
    </section>
  );
}
