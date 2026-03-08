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
      photo: "/star.png",
      secondImage: "/lib.png",
      thirdImage: "/arr4.png",
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
      message:" حبي بتول، عسولتي الي ممكن أحكي معها عن أي إشي عشوائي، ممتنة إلك بشكل ما تتخيليه، بحبك كثير كثير، وفخورة وأنا أشوفك بتكبري و تتغيري للأحسن، الله يسعدك ويوفقك وييسر أمرك ويرضيك، عيدكك مبارككك استمتعي بيومك بسوريا                  (❤️ ω ❤️)",
      photo: "/batool.png",
      secondImage: "/batool5.png",
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
      message:"زيي، عسولتي الي اشتقتلها كثير، بحب أمشي بحسابك الثاني وبحب مخك بحس لازم أحكي معك أكثر، الله يسعدك ويوفقك، عيدكك مباركك استمتعي بيومك                          o((>ω< ))o",
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
      message:"  ريرييي عيدك مباركك يا جميل، بحبك كثير كثير، وبحب الحكي معك والتشابهات الي دايما بنلقطها وبنضحك عليها، وتحملك لي كل يوم اثنين بعد دوامي اشي ما رح أنساه وجداً ممتنة له، وجودك سبب من أسباب رجعتي للحساب، الله يسعدك ويرضيك ويوفقك، استمتعي بيومك لوف يوو (✿◠‿◠)",
      photo: "/dokyeom.png",
      secondImage: "/pinkflower.png",
      thirdImage: "/arr4.png",
      bg: "#ADD8E6",

      cardBg: "#ffffff",
      textColor: "#2c3e50",
      borderColor: "#c0d4ea",
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
      message:"ايسا يا ايسا، ألطف وأعسل بنت بالكوكب، حاسة رح أخوفك بكمية الحب الي درميها عليك، بس جد الايدول تبعي (≧∀≦)ゞ ، جملة الكل يبدو أقبح عن قرب بتنطبقش عليك، كل ما أحكي معك أكثر بحبك زيادة، الله يريح بالك ويسعدك، عيدكك مبارك حبي ฅʕ•̫͡•ʔฅ",
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
      message:"ليونييي،  عيدك مباركك يا حلو، أول سبب خلاني أتابعك اللهجة بس طلعتي مخلوق عسول بنملش أحكي معه، الله يسعدك ويوفقك، استمتعي بيومك حبي      ༼ つ ◕_◕ ༽つ",
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
      message:"ملوكك، عيدك مبارك يا حلوو، وجودك بالتايملاين متعة لا تقطعي علينا كثير، الله يوفقك ويسعدك، استمتعي بيومكك~(￣▽￣)~*",
      photo: "/kwan7.png",
      secondImage: "/cro.png",
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
      secondImage: "/cow2.png",
      thirdImage: "/arr4.png",
      bg: "#FFEE97",

      cardBg: "#ffffff",
      textColor: "#050501",
      borderColor: "#e7eac0",
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

      <img src="/start3.png" alt="decoration" className="start-decoration" />
    </div>
  );
}