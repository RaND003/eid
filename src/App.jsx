import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [search, setSearch] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [foundUser, setFoundUser] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const users = [
   {
      name: "ميس",
      message: " ميسوو، عيدك مبارك يا جميلة ، بتنمالك كل التوفيق بحياتك وبإني أكون صاحبة ممكن تساعدك زي ما دايماً بتساعديني، بحبك كثير كثير كثير، استمتعي بيومك ᓚᘏᗢ ", 
      photo: "star.png",
      secondImage: "lib.png",
      thirdImage: "arr4.png",
      bg: "#6185E0",

      cardBg: "#ffffff",
      textColor: "#2c3e50",
      borderColor: "#b8d3ee",
      borderRadius: "20px",
      fontFamily:"arial, sans-serif",
      shadow: "0 10px 30px rgba(0,0,0,0.2)"
    },
    {
      name: "بتول",
      message:" حبي بتول، عسولتي الي ممكن أحكي معها عن أي إشي عشوائي، ممتنة إلك بشكل ما تتخيليه، بحبك كثير كثير، وفخورة وأنا أشوفك بتكبري و تتغيري للأحسن، الله يسعدك ويوفقك وييسر أمرك ويرضيك، عيدكك مبارككك استمتعي بيومك بسوريا                  ૮ ྀིᴗ͈ . ᴗ͈ ྀིა",
      photo: "/izuku2.png",
      secondImage: "/izuku3.png",
      thirdImage: "/arr4.png",
      bg: "#C080C0",

      cardBg: "#ffffff",
      textColor: "#38192e",
      borderColor: "#d7bad0",
      borderRadius: "20px",
      fontFamily:"arial, sans-serif",
      shadow: "0 10px 30px rgba(0,0,0,0.2)"
    },
    {
      name: "دمدم",
      message: " دمدوميي، عيدكك مبارك حبيي، جداً ممتنة لوجودك معي طول هالسنين، وبحب كيف متى ما حكينا مع بعض الوضع مريح، وجودك الطبيعي واشي بخاف ألاقيني معتادته، الله يسعدك وييسرلك أمرك ويرضيك، وبحبك كثير كثير كثير، استمتعي بيومك ㄟ(≧◇≦)ㄏ    ",
      photo: "/gala.png",
      secondImage: "/gala2.png",
      thirdImage: "/arr4.png",
      bg: "#8B0000",

      cardBg: "#ffffff",
      textColor: "#502e2c",
      borderColor: "#f5d8d7",
      borderRadius: "20px",
      fontFamily:"arial, sans-serif",
      shadow: "0 10px 30px rgba(0,0,0,0.2)"
    },
     {
      name: "زي",
      message:"زيي، عسولتيي إلي بحب الحكي معها، حسابك الثاني أفضل حساب بالموقع، مبسوطة إني قادر أحكي معك أكثر هالفترة، بحبكك كثير، الله يسعدك ويوفقك، عيدكك مباركك استمتعي بيومك     o((>ω< ))o",
      photo: "/shua.png",
      secondImage: "/ball.png",
      thirdImage: "/arr4.png",
      bg: "#C080C0",

      cardBg: "#ffffff",
      textColor: "#620260",
      borderColor: "#f0c8f7",
      borderRadius: "20px",
      fontFamily:"arial, sans-serif",
      shadow: "0 10px 30px rgba(0,0,0,0.2)"
    },
     {
      name: "ري",
      message:"  ريرييي عيدك مباركك يا جميل، بحبك كثير كثير، وبحب الحكي معك والتشابهات الي دايما بنلقطها وبنضحك عليها، وتحملك لي كل يوم اثنين بعد دوامي اشي ما رح أنساه وجداً ممتنة له، وجودك سبب من أسباب رجعتي للحساب، الله يسعدك ويرضيك ويوفقك، استمتعي بيومك لوف يوو (.>‿<)ς",
      photo: "/dokyeom.png",
      secondImage: "/pinkflower.png",
      thirdImage: "/arr4.png",
      bg: "#ADD8E6",

      cardBg: "#ffffff",
      textColor: "#2c3e50",
      borderColor: "#c2e8f4",
      borderRadius: "20px",
      fontFamily:"arial, sans-serif",
      shadow: "0 10px 30px rgba(0,0,0,0.2)"
    },
     {
      name: "رينا",
      message:"رينو، اعتراف سريع كنت بشيل أي حدا بعملي فولو عبين ما عملتي انتي وتفنقرت إن وحدة من حساباتي المفضلة ما بقدر اشيلها، المهمم بحبك كثير كثيرر، الله يوفقك ويسعدك دايما، عيدكك مباركك واستمتعي بيومكك                  (≧◡≦) ♡",
      photo: "/kwan3.png",
      secondImage: "/sat.png",
      thirdImage: "/arr4.png",
      bg: "#E0FFFF",

      cardBg: "#ffffff",
      textColor: "#052349",
      borderColor: "#eaebf7",
      borderRadius: "20px",
      fontFamily:"arial, sans-serif",
      shadow: "0 10px 30px rgba(0,0,0,0.2)"
    },
     {
      name: "ايسا",
      message:"ايسا يا ايسا، ألطف وأعسل بنت بالكوكب، حاسة رح أخوفك بكمية الحب الي درميها عليك، بس جد الايدول تبعي (≧∀≦)ゞ ، جملة الكل يبدو أقبح عن قرب بتنطبقش عليك، كل ما أحكي معك أكثر بحبك زيادة، الله يريح بالك ويسعدك، عيدكك مبارك حبي ฅ՞•ﻌ•՞ฅ",
      photo: "/vernon.png",
      secondImage: "/draw4.png",
      thirdImage: "/arr4.png",
      bg: "#B37557",

      cardBg: "#ffffff",
      textColor: "#492705",
      borderColor: "#efdbc7",
      borderRadius: "20px",
      fontFamily:"arial, sans-serif",
      shadow: "0 10px 30px rgba(0,0,0,0.2)"
    },
    {
      name: "لين",
      message:"ليونييي،  عيدك مباركك يا حلو، أول سبب خلاني أتابعك اللهجة بس طلعتي مخلوق عسول بنملش أحكي معه، الله يسعدك ويوفقك، استمتعي بيومك حبي     ఇ ◝‿◜ ఇ",
      photo: "/jeonghan.png",
      secondImage: "/jeonghan3.png",
      thirdImage: "/arr4.png",
      bg: "#8FBC8F",

      cardBg: "#ffffff",
      textColor: "#0e2b02",
      borderColor: "#d9f0d7",
      borderRadius: "20px",
      fontFamily:"arial, sans-serif",
      shadow: "0 10px 30px rgba(0,0,0,0.2)"
    },
     {
      name: "ملك",
      message:"ملوكك، عيدك مبارك يا حلوو، وجودك بالتايملاين متعة وصوتك جميل جداً لا تقطعي علينا كثير، الله يوفقك ويسعدك، استمتعي بيومكك  ദ്ദി◝ ⩊ ◜.ᐟ ",
      photo: "/kwan7.png",
      secondImage: "/cro2.png",
      thirdImage: "/arr4.png",
      bg: "#FFFACD",

      cardBg: "#ffffff",
      textColor: "#3c3b00",
      borderColor: "#ecf0d7",
      borderRadius: "20px",
      fontFamily:"arial, sans-serif",
      shadow: "0 10px 30px rgba(0,0,0,0.2)"
    },
    {
      name: "رسيل",
      message:"رزاي رسيل حبيبي البني، عيدك مباركك حبي، بتعرفيش كديش بحبك، كد ما بتمر فترات بننقطع عن بعض، بس مجرد ما أحكي معك بحس فش وقت مر، وجودك وتعرفي عليك من النقاط المهمة الي بحسها بتعرف حياتي بهذيك الفترة، الله يسعدك ويوفقك وييسر أمرك ويرضيك، بحبك كثير كثير، استمتعي بيومك يقمر (✿◠‿◠)",
      photo: "/dazai4.png",
      secondImage: "/book2.png",
      thirdImage: "/arr4.png",
      bg: "#A0522D",

      cardBg: "#ffffff",
      textColor: "#3c2100",
      borderColor: "#e6dcd2",
      borderRadius: "20px",
      fontFamily:"arial, sans-serif",
      shadow: "0 10px 30px rgba(0,0,0,0.2)"
    },
    {
      name: "سنا",
      message:"سنسنسن، عيدكك مباركك يحلوو، مشتاقتلك كثير وبحب لما أشوفك مبسوطة بالتايملاين، الله يسعدك دايما وييسر أمرك ونشوفك أحلى عروس عخير، استمتعي بيومك (❁´◡`❁)",
      photo: "/pedri.png",
      secondImage: "/ste.png",
      thirdImage: "/arr4.png",
      bg: "#B261B2",

      cardBg: "#ffffff",
      textColor: "#3c003a",
      borderColor: "#e3d2e6",
      borderRadius: "20px",
      fontFamily:"arial, sans-serif",
      shadow: "0 10px 30px rgba(0,0,0,0.2)"
    },
     {
      name: "ميساء",
      message:"     ميسااا، عيدك مبارك خريجتنا، بحبك كثير وبحب عشوائية حكينا، ردودك دايماً بتضحك وبتفش الغل، الله يسعدك ويرضيك، خلينا نشوفك ليوم حبي، استمتعي بيومك         ฅ^>⩊<^ ฅ ",
      photo: "/cat2.png",
      secondImage: "/book2.png",
      thirdImage: "/arr4.png",
      bg: "#CC99E6",

      cardBg: "#ffffff",
      textColor: "#3c003a",
      borderColor: "#e3d2e6",
      borderRadius: "20px",
      fontFamily:"arial, sans-serif",
      shadow: "0 10px 30px rgba(0,0,0,0.2)"
    },
     {
      name: "أيام",
      message:"عيدكك مباركك أيام، برتقالتي الأردنية المفضلة، بعرفش أعبرلك بس كثير بحبك وبحب حكيك، وبموت بس نلاقي اهتمام مشترك بينا، الله ييسرلك أمرك ويسعدك دايماً، استمتعي بيومك حبي (≧∇≦)ﾉ",
      photo: "/coffe.png",
      secondImage: "/orange.png",
      thirdImage: "/arr4.png",
      bg: "#FF8C00",

      cardBg: "#ffffff",
      textColor: "#512f01",
      borderColor: "#e6dfd2",
      borderRadius: "20px",
      fontFamily:"arial, sans-serif",
      shadow: "0 10px 30px rgba(0,0,0,0.2)"
    },
     {
      name: "رنيم",
      message:" رنوميي، عيدكك مباركك درعاويتي، بحبك كثير كثير وبحب وقت تعرفنا والإضافة للتايملاين الي عاملتيها، سهل كثير الواحد يوخذ عليك حتى لو ما بعرفك من وقت طويل، كثير مريحة، الله يسعدك ويوفقك ويرضيك، استمتعي بيومك يحلو ( •̀ ω •́ )y",
      photo: "/grape3.png",
      secondImage: "/coffe2.png",
      thirdImage: "/arr4.png",
      bg: "#df3434",

      cardBg: "#ffffff",
      textColor: "#550000",
      borderColor: "#f8aeae",
      borderRadius: "20px",
      fontFamily:"arial, sans-serif",
      shadow: "0 10px 30px rgba(0,0,0,0.2)"
    },
     {
      name: "هيو",
      message:"هيوو صديقي الأول بالموقع، عيدك مبارك يحلوو، مشتاقة لك كثيير، بتعرفيش كم مبسوطتلك لما أشوفك بالتابملاين هالفترة، إن شاء الله دايماً سعيدة وراضية، الله يوفقك وييسر أمرك، استمتعي بيومك                      ⪩. .⪨",
      photo: "/horse2.png",
      secondImage: "/cow4.png",
      thirdImage: "/arr4.png",
      bg: "#FFEE97",

      cardBg: "#ffffff",
      textColor: "#050501",
      borderColor: "#e7eac0",
      borderRadius: "20px",
      fontFamily:"arial, sans-serif",
      shadow: "0 10px 30px rgba(0,0,0,0.2)"
    },
    {
      name: "سمسم",
      message:"سمسمسمسم، عيدك مبارك يعسل، اسم عمسمى وبرضو سمسم مثالي إلك، بحبك كثير وبحب حكيك وتحليلك، وجودك خفيف ومطمأن للنفس حتى لو ما بنحكي كثير، الله يسعدك وييسر أمرك، استمتعي بيومك يا حلوة (❁´◡`❁)",
      photo: "/choco2.png",
      secondImage: "/smsm2.png",
      thirdImage: "/arr4.png",
      bg: "#609090",

      cardBg: "#ffffff",
      textColor: "#042435",
      borderColor: "#cfebf4",
      borderRadius: "20px",
      fontFamily:"arial, sans-serif",
      shadow: "0 10px 30px rgba(0,0,0,0.2)"
    },
    {
      name: "سمية",
      message:" عيدكك مباركك حرفيتنا، وجودك بالتايملاين سعادة، بحبك وبحب رسمك وتصويرك وإبداعك بالخياطة، أنتظر أتعرف عجانبك المجنون أكثر لا تخبيه، الله يسعدك وييسر أمرك، استمتعي بيومك ╰(*°▽°*)╯ ",
      photo: "/river.png",
      secondImage: "/flower2.png",
      thirdImage: "/arr4.png",
      bg: "#B261B2",

      cardBg: "#ffffff",
      textColor: "#1f022d",
      borderColor: "#e5cff4",
      borderRadius: "20px",
      fontFamily:"arial, sans-serif",
      shadow: "0 10px 30px rgba(0,0,0,0.2)"
    },
    {
      name: "هنهن",
      message:"هنيتي♡ عيدك مبارك حبيبتي، كثير كثير بحبك، وبحب أقرأ حكيك وأسمع صوتك، لفترة مش قصيرة كان صوتك نقطتي الآمنة كل ما حسيت بالفراغ والتنمل، كان يعيد أحاسيسي بالمحيط حولي وبنفسي، الله يسعدك ويوفقك ويرضيك، استمتعي بيومك قمري  (๑>◡<๑) ",
      photo: "/cloud.png",
      secondImage: "/sea.png",
      thirdImage: "/arr4.png",
      bg: "#C1E6FD",

      cardBg: "#ffffff",
      textColor: "#02202d",
      borderColor: "#cfedf4",
      borderRadius: "20px",
      fontFamily:"arial, sans-serif",
      shadow: "0 10px 30px rgba(0,0,0,0.2)"
    },{
      name: "رواسي",
      message:"ماما روري حبيب قلبي، عيدك مباركك يا عسل، تعرفي عليك من الذكريات الي مستحيل أنساها، إن كان من فترة أو طريقة، بحبك كثيير كثيير ومبسوطتلك من قلبي لكل شي بصير لك، الله يحفظلك نورة ويقر عيونك فيها، والله يسعدك ويرضيك، استمتعي بيومكك ◝(ᵔᗜᵔ)◜",
      photo: "/stars2.png",
      secondImage: "/star2.png",
      thirdImage: "/arr4.png",
      bg: "#F0E68C",

      cardBg: "#ffffff",
      textColor: "#4b4a05",
      borderColor: "#eef4cf",
      borderRadius: "20px",
      fontFamily:"arial, sans-serif",
      shadow: "0 10px 30px rgba(0,0,0,0.2)"
    },{
      name: "فطوم",
      message:"فطومي، عيدك مباركك وتقبل الله طاعاتك، بحبك كثير كثيير، الله يسعدك ويوفقك ويرضيك، استمتعي بيومك ૮(•͈⌔•͈)ა",
      photo: "/pen.png",
      secondImage: "/coffe3.png",
      thirdImage: "/arr4.png",
      bg: "#FAF0E6",

      cardBg: "#ffffff",
      textColor: "#211b02",
      borderColor: "#f3f2f1",
      borderRadius: "20px",
      fontFamily:"arial, sans-serif",
      shadow: "0 10px 30px rgba(0,0,0,0.2)"
    },{
      name: "تولينا",
      message:" توليناا، عيدك مباركك حبيبتي، صديقي الجميل إلي محلي  أيام الجامعة، بحبك كثيير كثير وبتمنالك كل الخير بأيامك الجاية، استمتعي بيومك حبي 𓆩❤︎𓆪  ",
      photo: "/flowers.png",
      secondImage: "/mehndi.png",
      thirdImage: "/arr4.png",
      bg: "#FFE0E5",

      cardBg: "#ffffff",
      textColor: "#210211",
      borderColor: "#f0dce3",
      borderRadius: "20px",
      fontFamily:"arial, sans-serif",
      shadow: "0 10px 30px rgba(0,0,0,0.2)"
    },{
      name: "شهد",
      message:"  شهوديي، عيدك مبارك يحلو، مهندستي إلي معي من أول يوم  ولحد فصل التخرج ❤︎ بحبك كثير وبحب تصويرك، الله يسعدك ويوفقك، استمتعي بيومك  (✿◠‿◠) ",
      photo: "/flowers2.png",
      secondImage: "/food2.png",
      thirdImage: "/arr4.png",
      bg: "#A68A65",

      cardBg: "#ffffff",
      textColor: "#211702",
      borderColor: "#d0b99f",
      borderRadius: "20px",
      fontFamily:"arial, sans-serif",
      shadow: "0 10px 30px rgba(0,0,0,0.2)"
    },
    {
      name: "شيما",
      message:"شمشوميي، عيدكك مباركك حبيي، بحبكك كثير وبحب الحكي والكعدة معك، الله يسعدك ويوفقك ويرضيك، استمتعي بيومك (✿◡‿◡)",
      photo: "/travel.png",
      secondImage: "/sunset.png",
      thirdImage: "/arr4.png",
      bg: "#87CEEB",

      cardBg: "#ffffff",
      textColor: "#021921",
      borderColor: "#d9eef8",
      borderRadius: "20px",
      fontFamily:"arial, sans-serif",
      shadow: "0 10px 30px rgba(0,0,0,0.2)"
    },
    {
      name: "شيما",
      message:"شمشوميي، عيدكك مباركك حبيي، بحبكك كثير وبحب الحكي والكعدة معك، الله يسعدك ويوفقك ويرضيك، استمتعي بيومك (✿◡‿◡)",
      photo: "/travel.png",
      secondImage: "/sunset.png",
      thirdImage: "/arr4.png",
      bg: "#87CEEB",

      cardBg: "#ffffff",
      textColor: "#021921",
      borderColor: "#d9eef8",
      borderRadius: "20px",
      fontFamily:"arial, sans-serif",
      shadow: "0 10px 30px rgba(0,0,0,0.2)"
    },
    {
      name: "داليا",
      message:"دلوو، عيدك مبارك يحلوو، بحبك واشتقت لك وللكعدة معك، الله يسعدك ويوفقك ويرضيك، استمتعي بيومكك (˶ᵔ ᵕ ᵔ˶)",
      photo: "/flowers3.png",
      secondImage: "/star2.png",
      thirdImage: "/arr4.png",
      bg: "#8FBC8F",

      cardBg: "#ffffff",
      textColor: "#022104",
      borderColor: "#daf8d9",
      borderRadius: "20px",
      fontFamily:"arial, sans-serif",
      shadow: "0 10px 30px rgba(0,0,0,0.2)"
    },{
      name: "ميما",
      message:"عيدك مباركك ميما، تقبل الله طاعاتكم(✿◠‿◠)",
      photo: "/flowers4.png",
      secondImage: "/coffe4.png",
      thirdImage: "/arr4.png",
      bg: "#D8BFD8",

      cardBg: "#ffffff",
      textColor: "#21021a",
      borderColor: "#f8d9f2",
      borderRadius: "20px",
      fontFamily:"arial, sans-serif",
      shadow: "0 10px 30px rgba(0,0,0,0.2)"
    },{
      name: "لميس",
      message:"عيدك مبارك خالتيي،  تقبل الله طاعاتكم(✿◠‿◠)",
      photo: "/flowers6.png",
      secondImage: "/coffe5.png",
      thirdImage: "/arr4.png",
      bg: "#FFC0CB",

      cardBg: "#ffffff",
      textColor: "#210209",
      borderColor: "#f8d9e3",
      borderRadius: "20px",
      fontFamily:"arial, sans-serif",
      shadow: "0 10px 30px rgba(0,0,0,0.2)"
    },{
      name: "خزامى",
      message:"عيدكك مباركك خزامى،  تقبل الله طاعاتكم(˶>⩊<˶)",
      photo: "/lave.png",
      secondImage: "/lav.png",
      thirdImage: "/arr4.png",
      bg: "#EE82EE",

      cardBg: "#ffffff",
      textColor: "#21021a",
      borderColor: "#f8d9f2",
      borderRadius: "20px",
      fontFamily:"arial, sans-serif",
      shadow: "0 10px 30px rgba(0,0,0,0.2)"
    },{
      name: "بشرى",
      message:"عيدكك مبارك خالتيي،  تقبل الله طاعاتكم(˶ᵔ ᵕ ᵔ˶)",
      photo: "/flowers5.png",
      secondImage: "/smsm2.png",
      thirdImage: "/arr4.png",
      bg: "#FFDBE0",

      cardBg: "#ffffff",
      textColor: "#210208",
      borderColor: "#f1e0e1",
      borderRadius: "20px",
      fontFamily:"arial, sans-serif",
      shadow: "0 10px 30px rgba(0,0,0,0.2)"
    },{
      name: "ورود",
      message:"عيدكك مباركك خالتيي،  تقبل الله طاعاتكم(๑>◡<๑)",
      photo: "/flowers7.png",
      secondImage: "/wo.png",
      thirdImage: "/arr4.png",
      bg: "#E9DAC6",

      cardBg: "#ffffff",
      textColor: "#211102",
      borderColor: "#f8e7d9",
      borderRadius: "20px",
      fontFamily:"arial, sans-serif",
      shadow: "0 10px 30px rgba(0,0,0,0.2)"
    },{
      name: "آية",
      message:"  عيدك مبارك آيوش،  تقبل الله طاعاتكم ㄟ(≧◇≦)ㄏ",
      photo: "/paw.png",
      secondImage: "/tree.png",
      thirdImage: "/arr4.png",
      bg: "#FFB6C1",

      cardBg: "#ffffff",
      textColor: "#210209",
      borderColor: "#f8d9e0",
      borderRadius: "20px",
      fontFamily:"arial, sans-serif",
      shadow: "0 10px 30px rgba(0,0,0,0.2)"
    },
    {
      name: "توحيد",
      message:"عيدك مبارك توحيدةة، تقبل الله طاعاتكم، استمتعي بيومكك ꉂ(˵˃ ᗜ ˂˵)",
      photo: "/travel3.png",
      secondImage: "/teeth.png",
      thirdImage: "/arr4.png",
      bg: "#F7C5CF",

      cardBg: "#ffffff",
      textColor: "#210209",
      borderColor: "#efe2e5",
      borderRadius: "20px",
      fontFamily:"arial, sans-serif",
      shadow: "0 10px 30px rgba(0,0,0,0.2)"
    },
    {
      name: " حماد",
      message:"عيدك مبارك عمي، تقبل الله طاعاتكم ㅤ♡",
      photo: "/coffe.png",
      secondImage: "/sheep.png",
      thirdImage: "/arr4.png",
      bg: "#d7fdfd",

      cardBg: "#ffffff",
      textColor: "#022120",
      borderColor: "#e2edef",
      borderRadius: "20px",
      fontFamily:"arial, sans-serif",
      shadow: "0 10px 30px rgba(0,0,0,0.2)"
    },
    



  ];

  // Handle window resize for responsive 
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSearch = () => {
    const user = users.find((u) => u.name.trim() === search.trim());

    if (user) {
      setFoundUser(user);
      setNotFound(false);
    } else {
      setFoundUser(null);
      setNotFound(true);
    }
  };

  if (foundUser) {
    return (
      <div className="user-screen" style={{ backgroundColor: foundUser.bg }}>
        {/* RIGHT SIDE IMAGE */}
        <img
          src={foundUser.photo}
          alt="user"
          className="user-photo"
        />

        {/* TOP LEFT DECORATION IMAGE */}
        <img
          src={foundUser.secondImage}
          alt="decoration"
          className="top-decoration"
        />

        {/* LEFT BOTTOM DECORATION IMAGE */}
        <img
          src={foundUser.thirdImage}
          alt="decoration"
          className="bottom-decoration"
        />

        {/* CARD */}
        <div
          className="user-card"
          style={{
            background: foundUser.cardBg,
            borderRadius: foundUser.borderRadius,
            borderColor: foundUser.borderColor,
            boxShadow: foundUser.shadow,
            color: foundUser.textColor
          }}
        >
          <h2>{foundUser.message}</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="start-screen">
      <h1>عيدكم مبارك!</h1>

      <input
        type="text"
        placeholder="اكتب اسمك الذي تنعتك به المهنئة "
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setNotFound(false);
        }}
        className="search-input"
      />

      <button onClick={handleSearch} className="search-button">
        بحث
      </button>

      {notFound && (
        <p className="error-message">متأكد من اسمك؟ حاول مرة أخرى</p>
      )}

      <img src="start3.png" alt="decoration" className="start-decoration" />
    </div>
  );
}