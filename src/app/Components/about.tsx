export default function About() {
  return (
    <section id="about">
      <div className="lg:mt-20 sm:mt-20 lg:ml-10 sm:ml-10 lg:mr-32 sm:mr-10">
        <h2 className="font-noto text-title text-lg lg:hidden sm:sticky top-0 py-5 bg-background/90 backdrop-blur-[3.5px]">
          Sobre
        </h2>
        <p className="text-text mb-3 lg:text-start sm:text-justify">
          Nasci em Paranavaí, no interior de Paraná, no dia 26 de março de 2001.
          Quando tinha dois anos, minha família e eu nos mudamos para
          Bridgeport/Connecticut nos Estados Unidos, para meus pais buscarem{' '}
          <span className="text-highlight">melhores oportunidades</span>.
        </p>
        <p className="text-text mb-3 lg:text-start sm:text-justify">
          Desde criança, sempre gostei de mergulhar em livros, aprender sobre
          coisas novas e, no futuro, me tornar um{' '}
          <span className="text-highlight">cientista</span> - trabalhando em
          laboratório, mexendo com reagentes químicos, vestindo jaleco e tudo
          mais. Por causa disso, durante o ensino médio, resolvi fazer graduação
          em <span className="text-highlight">Engenharia Química</span>.
        </p>
        <p className="text-text mb-3 lg:text-start sm:text-justify">
          Na universidade, descobri a infinidade de áreas que poderia seguir
          como engenheiro químico, mas me apaxonei com uma em específico: a{' '}
          <span className="text-highlight"> simulação de processos</span> e,
          assim, aquele meu sonho de criança de trabalhar em laboratório mudou.
          Como trabalho de conclusão de curso, desenvolvi em dupla com um amigo
          o <span className="text-highlight">Evaporatech</span>, um software
          capaz de simular e dimensionar processos de evaporação em múltiplos
          efeitos.
        </p>
        <p className="text-text lg:text-start sm:text-justify">
          Hoje, busco me capacitar melhor na área de{' '}
          <span className="text-highlight">programação</span>. Gosto de
          programar em C# e desenvolver aplicações para web utilizando HTML, CSS
          e JavaScript. Além disso, tenho como objetivo conseguir um estágio
          como <span className="text-highlight">desenvolvedor</span>, para
          melhorar meus conhecimentos e, mais para frente, integrar as novidades
          tecnologias com o que aprendi na Engenharia Química.
        </p>
      </div>
    </section>
  );
}
