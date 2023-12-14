const typingDb = [// Simple Words (60 words)
    "The cat chased the ball of yarn through the house, weaving around furniture and leaping over toys. Finally, it pounced, batting the yarn with its paw and burying its face in the soft wool.",

    // Moderate Words (60 words)
    "The baker kneaded the dough with strong, practiced hands, transforming a simple mixture of flour, water, and yeast into a pliable, elastic canvas. His deft fingers shaped the dough into loaves, and soon, the bakery was filled with the warm, inviting aroma of freshly baked bread.",

    // Challenging Words (60 words)
    "The intrepid explorer pushed her way through the dense undergrowth, her machete clearing a path through the tangled foliage. As she ventured deeper into the uncharted territory, the symphony of the rainforest filled the air, punctuated by the occasional cry of an exotic bird.",

    // Super Educated Words (60 words)
    "The erudite professor, perched upon his oaken lectern, expounded upon the abstruse tenets of existentialism. His words, imbued with sesquipedalian grandeur, captivated his audience, drawing them into a labyrinthine world of philosophical discourse.",

    // Mixed Difficulty Words (60 words)
    "As the sun dipped below the horizon, casting long, melancholic shadows across the deserted landscape, a lone figure emerged from the treeline. Huddled against the encroaching chill, they trudged onwards, their destination shrouded in mystery.",

    //Simple Words (60 words):
    "The tiny ladybug crawled across the green leaf, its shiny red shell glinting in the sunlight. It reached a juicy aphid and happily munched, its tiny legs wiggling with delight.",

    // Moderate Words (60 words):
    "The sculptor gazed at the rough block of marble, envisioning the masterpiece waiting within. With each stroke of his chisel, the stone yielded, taking shape under his skilled hands, revealing the graceful form of a swan.",

    //Challenging Words (60 words):
    "In the hushed library, the bibliophile savored the musty scent of ancient books. As she turned the brittle pages, her mind embarked on a journey through time, transported to worlds of unimaginable wonder.",

    // Super Educated Words (60 words):
    "The seasoned raconteur enthralled his audience with his whimsical tales, his words painting vivid pictures in the air. His witticisms, laced with erudite references, elicited roars of laughter and gasps of awe.",

    // Mixed Difficulty Words (60 words):
    "The old fisherman mended his nets, the rhythmic clinking of his needles a soothing counterpoint to the crashing waves. His weathered face, etched with the wisdom of the sea, reflected a life lived in harmony with the ocean's bounty.",

    // Simple Words (60 words):
    "The young child built a magnificent sandcastle on the beach, its towers reaching for the sky. She filled the moat with water and adorned its walls with colorful seashells, creating a kingdom worthy of a mermaid queen.",

    //    Moderate Words (60 words):
    "The pianist's fingers danced across the ivory keys, weaving a tapestry of sound that filled the concert hall. The music, a torrent of emotions, ebbed and flowed, leaving the audience breathless and spellbound.",

    // Challenging Words (60 words):
    "The astronomer gazed through the powerful telescope, her eyes searching for the elusive cosmic nebula. As she meticulously captured data, her mind raced with the mysteries of the universe, yearning to unravel its secrets.",

    // Super Educated Words (60 words):
    "The seasoned linguist effortlessly deciphered the ancient inscription, its cryptic symbols revealing a forgotten language. His groundbreaking discovery shed light on a lost civilization, rewriting the pages of history.",

    // Mixed Difficulty Words (60 words):
    "The intrepid explorer stumbled upon a hidden oasis amidst the barren desert landscape. The crystal-clear water shimmered like a mirage, and lush vegetation offered a welcome respite from the scorching sun. He knew he had found a sanctuary, a haven in the heart of the unforgiving wilderness.",

    //Simple Words (60 words):
    "The fluffy puppy chased butterflies through the park, its tail wagging with joyful abandon. It barked and yipped at the fluttering insects, its playful spirit filling the air with laughter.",

    "The baker crafted delicious cupcakes, each one a miniature work of art. He piped on frosting swirls, sprinkled colorful candies, and arranged them in a tempting display, ready to bring smiles to faces.",

    // Moderate Words (60 words):
   "The musician strummed a soulful melody on his guitar, the notes echoing through the quiet streets. His voice, rich and warm, blended with the music, creating a poignant tapestry of sound that tugged at the heartstrings.",

    "The artist dipped her brush into vibrant paints, her imagination taking flight as she transformed a blank canvas into a swirling landscape of color and emotion. Each stroke revealed a hidden world, a kaleidoscope of beauty waiting to be discovered.",

    // Challenging Words (60 words):
    "The archaeologist carefully unearthed a delicate clay tablet, its surface etched with symbols from a long-forgotten civilization. As she deciphered the ancient text, she felt a connection to the past, bridging the gap between centuries and rewriting history.",

    "The astrophysicist peered through the powerful lens of the telescope, her gaze fixed upon a distant supernova. Its dazzling light, a testament to the vastness of the universe, ignited a spark of wonder and curiosity within her.",

    // Super Educated Words (60 words):
    "The erudite scholar, ensconced in his dusty library, embarked upon a meticulous analysis of the obscure literary text. His erudite observations, laced with insightful interpretations, shed light on the veiled meanings and complexities of the work.",

    "The seasoned diplomat navigated the treacherous waters of international relations with finesse and aplomb. His eloquent words and deft maneuverings averted conflict and fostered understanding, ensuring peace and prosperity for nations.",

    // Mixed Difficulty Words (60 words):

    "The intrepid climber scaled the treacherous mountain face, her determination etched upon her resolute face. With each arduous step, she pushed her limits, defying gravity and the elements to conquer the summit and stand triumphant against the backdrop of the world.",

    "The seasoned chef orchestrated a culinary symphony in his bustling kitchen. His deft hands diced, seasoned, and stirred ingredients with practiced ease, transforming simple elements into a masterpiece of flavor and aroma that tantalized the senses.",

    "The young inventor tinkered in her workshop, her mind teeming with ideas and possibilities. She assembled wires, soldered circuits, and programmed code, her creation taking shape – a testament to ingenuity and the boundless potential of the human mind.",

    "The seasoned journalist, armed with her wit and unwavering dedication to truth, exposed the hidden corruption that festered within the powerful institutions. Her fearless words, published in bold headlines, ignited a firestorm of change, paving the way for justice and accountability.",

    "The seasoned traveler, weathered by years of wandering the globe, sat on a bustling city street, reflecting on the tapestry of humanity. He observed the diverse faces, listened to the cacophony of languages, and felt a deep connection to the shared journey of humankind.",

    "The skilled carpenter, with hands calloused but steady, crafted a magnificent wooden chest. He painstakingly carved intricate designs into the surface, his patience and attention to detail transforming mere wood into a work of art that would be treasured for generations to come.",

    "The young writer poured her soul onto the page, weaving tales of love, loss, and resilience. Her words flowed with raw emotion, transporting readers to fantastical worlds and captivating their hearts with the timeless truths of the human experience.",

    "The skilled musician, her fingers dancing across the piano keys, performed a concerto with breathtaking intensity. Her passion poured into the music, weaving a spellbinding narrative that resonated with every soul in the audience.",

    "The seasoned detective, his keen eye and sharp intellect unraveling the complexities of the crime scene, pieced together the puzzle. He followed the trail of clues, interrogated suspects, and ultimately brought the perpetrator to justice, restoring order and ensuring peace of mind.",

    "The young dreamer, gazing at the star-studded sky, felt a spark ignite within her spirit. She dreamt of reaching for the stars, exploring the unknown, and pushing the boundaries of human possibility. Her unwavering ambition, fueled by the vastness of the universe, promised a future filled with boundless potential.",

    "The seasoned teacher, with a gentle yet firm voice, nurtured the minds of her pupils. She instilled in them a love for learning, a thirst for knowledge, and the courage to question the world around them. Her dedication shaped young minds and helped them blossom into thinkers.",
]

export let typing = [];

function Typing(arr) {
    let count = () => Math.floor(Math.random() * typingDb.length)
    typing.push(arr[count()])
}

Typing(typingDb)

export default typingDb