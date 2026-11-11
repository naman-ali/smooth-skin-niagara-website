export type ServiceKey =
  | "laser"
  | "lashes"
  | "facial"
  | "microneedling"
  | "peel"
  | "celluma";

export interface GoogleReview {
  name: string;
  rating: number;
  text?: string;
  relativeDate?: string;
  services?: string[];
  serviceKeys?: ServiceKey[];
  highlights?: string[];
}

export const GOOGLE_RATING = "5.0";
export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Smooth+Skin+Niagara+reviews";

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    name: "Mya Diodati",
    rating: 5,
    relativeDate: "a day ago",
    text: "I always have an amazing experience with Ashley. Her technique makes my lashes stay curled and tinted for a really long time, and I'm always getting compliments on them! I highly recommend!!",
    services: ["Lash Lift"],
    serviceKeys: ["lashes"],
    highlights: [
      "stay curled and tinted for a really long time",
      "always getting compliments",
    ],
  },
  {
    name: "Tammy Semach",
    rating: 5,
    relativeDate: "2 days ago",
    text: "I had my first lash lift with Ashley, and she made sure to customize everything to the look I wanted. The studio was really clean and had a warm and welcoming vibe. I also got some helpful aftercare advice. I'll definitely be recommending this place to my friends and family.",
    services: ["Lash Lift"],
    serviceKeys: ["lashes"],
    highlights: [
      "customize everything to the look I wanted",
      "warm and welcoming vibe",
    ],
  },
  {
    name: "Simeon Tchervenelekov",
    rating: 5,
    relativeDate: "4 days ago",
  },
  {
    name: "Kasia Seymour",
    rating: 5,
    relativeDate: "a week ago",
    text: "The treatment I received was definitely better than previous experiences with laser elsewhere. Ashley was gentle and took her time explaining each part of the process, which made me feel safe during my appointment. I found the studio to be clean and welcoming, creating a relaxing atmosphere. I appreciated the tailored approach to my hair type and noticed I'm shaving much less often now. She was patient with my questions and provided helpful advice for aftercare. It has been worth traveling to Niagara for this experience, and I plan to return. I'll be recommending Smooth Skin Niagara to friends and family.",
    services: ["Laser Hair Removal"],
    serviceKeys: ["laser"],
    highlights: [
      "gentle and took her time explaining",
      "shaving much less often now",
    ],
  },
  {
    name: "Yashvi Mendpara",
    rating: 5,
    relativeDate: "a week ago",
    text: "⭐⭐⭐⭐⭐️ I had a great experience with my laser hair removal treatments! Ashley is so friendly, welcoming, and professional. She make's you feel comfortable throughout the entire process and take the time to explain everything. The service is amazing, the space is clean, and I've been really happy with my results so far. Highly recommend to anyone considering laser hair removal! 😊",
    services: ["Laser Hair Removal"],
    serviceKeys: ["laser"],
    highlights: [
      "friendly, welcoming, and professional",
      "really happy with my results",
    ],
  },
  {
    name: "Navpreet kaur",
    rating: 5,
    relativeDate: "a week ago",
    text: "I got my lash extension done by ashley. She did an amazing job plus the lashes stayed on for a long time. I got so many compliments and everyone asked where i got it from. I have also gotten lash lift and tint before and results were same- perfect and long lasting. I highly recommend getting it done from Ashley.",
    services: ["Eyelash Extensions", "Lash Lift"],
    serviceKeys: ["lashes"],
    highlights: [
      "lashes stayed on for a long time",
      "perfect and long lasting",
    ],
  },
  {
    name: "Magdalene Gallinger",
    rating: 5,
    relativeDate: "a week ago",
    text: "Walking into the clinic, I was greeted by Ashley's warm smile, instantly making me feel safe in the peaceful environment. I remember feeling a bit nervous at first, but Ashley's careful and gentle approach put my mind at ease right away. She took the time to explain every step of the process while using the Soprano ICE machine, which felt fascinating and virtually painless. Her honesty and deep knowledge truly impressed me, and I left each session feeling informed, empowered, and equipped with great tips and advice.\n\nAfter years of visits, I can genuinely say the results keep getting better and have consistently exceeded my expectations. Ashley is not only patient and caring, but she is also meticulous and thorough in her work, ensuring I felt comfortable even for intimate areas. The clinic is always clean and sterile, contributing to a relaxing atmosphere enhanced by soothing music and a comfortable treatment bed. I am so glad I found Ashley; her dedication shines through and it makes every visit a pleasure. I highly recommend her to family and friends, as the quality of care is absolutely worth the drive, making it a perfect 10 out of 10 experience at such affordable prices!",
    services: ["Laser Hair Removal"],
    serviceKeys: ["laser"],
    highlights: [
      "careful and gentle approach",
      "consistently exceeded my expectations",
    ],
  },
  {
    name: "Noelle Sinclair",
    rating: 5,
    relativeDate: "2 weeks ago",
    text: "I originally went to Ashley for a lash lift and tint, which I absolutely loved. After seeing her great attention to detail, I switched to full lash extensions, and I could not be more thrilled with the long-lasting results. Ashley is truly passionate about her work, crafting beautiful, natural-looking lashes that opened up my eyes and made mascara unnecessary. What stands out is her honesty and informative approach, as she took the time to educate me about proper lash care, which has significantly improved the health of my own lashes. Her studio is pristine and welcoming, reflecting her dedication to both her craft and her clients. I am so glad I found Ashley and highly recommend her services to anyone looking to enhance their lashes at affordable prices. You will not be disappointed!",
    services: ["Lash Lift", "Eyelash Extensions"],
    serviceKeys: ["lashes"],
    highlights: [
      "beautiful, natural-looking lashes",
      "honesty and informative approach",
    ],
  },
  {
    name: "Amelia",
    rating: 5,
    relativeDate: "2 weeks ago",
    text: "I am genuinely amazed by how effective the laser hair removal has been, especially on my coarse hair. Honestly, it's better than any other lasers I've tried, and the results keep getting better after each session! After just one or two treatments, I saw a difference right away. The treatment is comfortable, even for intimate areas, and it has such a relaxing atmosphere with soothing music that makes the experience enjoyable.\n\nAshley is truly fantastic! I was a bit nervous at first, but she is so patient and caring. She explained every step of the process and made me feel safe and at ease immediately. Her attention to detail and extensive knowledge really set her apart; she gives great tips and advice. I've been going for years and wouldn't go anywhere else; it's totally worth the drive! I highly recommend Ashley to family and friends; this has been a 10 out of 10 experience for me!",
    services: ["Laser Hair Removal"],
    serviceKeys: ["laser"],
    highlights: [
      "better than any other lasers I've tried",
      "results keep getting better",
    ],
  },
  {
    name: "Carmel Llarena",
    rating: 5,
    relativeDate: "2 weeks ago",
    text: "You know those people who are truly passionate about what they do, and you can't help but be drawn to their energy? That's Ashley! ❤️\n\nI was initially quite anxious about laser hair removal, but Ashley took the time to explain everything thoroughly and patiently answer all my questions until I felt completely comfortable. She is so welcoming, knowledgeable, and informative, and never makes you feel pressured into anything. She explains every procedure clearly, including what to expect, so you feel confident and informed every step of the way.\n\nBeyond her professionalism, Ashley is such a kind and genuinely blessed person. You can tell she truly cares about her clients and loves what she does. I've had really great results, and I'm so happy I decided to go ahead with her services!\n\nIf you're feeling nervous or unsure about laser hair removal, I highly recommend Ashley. You'll be in caring, knowledgeable, and trustworthy hands! ✨",
    services: ["Laser Hair Removal"],
    serviceKeys: ["laser"],
    highlights: [
      "never makes you feel pressured",
      "truly cares about her clients",
    ],
  },
  {
    name: "Sarah",
    rating: 5,
    relativeDate: "2 weeks ago",
    text: "My experience with Ashley during my laser hair removal session was truly exceptional. Initially, I felt a bit nervous, but her warm, professional demeanor immediately put me at ease. She is extremely knowledgeable about the Soprano ICE machine, and I found that this method works far better on coarse hair than other lasers I've tried. Each session yields results that keep getting better, making me thrilled with my progress. Ashley explained every step in detail, offering great tips and advice that made the process feel comfortable even for more intimate areas. The environment is peaceful and the treatment bed is incredibly comfortable, creating a relaxing atmosphere. With affordable prices and a 10/10 experience, her services are genuinely worth every penny. I'm so glad I found Ashley and highly recommend her to anyone considering laser hair removal!",
    services: ["Laser Hair Removal"],
    serviceKeys: ["laser"],
    highlights: [
      "works far better on coarse hair",
      "results that keep getting better",
    ],
  },
  {
    name: "Miruna Beti",
    rating: 5,
    relativeDate: "2 weeks ago",
    text: "Ashley is so knowledgeable and great at what she does. I have tried multiple laser hair removal treatments, and with her I got hands down the best results! She is patient and great at explaining what is happening with your body as during and after the treatments. I can't say enough good things about her and how great the experience is!",
    services: ["Laser Hair Removal"],
    serviceKeys: ["laser"],
    highlights: [
      "hands down the best results",
      "patient and great at explaining",
    ],
  },
  {
    name: "Kelly Morrison",
    rating: 5,
    relativeDate: "3 weeks ago",
    text: "Ashley is extremely meticulous, knowledgeable, honest and caring. The environment is relaxing, clean and sterile. I've had the laser hair removal and lash lift & tint. The laser hair removal worked on my coarse hair ! Best studio in the area! Highly recommend",
    services: ["Laser Hair Removal", "Lash Lift"],
    serviceKeys: ["laser", "lashes"],
    highlights: [
      "meticulous, knowledgeable, honest and caring",
      "Best studio in the area",
    ],
  },
  {
    name: "Chris Thompson",
    rating: 5,
    relativeDate: "3 weeks ago",
    text: "Ashley was recommended to me and i am happy to pass along my great expeience there. Ashley is a total pro and super friendly. I was pretty nervous going in the first time but she made me feel very comfortable with the entire procedure. Her salon is first class. Was thrilled with the results. Ill be back!",
    highlights: [
      "a total pro and super friendly",
      "thrilled with the results",
    ],
  },
  {
    name: "Pamela Luciani",
    rating: 5,
    relativeDate: "3 weeks ago",
    text: "Why settle for anything less than a truly remarkable experience when you can indulge in the exceptional service provided by this establishment? From the moment I stepped in, I was greeted with great attention to detail in a warm and welcoming oasis of beauty, complete with a comfortable treatment bed that enhanced the relaxation in the clean and sterile studio. The technician's extensive expertise was evident; they were extremely knowledgeable and took a very professional approach, offering honest and informative guidance on maintaining my long-lasting lashes, a testament to their meticulous and thorough work.\n\nThe peaceful environment and relaxing atmosphere further highlighted their meticulous nature and genuine care for clients, as they patiently and caringly ensured a top-notch experience that far exceeded my expectations. It's clear that this expert not only values professionalism but also truly cares about each client's satisfaction, setting a standard that I wouldn't trade for anything else. I wholeheartedly wouldn't go anywhere else for my lash treatments and gladly recommend this place to all my family and friends, knowing they'll also receive a 10/10 experience like mine.",
    serviceKeys: ["lashes"],
    highlights: [
      "great attention to detail",
      "far exceeded my expectations",
    ],
  },
  {
    name: "Monja Greer",
    rating: 5,
    relativeDate: "3 weeks ago",
    text: "Never had a better lash lift and tint experience! Totally recommend! Ashley is such a sweet person too!",
    services: ["Lash Lift"],
    serviceKeys: ["lashes"],
    highlights: [
      "Never had a better lash lift and tint experience",
      "such a sweet person",
    ],
  },
  {
    name: "Carly Hysert",
    rating: 5,
    relativeDate: "3 weeks ago",
    text: "I would recommend Ashley to anyone. She is very knowledgeable about laser hair removal. She is very patient, and works hard to get the results you're looking for!",
    services: ["Laser Hair Removal"],
    serviceKeys: ["laser"],
    highlights: [
      "very knowledgeable about laser hair removal",
      "works hard to get the results",
    ],
  },
  {
    name: "Julie Dion",
    rating: 5,
    relativeDate: "4 weeks ago",
    text: "I had an amazing experience with Ashley!",
    highlights: ["amazing experience with Ashley"],
  },
  {
    name: "Cody Brooker",
    rating: 5,
    relativeDate: "4 weeks ago",
    text: "I've been going to Smooth Skin Niagara for laser hair removal on my chest and stomach, and I'm really happy with the results so far! Ashley is friendly, professional, and makes the whole experience comfortable and easy. I'm glad I decided to get it done and would definitely recommend her to anyone considering laser hair removal!",
    services: ["Laser Hair Removal"],
    serviceKeys: ["laser"],
    highlights: [
      "friendly, professional",
      "really happy with the results",
    ],
  },
  {
    name: "Elise Cardamone",
    rating: 5,
    relativeDate: "2 months ago",
    text: "I highly recommend Ashley! She is so knowledgeable about the laser hair removal process and always makes me feel comfortable during my sessions. She really understands the treatment plan from start to finish, and I\u2019ve been so happy with the results! \uD83D\uDE0A",
    services: ["Laser Hair Removal"],
    serviceKeys: ["laser"],
    highlights: [
      "so knowledgeable about the laser hair removal process",
      "so happy with the results",
    ],
  },
  {
    name: "Anne Beach",
    rating: 5,
    relativeDate: "3 months ago",
    text: "Professional and accommodating ! There is no better place in this area ! Highly recommend.",
    services: ["Laser Hair Removal"],
    serviceKeys: ["laser"],
    highlights: [
      "Professional and accommodating",
      "There is no better place in this area",
    ],
  },
  {
    name: "Trish",
    rating: 5,
    relativeDate: "3 months ago",
    text: "such a great Experience. not only is she amazing at laser hair removal, her place is clean and welcoming. Ashley is meticulous when it comes to hair removal making sure she is strategic to address your hair type. now that I'm hairless I cant wait to book other services with Ashley because she is not only great at what she does but her conversations are open, honest, and I'm going to miss them.  thank you Ashley for the service and the best chats",
    services: ["Laser Hair Removal"],
    serviceKeys: ["laser"],
    highlights: [
      "clean and welcoming",
      "meticulous when it comes to hair removal",
    ],
  },
  {
    name: "Yanila Santiago",
    rating: 5,
    relativeDate: "8 months ago",
    text: "Ashley has been absolutely excellent! She makes you feel very comfortable and confident about whichever treatment you choose. I had laser hair removal, and from day one she explained everything in detail, everything I needed to know and even more, something I highly appreciate it because it made me feel very safe knowing that I was in the right hands. I truly appreciate the time Ashley invests to make her customers feel warm and welcome. I experienced that firsthand. Thank you so much! I highly recommend her 10/10!",
    services: ["Laser Hair Removal"],
    serviceKeys: ["laser"],
    highlights: [
      "very comfortable and confident",
      "very safe knowing that I was in the right hands",
    ],
  },
  {
    name: "Anderson Lopez Pena",
    rating: 5,
    relativeDate: "6 months ago",
    text: "I had laser hair removal using the SopranoICE machine, one of the best on the market. Ashley was clear, professional, and always ensured my appointments were perfectly timed to match the hair growth cycle. She was especially careful to avoid harming or burning my skin, particularly near tattooed areas. I got my underarm treated and have to highlight that never felt uncomfortable during the bikini sessions, and honestly, I truly appreciated her patience and guidance before and after every session. Despite a previous bad experience with laser treatment, Ashley made everything perfect, and now all my hair is gone. Absolutely highly recommend!! What a professional and what a wonderful human being",
    services: ["Laser Hair Removal"],
    serviceKeys: ["laser"],
    highlights: [
      "clear, professional",
      "patience and guidance before and after every session",
    ],
  },
  {
    name: "Erika Bodnar",
    rating: 5,
    relativeDate: "a year ago",
    text: "I had such a lovely experience at Lashes Ashley \u2013 thank you so much for your kindness and beautiful service! I absolutely love my natural-looking lashes; they\u2019re exactly what I was hoping for. You really have a special touch and a great eye for detail. Also, can we talk about that unique bed? It\u2019s so comfortable \u2013 the perfect place to relax while getting pampered. I\u2019ll definitely be back!\uD83D\uDE0A",
    services: ["Eyelash Extensions"],
    serviceKeys: ["lashes"],
    highlights: [
      "absolutely love my natural-looking lashes",
      "a special touch and a great eye for detail",
    ],
  },
  {
    name: "Alejandra Avenda\u00f1o",
    rating: 5,
    relativeDate: "a year ago",
    text: "I can't recommend Custom Lash & Laser by Ashley enough! My husband and I started our treatment a year ago, and the results have been truly exceptional. From day one, Ashley made sure we felt comfortable, cared for, and well-informed throughout the entire process.  She used the right machines for each step, tailored the treatments to our specific needs, and educated us on how to maximize the benefits of our hair growth cycle. Ashley also applied different techniques to ensure we got the best possible results.  As of today, I no longer need to shave my legs like I used to! My hair has been 98% removed, which is a game-changer considering I had coarse hair and had to shave every other day. This experience has been life-changing, and I couldn\u2019t be happier with the outcome. We had the similar results in other areas treated like LA, under arms, and gluteus. For both of us was just incredible to see the difference from the first appointment!  If you are considering hair removal, Ashley is the one to go to\u2014highly recommended! Many thanks Ashely for the time, patience and support!",
    services: ["Laser Hair Removal"],
    serviceKeys: ["laser"],
    highlights: [
      "results have been truly exceptional",
      "tailored the treatments to our specific needs",
    ],
  },
  {
    name: "Em Vello",
    rating: 5,
    relativeDate: "a year ago",
    text: "Ashley is super knowledgeable and extremely thorough. I\u2019ve had 4 treatments so far and my results keep getting better and better! Her prices are reasonable and her technique is amazing! I\u2019ve had laser hair removal in the past and have never gotten results like this. After a treatment the hair just falls out!!! So satisfying \uD83D\uDE02 give Ashley a try you won\u2019t be disappointed!",
    services: ["Laser Hair Removal"],
    serviceKeys: ["laser"],
    highlights: [
      "super knowledgeable and extremely thorough",
      "my results keep getting better and better",
    ],
  },
  {
    name: "Kian Rego",
    rating: 5,
    relativeDate: "a year ago",
    text: "I have been seeing Ashley for a year and am extremely happy with my results! Ashley is very knowledgeable and professional, and her space is very clean.",
    highlights: [
      "extremely happy with my results",
      "very knowledgeable and professional",
    ],
  },
  {
    name: "Tammy Desrosiers",
    rating: 5,
    relativeDate: "a year ago",
    text: "Ashley has a very professional atmosphere and she is very knowledgeable in her field of Laser hair removal. My treatments were very successful and I highly recommend her. She also dies an amazing lash lift/tint.",
    services: ["Laser Hair Removal", "Lash Lift"],
    serviceKeys: ["laser", "lashes"],
    highlights: ["very successful", "amazing lash lift/tint"],
  },
  {
    name: "Nora Chitko",
    rating: 5,
    relativeDate: "a year ago",
    text: "Wow, Just Wow! Ashley at Custom Lash & Laser is a Genius!  I recently had the pleasure of getting eyelash extensions done by Ashley, and I'm absolutely blown away by the results! Not only do my lashes look amazing, but I've been getting compliments left and right - everyone says I look 10 years younger!  Ashley's attention to detail, professionalism, and passion for her craft are truly exceptional. She took the time to understand my preferences and worked her magic to create a customized look that exceeded my expectations.  If you're looking for a lash expert who can transform your look and boost your confidence, look no further than Custom Lash & Laser and Ashley!  Highly, highly recommend!",
    services: ["Eyelash Extensions"],
    serviceKeys: ["lashes"],
    highlights: [
      "attention to detail, professionalism, and passion",
      "customized look that exceeded my expectations",
    ],
  },
  {
    name: "Matthew Reinhart",
    rating: 5,
    relativeDate: "a year ago",
    text: "Ashley is extremely knowledgeable in her line of work. She makes it clear that getting the results you are looking for is of utmost importance to her. If you are intimidated about getting laser hair removal on intimate areas, don\u2019t be. Ashely is extremely professional and will make sure you are comfortable throughout the process. She is fair and highly recommended.",
    services: ["Laser Hair Removal"],
    serviceKeys: ["laser"],
    highlights: [
      "extremely knowledgeable",
      "comfortable throughout the process",
    ],
  },
  {
    name: "Bri McKinnon",
    rating: 5,
    relativeDate: "a year ago",
    text: "I have been seeing Ashley for laser hair removal for over a year. She is extremely kind, knowledgeable, and truly amazing at what she does. She welcomes people into her home and makes you feel comfortable instantly! I would recommend her to anyone interested in laser hair removal. I\u2019ve seen amazing results from her and I\u2019m so grateful to have found her! Thanks so much Ashley! \uD83E\uDEF6\uD83C\uDFFB",
    services: ["Laser Hair Removal"],
    serviceKeys: ["laser"],
    highlights: [
      "extremely kind, knowledgeable",
      "makes you feel comfortable instantly",
    ],
  },
  {
    name: "Stephanie D",
    rating: 5,
    relativeDate: "3 years ago",
    text: "I started my laser hair removal journey with Ashley this year. Not only have I seen great results - she is very knowledgeable, personable and it\u2019s clear she is passionate about her work. Ashley made me feel at ease right away, talking me through appointments and the entire process. Highly recommend!",
    services: ["Laser Hair Removal"],
    serviceKeys: ["laser"],
    highlights: ["seen great results", "made me feel at ease right away"],
  },
  {
    name: "Cathy MacKinnon",
    rating: 5,
    relativeDate: "7 months ago",
    services: ["Laser Hair Removal"],
    serviceKeys: ["laser"],
  },
  {
    name: "Sumaia Gasmelseed",
    rating: 5,
    relativeDate: "a year ago",
  },
  {
    name: "Les Corrigan",
    rating: 5,
    relativeDate: "a year ago",
    text: "Ashley is wonderful to work with! Highly recommend",
    services: ["Manicure"],
    highlights: ["wonderful to work with"],
  },
  {
    name: "Erika Doucet",
    rating: 5,
    relativeDate: "a year ago",
    text: "Ashley the owner was amazing. She took her time, was patient with me and made me feel very comfortable. It was obvious that Ashley has a great deal of experience and knowledge. I've tried one other lash lounge before connecting with Ashley and this course was far more helpful and informative. I'm now ready to do this. I highly recommend Custom Lash Lounge.",
    highlights: [
      "made me feel very comfortable",
      "a great deal of experience and knowledge",
    ],
  },
  {
    name: "Michelle Mark",
    rating: 5,
    relativeDate: "a year ago",
    text: "I recently had the pleasure of attending a two day lash extension course with Ashley and it was amazing. She was incredibly thorough, informative, and knowledgable in her trade. Her program was thoughtful, educational, and very hands-on. I truly feel as if she set me up for success.",
    highlights: [
      "incredibly thorough, informative, and knowledgable",
      "set me up for success",
    ],
  },
  {
    name: "Adri Black",
    rating: 5,
    relativeDate: "2 years ago",
    text: "Ashley is fantastic!! She is very knowledgeable about what she does and does a great job at talking you through every step and making you feel comfortable and at ease. Highly recommend!!",
    services: ["Laser Hair Removal"],
    serviceKeys: ["laser"],
    highlights: [
      "talking you through every step",
      "comfortable and at ease",
    ],
  },
  {
    name: "Arpanjeet Kaur",
    rating: 5,
    relativeDate: "2 years ago",
    text: "Aish is really a nice lady and i got my lasor session here, she follow up with the custmers very nice and guide then with full information about their treatment.!!!! It was very good experience with her completely worth it!!",
    serviceKeys: ["laser"],
    highlights: ["guide then with full information", "completely worth it"],
  },
  {
    name: "Dana Thompson",
    rating: 5,
    relativeDate: "2 years ago",
    services: ["Laser Hair Removal"],
    serviceKeys: ["laser"],
  },
  {
    name: "Sabrina Ghotra",
    rating: 5,
    relativeDate: "2 years ago",
    text: "I can't say enough about the exceptional service and quality I get every time I go into see Ashley! She is super informative and honest regarding her products and services. She explains the method behind what she does and why. I have always left extremely satisfied and happy. Thank you Ashley for making me comfortable!",
    highlights: [
      "super informative and honest",
      "always left extremely satisfied and happy",
    ],
  },
  {
    name: "life is good",
    rating: 5,
    relativeDate: "2 years ago",
    text: "Ashley is very professional, knowledgeable and kind. I had a laser session done and she explained every step of the way. Her room is very clean and comfortable.",
    serviceKeys: ["laser"],
    highlights: [
      "very professional, knowledgeable and kind",
      "very clean and comfortable",
    ],
  },
  {
    name: "Bri Lennie",
    rating: 5,
    relativeDate: "2 years ago",
    text: "I was nervous going into my first laser appointment, but immediately felt comfortable when I got there. Ashley is super friendly, very knowledgeable and informative. Highly recommend.",
    serviceKeys: ["laser"],
    highlights: [
      "immediately felt comfortable",
      "very knowledgeable and informative",
    ],
  },
  {
    name: "Jamie La Plante",
    rating: 5,
    relativeDate: "2 years ago",
    text: "I\u2019m very pleased with Ashley\u2019s professionalism and how comfortable the atmosphere is at Custom Lash & Laser. Impressed with my results with laser hair removal. I highly recommend Ashley.",
    serviceKeys: ["laser"],
    highlights: ["professionalism", "Impressed with my results"],
  },
  {
    name: "Emery Reinbold",
    rating: 5,
    relativeDate: "2 years ago",
    text: "Ashley at Custom Lash & Laser is amazing! She is extremely caring and passionate about what she does, and truly wants to help as much as possible. I had been struggling to find the right person to do my laser treatment, and when I met Ashley i knew i had chosen the right person. She is extremely informative, knows what she is doing, and makes you feel comfortable every time you are there for a treatment.",
    serviceKeys: ["laser"],
    highlights: [
      "extremely caring and passionate",
      "makes you feel comfortable every time",
    ],
  },
  {
    name: "Maisy Tran",
    rating: 5,
    relativeDate: "2 years ago",
    text: "It\u2019s been day 3 since I had a lash lift and tint with Ashley and I\u2019m so impressed with my eyelashes! It was my first ever experience since I never had extensions either. Ashley made me very comfortable through the whole process. Highly recommend!",
    services: ["Lash Lift"],
    serviceKeys: ["lashes"],
    highlights: [
      "so impressed with my eyelashes",
      "made me very comfortable through the whole process",
    ],
  },
  {
    name: "Margaret Tworek",
    rating: 5,
    relativeDate: "2 years ago",
  },
  {
    name: "Sara Cooper",
    rating: 5,
    relativeDate: "3 years ago",
    text: "Amazing experience and I love them!",
    highlights: ["Amazing experience"],
  },
  {
    name: "Maria D",
    rating: 5,
    relativeDate: "3 years ago",
  },
  {
    name: "Ash S",
    rating: 5,
    relativeDate: "4 years ago",
    text: "Got my lashes done from Ashley, she was super kind and my lashes turned out great! Also got laser done which wasn't painful at all and hoping to see great results with.",
    serviceKeys: ["lashes", "laser"],
    highlights: ["my lashes turned out great", "wasn't painful at all"],
  },
  {
    name: "Nataliya Yosifova",
    rating: 5,
    relativeDate: "4 years ago",
    text: "Ashley is extremely professional and always makes sure that I\u2019m comfortable during the procedure. I would recommend Custom Lash & Laser to anyone seeking an effective, pain free way to eliminate hair. Truly life changing!",
    serviceKeys: ["laser"],
    highlights: [
      "extremely professional",
      "effective, pain free way to eliminate hair",
    ],
  },
  {
    name: "Emma Thiessen",
    rating: 5,
    relativeDate: "4 years ago",
    text: "i\u2019ve been going to ashley for a few years & she always gives me the best lashes!! she\u2019s so kind & friendly & i couldn\u2019t picture anyone else doing them for me \u2764\uFE0F",
    serviceKeys: ["lashes"],
    highlights: ["always gives me the best lashes", "so kind & friendly"],
  },
  {
    name: "Ashley Morris",
    rating: 5,
    relativeDate: "4 years ago",
    text: "Ashley has been doing my lashes for the last 7 years,  I go every two weeks and I honestly look forward to spending that hour with her all week. She is incredibly talented at what she does, my lashes look natural and I\u2019m constantly getting asked where I get them done. I also get my laser hair removal done along with facials. When you find someone you enjoy spending time with and  does an incredible job you stick with them! This was an easy 5/5!!!!",
    services: ["Laser Hair Removal"],
    serviceKeys: ["lashes", "laser", "facial"],
    highlights: ["incredibly talented", "my lashes look natural"],
  },
  {
    name: "Heidi Avella",
    rating: 5,
    relativeDate: "4 years ago",
    text: "A truely relaxing experience. The spa was relaxing with soft music and soft gentle hands. Very happy with mi results and will be returning",
    highlights: ["truely relaxing experience", "Very happy with mi results"],
  },
  {
    name: "Tsveta Kirilova",
    rating: 5,
    relativeDate: "4 years ago",
  },
  {
    name: "Brooke Cote",
    rating: 5,
    relativeDate: "4 years ago",
    text: "Wonderful, knowledgeable and friendly service! I recommend her regularly to my family and friends.",
    highlights: ["Wonderful, knowledgeable and friendly service"],
  },
  {
    name: "Julie Zezela",
    rating: 5,
    relativeDate: "5 years ago",
    text: "Ashley is amazing!  I recently visited Custom Lash & Laser for a last lift & tint. The lash curl is perfect & I no longer need mascara. It has really opened up my eyes, I just LOVE it! Ashley is friendly, knowledgeable & professional. I highly recommend Ashley for all your beauty needs, you will not be disappointed :)",
    services: ["Lash Lift"],
    serviceKeys: ["lashes"],
    highlights: [
      "lash curl is perfect",
      "friendly, knowledgeable & professional",
    ],
  },
  {
    name: "Ella Morkem",
    rating: 5,
    relativeDate: "6 years ago",
    text: "Ashely is always super professional and made me feel very comfortable! Great results and a nice clean environment!",
    highlights: [
      "super professional and made me feel very comfortable",
      "Great results and a nice clean environment",
    ],
  },
  {
    name: "Sarah Fiddes",
    rating: 5,
    relativeDate: "6 years ago",
    text: "Excellent experience with my laser hair removal, so happy with my result and Ashley was very professional and knowledgeable. I wish I did this years ago!!!",
    serviceKeys: ["laser"],
    highlights: [
      "so happy with my result",
      "very professional and knowledgeable",
    ],
  },
  {
    name: "Jacqueline Rivera",
    rating: 5,
    relativeDate: "6 years ago",
    text: "She is amazing! Comfortable inviting and very sterile environment with great attention to detail filled with great knowledge in her skills.  I'm grateful I found her\uD83D\uDE0A",
    highlights: ["very sterile environment", "great attention to detail"],
  },
  {
    name: "Angie Hermoza",
    rating: 5,
    relativeDate: "7 years ago",
    text: "\uD83D\uDE0DBEST OF THE BEST\u2714\uD83D\uDCAF\u2757\uD83D\uDC6F\uD83D\uDC83\uD83D\uDC86\u2728",
    highlights: ["BEST OF THE BEST"],
  },
  {
    name: "Claire Wil",
    rating: 5,
    relativeDate: "7 years ago",
    text: "I was a bit nervous about having a \"lash lift\" for the first time, but I chose the best place to have it done.  I felt very confident with Ashley, as she has extensive experience and even trains others in the same field.  It has been about 2 weeks, and my lashes are still curled.  I have had some bad experiences with lash extensions in the past and had sworn off trying them again, but after my experience with Ashley, I am interested in giving this process another chance.  She listens attentively to what you want, and is very honest about what she can do and what to expect. My sadness is that she is in Niagara when I live in Toronto.  The next time I go to Niagara, I will definitely be visiting her again.",
    services: ["Lash Lift"],
    serviceKeys: ["lashes"],
    highlights: [
      "extensive experience",
      "listens attentively to what you want",
    ],
  },
  {
    name: "Joscelyn Victoria",
    rating: 5,
    relativeDate: "7 years ago",
    text: "Ashley is amazing. Shes very knowledgable, personable and sweet! She is clearly passionate about what she does and never disappoints. I have received laser treatment and a lash tint and lift and couldnt be happier with my results. I highly recommend her.",
    serviceKeys: ["laser", "lashes"],
    highlights: [
      "very knowledgable, personable and sweet",
      "couldnt be happier with my results",
    ],
  },
  {
    name: "Tammy Desrosiers",
    rating: 5,
    relativeDate: "8 years ago",
    text: "I have gone 2 times now to Ashley for lash lift and tint and I\u2019m hooked. She is always professional and her space is comfortable and relaxing. I highly recommend her and her services.",
    services: ["Lash Lift"],
    serviceKeys: ["lashes"],
    highlights: ["always professional", "comfortable and relaxing"],
  },
  {
    name: "Katelyn Avella",
    rating: 5,
    relativeDate: "8 years ago",
    text: "I\u2019ve gotten lash extensions, lash lifts and laser hair removal at Custom Lash & Laser. The lash treatments always turn out gorgeous and are long lasting! The laser hair removal has honestly been a dream come true for me - completely painless and beyond effective. I have dark course hair and waxing always gave me ingrown hairs and was too painful. I\u2019ve only gotten two laser treatments (in two separate areas) so far and the results are incredible!! 4 weeks later and still no hair in sight. I can\u2019t thank Ashley enough for my hairless body! You\u2019re the best!!",
    serviceKeys: ["lashes", "laser"],
    highlights: [
      "lash treatments always turn out gorgeous",
      "results are incredible",
    ],
  },
  {
    name: "Kelly Franck",
    rating: 5,
    relativeDate: "8 years ago",
    text: "I received the laser hair removal from Ashley. It was quick and absolutely painless! I have had laser hair removal at different company\u2019s and it was painful getting the treatment and also afterwards. This laser has no pain and is so efficient! I saw the difference so quick. Ashley was quick and professional, I highly recommend!!",
    serviceKeys: ["laser"],
    highlights: ["quick and absolutely painless", "saw the difference so quick"],
  },
  {
    name: "Angela Turvey",
    rating: 5,
    relativeDate: "8 years ago",
    text: "I'm a trans women and I have been get laser hair remove done by Ashley and I have to say I couldn't be more happy with the service, and the results of the laser.",
    serviceKeys: ["laser"],
    highlights: ["couldn't be more happy with the service, and the results"],
  },
  {
    name: "D & R Michalowicz",
    rating: 5,
    relativeDate: "8 years ago",
    text: "Custom Lash & Laser has been fantastic. I was very concerned and nervous about doing laser hair removal.  Ashley is so professional and made me feel so at ease. I would definitely recommend her to anyone that is interested and wants to get rid of any unwanted hair. \u2764",
    serviceKeys: ["laser"],
    highlights: ["so professional and made me feel so at ease"],
  },
  {
    name: "Grace Sadowski",
    rating: 5,
    relativeDate: "8 years ago",
    text: "Custom Lash and Laser has honestly been the best \u201Cbeauty find\u201D I\u2019ve been lucky enough to happen upon and I\u2019m so glad I did! My journey with Ashley started with my first full set of hybrid lashes over a year ago.",
    serviceKeys: ["lashes"],
    highlights: ["the best \u201Cbeauty find\u201D"],
  },
  {
    name: "Stephanie Baker",
    rating: 5,
    relativeDate: "8 years ago",
    text: "Ashley has been doing my lashes for well over a year now because she is absolutely brilliant and one of the kindest technicians I\u2019ve ever encountered.  So needless to say, I was thrilled when she started offering laser hair removal.  I\u2019ve had laser hair removal completed previously with okay results, but since going to Ashley for my treatments, I\u2019ve noticed a significant difference in hair reduction after very few sessions. Ashley is highly skilled, professional, and makes you feel super comfortable whether she is doing lashes or laser treatments. I feel so fortunate to have found someone with such an exceptional skill set and who is also a genuinely lovely soul.",
    serviceKeys: ["lashes", "laser"],
    highlights: [
      "highly skilled, professional",
      "makes you feel super comfortable",
    ],
  },
  {
    name: "Carrie Houston",
    rating: 5,
    relativeDate: "8 years ago",
    text: "I highly recommend Ashley's lash service. Not only is she very friendly, and does a fantastic job, but she is very knowledgeable! She offers great tips and advice for keeping your lashes in good shape. She truly cares about her clients too, making sure they get the most for their money. I don't have any complaints. Her prices are very reasonable too, and she plays great music! Haha If you want a great experience and to leave feeling great about your lashes go to this girl!",
    serviceKeys: ["lashes"],
    highlights: ["very knowledgeable", "truly cares about her clients"],
  },
  {
    name: "Shannon Cain",
    rating: 5,
    relativeDate: "8 years ago",
    text: "*****I highly recommend this girl!!!! **** She knows here stuff!! She did an amazing job!!! I am totally satisfied.... I felt very comfortable, I definitely recommend going to her, I am super picky .... I know that ;) So if I say she is great I truely mean it !!!!",
    highlights: ["She knows here stuff", "I felt very comfortable"],
  },
  {
    name: "Vanessa Grimshaw-Waugh",
    rating: 5,
    relativeDate: "9 years ago",
    text: "I started in 2004 doing laser hair removal treatments, it hurt... not just a little..... Like a whole lot. I would use emela cream just to numb the skin to be able to get over the pain that it caused, I did about eight sessions at about $1,000 each ( full leg, the L in l.a., and underarm). I couldn't tan and spent my whole summer hiding from the sun for about 70-80% hair loss. It is now 2017, I've had two kids and the hormones, nasty little things ( hormones not kids.... Most days ;) ) has helped in the hair growing back, not as much as it once was but still just enough that I have to shave every few days, some areas worse then others. I was getting my eyelashes done when Ashley mentioned she was doing laser. Within one session I have almost no hair left in my underarms, so to say that it was a success is an understatement. Since then I've decided to do the full lower area as well, ALL of it! It did not hurt, the duck beak contraption that the gynoclogyst inserts into that sensitive area hurts more then the laser. It has been almost two weeks and I am already seeing the hair falling out and am estatic with the progress thus far. Ashley and I now have a new kind of relationship, up close and personal, and I have never felt more comfortable!",
    serviceKeys: ["laser"],
    highlights: [
      "Within one session I have almost no hair left",
      "never felt more comfortable",
    ],
  },
  {
    name: "Suzanne Tavares",
    rating: 5,
    relativeDate: "9 years ago",
    text: "Ashley is a true class act.  She is so professional and truly cares about her clients.  I have had eyelash extensions many times before but the quality of service and product has never been as great as what Ashley provides.  Ashley's laser services are extremely affordable as well and the results are incredible.",
    serviceKeys: ["lashes", "laser"],
    highlights: ["true class act", "truly cares about her clients"],
  },
  {
    name: "Sara Dick",
    rating: 5,
    relativeDate: "9 years ago",
    text: "I absolutely LOVE my lash lift. Ashley was very thorough and paid attention to detail when setting my lashes. They turned out perfectly. I don't have to curl my eyelashes everyday which saves me a ton of time. She was super friendly and I felt very relaxed/comfortable. I am definitely getting my lashes done here again!",
    services: ["Lash Lift"],
    serviceKeys: ["lashes"],
    highlights: [
      "very thorough and paid attention to detail",
      "felt very relaxed/comfortable",
    ],
  },
  {
    name: "Deanna Hopkins",
    rating: 5,
    relativeDate: "9 years ago",
    text: "Highly recommend! Ashley is very knowledgeable. As a first time client, I was nervous about the service, however she explained exactly what she was doing throughout the appointment. Thanks for doing an amazing job, Ashley!",
    highlights: [
      "very knowledgeable",
      "explained exactly what she was doing",
    ],
  },
  {
    name: "haley shaw",
    rating: 5,
    relativeDate: "9 years ago",
    text: "Really great lash salon. She was friendly and inviting, give you the choice if you want to make conversation or just relax while getting lashes done. It was comfortable and she had convenient payment methods. Gives great tips for lash care. Definitely will be going back!",
    serviceKeys: ["lashes"],
    highlights: ["friendly and inviting", "Gives great tips for lash care"],
  },
  {
    name: "Michelle Dickens",
    rating: 5,
    relativeDate: "9 years ago",
    text: "I had my first laser hair removal treatment just over a week ago and I am so beyond impressed with the results after just 1 treatment!! I can't wait to do my next treatment. Ashley was extremely professional, caring and gentle!!! She makes you feel so comfortable and relaxed!",
    serviceKeys: ["laser"],
    highlights: [
      "so beyond impressed with the results",
      "extremely professional, caring and gentle",
    ],
  },
  {
    name: "Roseann Ruggieri",
    rating: 5,
    relativeDate: "9 years ago",
    text: "Ashley is very knowledgeable and professional.   Her lounge is so comfortable and relaxing. I love the lashes and will definitely be going back!",
    serviceKeys: ["lashes"],
    highlights: [
      "very knowledgeable and professional",
      "comfortable and relaxing",
    ],
  },
  {
    name: "Cherie Tzogas",
    rating: 5,
    relativeDate: "9 years ago",
    text: "Great job...thank you so much.  Very warm and inviting environment!!  Highly recommended!",
    highlights: ["warm and inviting environment"],
  },
  {
    name: "Amy Albano",
    rating: 5,
    relativeDate: "10 years ago",
    text: "My experience was fantastic\uD83D\uDC8B It was my first time getting lashes.  I found Ashley to be knowledgeable and professional.  The atmosphere was relaxing and fun! I'm loving my new lashes and my husband likes them too.  I will definitely go to lash lounge again. Thanks Ashley for making my eyes look fabulous!!!",
    serviceKeys: ["lashes"],
    highlights: ["knowledgeable and professional", "relaxing and fun"],
  },
];

