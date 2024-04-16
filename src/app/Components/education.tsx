import Link from 'next/link';

export default function Education() {
  return (
    <section className="" id="education">
      <div className="mt-16 ml-10 mr-32">
        <ul>
          <li className="rounded-lg grid grid-cols-[1fr_3fr] flex-grow align-middle mb-5 py-5 transition-all hover:bg-white/10 hover:shadow">
            <h4 className="text-title w-auto text-m font-noto pl-2 row-span-2 text-left">
              2019 - hoje
            </h4>
            <div className="w-72">
              <h3 className="text-highlight font-montserrat text-m">
                Bacharelado em Engenharia Química
              </h3>
              <p className="my-2 font-montserrat text-text">
                Universidade Estadual de Maringá
              </p>
            </div>
          </li>
          <Link
            href="https://www.udemy.com/certificate/UC-bed73e22-a2a7-4b72-9f82-894fe9d148cb/"
            target="blank"
          >
            <li className="rounded-lg grid grid-cols-[1fr_3fr] flex-grow align-middle mb-5 py-5 transition-all hover:bg-white/10 hover:shadow">
              <h4 className="text-title w-auto text-m font-noto pl-2 row-span-3 text-left">
                2023
              </h4>
              <div className="w-72">
                <h3 className="text-highlight font-montserrat text-m">
                  Curso de Programação em C#
                </h3>
                <p className="mt-2 mb-5 font-montserrat text-text">Udemy</p>
                <div className="flex flex-row gap-3 mb-2">
                  <div className="bg-highlight/50 rounded-full px-2">
                    <p className="text-text">C#</p>
                  </div>
                  <div className="bg-highlight/50 rounded-full px-2">
                    <p className="text-text">Winforms</p>
                  </div>
                  <div className="bg-highlight/50 rounded-full px-2">
                    <p className="text-text">POO</p>
                  </div>
                </div>
              </div>
            </li>
          </Link>
          <Link
            href="https://www.udemy.com/certificate/UC-280ea3e7-f57e-4ef3-aa85-964c097b7823/"
            target="blank"
          >
            <li className="rounded-lg grid grid-cols-[1fr_3fr] flex-grow align-middle mb-5 py-5 transition-all hover:bg-white/10 hover:shadow">
              <h4 className="text-title w-auto text-m font-noto pl-2 row-span-3 text-left">
                2023
              </h4>
              <div className="w-72">
                <h3 className="text-highlight font-montserrat text-m">
                  Curso de Controle de Processos
                </h3>
                <p className="mt-2 mb-5 font-montserrat text-text">Udemy</p>
                <div className="flex flex-row gap-3 mb-2">
                  <div className="bg-highlight/50 rounded-full px-2">
                    <p className="text-text">Python</p>
                  </div>
                  <div className="bg-highlight/50 rounded-full px-2">
                    <p className="text-text">Sintonia</p>
                  </div>
                  <div className="bg-highlight/50 rounded-full px-2">
                    <p className="text-text">PID</p>
                  </div>
                </div>
              </div>
            </li>
          </Link>
          <li className="rounded-lg grid grid-cols-[1fr_3fr] flex-grow align-middle mb-5 py-5 transition-all hover:bg-white/10 hover:shadow">
            <h4 className="text-title w-auto text-m font-noto pl-2 row-span-3 text-left">
              hoje
            </h4>
            <div className="w-72">
              <h3 className="text-highlight font-montserrat text-m">
                Curso de JavaScript e TypeScript
              </h3>
              <p className="mt-2 mb-5 font-montserrat text-text">Udemy</p>
              <div className="flex flex-wrap gap-3 align-middle text-center mb-2">
                <div className="bg-highlight/50 rounded-full justify-center px-2">
                  <p className="text-text">JS</p>
                </div>
                <div className="bg-highlight/50 rounded-full px-2 ">
                  <p className="text-text">TS</p>
                </div>
                <div className="bg-highlight/50 rounded-full px-2 ">
                  <p className="text-text">HTML</p>
                </div>
                <div className="bg-highlight/50 rounded-full px-2">
                  <p className="text-text">CSS</p>
                </div>
                <div className="bg-highlight/50 rounded-full px-2">
                  <p className="text-text">SQL</p>
                </div>
                <div className="bg-highlight/50 rounded-full px-2">
                  <p className="text-text">React</p>
                </div>
                <div className="bg-highlight/50 rounded-full px-2">
                  <p className="text-text">Node</p>
                </div>
                <div className="bg-highlight/50 rounded-full px-2">
                  <p className="text-text">Next</p>
                </div>
                <div className="bg-highlight/50 rounded-full px-2">
                  <p className="text-text">Strapi</p>
                </div>
              </div>
            </div>
          </li>
          <li className="rounded-lg grid grid-cols-[1fr_3fr] flex-grow align-middle mb-5 py-5 transition-all hover:bg-white/10 hover:shadow">
            <h4 className="text-title w-auto text-m font-noto pl-2 row-span-3 text-left">
              hoje
            </h4>
            <div className="w-72">
              <h3 className="text-highlight font-montserrat text-m">
                Aspen Plus V11 Masterclass
              </h3>
              <p className="mt-2 mb-5 font-montserrat text-text">Udemy</p>
              <div className="flex flex-wrap gap-3 align-middle text-center mb-2">
                <div className="bg-highlight/50 rounded-full justify-center px-2">
                  <p className="text-text">Aspen</p>
                </div>
                <div className="bg-highlight/50 rounded-full px-2 ">
                  <p className="text-text">Simulação</p>
                </div>
                <div className="bg-highlight/50 rounded-full px-2 ">
                  <p className="text-text">Processos</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
