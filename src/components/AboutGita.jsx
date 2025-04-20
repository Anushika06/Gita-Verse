import React from 'react';

function AboutGita() {
  return (
    <div className="flex items-start p-4"> 
      <div className="flex items-center gap-7">
        <img 
          src="https://m.media-amazon.com/images/I/81HR0LQ5ZmL._UF1000,1000_QL80_.jpg" 
          alt="About Gita"
          className="rounded-2xl w-100 h-100% object-cover shadow-lg" 
        />

        <div className="text-white text-xl max-w-[70%]">
          <h2 className="font-semibold text-4xl mb-10 text-amber-300">About the Bhagavad Gita</h2>
          <p className="leading-relaxed italic">
          The Bhagavad Gita, or “Song of God,” is a profound dialogue between Lord Krishna and the warrior Arjuna, taking place on the battlefield of Kurukshetra. As Arjuna hesitates to fight against his own relatives, Krishna guides him through spiritual wisdom, addressing his moral confusion and fear. The Gita explores the eternal soul (atman), the importance of selfless duty (karma yoga), devotion (bhakti), and knowledge (jnana) as means to liberation. Krishna reveals His universal cosmic form and emphasizes detachment from the fruits of actions. He explains the three modes of material nature — goodness, passion, and ignorance — and highlights the value of surrendering to God. Ultimately, the Gita presents a timeless message: live righteously, act without selfish desire, and realize one’s true nature through love and devotion to the Divine.
          </p>
          <button
            className="bg-yellow-400 hover:bg-white cursor-pointer text-black font-semibold px-6 py-2 rounded shadow-lg transition duration-300 mt-7"
          >
            Read Now
          </button>
          {/*Will add Read Now functionality later*/}
        </div>
      </div>
    </div>
  );
}

export default AboutGita;
