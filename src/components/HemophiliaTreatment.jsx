"use client";

import Image from "next/image";

const treatments = [
  {
    title: "रिप्लेसमेंट थेरेपी (Replacement Therapy)",
    description:
      "इसमें कमी वाले क्लॉटिंग फैक्टर VIII या IX को इंजेक्शन के माध्यम से सीधे रक्तप्रवाह में प्रविष्ट किया जाता है...",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2021/8/OY/BB/VC/37240812/recombinant-factor-viii.jpg",
  },
  {
    title: "प्रोफिलैक्सिस (Prophylaxis)",
    description:
      "यह निवारक उपचार है, जिसमें नियमित अंतराल पर क्लॉटिंग फैक्टर के इंजेक्शन दिए जाते हैं...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeQDmxqsHFxJ34sIxIrBzps5gfL3HE4fjCDg&s",
  },
  {
    title: "डेस्मोप्रेसिन (Desmopressin)",
    description:
      "यह सिंथेटिक हार्मोन है, जो हल्के हीमोफीलिया ए के मरीजों में क्लॉटिंग फैक्टर VIII के स्तर को बढ़ाता है...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSOQZh7s8Bv4oTNSz53YfYPB7u-lgar4OZQQ&s",
  },
  {
    title: "जीन थेरेपी (Gene Therapy)",
    description:
      "इस नई तकनीक में जीन को संशोधित किया जाता है ताकि शरीर क्लॉटिंग फैक्टर का उत्पादन कर सके...",
    image:
      "https://directorsblog.nih.gov/wp-content/uploads/2021/11/Factor-VIII-clotting-factor-small-1.jpg",
  },
  {
    title: "एंटीफाइब्रिनोलिटिक थेरेपी (Antifibrinolytic Therapy)",
    description:
      "यह थेरेपी रक्त के थक्के को टूटने से बचाने के लिए दी जाती है...",
    image:
      "https://elearning.wfh.org/wp-content/uploads/2017/02/Factor-Replacement-Therapy-Schematic_ar.png",
  },
  {
    title: "इम्यून टॉलरेंस थेरेपी (Immune Tolerance Therapy)",
    description:
      "इस थेरेपी का उपयोग तब किया जाता है जब शरीर क्लॉटिंग फैक्टर के खिलाफ एंटीबॉडी बनाता है...",
    image:
      "https://www.frontiersin.org/files/Articles/521107/fimmu-11-00476-HTML/image_m/fimmu-11-00476-g001.jpg",
  },
];

const HemophiliaTreatment = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-8">
          हीमोफीलिया उपचार
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative w-full h-36">
                <Image
                  src={treatment.image}
                  alt={treatment.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-red-600 mb-2">
                  {treatment.title}
                </h3>
                <p className="text-gray-700 text-sm">{treatment.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HemophiliaTreatment;
