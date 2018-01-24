let people = [
        {
            title: "Delilery Boy",
            name: "Phillip J. Fry",
            bio: "A slacker delivery boy from the 20th century who becomes cryogenically frozen and reawakens in the 30th century to become a delivery boy there with an intergalactic delivery company run by his descendant, Professor Hubert J. Farnsworth.",
            image: "https://en.wikipedia.org/wiki/Philip_J._Fry#/media/File:Philip_Fry.png",
            lifespan: {
                birth: 1975,
                death: 3062
            }
        },
        {
            title: "Space Pilot",
            name: "Turanga Leela",
            bio: "Leela serves as captain of the Planet Express Ship, proving herself to be a skilled officer and often rescuing her less-talented coworkers from peril",
            image: "https://en.wikipedia.org/wiki/Leela_(Futurama)#/media/File:Turanga_Leela.png",
            lifespan: {
                birth: 2976,
                death: 3071
            }
        },
        {
            title: "Industrial Robot",
            name: "Bender Bending Rodríguez",
            bio: "Bender, a high-tech industrial metalworking robot, was built in 2996 at Fábrica Robótica De La Madre (Spanish: 'Mom's Robot Factory'), a manufacturing facility of Mom's Friendly Robot Company in Tijuana, Mexico.",
            image: "https://en.wikipedia.org/wiki/Bender_(Futurama)#/media/File:Bender_Rodriguez.png",
            lifespan: {
                birth: 2996,
                death: 100000002996
            }
        },
        {
            title: "CEO/Owner of Planet Express",
            name: "Professor Hubert J. Farnsworth",
            bio: "The Professor is a self-described mad scientist. The Professor is a senile, amoral, deranged, and unpredictable old man with very thick glasses and a gift for creating doomsday devices and atomic supermen.",
            image: "https://en.wikipedia.org/wiki/Professor_Farnsworth#/media/File:FuturamaProfessorFarnsworth.png",
            lifespan: {
                birth: 2841,
                death: 3089,
            }
        },
        {
            title: "Decapodian",
            name: "Doctor John A. Zoidberg",
            bio: "Zoidberg is the company doctor at Planet Express. Although he claims expertise in human medicine, particularly internal medicine, his knowledge of human anatomy and physiology is poor.",
            image: "https://en.wikipedia.org/wiki/Zoidberg#/media/File:Dr_John_Zoidberg.png",
            lifespan: {
                birth: 2943,
                death: 3042
            }
        },
        {
            title: "Intern",
            name: "Amy Wong",
            bio: "Amy Wong is a young Mars University student interning at Planet Express. She is daughter to two very pushy parents, Inez and Leo, who are desperate for her to produce a grandchild for them.",
            image: "https://en.wikipedia.org/wiki/Amy_Wong#/media/File:FuturamaAmyWong.png",
            lifespan: {
                birth: 2979,
                death: 3073
            }
        },
        {
            title: "Bureaucrat",
            name: "Hermes Conrad",
            bio: "He manages the Planet Express delivery business with responsibilities that include paying bills, giving out legal waivers, and notifying next of kin. Hermes is very enthusiastic about the Limbo and was once an Olympic limbo athlete.",
            image: "https://en.wikipedia.org/wiki/Hermes_Conrad#/media/File:Hermes_Conrad_promo_pic.png",
            lifespan: {
                birth: 2969,
                death: 3052
            }
        },
        {
            title: "Space Captain",
            name: "Zapp Brannigan",
            bio: "Although Zapp Brannigan is considered a great military hero by many people, most who have met him are less impressed by his arrogant, incompetent, perverted, phallic, selfish, egotistical, chauvinistic, bossy, cocky, manipulative, supremely vain personality, as well as his incredible stupidity.",
            image: "https://en.wikipedia.org/wiki/Zapp_Brannigan#/media/File:Captain_Zapp_Brannigan.png",
            lifespan: {
                birth: 2968,
                death: 3055
            }
        }
    ]

let container = document.getElementById("container");

people.forEach(person => {
    console.log("person", person);
    container.innerHTML += `<div class=person><header>${person.name}<br>${person.title}</header><section><image href=${person.image}>${person.bio}</section><footer>Birth: ${person.lifespan.birth} Death: ${person.lifespan.death}</footer></div>`
});