// Derived from the synced review list — floored to the nearest 10 so it
// displays as "80+" and updates automatically as reviews are added.
export const GOOGLE_REVIEW_COUNT = `${Math.floor(GOOGLE_REVIEWS.length / 10) * 10}+`;

const RECENCY_ORDER = [
  "a day ago",
  "2 days ago",
  "3 days ago",
  "4 days ago",
  "5 days ago",
  "6 days ago",
  "a week ago",
  "2 weeks ago",
  "3 weeks ago",
  "4 weeks ago",
  "a month ago",
  "2 months ago",
  "3 months ago",
  "4 months ago",
  "5 months ago",
  "6 months ago",
  "7 months ago",
  "8 months ago",
  "9 months ago",
  "10 months ago",
  "11 months ago",
  "a year ago",
  "2 years ago",
  "3 years ago",
  "4 years ago",
  "5 years ago",
  "6 years ago",
  "7 years ago",
  "8 years ago",
  "9 years ago",
  "10 years ago",
];

function recencyScore(r: GoogleReview): number {
  const i = RECENCY_ORDER.indexOf(r.relativeDate ?? "");
  return i === -1 ? RECENCY_ORDER.length : i;
}

export function orderReviews(prioritizeService?: ServiceKey): GoogleReview[] {
  const reviews = [...GOOGLE_REVIEWS];
  reviews.sort((a, b) => {
    if (prioritizeService) {
      const aMatch = a.serviceKeys?.includes(prioritizeService) ? 0 : 1;
      const bMatch = b.serviceKeys?.includes(prioritizeService) ? 0 : 1;
      if (aMatch !== bMatch) return aMatch - bMatch;
    }
    const aText = a.text ? 0 : 1;
    const bText = b.text ? 0 : 1;
    if (aText !== bText) return aText - bText;
    return recencyScore(a) - recencyScore(b);
  });
  return reviews;
}
