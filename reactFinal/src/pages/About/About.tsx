import "./about.css"

// Functional component for About page
export default function About() {

    // page consists of a center container with about text and a button to go to homepage
    return (
        <div className="mainContainer">
            <div className="aboutContainer">

                <p className="text-wrap p-5">
                    <h2>About me and cats.</h2>
                    <p>
                        My name is Sarah-Tamar Pick.I am the creator of this website
                    </p>
                    I have always been afraid of cats. Growing up, my family had a cat that would often stare at me, and I didn't undestand why.
                    It used to get under my bed and I would feel very unconfortable, convinced that it was planning to eat me.
                    Even after my family got a dog, I couldn't stand the thought of being in the same room as a cat.
                    However, doing this assignment has been a turning point for me. I have learned about different breeds of cats, their behavior, and their care.
                    I have even taken upon myself to approach cats and pet them.
                    Now, I am starting to see cats in a different light.
                    They are cute, cuddly, and seem to always be happy to see you.
                    I have come to realize that being afraid of cats is silly, and that it is okay to overcome that fear.
                    So, let's celebrate this newfound appreciation of cats, and maybe one day I will even be able to cuddle with them.

                    <p className="p-2">
                        Yours, Tamar.
                    </p>
                </p>
            </div>
        </div>
    )
}
