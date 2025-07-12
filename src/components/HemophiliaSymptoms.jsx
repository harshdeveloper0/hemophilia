import React from "react";

const HemophiliaSymptoms = () => {
  const symptoms = [
    {
      title: "अत्यधिक रक्तस्राव (Excessive Bleeding)",
      description:
        "छोटे कट या चोट के बाद भी अत्यधिक रक्तस्राव होना, जो सामान्य से अधिक समय तक जारी रहता है।",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8HnA6VxVg4tdg2NoPJ432Fc2khR8NySP_UQ&s",
    },
    {
      title: "आंतरिक रक्तस्राव (Internal Bleeding)",
      description:
        "मांसपेशियों और जोड़ों में रक्तस्राव, जिससे सूजन, दर्द, और सीमित गतिशीलता हो सकती है।",
      image: "https://www.rarediseaseadvisor.com/wp-content/uploads/sites/25/2021/08/hemophilia-joint-bleeding-952921622-1024x1024.jpg",
    },
    {
      title: "गंभीर चोट के बाद रक्तस्राव (Post-Injury Bleeding)",
      description:
        "सर्जरी या दांत निकालने के बाद अत्यधिक रक्तस्राव, जो सामान्य उपचार से नहीं रुकता।",
      image: "https://dentalreach.today/egraliph/2021/08/oushy-gumdisease_10eec5ce1621d2166d21632cb490881f_2000-800x400.jpeg",
    },
    {
      title: "आकस्मिक रक्तस्राव (Spontaneous Bleeding)",
      description:
        "बिना किसी स्पष्ट चोट के नाक से खून आना या मसूड़ों से रक्तस्राव होना।",
      image: "https://discoveries.vanderbilthealth.com/wp-content/uploads/2024/01/06_Wheeler_Hemophilia-1024x597.jpg",
    },
    {
      title: "मूत्र में खून आना (Blood in Urine)",
      description:
        "किडनी या ब्लैडर में रक्तस्राव के कारण पेशाब में खून दिखाई देना।",
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhAQEBIPEA8VEBIRDxAXEA8QFRIWFREXFxcRGBYYHighGBolGxUVITEhMSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy0lHyYtLS8tLS8tKy0vKy0tLS0tLi0tLS0tMi0rLS0tLS0rLS0tLy0tLS0tLS0tLS0tLS0tLf/AABEIAKABPAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAwQFBgcCAQj/xABDEAACAgECAwUFBAgEAwkAAAABAgADEQQSBSExBhNBUWEicYGRoQcjMrEUQlJigpLB0TNDcqJTwvAWNGNzg5OjsuH/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQMEAgUG/8QAKBEAAgICAgEDBAIDAAAAAAAAAAECEQMSBCExEyJBFDJR8DNxYaGx/9oADAMBAAIRAxEAPwDcYQhAK/2qbaFb4SurqA0tfaandSfQykaeefyW4z6PS4yUoD32f+sxSt1EQE9Eo9SRo1Q/TV+U9bXRqq4ERaTuzjREgutnL6vzjOszuxY3Y0QWMpiZKzwxN5HqM70R7ZrQst3ZgE1bz+sZQrBuYL6iaZw2nZVWvkomni3KVszcuoxSXyOYQhNx5x4yg4yAcHI9DjGfqZ7CEAIQhACEIQAhCEAIQhACEIQAhCEAIQhACEIQAhCEAIQhACI3aWtzl0RjjGSqsceXOLQgBCEIA14omanHpM7QYYiaRrP8N/8ASZnL/jPvmHl/Bv4b6YusWRcRJTPczGbGKWPOUWeqsUCzpI4boRYRRLJ0yxJlignZ66+Ub2RXdErjynJ2hPhVe65f9Q/OaWBM87OD79f9Q/OaJPQ4i9rMHMfuQQhCajGeMucdeRz7+XjPYQgBCEIAQhCAEISrUdsPGypkTaHLYuHs7LWYqGQd5ju15rke2OfTIFphIJ+1NK7t6XJ3ZA1GVr+4LMQm/DHO7HLbu6jOJ1V2hBruteqysV3pVtbbvIZKm3YBIH+J0yenwAE3CRem45W6b9lqffV0lGCbg1gQqThiMYsU9fHz5Rmvauo/hqvK5RQdtY3tYlbKi+11+9TOcDn1gFghIbQ9pKbbVoUWLYQcg937DAMTWwDE5AU8wCvrEk7U1FmU1ahQN3tlaguAbRnO/PM0WAcvAZwCDAJ6EheH9paLioUWBmfYgPdtuIZg2GRipChNxIPRl88TmztNULXoWu6y1WCBUNDFjkg49v2cbf1tvn0gE5CV49sNPjftu2EL3TkVqtpJqGFLMMc7k/FtHXyM9btbRkKEudiiOqjuSzF9mE2l8g/eLzOF68+UAsEJ4p5A4I9OXL0nsAIQhACEIQAhCEAa8TfFTn0me9XJ9Zee0FmKj6mUavqZg5b7SPQ4i9rYsJ2s4naTIjUxdBFAJxWIuBLUimTEyIk8cMI3skSQixu0Tt6RRonZ0lRed8DOLVP7w/OaNM24ccOPfNF07ZVT5qPynocR9NGHmLtMUhCE1mIIQhACEIlqNVXWAbHSsE4BZlUE+XOAKwngOeY5jwMNwzjIzjOM88eeIB7I4cD0uCDUrAjbhtzjbhhtAYnC4ZuXTnJGEAj14Jphj7pTjPUs27JJy2T7ZySRnOM8p1XwjTqjVitdjOHZTk7mAUBiScnAVR8BH05tsVQWYhVAyWJAAHmSekAbPw2kqybBtZlc4yp3IFCsCOYICJg/uicVcI06hVWpAFZWUAdCoQKfgK0H8IjqvUIyh1ZGQ4CsGBBycDB8efKd7hnGRnBIHjgYyfqPnAGtXDaVfvFQB+fME4ySxLY6Z9pufXmROH4RpyCpqQgjDDHUZc4P/u2fzGPQc8xzHhBmA6kDnge/ygEfRwWlLUtUYKLYEH4sG0rvfccsWOxR18Inf2f0zMG2FT3hsJVmXJJLHofZyzFjjHPnJWEAi6ez+mUuRWMsQepGzGzATH4Md1WeWPwjyEUXgmmDBhUuQVI5tgFQoDYzjP3ac+vsjykhERqq95r3p3gGTXuXcBjOdvXxEAWhPGYDmSAMgc+XMnAHzhuGcZGcEgZ54HU4+I+cA9hCEAIQhACEIQCA7U3cgvpmVOqTHaLU7nb5SKQTy+RK5s9XBHWCOookTEUSUotY5riPEmsATYce2M+oz0i1cXKgy6JnbpnjiNrY6eNLJEyYDdpw/SdtOWlJoE9KcNL9wizdUvpylAXkZcuzV2VK+4zXxZe6jLy43GyahCE9A84IQhACRfGuGveatlr0Fe8+8XbuG6sqMBgQeZzj0kpCAVCvs/qwAoKVqK0RVTU37VVa6VFChkI2hkdtxGTnB/ETH3BeE6mu0WXOGHdKhAtsYDFVa7NrgkjertuLZ9s+ZlhhACEIQAjHjWle2mytMByBtJYpzDA/iAOOnXBj6EAqlXZ/UjLd5tbvA6YvtcjOoV3Leyq2MVU4yPEL0ySy4RwPUu3fPvr2NioNqNUTzGjLnDAEgmi7kRjLeIJMvEIBWruA3nT6elH7pqtLbUCttoHeFFWt+Q5jkx59M9DEtPwLUiyhnYMiWB8NqbSagHuJAUIBZkPWOeMbepwJaoQAhCEAJXddwrUvZdsFAU6gaiqw2WbwV0iVBdqqNuWUgkN+E+fSxQgFMPZjWPW6Nea33oaHW57O6Avqdm2su1mGxsZB69eZMfa7g2odtG692jVUGtyNRf7DG2hty8s2gCp+TYzkZ6mWWEAqQ7PasCtVtIIqXNn6TqGIcVWBl2kYZTYyNnrgYxyE4Xs9rir95eC4WwUkX3qAzIrKzADwte4ePsqnuFwhACEIQAiGtu2IzeQ5e+Lyv9qNVgCse8yvJPWLZZihtJIreofcxM5nk9nkN2euAnaTidKZKIY6rMcKZX+K69aXqYkluf3YPMgjriIHtI/hXWB+85J+gEvhFsqlBssrmNbDK/qe0G9djrsywy6sWAGeuMZ/OTneBgCpBUjIIOQR5zmaa8kxjRwZzOjPJSWnBEm+zWo2uAeh5SGi2ls2sD6zvHLWSZxkjtFo0GES0tu9FbzEVnsJ2eQ1XQQhCCCN4rxI0tWNoIbOT5YK5+hklKx264nRTWm9vvST3dQ5s4Iw3uHTn6SnajtrrrQFRloUADKqHc4HUswI+QE4cqfZohgc4po1iExh+JapubarU5/851+gIitPHtdXzTVXH0bbaD6e2DI9RHf0kvyahxbiZqZFVQxbP5gD85JTLtB2y331trQqqNoNiA4G3JBZeZHtYyRNOqsVgGUhlIBVgQQQehBHUSYu7KcuNwpM7jPi2pausugBIZc58iwH9Y8kV2l4lRRQ7XttVhtUDmzMegUeJ8fhOn4OIq2h5w3UGypHPUj2veDg/URzMe/7W6xlKVP3Fe4n2QrPz8NxHLz5Ae+R12oLnNt9jn965m+hMr9Q1fSNvyblGXFtWaq9y43blAz6nn9MzGqrihzXc6H925l/Ix8e1GrAVbbDfWDkBgoYcsZDgc+RPXPWHk6H0jT8mt8OuZ60dsBmGTj16fTEcyL7O8Yo1VKvQeS4VkPJqyB+Fh/XxkpLF4MklToJF1cSb9IahgAvMA88n2Qw+mZKTPe13aiurUj9G223JgWH9RGXlgkfiOCQR4Y6yJOizFDd0aFCY5qu0OtuybNRYq/spilR6ZXBPxJjHvz17+zPn+kPn57pz6hcuI/lm4yLp4kzahqQBsG7n48lH9TMu0vH9bTg1amxh+y5Fyn09rJ+REsPY3tXUbiuqxXdYcJZ/lsWbJBJ/CScenrG9sh8eUU35NEhCEsMoSjcZ1G+1j6y56t8I5/dP5TP72yxPrMfLl0kbeHHtsIQWe4mA3HkAZ40T3QCl8bvY6iwA8y2CeuAOQUfL6wo4eWGSzH+ImWFqlFzK4Vkf2hkA9evuOfzEtPD+C6cqM1L82BPxzNKzJdUMj0SZll9boeTE+hJYfWWrspaTR6BztHlkAlfmTHnaLhOmXcdjL5DvOX1ER4PQK6wAMZJbHPkD0+gz8ZE8ilHomrjZJQnKzoCZyAnhM6xOGgFv7M6jdWV8jJmVXsnb7RXzBlqnq4JXBHlciNZGE4tsCqzNyVQWJ9AMmdxjxwZ02pH/gW//Qy4qSt0YfxTihvts1V5O52yicztX9RAPdj0556mMzrHJ9lVA8M+39On0iWoyX5jAAAHyyT8yTHulpmU9ulFUIjvT4qPdXWP6TlrbR+wf/TT8wJO1acYjTVUCQRsRy6wHlYNv72SR9eY+vumifZTxVs26J2LKq99Qc5wuQHT3Asp/iMzjU1S3fZQ2dUPNablz5gNWcf7h8hO4OmV54p42a9Ma+0Hiffayzex7mj7mteZG7q7Y8y3L+H0M2WYF2yYDV3p0B1N7D1PeH+5+csyukZOFHabGLapm5IAq+GQGP15D4CKKLj/AJlnwYr+U90tUl9NSJQeg3RDMLl/zLPixb84mmrdfxAMPHACn6cj8RJvU0iRWoqgJk32G4p3OspZCe6uYUWrzA9o4U48wxX5nzm1z5+7Nf8Aeal8DfQfce+Uf830n0DL8b6PP5iSkmQPbjirabR2vWcWtiqo+TPy3fAZPwmKd+tfIZd/HqOfmT1+A5+Z8JrP2okDSVk88alD/wDHZn6ZmOaMh/aBDZOSQc8zOMj7LuIkoWOUttPMFV9yL+ZyfrFNt3/Es/mMd6WmSBoGJWaXIr73WjqVb3ov5gZnXfrZ7LDax5eYPuPXPofnHupokVqkx6QSnZtv2f8AFX1GjQ2HdbWxpsbru2gFWPqVZZZJSfsqOdPe3Qm8Ej30of6y7TTF2jyMySyNIZcYbFT+6UJjzPvl745/hN8JRCOZmLl/cjXxPtYqgiu2c1LHISZaNLY1dY0uGJJOka3JIolSIDjNnsjH4gcjxnfBu1N6hkZN2FJBJx0jrU0A9QGHkQDI59Co/AAh/WwORB9JZDXxI7faoa2cUtvsBsBC56dfGWKp8yO0+jrB9lFz54BPzMlaK5Eq+BKQtWsWCz2tIuEnNFbY2YRCyPbFjS0RQTJLsy+LV98uso/Z7/FX/UJeJ6HF+wwcv7wieoqDo6HoylT8RiKQmkymFqjVWFHHtKSjqQCModp6+4H4iSul0VbEHbj03ED+8m/tE4Jtf9LrHstjvwP1WAwLfcRyPuBkJwq9TgN15TBOLjI9xZfUxqSJmvhdR/UKj0Zj+cR4rwjT49hmB9QJM6S1cSN4tYmM+POc2/yURk7oqfEOGIoJ7zPoFMs/2VcOxZbaM7Vr2c/2rGDH5KifzStuGusVEXeWbCr03H3+CjqTNc7PcKXS0JUDub8Vj4xvdvxN/T3AS/Cm3bJ5c1DHr8skph32t8KavUvYAdrEWg+jgK3ydR/MJuMrvbfga6qg8h3qZNeejAjDVn0I+RAMuyw2jRl4PI9DMpmAafidyjAfl4ZCtj5iSWj1mqfmth/lT+0jeIcPeljkNs3YBPVT+w3kfz8JJ8B1qJyM8iblHqz7ZLHOG8Yp3/hDzW8auRQGWvd4tsIz5dD75GvxsEe0mT5hsD5c447Qa5Hzy59RjkBz8pEaHQPcwCg7NwDMB4/sr5t6Scc5t0mcTw4PT2nBL/X/AAt/2Z6J9Rq63YewHFvoFq55+L7B8DN0lY7B9n10tG4gC1wNwHMIoztrB8epJPiSZZ562KLjHs+L5uaOXK3FUvggO3WhN2jtABLJi0AdTsOWA9du6fOFDWUWOikqVJA6HK/qn1BGD8Z9WkTC/tI7JGm7fSMqT930GQTnuST4gn2fMHHgJxmj8lnDyV7SA03Fb2IAKj+FfLr0k1odZevOwB08coM/DGJVuH2qGG4YIOCCMEEeBB6S5DiVfdY5dJglKSfk9hJUqSIbV8cO45RAPEDIkVruJGxlrpXDsdoJO7mfH3DrOOKXJuJUHmeQ6nPly685Zvs87ItqLt1ylV/X580TxQfvsOR8hnxMuxbMpzuMOzV/s90Jq0aE5BsZrRnrtOFT/aqn4yyzxFAAAAAAwAOQAHhPZvSpUeBOW0mxlxgZqaUcpzMvuvXNbj0lMsr9ozLyY9o18WXtYUpHSpOaUjtUmbUuchq9ca3VyUZI2trk6hSITUVxiRgnIzlSB6Hzk1fVI9qMn4E/IQonakcaaqSNNc409Uf01xqQ5HtdcV2RVK4psjU42GNiRncklbUjG1JGp1GQv2fT7xffLnKv2eq9sH4y0Tbx1UTHyXcghCEvM5Fdo681H4zKeIaVqzlfw55Dy93l9R6TU+N8O1FikU2IP3XU4PxEznjPBeKJndQHX9qsd4PlnP0lGSLbN/FmoryIcN42w5cyR0PL/r6RndrHubHM+h6DPoOvzE40SFSd6lG2jIK7PE+E80Wk1TsP0el7Mk8xWSPxEfi//ZTobNkuy3dkdCFcE82PU+OPL0HpNGEoXZ7gfEgQ1nc0j1y7fIH+svOnrZRhm3HxOMfSacaaR5vJkpStMViGsGUYekXjTX6M2KQrtWfMYP0M7Znj5Mu7Q8PDMxGM8wenMeRz1EptnCayxCZR/IHK/I/3+E0fjXZHiOSararl8tq1t9Rj6yrWcN1NDKdTW6e0QrFRg8vAjkZllivye3x+U4fxy/f6IJeEKGAsLWN0wSQvTpgc/EfrCXLs9w4KyHAyOSjAAUZ6ADpIpdBqL3b9Grd2GzcVAIGd3UnkOktHBuyPEsg2W1Ur5YWxvoMfWRHFXgcjlSn/ACS/f6NC0Ywij0i0Z8P0RrUBrGsPmQB9BHk1o8R+QlU7ZacMMHBBEtTDIxKz2g4Dqrcmm9PRHT/mH9pzNWi3C0pW2ZLxrhCZJcEHoLAcMB5E88/EGMl4S+Diw930PL2jz6eXXEtPE+zvE0P3lRdc8yipYOvpzkeSBUynk3tZHrnnMzh+T1oZevaxnwXgte4MuS3/ABCct49DgBfgAfWat2M06oMDAAHSUXh3Z/ibse6qKLnkzqtYxn15mXzs/wAB1deDdeg80RM/7j/aWQi07MvInFxqy0wnIwB15DqTErdZUuAzopIyMsBkec0Hmiti5BHmCJU9RT7RlukJr6PaPvlWWNouwypkfSkdokK6o4VJRqXOQg1cQsrkgUib1ydSNiGuqnPDdHuez0ps+ZGB+ckbaY74DRg2N6BfzJ/pOow7Ep0iBoqj2quK/o2GI8iR9Y4rqnOpLmJpXO9kXWuelI1I2GNqRnZXJWyuN2qkanSkOeA1YJPpJqM+GV4X3mPJpgqiZcjuQQhCdnAQhCAV3tL2Tr1brYXepwu1ioB3KCSAc+885McM0KUVJTX+BBgeZyckn1JJMdQkUrs7c5Nat9BCEJJwEIQgBGHGuE1aqvurc7c7gwIDKfMH4mP4QSm07RG8C4JTpENdO45O5mYgsx8MkASShCEqDbbthCEIICEIQAlav7FaVtR+kE2c33mrK7C2cnljOCfDMssJDSfk6jOUfDCEISTkIQhACNdXVnBjqeESGrJTojlpiq1x3sENonOp1uNe7nJqjzaIbRGo2I56I50Fe0H3/wBI42CequJKVEOVjC6n2mPrPVqj0oIbRGpOw1FcO7jvbDaJGo2GLVTjuJIbBDYI1G55UuABO4QnZwEIQgBCEIAQhCAEIQgBCEIAQhCAEIQgBCEIAQhCAEIQgBCEIAQhOS4HUgfGAf/Z",
    },
    {
      title: "मल में खून आना (Blood in Stool)",
      description:
        "आंतरिक रक्तस्राव के कारण मल में खून दिखाई देना, जो गंभीर संकेत हो सकता है।",
      image: "data:image/jpeg;base64,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",
    },
    {
      title: "सिरदर्द और उल्टी (Headache and Vomiting)",
      description:
        "मस्तिष्क में रक्तस्राव के लक्षण, जिसमें लगातार सिरदर्द, उल्टी, और भ्रम की स्थिति शामिल है।",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBieOQv1XJrPMjHDdwRF1XgdaLoFcZQus4zQ&s",
    },
    {
      title: "जोड़ों का कठोर हो जाना (Joint Stiffness)",
      description:
        "जोड़ों में बार-बार रक्तस्राव के कारण कठोरता और चलने-फिरने में कठिनाई।",
      image: "https://stgaccinwbsdevlrs01.blob.core.windows.net/newcorporatewbsite/blogs/May2024/4kFgwozWcQW272rOkww4.webp",
    },
    {
      title: "त्वचा पर नीले-नीले निशान (Bruising)",
      description:
        "हल्की चोट के बाद त्वचा पर बड़े नीले-नीले निशान बनना।",
      image: "https://t3.ftcdn.net/jpg/01/64/32/50/360_F_164325063_mrlxsAdyEqOTFxYKIAEYUHIPU0yAgICI.jpg",
    },
    {
      title: "थकान और कमजोरी (Fatigue and Weakness)",
      description:
        "लगातार रक्तस्राव के कारण शरीर में खून की कमी और सामान्य कमजोरी।",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp9l8hVRicUNaJY8E62XPODLGaH4Gs_9OGmBBT6mk7aoNEKzMRmfeZSOjXCu5Rjw3gVdw&usqp=CAU",
    },
  ];

  return (
    <section className="py-16 mt-5 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-8">
          हीमोफीलिया के लक्षण
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {symptoms.map((symptom, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={symptom.image}
                alt={symptom.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-red-600 mb-2">
                  {symptom.title}
                </h3>
                <p className="text-gray-700">{symptom.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HemophiliaSymptoms;
