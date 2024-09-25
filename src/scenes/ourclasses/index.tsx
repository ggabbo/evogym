import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class.tsx";

const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: "Não, não, não...Ela nos largou e foi buscar o bebê, quando voltou, queimou o frango, aí um cara chegou perguntando pelo bebe, ele disse que era o Mário o pai do bebê, quando ele foi embora ela voltou e o bebê não estava aqui. Ela foi buscar o bebê, a mãe dela chegou procurando por ela e pelo bebê, a Ivete disse que iria morar com Mario, QUEM É MARIO? Aí quando ela voltou começou a traçar o cabelo da Tônya. Drew é quem viu o jogo, aí então vocês voltaram e agora ela está tentando fingir que ocorreu tudo bem, MAS NÃO CORREU!!...",
        image: image1,
    },
    {
        name: "Yoga Classes",
        image: image2,
    },
    {
        name: "Ab Core Classes",
        description: "Não, não, não...Ela nos largou e foi buscar o bebê, quando voltou, queimou o frango, aí um cara chegou perguntando pelo bebe, ele disse que era o Mário o pai do bebê, quando ele foi embora ela voltou e o bebê não estava aqui. Ela foi buscar o bebê, a mãe dela chegou procurando por ela e pelo bebê, a Ivete disse que iria morar com Mario, QUEM É MARIO? Aí quando ela voltou começou a traçar o cabelo da Tônya. Drew é quem viu o jogo, aí então vocês voltaram e agora ela está tentando fingir que ocorreu tudo bem, MAS NÃO CORREU!!...",
        image: image3,
    },
    {
        name: "Adventure Classes",
        image: image4,
    },
    {
        name: "Fitness Classes",
        description: "Não, não, não...Ela nos largou e foi buscar o bebê, quando voltou, queimou o frango, aí um cara chegou perguntando pelo bebe, ele disse que era o Mário o pai do bebê, quando ele foi embora ela voltou e o bebê não estava aqui. Ela foi buscar o bebê, a mãe dela chegou procurando por ela e pelo bebê, a Ivete disse que iria morar com Mario, QUEM É MARIO? Aí quando ela voltou começou a traçar o cabelo da Tônya. Drew é quem viu o jogo, aí então vocês voltaram e agora ela está tentando fingir que ocorreu tudo bem, MAS NÃO CORREU!!...",
        image: image5,
    },
    {
        name: "Training Classes",
        description: "Não, não, não...Ela nos largou e foi buscar o bebê, quando voltou, queimou o frango, aí um cara chegou perguntando pelo bebe, ele disse que era o Mário o pai do bebê, quando ele foi embora ela voltou e o bebê não estava aqui. Ela foi buscar o bebê, a mãe dela chegou procurando por ela e pelo bebê, a Ivete disse que iria morar com Mario, QUEM É MARIO? Aí quando ela voltou começou a traçar o cabelo da Tônya. Drew é quem viu o jogo, aí então vocês voltaram e agora ela está tentando fingir que ocorreu tudo bem, MAS NÃO CORREU!!...",
        image: image6,
    },
]


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div
                className="mx-auto w-5/6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: {opacity: 0, x:-50},
                    visible: { opacity: 1, x: 0},
                }}
            >
                <div className="md:w-3/5">
                    <HText>OUR CLASSES</HText>
                    <p className="py-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus praesentium eligendi quo exercitationem officia amet consequatur modi corporis odit ducimus itaque laboriosam, aut error, sequi cupiditate facilis consequuntur dolor unde.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum assumenda iure praesentium harum quos perspiciatis porro mollitia. Itaque facere ipsum quos, odit voluptates obcaecati voluptatem aperiam, velit, fuga fugit quae?
                    </p>
                </div>
            </motion.div>
                <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                    <ul className="w-[2800px] whitespace-nowrap">
                        {classes.map((item: ClassType, index) => (
                            <Class
                            key={`${item.name}-${index}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                            />
                        ))}
                    </ul>
                </div>
        </motion.div>
    </section>
  )
}

export default OurClasses