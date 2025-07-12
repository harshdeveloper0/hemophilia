// In the components folder, create Treatment.js

import Image from 'next/image';  // Next.js Image component for optimization
import TreatmentBtn from "./TreatmentBtn";  // Assuming TreatmentBtn is another component

const Treatment = () => {
  return (
    <section id="treatments" className="py-16 anm3 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-8">हेमोफिलिया का उपचार</h2>

        {/* Image Styling using Next.js Image component */}
        <div className="mb-8">
          <Image
            src="https://www.quanticate.com/hs-fs/hubfs/Human%20Gene%20Therapy%20Hemophilia%20Clinical%20Trials%20and%20FDA%20Guidance.jpg?width=1384&name=Human%20Gene%20Therapy%20Hemophilia%20Clinical%20Trials%20and%20FDA%20Guidance.jpg"
            alt="Treatment"
            width={1384} // Set image width
            height={800} // Set image height
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          हेमोफिलिया एक ऐसी स्थिति है जिसमें रक्त का थक्का जमने की प्रक्रिया में समस्या होती है, जिससे चोट लगने या खून बहने पर शरीर उसे ठीक से रोक नहीं पाता। हालांकि, हेमोफिलिया का कोई स्थायी इलाज नहीं है, लेकिन कुछ उपचार हैं जो इस स्थिति को नियंत्रित करने और लक्षणों को कम करने में मदद कर सकते हैं:
        </p>

        <div className="space-y-8">
          {/* Factor Replacement Therapy */}
          <div>
            <h3 className="text-2xl font-semibold text-red-600 mb-4">1. फैक्टर रिप्लेसमेंट थेरेपी</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              हेमोफिलिया के सबसे सामान्य उपचार में फैक्टर रिप्लेसमेंट थेरेपी शामिल है। इसमें उस रक्त कारक (फैक्टर) को इंजेक्ट किया जाता है जो शरीर में नहीं बनता या जिसकी कमी होती है। यह उपचार रक्त के थक्के जमने की प्रक्रिया को सामान्य करता है। यह थेरेपी दो प्रकार की हो सकती है:
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
              <li><strong>प्रोफिलेक्टिक थेरेपी</strong>: इसमें नियमित रूप से फैक्टर का इंजेक्शन दिया जाता है ताकि खून बहने से बचा जा सके।</li>
              <li><strong>रिएक्टिव थेरेपी</strong>: जब खून बहने की समस्या होती है, तब फैक्टर का इंजेक्शन दिया जाता है।</li>
            </ul>
          </div>

          {/* Bleeding Episodes Treatment */}
          <div>
            <h3 className="text-2xl font-semibold text-red-600 mb-4">2. ब्लीडिंग एपिसोड्स का इलाज</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              जब भी रक्तस्राव होता है, तो फैक्टर रिप्लेसमेंट के अलावा कुछ अन्य उपचार भी किए जाते हैं, जैसे कि बर्फ की पट्टी लगाना, प्रभावित क्षेत्र को ऊंचा रखना और दर्द निवारक दवाओं का उपयोग करना।
            </p>
          </div>

          {/* Surgery */}
          <div>
            <h3 className="text-2xl font-semibold text-red-600 mb-4">3. सर्जरी</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              कुछ मामलों में, जैसे गंभीर रक्तस्राव या जोड़ों में रक्तस्राव, सर्जरी की आवश्यकता हो सकती है। सर्जरी से पहले फैक्टर रिप्लेसमेंट किया जाता है ताकि खून का थक्का जम सके और सर्जरी सुरक्षित रूप से की जा सके।
            </p>
          </div>

          {/* Gene Therapy */}
          <div>
            <h3 className="text-2xl font-semibold text-red-600 mb-4">4. जीन थेरेपी (Gene Therapy)</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              हालांकि यह अभी एक नया उपचार है, जीन थेरेपी में वैज्ञानिक कोशिकाओं में बदलाव करके शरीर को रक्त कारक बनाने के लिए प्रेरित करने का प्रयास कर रहे हैं। यह उपचार भविष्य में हेमोफिलिया के इलाज के रूप में काम कर सकता है।
            </p>
          </div>

          {/* Medications and Supplements */}
          <div>
            <h3 className="text-2xl font-semibold text-red-600 mb-4">5. दवाइयाँ और सप्लीमेंट्स</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              कुछ मामलों में, हेमोफिलिया के रोगियों को रक्तस्राव को नियंत्रित करने के लिए अन्य दवाइयाँ भी दी जाती हैं, जैसे कि डेसमोप्रेसिन (Desmopressin), जो रक्त कारक VIII के स्तर को बढ़ाता है।
            </p>
          </div>

          {/* Lifestyle and Care */}
          <div>
            <h3 className="text-2xl font-semibold text-red-600 mb-4">6. जीवनशैली और देखभाल</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              हेमोफिलिया से प्रभावित लोगों को अपनी जीवनशैली में कुछ बदलाव करने की आवश्यकता हो सकती है, जैसे कि हल्की शारीरिक गतिविधियाँ, दुर्घटनाओं से बचाव, और स्वस्थ आहार लेना। नियमित चिकित्सकीय जांच और डॉक्टर की सलाह से उपचार को बेहतर तरीके से नियंत्रित किया जा सकता है।
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <TreatmentBtn />
      </div>
    </section>
  );
};

export default Treatment;
