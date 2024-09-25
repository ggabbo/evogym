import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon, 
    UserGroupIcon, 
    AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "Esse vezes esses vai dá + 3bC ao quadrado + b a terceira + C a terceira não é verdade? E aqui ó tchain e aqui ó tome e aqui ó tchain e aqui ó tome não é verdade? E aqui ó tchain tchain e aqui ó tome tome não é verdade ? E aqui ó tchain tchain e aqui ó tome tome não é verdade? Logo você percebeu que o resultado é zero"
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description: "Esse vezes esses vai dá + 3bC ao quadrado + b a terceira + C a terceira não é verdade? E aqui ó tchain e aqui ó tome e aqui ó tchain e aqui ó tome não é verdade? E aqui ó tchain tchain e aqui ó tome tome não é verdade ? E aqui ó tchain tchain e aqui ó tome tome não é verdade? Logo você percebeu que o resultado é zero"
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description: "Esse vezes esses vai dá + 3bC ao quadrado + b a terceira + C a terceira não é verdade? E aqui ó tchain e aqui ó tome e aqui ó tchain e aqui ó tome não é verdade? E aqui ó tchain tchain e aqui ó tome tome não é verdade ? E aqui ó tchain tchain e aqui ó tome tome não é verdade? Logo você percebeu que o resultado é zero"
    },
]

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

function Benefits({setSelectedPage}: Props) {
  return (
  <section
  id="benefits"
  className="mx-auto min-h-full w-5/6 py-20"
  >
    <motion.div
    onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
    >
            {/* HEADER */}
            <motion.div 
            className="md:my-5 md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: {opacity: 0, x:-50},
                    visible: { opacity: 1, x: 0},
                }}
            >
                <HText>MORE THAN JUST A GYM.</HText>
                <p className="my-5 text-sm">
                    We provide world class fitness equipment, trainers and classes to
                    get you to your ultimate fitness goals with ease. We provide true
                    care into each and every member.
                </p>
            </motion.div>

            {/* BENEFITS */}
            <motion.div className="mt-5 items-center justify-between gap-8 md:flex"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount: 0.5}}
            variants={container}
            >
                {benefits.map((benefit: BenefitType) => (
                    <Benefit 
                    key={benefit.title}
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                    setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>

            {/* GRAPHICS AND DESCRIPTION */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* GRAPHIC */}
                <img  
                    className="mx-auto"
                    alt="benefits-page-graphic"
                    src={BenefitsPageGraphic}
                />

                {/* DESCRIPTION */}
                <div>
                    {/* TITLE */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves"></div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: {opacity: 0, x:-50},
                                visible: { opacity: 1, x: 0},
                            }}
                        >
                            <HText>
                                MILLIONS OF HAPPY MEMBERS GETTING {" "}
                                <span className="text-primary-500">FIT</span>
                            </HText>
                        </motion.div>
                    </div>

                    {/* DESCRIPT */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0},
                        }}
                    >
                        <p className="my-5">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae distinctio doloremque, temporibus quam aliquid amet! Ea hic deserunt similique rerum. Nisi soluta alias sequi dolorum suscipit in expedita quasi vitae?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sed ducimus eaque eius reprehenderit numquam animi pariatur ut. Quasi hic rem explicabo ipsa earum? Quae doloribus quaerat expedita esse dicta?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odio laudantium, corporis rem ipsam, deleniti fugit quas amet labore pariatur laboriosam dolores quia, perferendis eius quos tenetur consectetur distinctio molestias.
                        </p>
                        <p className="mb-5">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae distinctio doloremque, temporibus quam aliquid amet! Ea hic deserunt similique rerum. Nisi soluta alias sequi dolorum suscipit in expedita quasi vitae?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sed ducimus eaque eius reprehenderit numquam animi pariatur ut. Quasi hic rem explicabo ipsa earum? Quae doloribus quaerat expedita esse dicta?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odio laudantium, corporis rem ipsam, deleniti fugit quas amet labore pariatur laboriosam dolores quia, perferendis eius quos tenetur consectetur distinctio molestias.                        </p>
                    </motion.div>

                    {/* BUTTON */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                    Join Now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
    </motion.div>
  </section>
);
}

export default Benefits