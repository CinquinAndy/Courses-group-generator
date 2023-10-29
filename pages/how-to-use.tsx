import type {NextPage} from "next";

const HowToUse: NextPage = () => {
    return (
        <div className="mx-auto w-full md:w-6/12 p-4 text-base-content">
            <h1
                className="font-bold text-3xl text-center"
                data-aos="fade-up"
                data-aos-delay="100"
            >
                {`Comment Utiliser`}
            </h1>
            <section className="my-8" data-aos="fade-up" data-aos-delay="200">
                <h2 className="font-bold text-2xl">
                    {`1. Ajouter un élément`}
                </h2>
                <p>
                    {`Ajoutez un élément à chaque nouvelle ligne, par exemple.`}
                </p>
                <div className="bg-base-100 border-2 border-primary p-4 rounded my-2 w-48">
                    <p>
                        {`élément 1`}
                    </p>
                    <p>
                        {`élément 2`}
                    </p>
                </div>
            </section>
            <section className="my-8" data-aos="fade-up" data-aos-delay="300">
                <h2 className="font-bold text-2xl">
                    {`2. Combien de groupes ?`}
                </h2>
                <p>
                    {`Combien de groupes seront formés en tout ? Par exemple, le total des éléments
                  est de 6 et l'entrée de groupe est de 2. Alors cela divisera les données en deux
                  groupes de trois éléments chacun.`}
                </p>
            </section>
            <section className="my-8" data-aos="fade-up" data-aos-delay="400">
                <h2 className="font-bold text-2xl">
                    {`3. Générer`}
                </h2>
                <p>
                    {`
                  Pour créer et visualiser le résultat, cliquez sur générer. Vous pouvez relancer en cliquant
                  à nouveau sur générer.
                  `}
                </p>
            </section>
        </div>
    );
};

export default HowToUse;
