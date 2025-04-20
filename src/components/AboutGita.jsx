import React from 'react';

function AboutGita() {
  return (
    <div className="flex flex-col lg:flex-row items-start p-4">
      <div className="lg:w-1/3 mb-6 lg:mb-0">
        <img 
          src="https://m.media-amazon.com/images/I/81HR0LQ5ZmL._UF1000,1000_QL80_.jpg" 
          alt="About Gita"
          className="rounded-2xl w-full h-auto object-cover shadow-lg"
        />
      </div>

      <div className="text-white text-xl lg:max-w-[70%] mt-50">
        <h2 className="font-semibold text-4xl mb-6 text-amber-300">About the Bhagavad Gita</h2>
        <p className="leading-relaxed italic">
          The Bhagavad Gita, or “Song of God,” is a profound dialogue between Lord Krishna and the warrior Arjuna, taking place on the battlefield of Kurukshetra. As Arjuna hesitates to fight against his own relatives, Krishna guides him through spiritual wisdom, addressing his moral confusion and fear. The Gita explores the eternal soul (atman), the importance of selfless duty (karma yoga), devotion (bhakti), and knowledge (jnana) as means to liberation. Krishna reveals His universal cosmic form and emphasizes detachment from the fruits of actions. He explains the three modes of material nature — goodness, passion, and ignorance — and highlights the value of surrendering to God. Ultimately, the Gita presents a timeless message: live righteously, act without selfish desire, and realize one’s true nature through love and devotion to the Divine.
        </p>
      </div>
    </div>
  );
}

export default AboutGita;
